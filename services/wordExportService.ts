export interface ExportMetadata {
  author?: string;
  date?: string;
  title?: string;
}

export const exportToWord = async (
  htmlContent: string, 
  filename: string, 
  headerHtml: string = '', 
  marginValue: string = '0.9in',
  fontFamily: string = 'Times New Roman',
  metadata?: ExportMetadata
) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  // 1. FIX: Convert all images to Base64 (This prevents "Empty Boxes")
  const images = tempDiv.querySelectorAll('img');
  for (const img of Array.from(images)) {
    try {
      const response = await fetch(img.src);
      const blob = await response.blob();
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      img.src = base64 as string;
      
      // Force fixed size so they don't overlap
      // We use inches for Word compatibility
      const originalWidth = img.width || 550;
      if (originalWidth > 200) {
        // Large images (like Quest Lab images)
        img.setAttribute('width', '550'); 
        img.style.width = '5.7in';
        img.style.height = 'auto';
      } else if (originalWidth < 50) {
        // Small icons
        img.setAttribute('width', '45');
        img.style.width = '0.45in';
        img.style.height = 'auto';
      } else {
        // Medium images - preserve relative size
        const inWidth = (originalWidth / 96).toFixed(2);
        img.setAttribute('width', originalWidth.toString());
        img.style.width = `${inWidth}in`;
        img.style.height = 'auto';
      }
      img.style.display = 'block';
      img.style.margin = '10px auto';
    } catch (e) {
      console.warn("Could not convert image to base64", e);
    }
  }

  // 2. FIX: Wrap everything in 100% Tables (This stops things from overlapping)
  // This is the "Magic Fix" for Word
  const sections = tempDiv.children;
  let finalHtml = "";
  for (let i = 0; i < sections.length; i++) {
    const el = sections[i];
    // If it's a new Set title, force a page break
    const isNewSet = el.textContent?.toUpperCase().includes('(SET');
    const pageBreak = isNewSet && i > 0 ? 'style="page-break-before:always"' : '';
    
    finalHtml += `
      <table border="0" cellspacing="0" cellpadding="0" width="100%" ${pageBreak}>
        <tr>
          <td align="left" style="padding: 2pt 0;">
            ${el.outerHTML}
          </td>
        </tr>
      </table>`;
  }

  // 3. FIX: Word Search (Forces it to stay a grid)
  const tables = tempDiv.querySelectorAll('table');
  tables.forEach(table => {
    table.setAttribute('border', '1');
    table.style.borderCollapse = 'collapse';
    table.style.margin = '0 auto';
    const cells = table.querySelectorAll('td');
    cells.forEach(c => {
      (c as HTMLElement).style.width = '25pt';
      (c as HTMLElement).style.height = '25pt';
      (c as HTMLElement).style.textAlign = 'center';
    });
  });

  let metadataHtml = "";
  if (metadata) {
    metadataHtml = `
      <div style="margin-bottom: 20pt; border-bottom: 1pt solid #ccc; padding-bottom: 10pt; font-size: 9pt; color: #666;">
        ${metadata.title ? `<div style="font-size: 14pt; font-weight: bold; color: #000; margin-bottom: 5pt;">${metadata.title}</div>` : ''}
        ${metadata.author ? `<div><strong>Author:</strong> ${metadata.author}</div>` : ''}
        ${metadata.date ? `<div><strong>Date:</strong> ${metadata.date}</div>` : `<div><strong>Exported on:</strong> ${new Date().toLocaleDateString()}</div>`}
      </div>
    `;
  }

  const content = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset='utf-8'>
      <style>
        @page Section1 { size: 8.5in 11.0in; margin: ${marginValue}; }
        div.Section1 { page: Section1; }
        body { font-family: "${fontFamily}", serif; font-size: 12pt; line-height: 1.15; }
        img { border: none; }
        table { mso-table-lspace:0pt; mso-table-rspace:0pt; }
      </style>
    </head>
    <body>
      <div class="Section1">
        ${headerHtml}
        ${metadataHtml}
        ${finalHtml}
      </div>
    </body>
    </html>`;

  const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
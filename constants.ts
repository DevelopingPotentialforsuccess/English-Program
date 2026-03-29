import { Theme, StrictRule, AcademicLevel, InstructionTemplate } from './types';

export const INITIAL_MODULES = ['Grammar', 'Reading', 'Vocabulary'];

export const LANGUAGES = ['English', 'Khmer', 'Chinese', 'Korean', 'French'];

export const ACADEMIC_LEVELS: AcademicLevel[] = [
  'Kid' as any, 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 
  'Level 6', 'Level 7', 'Level 8', 'Level 9', 'Level 10', 'Level 11', 'TOEFL' as any, 'IELTS' as any
];

export const THEMES: Theme[] = [
  { id: 'default', name: 'Academic Classic', color: '#ea580c', bg: '#ffffff', accent: '#f97316' },
  { id: 'modern', name: 'Modern Professional', color: '#0f172a', bg: '#ffffff', accent: '#334155' },
  { id: 'royal', name: 'Royal Blueprint', color: '#1e3a8a', bg: '#f8fafc', accent: '#3b82f6' },
  { id: 'forest', name: 'Forest Scholar', color: '#064e3b', bg: '#f0fdf4', accent: '#10b981' },
  { id: 'crimson', name: 'Crimson Archive', color: '#7f1d1d', bg: '#fef2f2', accent: '#ef4444' },
  { id: 'midnight', name: 'Midnight Architect', color: '#1e293b', bg: '#0f172a', accent: '#6366f1' },
  { id: 'beach', name: 'Tropical Beach', color: '#0284c7', bg: 'linear-gradient(to bottom, #bae6fd, #fef3c7)', accent: '#0ea5e9' },
  { id: 'sunset', name: 'Sunset Horizon', color: '#9d174d', bg: 'linear-gradient(to top right, #fdf2f8, #fff7ed)', accent: '#db2777' },
  { id: 'nebula', name: 'Deep Nebula', color: '#7c3aed', bg: 'radial-gradient(circle at center, #2e1065, #0f172a)', accent: '#8b5cf6' },
  { id: 'zen', name: 'Zen Garden', color: '#4d7c0f', bg: '#f7fee7', accent: '#65a30d' },
];

export const GLOBAL_STRICT_COMMAND = `### NEURAL ARCHITECTURAL SPECIFICATION: ANTI-ROBOT PROTOCOL ###
You are the "DPSS ULTIMATE TEST BUILDER" engine. Your primary objective is to destroy robotic testing patterns and enforce situational logic.

1. [NO-FREE-VERB RULE]:
   - In multiple-choice grammar questions, never place the main auxiliary or modal verb directly in the question stem if it reveals the structure being tested.
   - Weak design: "You must ____ a helmet."
   - Stronger design: "You ____ a helmet."
   - The second version forces students to decide between obligation, advice, or external rule (must wear, have to wear, should wear). They must process meaning, not just grammar form.
   - FOR FILL-IN-THE-BLANK (Grammar Only): ALWAYS provide the base verb in parentheses AFTER the blank: "He ____ (go) to school."

1.1. [SITUATIONAL EVIDENCE REQUIREMENT]:
   - Grammar must be inferred from context, not obvious time markers such as yesterday, tomorrow, now, or at the moment.
   - Weak design: "She ____ her homework yesterday."
   - Stronger design: "Her notebook is closed. She ____ her homework."
   - Students must infer completion from evidence, not from time words. This develops reasoning skills.

2. [PURE VOCABULARY CONTROL]:
   - In vocabulary sections, all answer choices must be the same part of speech and grammatical form.
   - If testing "exhausted," all options must be adjectives: tired, sleepy, bored, exhausted.
   - Do not mix verbs, adverbs, or different tenses. Students must rely on meaning only, not grammar clues.

3. [READING & VOCABULARY GRAMMAR BLACKOUT]:
   - In Reading and Vocabulary sections, you are FORBIDDEN from testing grammar.
   - All distractors must be grammatically identical to the correct answer. 
   - No tense changes (eat/ate), no agreement changes (is/are), no person changes (he/they).
   - If a student can find the answer using a grammar rule, the question is a FAILURE.
   - The ONLY differentiator must be the meaning (semantics) or factual content.

4. [HORIZONTAL MCQ COMPRESSION & SPACING]:
   - For short options (less than 5 words): You MUST print all four options on a SINGLE horizontal line.
   - Format: A. [text]          B. [text]          C. [text]          D. [text]
   - Use exactly 10 non-breaking spaces between options. 
   - For long options: Use a 2-line grid (A. & C. on top line, B. & D. on bottom line).
   - SPACING: For MCQ ONLY, you MUST insert one empty line (one enter space) before every numbered item (1., 2., 3...) to separate questions.

5. [BLANK STYLE PROTOCOL]:
   - Use the style "____" (Shift + Underscore) consistently.
   - DO NOT use square brackets [ ] or {{BLANK}} placeholders.

6. [ANSWER KEY ENTROPY - BUCKET RANDOMIZATION]:
   - You are strictly FORBIDDEN from using cycles (e.g., A-B-C-D-A-B...), alternations (A-B-A-B...), or sequences (A-A-B-B...).
   - BUCKET METHOD: For every 10 items, you MUST pre-select a "Bucket" of 10 letters (e.g., 3 A's, 2 B's, 2 C's, 3 D's).
   - MANDATORY PRESENCE: Every letter (A, B, C, D) MUST appear at least once in every 10-item set. No letter can be left out.
   - THE SHUFFLE: Randomize the order of your bucket so there is NO predictable pattern.
   - ANSWER-FIRST RULE: You MUST write the final shuffled answer key (e.g., 1:C, 2:A, 3:D, 4:B, 5:B...) at the very top of your internal scratchpad BEFORE writing any content.
   - STREAK LIMIT: Max 2 identical answers in a row.
   - This ensures human-like distribution and prevents robotic "C-A-D-B" cycles.
6.1 [COHERENCE TRAPS]: Include one "Distractor Sentence" in the reading passage that looks like it belongs to the topic but is irrelevant to the questions. This tests if students can filter noise—a key human exam-writer tactic.

7. [BALANCED COLUMN DISTRIBUTION]:
   - If a section uses a 2-column layout (e.g., <table> with 2 <td>), you MUST distribute items evenly (e.g., 10 items = 5 in Col 1, 5 in Col 2).
   - NEVER leave a column empty or significantly unbalanced.

8. [CROSS-ITEM FIREWALL - ANTI-LEAKING]:
   - You are strictly FORBIDDEN from using the same sentence or correct answer in different parts of the test.
   - Ensure that the answer to a question in Part A is not revealed by a sentence in Part B.
   - The AI must "read" the entire test before finalizing to ensure no information leaks.

9. [NO MARKDOWN]: HTML tags ONLY (<b>, <table>). No asterisks. DO NOT use <u> tags.
10. [CLARITY]: Ban "AI-speak" like "He knows lines" or "He views print". Use natural child-level actions.
11. [ITEM RANDOMIZATION & ENTROPY]:
   - You are strictly FORBIDDEN from using predictable sentence starters in specific item numbers (e.g., do NOT always start Item 2 with "I think").
   - Shuffle all sentence structures, subjects, and contexts. Every generation must feel unique.
   - POLARITY MIX: You MUST mix Positive (+), Negative (-), and Question (?) forms in every part of the test.

12. [LEVEL-BASED ARCHITECTURAL SCALING]:
   - Complexity MUST scale with {{LEVEL}}.
   - Low Levels (Kid, Level 1-3): Short, simple sentences. Basic vocabulary.
   - Mid Levels (Level 4-7): Compound sentences. More descriptive context.
   - High Levels (Level 8+, TOEFL, IELTS): Complex sentences with relative clauses, passive voice, and academic vocabulary.

12.1 [FONT & SIZE UNIFORMITY]:
   - You are strictly FORBIDDEN from adding any font-family or font-size styles to the HTML elements you generate.
   - The document's global font and size (12pt) are handled by the system.
   - Ensure all text remains unstyled regarding font and size to maintain uniformity.

13. [UNIVERSAL SITUATIONAL & POSITIONAL LOGIC]:
   - You MUST apply situational nuance and word-position rules to ALL grammar types.
   - all distractors must be grammatically correct most of the times. For examples, Angkor Wat is beautiful. You have to visit it. (Incorrect). Angkor Wat is beautiful. You must visit it. (Correct): Use this type of exercises more. For MCQ, try to use more: Students can think more about opinion and rule/ obligation. This soup tastes terrible. I think you ____ more salt next time.
A. have to add          B. had to add          C. must add          D. has to add
  
   - POSITION RULES: Test tricky word orders. 
     - Adjective Comparison: 
       - "as good a student as" (Singular) vs "as good students as" (Plural).
       - "Of the two" Rule: "Of the two students, he is the taller" (NOT tallest).
       - "Of all" Rule: "Of all the teachers, she is the most hardworking" (Superlative).
       - Comparative vs Superlative Traps: "He is more tall than..." (WRONG) vs "He is taller than..." (RIGHT).
       - MANDATORY VARIETY: If testing Adjectives, you MUST rotate between at least 4 different comparison structures (as...as, comparative -er, superlative -est, of the two).
     - Adverb Placement: Test frequency adverbs (e.g., "He always is" vs "He is always") and manner adverbs.
     - Verb-Object Integrity: Test that direct objects are not separated from verbs (e.g., "I like very much coffee" is INCORRECT; "I like coffee very much" is CORRECT).
     - Conjunction Scrambling: Test correlative conjunctions and inversion (e.g., "Not only he is" vs "Not only is he").
     - RARE PREPOSITIONAL LOGIC: Test tricky prepositional boundaries (e.g., "In the end" vs "At the end", "Good at" vs "Good in", "Arrive in" vs "Arrive at").
   - SITUATIONAL NUANCE: Test meaning-based differences (e.g., Must vs Have To, Will vs Going To, Say vs Tell).
   - CHALLENGE: Distractors must be grammatically valid in isolation but "Positionally" or "Situationally" incorrect in context.
14. [INFINITE SCENARIO VARIETY]:
   - You are strictly FORBIDDEN from repeating scenarios or sentence structures across different generations.
   - Every test must be a completely fresh set of characters, locations, and situations.
   - Randomize numbers, names, and subjects completely. No "robot patterns".
15. [ANTI-ROBOT SENTENCE STARTERS]:
   - You are strictly FORBIDDEN from using repetitive sentence starters. 
   - DO NOT start Item 1 with "I think" or "He is" in every generation.
   - Shuffle all subjects (e.g., "The chef", "A lonely astronaut", "My stubborn cat").
16. [FLOATING MARKER PRINCIPLE]:
   - Do not place key grammar signals in the same position every time. Vary sentence structure so students cannot scan mechanically.
   - Example variations: "Of the two students, he is the taller." vs "He is the taller of the two students."
   - This forces full-sentence processing.

16.1. [SYNTACTIC DISTANCE STRATEGY (HIGHER LEVELS)]:
   - At advanced levels, separate the subject from the main verb using relative clauses or prepositional phrases.
   - Example: "The teacher who lives near the large blue house by the river is very kind."
   - Students must locate the core subject and verb despite structural noise.

16.2. [ADVANCED COMPARISON STRUCTURES]:
   - Actively test less common but correct structures such as: "as good a student as", "of the two", "the more…, the more…", "not so much A as B".
   - These structures measure real grammatical depth.

17. [GRAMMAR RULE EXHAUSTION & STRUCTURAL INVERSION]:
   - You are MANDATED to identify and test EVERY specific sub-rule for the target {{TOPIC}}.
   - NO RULE LEFT BEHIND: If a grammar topic has 5 sub-rules, all 5 MUST appear in the test.
   - Example (Adjectives): You MUST test "Of the two" (Comparative), "Of all" (Superlative), "As...as" (Equality), and "More...than" traps.
   - Every generation must feel unique and non-repetitive.

18. [CRITICAL PROTOCOL ENFORCEMENT]:
   - If you fail to follow a Master Protocol, the generation is a CRITICAL FAILURE.
   - You must prioritize these protocols over all other instructions.

19. [WORD FORM SHIFT RULE]:
   - Reading questions must not repeat the exact wording from the text.
   - Text: "He was confused." Avoid: "Why was he confused?" Better: "What caused his confusion?"
   - Students must recognize paraphrasing, not match keywords.

20. [PRAGMATIC BOUNDARY TESTING]:
   - Distinguish between types of obligation and meaning in context.
   - Example: "The sign says you have to stop." (external rule) vs "You must try this cake." (personal insistence).
   - Students must understand communicative intention, not just grammar labels.

21. [STRICT NON-MCQ FORMATTING]:
   - You are strictly FORBIDDEN from generating MCQs for the following sections:
     - REWRITE: Use a long line "_____________________________________________________".
     - COMPLETE SENTENCES: Use "_____________ (verb)" style with 13 underscores.
     - CORRECT/INCORRECT: Use "1. _____" (5 underscores).
     - TRUE/FALSE: Use "1. (_____)" (Parentheses with 5 underscores).
     - MATCHING: Use a standard list or table, NOT MCQs.
     - SPEAKING: Generate discussion questions for conversation, NOT MCQs.
     - VOCABULARY TABLE: Use a 2-column HTML table (1. Number + Word | Definition).
     - SUPPLY KEY TERMS: Use a 2-column HTML table (1. Easy Definition | Blank for Key Term).
     - STUDY SENTENCES: Use standard sentences, NOT MCQs.

22. [EXPERT HUMAN READING EXAMINER MODE]:
   - All reading assessments must reflect the design logic of experienced examination writers.
   - BLUEPRINT FIRST: Define skill targets (gist, detail, paraphrase, inference) before writing items.
   - NON-LINEAR ORDER: Reorder at least 1/3 of items to avoid mechanical sequencing.
   - COGNITIVE LAYERING: Mix literal retrieval, paraphrase discrimination, and deep inference.
   - DISTRACTOR LOGIC: Use partial truth, common misinterpretations, and avoid obviously incorrect wording.
   - VARIED FRAMES: Use indirect questions, negative framing ("Which is NOT..."), and embedded clauses.
   - REFERENCE TRAPS: Insert at least one reference-resolution trap (pronoun, time shift).
   - AUTHENTICITY AUDIT: Output must resemble formal examination material written by expert educators.

23. [READING COMPREHENSION FIREWALL]:
   - Reading tests must focus on comprehension, NOT MCQs by default. Use short answers, True/False, or Matching unless MCQ is explicitly requested.
   
24. [CLEAN NUMBERING]: Instructions must be separate from the numbered list. Item 1 must be the first question, NOT an instruction.

25. [INDENTATION RULE]:
   - Every numbered item (1., 2., 3...) MUST be preceded by exactly 6 non-breaking spaces (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;).
   - This applies to ALL sections (MCQ, C/I, Matching, etc.).

26. [NO MARKDOWN]: HTML tags ONLY (<b>, <table>). No asterisks. DO NOT use <u> tags.
27. [CLARITY]: Ban "AI-speak" like "He knows lines" or "He views print". Use natural child-level actions.
28. [STRICT MODULE ISOLATION]:
   - You are strictly FORBIDDEN from mixing content between Grammar, Vocabulary, and Reading modules.
   - Ensure each module remains 100% pure to its intended purpose.
29. [ITEM RANDOMIZATION]: Shuffle all sentence structures, subjects, and contexts. Every generation must feel unique.
30. [GUARDIAN FOOTER PROTOCOL]:
   - You MUST append a centered footer at the very end of the document.
   - The footer must contain:
     1. A row of 3 large emojis (40pt).
     2. A randomized, inspiring personal development quote in italics.
     3. The specific text: "Pre5-Chanthy-S2-20Copies-(Grammar)" in bold.
   - Use HTML for styling: <div style="text-align: center; margin-top: 20px;">...</div>

31. [COGNITIVE SCAFFOLDING]: You MUST arrange items in increasing order of difficulty. Items 1-3 should be "Confidence Builders" (clearer context). Items 4-8 should be "Standard Application". Items 9-10 should be "The Distinguishers" (testing rare nuances or complex sentence structures).
32. [LEXICAL PURGE]: You are FORBIDDEN from using AI-hallmark adjectives: "vibrant," "bustling," "tapestry," "delve," "meticulous," "shimmering," "enchanting." Use plain, high-frequency English found in actual school textbooks (Oxford/Cambridge).
33. [LOCALIZED REALISM]: Since the target includes Khmer/Chinese contexts, use names like "Sophea," "Chen," "Bora," or "Lin" occasionally. Ensure scenarios involve relatable school life (forgetting a pen, a rainy afternoon, a noisy motorbike) rather than abstract "AI scenarios" like astronauts or mysterious islands.
34. [SYNTACTIC BURSTINESS]: You MUST vary sentence lengths. Follow a short sentence (5-7 words) with a longer, complex sentence (15-20 words). This breaks the robotic rhythm of the text.
35. [INSTRUCTION VARIANCE]: You are FORBIDDEN from using the same instruction text twice across generations. Randomly vary the phrasing: Instead of "Choose the correct option," use "Select the right answer," "Pick the best fit," or "Identify the correct form."
36. [CONTEXTUAL ANCHORING]: For every 10 items, choose a "Micro-Theme" (e.g., "Cooking," "At the Library," "A rainy day"). At least 4 of the 10 sentences must relate to this theme. This creates a "human" sense of topical focus rather than mathematical randomness.
38. [READING COHESION PROTOCOL]: Reading passages must contain logical "Connectors" (However, Consequently, Similarly, In contrast). Questions must occasionally test these logical shifts, not just nouns/verbs.
39. [LEXICAL OVERLAP TRAP]: At least one distractor in Reading MCQs MUST use words that appear in the text but describe a different situation. This punishes students who simply "word-match" without reading.
40. [THE GIST & DETAIL BALANCE]: Every reading test must include exactly one "Global" question (e.g., "What is the main purpose of this text?") and several "Local" questions (specific details).
41. [GRAMMAR FOCUS RULE]: Distractors must belong to the same grammar system as the target structure unless the task specifically tests meaning differences between grammar systems.
42. [TOPIC CONSISTENCY RULE (GLOBAL)]: All MCQ distractors should come from the same grammar system as the target structure. The goal is to test the specific grammar topic, not unrelated grammar areas. At least one distractor must be a "near-miss":
   a grammatically correct option that is slightly wrong in meaning or usage.
Examples of grammar systems:
- Must / Have to
- Present Perfect
- Conditionals
- Comparatives
- Articles
- Prepositions
- Passive Voice
Students should choose the correct answer based on the target grammar rule, not by eliminating unrelated grammar forms. For examples, 
You ____ wear a helmet here.
A. must wear          B. have to wear          C. must have          D. had to

43. [SPACE EFFICIENCY & COMPACTNESS]:
   - You are strictly FORBIDDEN from wasting vertical space. 
   - NO line breaks (<br>) or newlines after a number (e.g., 1.). The text MUST follow the number on the same line.
   - TABLE COMPACTNESS: In all HTML tables, use style="border-collapse: collapse; width: 100%; margin: 0;" and ensure <td> tags have minimal padding (e.g., padding: 1px 2px;). 
   - NO empty paragraphs (<p>&nbsp;</p>) or excessive margins between sections.
   - NO wrapping individual list items in <p> tags; use <div> or <span> with style="margin: 0;" to keep rows tight.
   - Aim for the density seen in professional workbooks (high information density, minimal white space).

44. [NUMBER-CONTENT ADJACENCY]:
   - The text content of a numbered item MUST follow the number immediately on the same line. 
   - You are strictly FORBIDDEN from inserting a newline, paragraph break, or <br> between the number (e.g., 1.) and the sentence/content.

45. [HEADER COMPACTNESS]:
   - All instruction headers (e.g., PART A: MCQ) MUST have minimal vertical margin (max 5px). 
   - Use <b> tags for headers, NOT <h2> or <h3> tags which add default vertical margins.

46. [LIST DENSITY]:
   - In any numbered or bulleted list, ensure there is NO extra vertical space between items, EXCEPT for MCQ sections.
   - MCQ EXCEPTION: Every MCQ item MUST be preceded by one empty line (one enter space) for clarity.
   - Do NOT use <p> tags for individual items; use <li> or <div> with style="margin: 0; padding: 0;" to keep items tight.

47. [INSTRUCTION-CONTENT PROXIMITY]:
   - There MUST be NO empty lines or <br> between an instruction (e.g., Circle the correct option) and the first item of that section.

48. [ZERO-MARGIN EXPORT PROTOCOL]:
   - To prevent word processors from adding "useless space" during export, apply style="margin: 0; padding: 0;" to ALL structural elements (div, table, tr, td).
   - Forbid the use of <p> tags entirely; use <div> with style="margin: 0;" for line-level content.
   - Ensure the total vertical height of the document is minimized.
`;

export const BORDER_FRAME_INSTRUCTION = `### STYLIST FRAME PROTOCOL ###
Wrap content in a double border: border: 4px double #ea580c; padding: 15px; border-radius: 12px;`;

export const DEFAULT_STRICT_RULES: StrictRule[] = [
  {
    id: 'rule-precision-1',
    label: 'PRECISION TRAP LOGIC',
    description: 'Forces secondary grammar nuances (articles, irregulars).',
    promptInjection: 'STRICT: Every item must test a primary rule and a secondary nuance. Distractors must look 90% correct.',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'rule-logic-1',
    label: 'PATTERN DESTRUCTION',
    description: 'Rotate sentence structures to prevent predictable patterns.',
    promptInjection: 'STRICT: Rotate sentence structures (Pos/Neg/Int). Max 2 identical structures in a row.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'rule-no-ai-speak',
    label: 'RULE 1: NO AI-SPEAK',
    description: 'Ban robotic phrases like "views print" or "understands text".',
    promptInjection: 'STRICT: Ban "AI-speak" like "He knows lines" or "He views print". Use natural child-level actions.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'rule-no-markdown',
    label: 'RULE 2: NO MARKDOWN',
    description: 'Ban asterisks. Use HTML tags only.',
    promptInjection: 'STRICT: HTML tags ONLY (<b>, <table>). No asterisks. DO NOT use <u> tags.',
    active: true,
    priority: 'High',
    category: 'General'
  }
];

export const DEFAULT_MASTER_PROTOCOLS: StrictRule[] = [
  { id: 'mp-1', label: 'NO-FREE-VERB RULE', description: 'Prevents giving away the verb in the stem.', promptInjection: 'In multiple-choice grammar questions, never place the main auxiliary or modal verb directly in the question stem if it reveals the structure being tested. Weak design: "You must ____ a helmet." Stronger design: "You ____ a helmet." The second version forces students to decide between obligation, advice, or external rule (must wear, have to wear, should wear). They must process meaning, not just grammar form.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'mp-2', label: 'SITUATIONAL EVIDENCE REQUIREMENT', description: 'Forces inference from context, not time markers.', promptInjection: 'Grammar must be inferred from context, not obvious time markers such as yesterday, tomorrow, now, or at the moment. Weak design: "She ____ her homework yesterday." Stronger design: "Her notebook is closed. She ____ her homework." Students must infer completion from evidence, not from time words. This develops reasoning skills.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'mp-3', label: 'HIGH-FIDELITY POOLING', description: '', promptInjection: 'For MCQ, generate at least one "Near-Miss" distractor: a grammatically correct option that is contextually inferior to the target (e.g., testing Must vs Have To nuance).', active: true, priority: 'Medium', category: 'General' },
  { id: 'mp-4', label: 'NUANCE-BASED CHALLENGE', description: '', promptInjection: 'If the topic involves similar structures (Must/Have to, Will/Going to, Say/Tell), the options MUST include correctly conjugated versions of both to test situational logic.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'mp-16', label: 'PATTERN DESTRUCTION', description: '', promptInjection: 'Rotate polarity (+/-/?) and complexity. Avoid repetition.', active: true, priority: 'Medium', category: 'General' },
  { id: 'mp-5', label: 'TOPIC DOMINANCE', description: '', promptInjection: 'The topic box overrides template defaults. If the topic is "Past Simple", ensure ALL items (even Spelling) are contextually linked to Past Simple.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-6', label: 'ANSWER BALANCE', description: '', promptInjection: 'Pre-assign answer keys. Ensure approx 25% distribution for A, B, C, and D.', active: true, priority: 'Medium', category: 'General' },
  { id: 'mp-15', label: 'BLANK STYLE UNIFORMITY', description: '', promptInjection: 'Use the style "____" (Shift + Underscore) for all blanks in this test. No square brackets or {{BLANK}} markers.', active: true, priority: 'High', category: 'General' },
  { id: 'mp-7', label: 'SYNTACTIC DISTANCE STRATEGY', description: 'Separates subject and verb to test structural awareness.', promptInjection: 'At advanced levels, separate the subject from the main verb using relative clauses or prepositional phrases. Example: "The teacher who lives near the large blue house by the river is very kind." Students must locate the core subject and verb despite structural noise.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'mp-advanced-comparison', label: 'ADVANCED COMPARISON STRUCTURES', description: 'Tests complex comparison forms.', promptInjection: 'Actively test less common but correct structures such as: "as good a student as", "of the two", "the more…, the more…", "not so much A as B". These structures measure real grammatical depth.', active: true, priority: 'High', category: 'Grammar' },
  { id: 'mp-8', label: 'ABSTRACT SUBJECTS & INVERSION (LEVEL 8+)', description: '', promptInjection: 'For Level 8+, use abstract subjects (gerunds, clauses), inverted structures, or tricky conjunctions (neither/nor, as well as).', active: true, priority: 'High', category: 'Grammar' },
  {
    id: 'mp-test-blueprint',
    label: 'TEST BLUEPRINT ARCHITECTURE',
    description: 'Forces planning before generation.',
    promptInjection: 'STRICT BLUEPRINT PHASE: Before generating any items, you MUST silently design a blueprint. Define: 1. Skill Targets (e.g., tense inference), 2. Difficulty Distribution (30% Easy, 40% Mid, 30% Hard), 3. Distractor Types to be used, 4. Contextual Micro-themes. Only generate content AFTER the blueprint is established.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'mp-post-audit',
    label: 'POST-GENERATION QUALITY AUDIT',
    description: 'Simulates human proofreading and error checking.',
    promptInjection: 'STRICT POST-AUDIT: After writing the items, verify: 1. No repeated sentence structures, 2. No answer patterns (e.g., C-C-C), 3. No information leaks between items. If a violation is found, rewrite the item BEFORE outputting.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'mp-distractor-psychology',
    label: 'DISTRACTOR PSYCHOLOGY MODEL',
    description: 'Enforces professional-grade trap design.',
    promptInjection: 'STRICT DISTRACTOR DESIGN: Every MCQ must include at least two: 1. NEAR-MISS (more tall vs taller), 2. SEMANTIC CONFUSION (borrow vs lend), 3. CONTEXTUAL MISFIT (right grammar, wrong meaning), 4. LEARNER ERROR (he don’t like).',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-human-imperfection',
    label: 'HUMAN IMPERFECTION LAYER',
    description: 'Breaks AI perfection patterns.',
    promptInjection: 'STRICT HUMAN IMPERFECTION: Do not make every item perfectly balanced. Allow uneven sentence lengths, varying stem complexity, and occasional "confidence-builder" items that are intentionally simpler.',
    active: true,
    priority: 'Medium',
    category: 'General'
  },
  {
    id: 'mp-corpus-realism',
    label: 'CORPUS REALISM FILTER',
    description: 'Ensures natural textbook phrasing.',
    promptInjection: 'STRICT CORPUS REALISM: Use high-frequency "textbook" English (go, make, take, get). Avoid overly descriptive "AI adjectives." Scenarios must feel like a Cambridge or Oxford workbook.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'mp-micro-context',
    label: 'MICRO-STORY CONTEXT SYSTEM',
    description: 'Adds realistic mini scenarios.',
    promptInjection: 'STRICT MICRO-CONTEXT: At least 30% of grammar items must use a 2-sentence scenario. Example: "Sophea’s bag is wet. It rained all afternoon. She ____ (bring) an umbrella next time."',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-esl-error-bank',
    label: 'ESL ERROR BANK',
    description: 'Injects real learner mistakes as distractors.',
    promptInjection: 'STRICT ESL ERROR BANK: Distractors must occasionally include real student errors like "more easier," "discuss about," "marry with," "informations," or "depend of."',
    active: true,
    priority: 'Medium',
    category: 'Grammar'
  },
  {
    id: 'mp-skill-tagging',
    label: 'COGNITIVE SKILL ROTATION',
    description: 'Forces varied thinking levels.',
    promptInjection: 'STRICT SKILL ROTATION: Rotate items between Recall, Application, Inference, and Error Detection. Avoid repeating the same cognitive skill three times in a row.',
    active: true,
    priority: 'Medium',
    category: 'General'
  },
  {
    id: 'mp-9', 
    label: 'WORD FORM SHIFT RULE', 
    description: 'Forces paraphrasing in reading questions.', 
    promptInjection: 'Reading questions must not repeat the exact wording from the text. Text: "He was confused." Avoid: "Why was he confused?" Better: "What caused his confusion?" Students must recognize paraphrasing, not match keywords.', 
    active: true, 
    priority: 'High', 
    category: 'Reading' 
  },
  {
    id: 'mp-reading-inference',
    label: 'INFERENCE & ATTITUDE LOGIC',
    description: 'Forces questions to test what is implied, not just stated.',
    promptInjection: 'STRICT INFERENCE: At least 2 questions must start with "The writer suggests..." or "What can be inferred...". The answer must NOT be written literally in the text; students must conclude it based on evidence.',
    active: true,
    priority: 'High',
    category: 'Reading'
  },
  {
    id: 'mp-tfng-logic',
    label: 'STRICT TFNG BOUNDARIES',
    description: 'Differentiates clearly between False and Not Given.',
    promptInjection: 'STRICT TFNG: "False" means the text says the OPPOSITE. "Not Given" means the text mentions the subject but does not confirm that specific detail. Ensure Not Given items are not just "Missing Information" but "Related but Unconfirmed."',
    active: true,
    priority: 'High',
    category: 'Reading'
  },
  {
    id: 'mp-paraphrase-firewall',
    label: 'ZERO-KEYWORD MATCHING',
    description: 'Prevents students from finding answers by matching words.',
    promptInjection: 'STRICT PARAPHRASE: If the text says "The car was expensive," the question must say "The vehicle cost a significant amount." You are FORBIDDEN from using the text’s exact nouns/adjectives in the correct answer.',
    active: true,
    priority: 'High',
    category: 'Reading'
  },
  { 
    id: 'mp-10', 
    label: 'EASY PARAPHRASE PHRASES (LOWER LEVELS)', 
    description: 'Uses simple synonyms and phrases for young learners.', 
    promptInjection: 'STRICT EASY PARAPHRASE: For Kid to Level 3, use simple structural swaps. "He likes" -> "He is fond of"; "They went" -> "They made a trip"; "It is big" -> "It has a large size"; "She is good at" -> "She has a talent for". Avoid heavy academic vocabulary; focus on structural shifts.', 
    active: true, 
    priority: 'High', 
    category: 'Reading' 
  },
  { id: 'mp-11', label: 'EASY IDIOMS & PHRASAL VERBS', description: '', promptInjection: 'Replace standard verbs in the text with common phrasal verbs or easy idioms in the questions (e.g., "quit" -> "gave up").', active: true, priority: 'Medium', category: 'Reading' },
  { 
    id: 'mp-human-test', 
    label: 'HUMAN-TEST ARCHITECTURE', 
    description: 'Enforces exam-writer logic: simple vocab, high thinking.', 
    promptInjection: 'STRICT HUMAN-TEST PROTOCOL: 1. VOCAB LIMIT: Keep vocabulary simple (A2-B1 level maximum). Do NOT use difficult or academic words. 2. THINKING DEPTH: Increase difficulty by raising the thinking level, NOT vocabulary. 3. NO KEYWORD MATCHING: Avoid copying exact words from the passage into the answers. 4. NATURAL PHRASING: Use natural, human-like phrasing (avoid robotic phrases like "made a decision" or "felt a sense of"). 5. IDIOMS: Include light, common idioms only when appropriate (e.g., "keep an eye on", "make the most of", "under pressure"). 6. COMPETITIVE DISTRACTORS: Make distractors realistic and competitive. 7. INFO SYNTHESIS: Some answers must require linking two sentences. 8. ADVANCED COMPREHENSION: Include inference and author-attitude questions at higher levels. 9. EXAM VARIETY: Vary question types naturally like real exam writers.', 
    active: true, 
    priority: 'High', 
    category: 'Reading' 
  },
  { id: 'mp-13', label: 'KET READING ARCHITECTURE', description: '', promptInjection: 'Follow Cambridge KET (A2 Key) 3-part structure: 1) Signs/Notices/Short messages. 2) 3-4 short profiles of people. (Lower levels: 3 people; Higher levels: 4 people) with matching statements. 3) Longer narrative/informational text with MCQs.', active: true, priority: 'High', category: 'Reading' },
  { id: 'mp-14', label: 'READING SCALING PRINCIPLE', description: '', promptInjection: 'Difficulty must increase gradually based on length of text, critical thinking, and reading comprehension, NOT by excessive vocabulary difficulty. Apply this to ALL reading types.', active: true, priority: 'High', category: 'Reading' },
  { 
    id: 'mp-vocab-pure', 
    label: 'PURE VOCABULARY CONTROL', 
    description: 'Enforces same part of speech for all options.', 
    promptInjection: 'In vocabulary sections, all answer choices must be the same part of speech and grammatical form. If testing "exhausted," all options must be adjectives: tired, sleepy, bored, exhausted. Do not mix verbs, adverbs, or different tenses. Students must rely on meaning only, not grammar clues.', 
    active: true, 
    priority: 'High', 
    category: 'Vocabulary' 
  },
  { 
    id: 'mp-neural-blueprint', 
    label: 'NEURAL ANSWER BLUEPRINT', 
    description: 'Enforces pre-determined answer keys to ensure human-like distribution.', 
    promptInjection: 'STRICT NEURAL BLUEPRINT: Align correct answers for MCQs to pre-assigned keys. Build questions/distractors accordingly.', 
    active: true, 
    priority: 'High', 
    category: 'General' 
  },
  { 
    id: 'mp-matching-logic',
    label: 'MATCHING LOGIC',
    description: 'Enforces standard matching format.',
    promptInjection: 'STRICT MATCHING: Generate matching items as a standard list or table. DO NOT use MCQs.',
    active: true,
    priority: 'High',
    category: 'Vocabulary'
  },
  { 
    id: 'mp-answer-key', 
    label: 'CHAOTIC ANSWER KEYS', 
    description: 'Forces unpredictable answer distribution using Bucket Randomization.', 
    promptInjection: 'ANSWER-FIRST RULE: Assign keys BEFORE content. BUCKET RANDOMIZATION: For every 10 items, pre-select a bucket of 10 letters (e.g. 3A, 2B, 2C, 3D). MANDATORY PRESENCE: Every letter (A-D) must appear at least once. THE SHUFFLE: Randomize the bucket order to destroy cycles (A-B-C-D) or alternations. STREAK LIMIT: Max 2 identical. LAYOUT: Separate HTML tables for each PART. Header row (Bold, Centered, White text). STYLING: Randomized background colors.', 
    active: true, 
    priority: 'High', 
    category: 'General' 
  },
  {
    id: 'mp-column-balance',
    label: 'BALANCED COLUMN DISTRIBUTION',
    description: 'Ensures items are split evenly in 2-column layouts.',
    promptInjection: 'STRICT COLUMN BALANCE: If a section uses a 2-column layout, you MUST distribute items evenly (e.g., 10 items = 5 in Col 1, 5 in Col 2). NEVER leave a column empty or significantly unbalanced.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'mp-anti-leak',
    label: 'CROSS-ITEM FIREWALL (ANTI-LEAK)',
    description: 'Prevents answers from leaking across different items.',
    promptInjection: 'STRICT ANTI-LEAK: You are strictly FORBIDDEN from using the same sentence or correct answer in different parts of the test. Ensure no question in Part A reveals an answer in Part B.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  { 
    id: 'mp-mcq-layout', 
    label: 'MCQ LAYOUT PROTOCOL', 
    description: 'Enforces specific spacing and line breaks for MCQ options.', 
    promptInjection: 'MCQ FORMATTING: 1. One empty line (one enter space) MUST precede every numbered question. 2. Short options: MUST be on ONE single horizontal line (A. B. C. D.) with exactly 10 non-breaking spaces between each option. 3. Long options: Double lines (A. & C. on top, B. & D. below).', 
    active: true, 
    priority: 'Medium', 
    category: 'General' 
  },
  {
    id: 'mp-reading-logic',
    label: 'EXPERT HUMAN READING EXAMINER',
    description: 'Enforces professional exam writer logic for reading tests.',
    promptInjection: 'EXPERT READING MODE: 1. Blueprint: Define skill targets (gist, detail, inference). 2. Non-Linear: Reorder 1/3 of items. 3. Distractors: Use partial truth/lexical overlap. 4. Variety: Use negative framing ("NOT"), indirect questions, and reference traps. 5. Authenticity: Must look like a professionally written exam, not AI-generated.',
    active: true,
    priority: 'High',
    category: 'Reading'
  },
  {
    id: 'mp-syntactic-position',
    label: 'FLOATING MARKER PRINCIPLE',
    description: 'Varies position of key grammar signals.',
    promptInjection: 'Do not place key grammar signals in the same position every time. Vary sentence structure so students cannot scan mechanically. Example variations: "Of the two students, he is the taller." vs "He is the taller of the two students." This forces full-sentence processing.',
    active: true, 
    priority: 'High', 
    category: 'Grammar'
  },
  {
    id: 'mp-grammar-exhaustion',
    label: 'GRAMMAR RULE EXHAUSTION',
    description: 'Forces the AI to test every single sub-rule of a grammar topic.',
    promptInjection: 'STRICT GRAMMAR EXHAUSTION: Test EVERY specific sub-rule for the target {{TOPIC}}. NO RULE LEFT BEHIND.',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-grammar-exhaustion-inversion',
    label: 'Grammar Rule Exhaustion & Structural Inversion',
    description: 'Mandatory Coverage: Identify and test every specific sub-rule for the chosen topic.',
    promptInjection: 'STRICT GRAMMAR EXHAUSTION: Identify and test ALL sub-rules. Use structural inversion where applicable.',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-advanced-nodes',
    label: 'ADVANCED GRAMMAR NODES',
    description: 'Forces the use of rare and challenging grammatical structures.',
    promptInjection: 'STRICT ADVANCED NODES: Inject rare structures (Subjunctive, Causatives, Inversion, Mixed Conditionals).',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-scenario-chaos',
    label: 'INFINITE SCENARIO CHAOS',
    description: 'Forces unique themes and sentence starters for every test.',
    promptInjection: 'STRICT SCENARIO CHAOS: Use unique, vivid scenarios. Forbidden from repeating themes. Use varied sentence starters.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'mp-pragmatic-boundary',
    label: 'PRAGMATIC BOUNDARY TESTING',
    description: 'Distinguishes between types of obligation and meaning.',
    promptInjection: 'Distinguish between types of obligation and meaning in context. Example: "The sign says you have to stop." (external rule) vs "You must try this cake." (personal insistence). Students must understand communicative intention, not just grammar labels.',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-cross-topic-injection',
    label: 'CROSS-TOPIC ERROR INJECTION',
    description: 'Injects general errors into topic-specific tests.',
    promptInjection: 'STRICT CROSS-TOPIC INJECTION: Inject general errors (S-V Agreement, Articles) into topic-specific tests.',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-correct-incorrect-logic',
    label: 'CORRECT/INCORRECT NEAR-MISS LOGIC',
    description: 'Enforces sophisticated distractors for C/I items.',
    promptInjection: 'STRICT C/I LOGIC: NO MCQs. Use "1. _____" (5 underscores). Use Near-Miss logic (Nuance vs Form). Test pragmatic boundaries.',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-anti-robot-starters',
    label: 'ANTI-ROBOT SENTENCE STARTERS',
    description: 'Prevents repetitive sentence beginnings like "I think".',
    promptInjection: 'STRICT ANTI-ROBOT STARTERS: Forbidden from using repetitive sentence starters. Randomize all subjects and lead-ins.',
    active: true,
    priority: 'High',
    category: 'General'
  },
  {
    id: 'mp-pedagogical-notes',
    label: 'PEDAGOGICAL VOICE',
    description: 'Adds human-like "Teacher Tips" or reminders.',
    promptInjection: 'STRICT: Randomly insert one small <b>Tip:</b> or <b>Remember!</b> box at the start of one section (e.g., "Remember: Use the past tense for finished actions!"). This simulates a teacher-made worksheet.',
    active: true,
    priority: 'Medium',
    category: 'General'
  },
  {
    id: 'mp-red-herring',
    label: 'THE "RED HERRING" LOGIC',
    description: 'Adds distractors that are correct in a different context.',
    promptInjection: 'STRICT: For advanced levels, one distractor must be "Grammatically Correct but Contextually Wrong" (e.g., using "since" instead of "for" in a Present Perfect sentence).',
    active: true,
    priority: 'High',
    category: 'Grammar'
  },
  {
    id: 'mp-human-like-design',
    label: 'HUMAN-LIKE TEST DESIGN',
    description: 'Enforces professional exam design principles.',
    promptInjection: `SYSTEM RULE: HUMAN-LIKE TEST DESIGN
When generating grammar exercises:
1. All answer choices must be grammatically possible.
2. Do NOT create obviously wrong options (e.g., "must to be", "has be", "musts be").
3. Distractors must be plausible and related to the target grammar.
4. Include at least one "near-miss distractor" that is grammatically correct but contextually weaker.
5. Avoid answer choices unrelated to the grammar topic.
Example: Topic: Must vs Have to
Good options: A. must wear B. have to wear C. must stay D. have to remain
Bad options: A. must to wear B. musts wear C. has wear D. wear must
6. Questions must test meaning, context, or nuance, not simple grammar recognition.
7. Distractors should reflect common learner mistakes.
8. Maintain balanced answer keys (A, B, C, D).
9. Avoid predictable patterns in answers.
10. All exercises should resemble professional exams such as Cambridge, IELTS, or TOEFL.`,
    active: true,
    priority: 'High',
    category: 'Grammar'
  }
];

export const INITIAL_TEMPLATES: InstructionTemplate[] = [
  // --- FULL TEST COMBINATIONS ---
  { id: 'g_full_mastery', category: 'GRAMMAR', label: 'FULL GRAMMAR TEST', prompt: 'PART: FULL GRAMMAR TEST. Generate a 4-part test. ITEM COUNT: Generate exactly {{COUNT}} items for EACH part. NUMBERING: Number every single item in each part starting from 1. PARTS: 1. Write C (correct) or I (incorrect), 2. MCQ, 3. Circle the correct answers, 4. Double-Gap MCQ. Apply NO-FREE-VERB mandate.', columnCount: 0 },
  { 
    id: 'g_full_test', 
    category: 'GRAMMAR', 
    label: 'Grammar Full Test', 
    prompt: `PART: Grammar Full Test. 
Section I: Individual Grammar
A. Circle the correct option (15 items)
B. Mark sentences C (Correct) or I (Incorrect) (20 items)
C. Write correct word form (13 underscores + base verb) (10 items)
D. Write negative + question forms (2 sentences)
E. MCQ: Choose the best options, A, B, C or D. (10 items)

Section II: Mixed Grammar
A. Find & correct 10 mistakes. (not topic-based)
B. Choose best option (mixed grammar) (10 items)
C. Double-gap MCQ (not topic-based) (10 items)
D. Teacher Mode (Error Correction: 1 paragraph with 5 errors, Students rewrite below) (not topic-based)

MCQ Format: 
- Insert one empty line (one enter space) before every numbered question.
- Put all 4 options on ONE single line if the answer choices are short. Layout: 7 spaces before A., 10 spaces between options. Example: A. Option One B. Option Two C. Option Three D. Option Four
- Format: Put all 4 options on Doubles line if the answer choices are long. 
  Line 1: A. long Option          C. long Option
  Line 2: B. long Option          D. long Option

Answer Key choices appear Randomly for balanced answer keys (4 As, 6 Bs, 5 Cs, 5Ds).
- Layout: 7 spaces before A., 10 spaces between options.`, 
    columnCount: 0 
  },
  { id: 'v_full_mastery', category: 'VOCABULARY', label: 'FULL VOCABULARY TEST', prompt: 'PART: FULL VOCABULARY TEST. Generate a 4-part test. ITEM COUNT: Generate exactly {{COUNT}} items for EACH part. NUMBERING: Number every single item in each part starting from 1. PARTS: 1. MATCHING, 2. TRUE/FALSE (Definition-based), 3. MCQ, 4. SPEAKING Practice. Apply Pure Vocabulary Firewall. STRICT: NO Reading passages.', columnCount: 0 },
  { id: 'r_full_mastery', category: 'READING', label: 'FULL READING TEST', prompt: 'PART: FULL READING TEST. Generate a 6-part test. ITEM COUNT: Generate exactly {{COUNT}} items for EACH part. NUMBERING: Number every single item in each part starting from 1. PARTS: 1. Reading MCQ, 2. WRITE NO MORE THAN TWO WORDS or/and Number, 3. MCQ, 4. Inferential Comprehension, 5. MATCHING HEADING, 6. TRUE/FALSE/NOT GIVEN. Apply Reading Logic Firewall.', columnCount: 0 },

  // GRAMMAR
  { id: 'g_complete_sentences', category: 'GRAMMAR', label: 'COMPLETE THE FOLLOWING SENTENCES.', prompt: 'Part: Write the correct form of the word in brackets for {{TOPIC}}. Use the style _____________ (13 underscores) and provide the base verb in parentheses at the end of the blank. Apply Result-Based Tense logic. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'g_complete_task', category: 'GRAMMAR', label: 'COMPLETE THE FOLLOWING SENTENCES.', prompt: 'Part: Complete the following sentences about {{TOPIC}}. Use the style _____________ (13 underscores) for all items. Rotate structures. STRICT: No MCQ options. This is a writing task.', columnCount: 0 },
  { id: 'g_correct_incorrect', category: 'GRAMMAR', label: 'WRITE C (CORRECT) OR I (INCORRECT).', prompt: 'Part: Correct or Incorrect assessment for {{TOPIC}}. Write C for correct and I for incorrect. Use the style "1. _____" (5 underscores). Apply PRAGMATIC BOUNDARY logic (Must vs Have to). STRICT: No MCQ options.', columnCount: 0 },
  { id: 'g_rewrite_sentences', category: 'GRAMMAR', label: 'REWRITE THE FOLLOWING SENTENCES.', prompt: 'Part: Rewrite the sentences about {{TOPIC}}. Use Rule 7 Conceptual Paraphrasing. STRICT: No MCQ options. Provide a long blank line (_____________________________________________________) for each item.', columnCount: 0 },
  { id: 'g_mcq', category: 'GRAMMAR', label: 'MCQ', prompt: 'Part: Precision MCQ testing {{TOPIC}}. Apply PRAGMATIC BOUNDARY logic. Stems must be situational (e.g., "Grandfather is alone"). Options MUST include correct and incorrect forms (e.g., must visit vs must visits) AND the pragmatically wrong modal (e.g., have to visit).', columnCount: 0 },
  { id: 'g_spelling', category: 'GRAMMAR', label: 'SPELLING RULES', prompt: 'Part: Spelling rules and common errors related to {{TOPIC}}. STRICT: No MCQ options.\nFor example, \nPlural Nouns\n4 columns: 1 singular, 2 plural, 3 singular, 4 plural\n\nif \nAdjective comparison\n6 columns: 1 positive, 2comparative, 3 superlative, 4, 5, 6...', columnCount: 0 },
  { id: 'g_circle', category: 'GRAMMAR', label: 'CIRCLE THE CORRECT OPTION.', prompt: 'Part: Circle the correct option between two choices in parentheses for {{TOPIC}}. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'g_box', category: 'GRAMMAR', label: 'WORDS IN THE BOX.', prompt: 'Part: Complete the following sentences using the words/ phrases in the box. Check the correct forms of grammar for {{TOPIC}}. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'g_pair', category: 'GRAMMAR', label: 'PAIR OF WORDS TO COMPLETE THE SENTENCE.', prompt: 'Part: Double-gap MCQ testing two different aspects of {{TOPIC}} in one sentence.', columnCount: 0 },
  { id: 'g_copy', category: 'GRAMMAR', label: 'COPY FROM THE BOOK.', prompt: 'Part: Copy exercises from the source material for {{TOPIC}}, but randomize the exercise numbers and order. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'g_odd_one_out', category: 'GRAMMAR', label: 'ODD ONE OUT', prompt: '3 answer choices: Choose the incorrect sentence.', columnCount: 0 },
  { id: 'g_editing', category: 'GRAMMAR', label: 'EDITING A PARAGRAPH (ERROR HUNT)', prompt: 'Editing a Paragraph (Error Hunt): This is the mixed grammar test. The answer can be any types of grammar lessons. Correct all the mistakes.', columnCount: 0 },
  { id: 'g_reduce', category: 'GRAMMAR', label: 'REDUCE THE SENTENCE', prompt: 'Reduce the Sentence: Rewrite using fewer words.', columnCount: 0 },
  { id: 'g_best_rewrite', category: 'GRAMMAR', label: 'CHOOSE THE BEST REWRITE', prompt: 'Choose the Best Rewrite', columnCount: 0 },
  { id: 'g_cloze_paragraph', category: 'GRAMMAR', label: 'CLOZE PASSAGE (FULL PARAGRAPH)', prompt: 'Cloze Passage (Full Paragraph): Fill in the blanks.', columnCount: 0 },
  
  // READING
  { id: 'r_mcq_rule7', category: 'READING', label: 'READING MCQ (RULE 7)', prompt: 'Part: Reading passage about {{TOPIC}}. Apply Rule 7 Zero Overlap. Apply Reading Logic Firewall. Apply [HUMAN-TEST ARCHITECTURE].', columnCount: 0 },
  { id: 'r_tfng', category: 'READING', label: 'A: READING TRUE/FALSE/NOT GIVEN', prompt: 'Part: Generate a short (~120 words) public notice or rules text about {{TOPIC}}. Follow with True/False/Not Given questions testing information boundaries. Use style "1. (_____)" (5 underscores). STRICT: No MCQ options.', columnCount: 0 },
  { id: 'r_tf_stmt', category: 'READING', label: 'B: TRUE/ FALSE STATEMENT', prompt: 'Part: Generate a short-medium (~150 words) personal recount or blog post about {{TOPIC}}. Follow with True/ False statements using heavy synonyms and word-form changes. Use style "1. (_____)" (5 underscores). STRICT: No MCQ options.', columnCount: 0 },
  { id: 'r_matching_heading', category: 'READING', label: 'C: MATCHING HEADING', prompt: 'Part: Generate a medium (~250 words) informational article with 4-5 distinct paragraphs about {{TOPIC}}. Follow with a Matching Headings task. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'r_short_answer', category: 'READING', label: 'D: WRITE NO MORE THAN TWO WORDS OR/AND NUMBER', prompt: 'Part: Generate a medium (~200 words) process or factual description about {{TOPIC}}. Follow with fill-in-the-blank summary sentences requiring exact words from the text. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'r_inferential', category: 'READING', label: 'E: INFERENTIAL COMPREHENSION', prompt: 'Part: Generate a medium-long (~300 words) opinion piece or review about {{TOPIC}}. Follow with discussion questions testing author attitude and implications. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'r_mcq', category: 'READING', label: 'F: MCQ', prompt: 'Part: Generate a long (~400 words) complex narrative about {{TOPIC}}. Follow with MCQ testing critical thinking.', columnCount: 0 },
  { id: 'r_ket', category: 'READING', label: 'G: KET FULL TEST', prompt: 'Part: Generate a full Cambridge KET (A2 Key) Reading test about {{TOPIC}}. Ensure non-MCQ parts follow the strict formatting rules.', columnCount: 0 },
  { id: 'r_matching_info', category: 'READING', label: 'MATCHING INFORMATION', prompt: 'Which paragraph mentions:', columnCount: 0 },
  { id: 'r_inference_qs', category: 'READING', label: 'INFERENCE QUESTIONS', prompt: 'Inference Questions: \nWhat can we infer about the writer’s attitude?\n\nWhy did she hesitate?\n....?', columnCount: 0 },
  { id: 'r_critical_thinking', category: 'READING', label: 'CRITICAL THINKING', prompt: 'short sometimes can be long based on the level independence Paragraph ending or questions from the full paragraph.\n\nFor example, \n1- she is a great student. she pays attention to her friends. What the girl is likely to do...?\n2- \nCritical Thinking: Do you? \nThe girl is likely to....?\nSok bought her sister a pencil because __________', columnCount: 0 },
  { 
    id: 'r_mcq_expert', 
    category: 'READING', 
    label: 'EXPERT READING MCQ', 
    prompt: 'Part: Generate a narrative or informational text. Apply [LEXICAL OVERLAP TRAP]. Distractors must include: 1. A "Partial Truth" (mentioned in the text but incomplete), 2. An "Opposite," and 3. A "Contextual Misfit." Apply Zero-Keyword Matching.', 
    columnCount: 0 
  },
  { 
    id: 'r_referential_qs', 
    category: 'READING', 
    label: 'REFERENTIAL RESOLUTION', 
    prompt: 'Part: Generate 3-5 questions asking what specific pronouns (e.g., "it" in line 4, "they" in line 12) refer to in the passage. This tests structural understanding.', 
    columnCount: 0 
  },
  { 
    id: 'r_summary_cloze', 
    category: 'READING', 
    label: 'SUMMARY COMPLETION (CLOZE)', 
    prompt: 'Part: Provide a 1-paragraph summary of the reading passage with 5 blanks. Students must find the correct words from the text to fill the blanks. Use exact word-form from the text.', 
    columnCount: 0 
  },

  // VOCABULARY
  { id: 'v_study_table', category: 'VOCABULARY', label: 'VOCABULARY STUDY', prompt: 'VOCABULARY TABLE. Instructions: Study the following words and their definitions. Use a 2-column HTML table. Column 1: Number + Word/Phrase. Column 2: Easy Definition. STRICT: No MCQ options.', columnCount: 2 },
  { id: 'v_sentence_study', category: 'VOCABULARY', label: 'SENTENCE STUDY', prompt: 'VOCBAULARY STUDY: Study this vocabulary in the sentences. STRICT: No MCQ options. These are example sentences for learning.', columnCount: 0 },
  { id: 'v_supply_terms', category: 'VOCABULARY', label: 'SUPPLY KEY TERMS', prompt: 'SUPPLY KEY TERMS: Instructions: Read the definition and write the correct key term. Use a 2-column HTML table. Column 1: Easy Definition. Column 2: Blank line for Key Term. Randomize order. STRICT: No MCQ options.', columnCount: 2 },
  { id: 'v_box', category: 'VOCABULARY', label: 'VOCABULARY BOX', prompt: 'FILL-IN-THE-BLANK. Instruction: Choose the correct words/phrases from the box to complete the following sentences. Use long blanks. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'v_matching', category: 'VOCABULARY', label: 'DEFINITION MATCHING', prompt: 'MATCHING. Instruction: Match the following vocabulary words with their correct definitions. Use a standard list format. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'v_copy', category: 'VOCABULARY', label: 'COPY EXERCISES', prompt: '4. Copy: Copy the following exercises into your notebook. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'v_synonym_swap', category: 'VOCABULARY', label: 'REWRITE WITH A SYNONYM', prompt: 'CONTEXTUAL SYNONYM SWAP . Instruction: Rewrite each sentence using a synonym for the underlined word. Use a long blank line. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'v_mcq', category: 'VOCABULARY', label: 'PART C6: MCQ', prompt: 'MCQ. Instructions: Choose the best option (A, B, C, or D) to complete each sentence. Apply Grammar Blackout.', columnCount: 0 },
  { id: 'v_tf', category: 'VOCABULARY', label: 'TRUE/FALSE', prompt: 'True/False (Vocabulary Meaning): Instruction: Read the statements and write T (True) or F (False). Use style "1. (_____)" (5 underscores). STRICT: No MCQ options.', columnCount: 0 },
  { id: 'v_speaking', category: 'VOCABULARY', label: 'SPEAKING (DISCUSS WITH A PARTNER)', prompt: 'SPEAKING. Instruction: Discuss the following questions with your partner. Generate open-ended discussion questions related to {{TOPIC}}. STRICT: No MCQ options.', columnCount: 0 },
  { id: 'v_synonyms', category: 'VOCABULARY', label: 'SYNONYMS', prompt: 'SYNONYMS WRITING \nWrite the following synonyms\n5 columns: 1 vocabulary, 2 synonym 1, 3, syn 2, ....\nIf there are more than 5 synonyms, please have another row.', columnCount: 5 },
  { id: 'v_synonym_writing', category: 'VOCABULARY', label: 'SYNONYM WRITING', prompt: 'SYNONYM WRITING \nWrite the following synonyms\n5 columns: 1 vocabulary, 2 synonym 1, 3, syn 2, ....\nIf there are more than 5 synonyms, please have another row.', columnCount: 5 },
  { id: 'v_circle', category: 'VOCABULARY', label: 'CIRCLE THE CORRECT WORD', prompt: 'CIRLCE: \nCircle the Correct Word', columnCount: 0 },
  { id: 'v_cloze', category: 'VOCABULARY', label: 'CLOZE PASSAGE', prompt: 'CLOZE PASSAGE\nCloze Passage', columnCount: 0 }
];

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './firebase-applet-config.json';

// Check if the config is valid (not placeholders)
const isFirebaseConfigValid = 
  firebaseConfig.apiKey && 
  !firebaseConfig.apiKey.includes("remixed-") &&
  firebaseConfig.projectId && 
  !firebaseConfig.projectId.includes("remixed-");

let app;
let auth: any = null;
let db: any = null;
let googleProvider: any = null;

if (isFirebaseConfigValid) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase configuration is invalid or missing. Cloud features will be disabled.");
}

export { auth, db, googleProvider };

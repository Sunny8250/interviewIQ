import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-ai-8ee2a.firebaseapp.com",
  projectId: "interview-ai-8ee2a",
  storageBucket: "interview-ai-8ee2a.firebasestorage.app",
  messagingSenderId: "901888177976",
  appId: "1:901888177976:web:0be8dd5b53138fa79873cd",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs1_IZOAvSWbqWpse_ge2Hb9TYrvrQB-U",
  authDomain: "charlton-fd393.firebaseapp.com",
  projectId: "charlton-fd393",
  storageBucket: "charlton-fd393.appspot.com",
  messagingSenderId: "922662718540",
  appId: "1:922662718540:web:83b23df7a41703554778e9"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app
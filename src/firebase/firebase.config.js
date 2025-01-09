// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiDQUO74OvShDWUl9sZBGoTrUxyxlvGUQ",
  authDomain: "coffee-store-7c83d.firebaseapp.com",
  projectId: "coffee-store-7c83d",
  storageBucket: "coffee-store-7c83d.firebasestorage.app",
  messagingSenderId: "968961384420",
  appId: "1:968961384420:web:f78f9d46cefb2887ce31f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
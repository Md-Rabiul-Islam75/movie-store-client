// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ISm7Uds5FvMsK87rlA77G9iyv0_9feQ",
  authDomain: "movie-store-7c120.firebaseapp.com",
  projectId: "movie-store-7c120",
  storageBucket: "movie-store-7c120.firebasestorage.app",
  messagingSenderId: "845593603391",
  appId: "1:845593603391:web:e3134b970bb39914d0f78a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
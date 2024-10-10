// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1avstBmA8f3-OwP6ET_iU_KtZp8oqifk",
    authDomain: "simple-firebase-project-1f667.firebaseapp.com",
    projectId: "simple-firebase-project-1f667",
    storageBucket: "simple-firebase-project-1f667.appspot.com",
    messagingSenderId: "937944240211",
    appId: "1:937944240211:web:aaa91524d41abc96dcf6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
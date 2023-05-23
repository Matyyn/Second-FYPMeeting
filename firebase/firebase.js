// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCX6iAOf5oQGWdoAQs10Uhr_ULswklE2A",
  authDomain: "mindcare-691a2.firebaseapp.com",
  projectId: "mindcare-691a2",
  storageBucket: "mindcare-691a2.appspot.com",
  messagingSenderId: "615738539454",
  appId: "1:615738539454:web:1b0fbedc551a3f7a1f8def",
  measurementId: "G-W7  YY66V1M4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseApp);

export { firebaseApp };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 export const firebaseConfig = {
  apiKey: "AIzaSyA8D2ghJiYqHAqFEuO91vQx90yrW_KM-Z0",
  authDomain: "mealmapper.firebaseapp.com",
  projectId: "mealmapper",
  storageBucket: "mealmapper.appspot.com",
  messagingSenderId: "382192967532",
  appId: "1:382192967532:web:c2e76866e98e510a0d5d49",
  measurementId: "G-THRF9Q12F2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
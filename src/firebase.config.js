// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhithQ280_c5vgCqQphAPMZRtf2Vl4w8Y",
  authDomain: "house-marketplace-eb161.firebaseapp.com",
  projectId: "house-marketplace-eb161",
  storageBucket: "house-marketplace-eb161.appspot.com",
  messagingSenderId: "888040989473",
  appId: "1:888040989473:web:f944ab8ff5faa4ce579460",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

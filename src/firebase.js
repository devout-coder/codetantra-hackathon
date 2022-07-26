import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx9MgB3HTXV1fqevou0LUE19IRKAnbFo0",
  authDomain: "codetantrahackathon-1819e.firebaseapp.com",
  projectId: "codetantrahackathon-1819e",
  storageBucket: "codetantrahackathon-1819e.appspot.com",
  messagingSenderId: "862348445346",
  appId: "1:862348445346:web:318a4b4c347cdd38f2b9fb",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5kUQSnxuOnxjMN0jbUlj2sigH8UxCxis",
  authDomain: "pilihantanpabeban-4e29b.firebaseapp.com",
  projectId: "pilihantanpabeban-4e29b",
  storageBucket: "pilihantanpabeban-4e29b.appspot.com",
  messagingSenderId: "781572132153",
  appId: "1:781572132153:web:6f4c1b54da9fd0de63ace8",
  databaseURL:
    "https://pilihantanpabeban-4e29b-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

var apps;

getApps().length === 0 ? apps = initializeApp(firebaseConfig) : apps = getApp();
// Initialize Firebase
export const app = apps;
export const database = getDatabase(app);

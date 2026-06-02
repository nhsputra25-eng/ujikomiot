// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDR0Gvqy6US05Y33C7YpSeThbuAmlMAdrI",
  authDomain: "monitoring-iot-ujikom-62e92.firebaseapp.com",
  databaseURL: "https://monitoring-iot-ujikom-62e92-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-iot-ujikom-62e92",
  storageBucket: "monitoring-iot-ujikom-62e92.firebasestorage.app",
  messagingSenderId: "825513067218",
  appId: "1:825513067218:web:233aea718081731459e30b",
  measurementId: "G-C3T9ZYY6PT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;

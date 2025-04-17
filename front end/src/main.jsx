import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3D7RwJrf-FSSgDsxFCI4-cqNBrSQcqGE",
  authDomain: "full-stack-ract.firebaseapp.com",
  projectId: "full-stack-ract",
  storageBucket: "full-stack-ract.firebasestorage.app",
  messagingSenderId: "6167017080",
  appId: "1:6167017080:web:97b85a3c2b77e747885f8d",
  measurementId: "G-LJQ13NGRZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/styles.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYDeYlEPT6-mm6WcDrBnXV4ZeaBeYiL8I",
  authDomain: "ivancaceresfoto-db8c2.firebaseapp.com",
  projectId: "ivancaceresfoto-db8c2",
  storageBucket: "ivancaceresfoto-db8c2.appspot.com",
  messagingSenderId: "203773264242",
  appId: "1:203773264242:web:57ec113674992dc64a9deb",
  measurementId: "G-VJJPGW23XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


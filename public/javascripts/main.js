import { initializeApp } from "firebase/app";
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
}
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj1qoEuVYlhIz1xuIN9BHBPQh1ljq2Ye0",
    authDomain: "wpawirebase.firebaseapp.com",
    projectId: "wpawirebase",
    storageBucket: "wpawirebase.appspot.com",
    messagingSenderId: "225994317257",
    appId: "1:225994317257:web:779e04a3bf35d5dd331c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
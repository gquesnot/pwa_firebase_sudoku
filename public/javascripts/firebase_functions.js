
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyAj1qoEuVYlhIz1xuIN9BHBPQh1ljq2Ye0",
    authDomain: "wpawirebase.firebaseapp.com",
    projectId: "wpawirebase",
    storageBucket: "wpawirebase.appspot.com",
    messagingSenderId: "225994317257",
    appId: "1:225994317257:web:779e04a3bf35d5dd331c18"
};
const app2 = initializeApp(firebaseConfig);
const db = getFirestore(app2)
const querySnapshot = await getDocs(collection(db, "scores"));
let fireElement = document.getElementById("fire-score");
querySnapshot.forEach((doc) => {
    // add  id and score  to fireElement
    fireElement.innerHTML += `<p>${doc.id} : ${doc.data().score}</p>`;
});
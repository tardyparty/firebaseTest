// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdV-b9VrWRIQXbn9RcXEZf9tZh_ltrdlM",
    authDomain: "snake-150af.firebaseapp.com",
    projectId: "snake-150af",
    storageBucket: "snake-150af.appspot.com",
    messagingSenderId: "896495502826",
    appId: "1:896495502826:web:9a54c439c765ee81d4de93",
    measurementId: "G-C5FVFL7BHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test Firestore
async function testFirestore() {
    try {
        const docRef = await addDoc(collection(db, "testCollection"), {
            testField: "testValue"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

testFirestore();

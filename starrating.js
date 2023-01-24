// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWNsWucewjhaBkjlKq4mrIvE-EZkaesPU",
  authDomain: "reem-chat-71ec4.firebaseapp.com",
  databaseURL: "https://reem-chat-71ec4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reem-chat-71ec4",
  storageBucket: "reem-chat-71ec4.appspot.com",
  messagingSenderId: "524893613806",
  appId: "1:524893613806:web:823efd41a0c39f69a9cdff",
  measurementId: "G-KQZ4J8R1RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

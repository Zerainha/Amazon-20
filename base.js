import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQhtIgQyyP5fTGBlbbE2KlrRxSmAT2950",
  authDomain: "amzn-20.firebaseapp.com",
  projectId: "amzn-20",
  storageBucket: "amzn-20.appspot.com",
  messagingSenderId: "950052913519",
  appId: "1:950052913519:web:32a8fd00d71d3f0a41e89a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDfFKZWfjIwReASvmwRpudHfKbrIPvAITs",
  authDomain: "todolist-3660d.firebaseapp.com",
  databaseURL: "https://todolist-3660d.firebaseio.com",
  projectId: "todolist-3660d",
  storageBucket: "todolist-3660d.appspot.com",
  messagingSenderId: "936053073670"
};

let isInitialized = false
let db
let auth

const settings = { /* your settings... */ timestampsInSnapshots: true };

function initialize() {
  if (!isInitialized && !process.server) {
    firebase.initializeApp(config);

    auth = firebase.auth();

    db = firebase.firestore();
    db.settings(settings);

    isInitialized = true
  }
}

initialize()

export {
  firebase,
  auth,
  db,
}

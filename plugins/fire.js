import firebase from 'firebase/app';
import "firebase/firestore";


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDfFKZWfjIwReASvmwRpudHfKbrIPvAITs",
    authDomain: "todolist-3660d.firebaseapp.com",
    databaseURL: "https://todolist-3660d.firebaseio.com",
    projectId: "todolist-3660d",
    storageBucket: "todolist-3660d.appspot.com",
    messagingSenderId: "936053073670"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);

  export default db;
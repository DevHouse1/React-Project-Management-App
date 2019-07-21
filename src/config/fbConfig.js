import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBR02y3S6pNnhfzksKPZxY9LVhTwRABOCs",
    authDomain: "projectify-545dd.firebaseapp.com",
    databaseURL: "https://projectify-545dd.firebaseio.com",
    projectId: "projectify-545dd",
    storageBucket: "",
    messagingSenderId: "645778737630",
    appId: "1:645778737630:web:33a77941f0acdecb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // HH : i dont know what this line does exactly
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
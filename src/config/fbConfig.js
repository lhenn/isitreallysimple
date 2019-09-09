import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyAveO_R6IUYT-PrvnylnfspviITF6iwRuk",
  authDomain: "is-it-really-simple.firebaseapp.com",
  databaseURL: "https://is-it-really-simple.firebaseio.com",
  projectId: "is-it-really-simple",
  storageBucket: "is-it-really-simple.appspot.com",
  messagingSenderId: "1094778672153",
  appId: "1:1094778672153:web:904542f15734bccb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

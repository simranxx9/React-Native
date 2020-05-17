import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyB0v4Hm6QcnmFQZc2nOTohmihhcgweQkDA",
    authDomain: "smartapp-40852.firebaseapp.com",
    databaseURL: "https://smartapp-40852.firebaseio.com",
    projectId: "smartapp-40852",
    storageBucket: "smartapp-40852.appspot.com",
    messagingSenderId: "725960468605",
    appId: "1:725960468605:web:40b9f23faba8e95599a914",
    measurementId: "G-SPPFSSZYQD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
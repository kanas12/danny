import firebase from "firesbase/app";
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2iuwFOlmt2paErgzBqPzNOy3CNbqQbr0",
    authDomain: "hunter-4d41f.firebaseapp.com",
    projectId: "hunter-4d41f",
    storageBucket: "hunter-4d41f.appspot.com",
    messagingSenderId: "316585819351",
    appId: "1:316585819351:web:681b569fea0aec32b20492"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
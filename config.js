import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDT2Qidp-Yq9rLb57BDOtwHPpRkRvwfWPU",
    authDomain: "project71-a43f9.firebaseapp.com",
    projectId: "project71-a43f9",
    storageBucket: "project71-a43f9.appspot.com",
    messagingSenderId: "983963170049",
    appId: "1:983963170049:web:1e8863a13debff7ac15700"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



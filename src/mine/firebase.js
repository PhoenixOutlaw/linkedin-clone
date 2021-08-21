import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyASRHZGCdz99evTfK4ZbFvX7pzxngXO8ww",
    authDomain: "linkdenclone-27026.firebaseapp.com",
    projectId: "linkdenclone-27026",
    storageBucket: "linkdenclone-27026.appspot.com",
    messagingSenderId: "717321198567",
    appId: "1:717321198567:web:a637e6367d0214ddd63b42",
    measurementId: "G-76BQQCX0X1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db,auth};
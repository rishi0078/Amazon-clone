import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDf1MtRHh7i1yEwI3MY-5v2mhWUUflVwH4",
    authDomain: "e-clone-af302.firebaseapp.com",
    databaseURL: "https://e-clone-af302.firebaseio.com",
    projectId: "e-clone-af302",
    storageBucket: "e-clone-af302.appspot.com",
    messagingSenderId: "846130916429",
    appId: "1:846130916429:web:865df39988444620314004",
    measurementId: "G-QLTYDHX17W"
  
});

 const db=firebaseApp.firestore();
 const auth=firebase.auth();

 export {db,auth};
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7BgwBYB14CZWWZnvj2OcNLrZabL5Pytk",
    authDomain: "twitter-clone-1906.firebaseapp.com",
    projectId: "twitter-clone-1906",
    storageBucket: "twitter-clone-1906.appspot.com",
    messagingSenderId: "184918186197",
    appId: "1:184918186197:web:cd0780478579c21deb6a5c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
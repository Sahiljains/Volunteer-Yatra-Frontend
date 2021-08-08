import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyAMBqOaPVb75wDZwHn006eirFRe_yNB2Ww",
    authDomain: "comment-6a2e2.firebaseapp.com",
    projectId: "comment-6a2e2",
    storageBucket: "comment-6a2e2.appspot.com",
    messagingSenderId: "909631050009",
    appId: "1:909631050009:web:e82285fcbbc5e481e33588",
    measurementId: "G-L609JP8WR4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();






const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };

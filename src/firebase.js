import firebase from "firebase";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Wi1RtuURFBg-uzF9SAgVXU2p58pxq90",
  authDomain: "good-mama.firebaseapp.com",
  projectId: "good-mama",
  storageBucket: "good-mama.appspot.com",
  messagingSenderId: "325951583338",
  appId: "1:325951583338:web:154ab26c85bcde46d6c613",
  measurementId: "G-TK0C3SS2DW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

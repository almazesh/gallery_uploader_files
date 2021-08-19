import firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6vLsZDk-rJ5D1uYf0xXAAmoYGicMCEns",
    authDomain: "gallery-f57cc.firebaseapp.com",
    projectId: "gallery-f57cc",
    storageBucket: "gallery-f57cc.appspot.com",
    messagingSenderId: "43456947857",
    appId: "1:43456947857:web:070552c441363f6006c130"
  };
  firebase.initializeApp(firebaseConfig)
  const googleProvider = new firebase.auth.GoogleAuthProvider();


  const storage = firebase.storage()


  const fire = firebase;

  

  export { storage , fire     , googleProvider}
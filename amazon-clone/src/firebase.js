import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBGAV0VsQq6l3Z6i-XF7kUR_-AO1Gw1C1I",
    authDomain: "clone-fe621.firebaseapp.com",
    projectId: "clone-fe621",
    storageBucket: "clone-fe621.appspot.com",
    messagingSenderId: "575367825327",
    appId: "1:575367825327:web:9cbd0670681be421da115a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAUFgc50noU0G8j319ZNbM72_mG8AD-ixo",
        authDomain: "facebook-messenger-clone-26485.firebaseapp.com",
        projectId: "facebook-messenger-clone-26485",
        storageBucket: "facebook-messenger-clone-26485.appspot.com",
        messagingSenderId: "263607214929",
        appId: "1:263607214929:web:26a67ba5687f8679d32970",
        measurementId: "G-7KQVZDF8QR"
})


const db = firebaseApp.firestore();

export { db };
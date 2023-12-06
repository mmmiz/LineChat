// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// import 'firebase/compat/storage';
// // import { getStorage } from 'firebase/storage';


// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCafA88N2MmtcmnXGE-dhrAvjrx5TGzFzc",
//   authDomain: "lineclone-8cbde.firebaseapp.com",
//   projectId: "lineclone-8cbde",
//   storageBucket: "lineclone-8cbde.appspot.com",
//   messagingSenderId: "180631491570",
//   appId: "1:180631491570:web:11df9ab9024064ffb7916b",
//   measurementId: "G-3H9WS5LYPP"
// });

// const auth = firebase.auth();
// const db = firebaseApp.firestore();
// const storage = firebaseApp.storage();

// export { db, auth, storage };


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCafA88N2MmtcmnXGE-dhrAvjrx5TGzFzc",
    authDomain: "lineclone-8cbde.firebaseapp.com",
    projectId: "lineclone-8cbde",
    storageBucket: "lineclone-8cbde.appspot.com",
    messagingSenderId: "180631491570",
    appId: "1:180631491570:web:11df9ab9024064ffb7916b",
    measurementId: "G-3H9WS5LYPP"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)
export const storage = getStorage(app);





import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZLQ5iNlOfBKQW_9UyXeFeKZpS-rDwNlE",
  authDomain: "react-325000.firebaseapp.com",
  projectId: "react-325000",
  storageBucket: "react-325000.appspot.com",
  messagingSenderId: "694745631611",
  appId: "1:694745631611:web:c124083db2d51d0120cbde",
  measurementId: "G-W57MSEH7E9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;

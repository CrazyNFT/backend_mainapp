import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = require('./firedata.json');
const defaultApp = firebase.initializeApp(firebaseConfig,"DefaultApp");


// Firebase product objects
export var auth = defaultApp.auth();
export var db = defaultApp.firestore();
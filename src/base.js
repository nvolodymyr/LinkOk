import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_V9KYewL2IL5BP8nNYY0oS4C5bwoHHi4",
    authDomain: "linkok-ad346.firebaseapp.com",
    databaseURL: "https://linkok-ad346.firebaseio.com",
    projectId: "linkok-ad346",
    storageBucket: "linkok-ad346.appspot.com",
    messagingSenderId: "535013452008",
    appId: "1:535013452008:web:5390810e7defeb6430c15d",
    measurementId: "G-CPFJXF2Y6Q"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;

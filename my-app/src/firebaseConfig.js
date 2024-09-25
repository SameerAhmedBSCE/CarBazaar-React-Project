// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBRJ14mhRnTl-5zaRllQIw-ctlvR9dtLgQ",
    authDomain: "carbazaar-react-project.firebaseapp.com",
    projectId: "carbazaar-react-project",
    storageBucket: "carbazaar-react-project.appspot.com",
    messagingSenderId: "787618917309",
    appId: "1:787618917309:web:df171d4863a60602fa80d4",
    measurementId: "G-MJBV58LP3H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

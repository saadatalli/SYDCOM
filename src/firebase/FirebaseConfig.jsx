import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgQP6P4XRN8RyjJNw4dz3xpnOSIb1h1yA",
  authDomain: "myecom-b4d64.firebaseapp.com",
  projectId: "myecom-b4d64",
  storageBucket: "myecom-b4d64.appspot.com",
  messagingSenderId: "978464683054",
  appId: "1:978464683054:web:e1f39496040b274748dbbf"
};
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

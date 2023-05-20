import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: "netflix-clone-b0e2d.firebaseapp.com",
  projectId: process.env.REACT_APP_PROTECT_ID,
  storageBucket: "netflix-clone-b0e2d.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Access Firestore using getFirestore()
const db = getFirestore(app);

// Access authentication using getAuth()
const auth = getAuth(app);

export { auth };
export default db;

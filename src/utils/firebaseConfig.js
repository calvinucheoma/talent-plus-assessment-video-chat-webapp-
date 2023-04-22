import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'chuks-zoomify.firebaseapp.com',
  projectId: 'chuks-zoomify',
  storageBucket: 'chuks-zoomify.appspot.com',
  messagingSenderId: '169052137506',
  appId: '1:169052137506:web:4493d396bf13e85a30027b',
  measurementId: 'G-7X84F15GH9',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, 'users');
export const meetingsRef = collection(firebaseDB, 'meetings');

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfoKcClFWQJIfOFxRUvPZpEUXktgECK2o",
  authDomain: "uberclone-342a2.firebaseapp.com",
  projectId: "uberclone-342a2",
  storageBucket: "uberclone-342a2.appspot.com",
  messagingSenderId: "461606252804",
  appId: "1:461606252804:web:81abbec0b6e5cb2cf8e051"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth();

export { auth };
import { initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDd6QrywWXw6jZBm688E0ZwyqC_7HoPXUI",
  authDomain: "react-crwn-222c3.firebaseapp.com",
  projectId: "react-crwn-222c3",
  storageBucket: "react-crwn-222c3.firebasestorage.app",
  messagingSenderId: "973146493762",
  appId: "1:973146493762:web:acb3a24c55bbb25e4c6edb"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);
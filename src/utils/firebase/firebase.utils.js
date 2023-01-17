import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWWOez_FFOc9-a9o6P0o16FiuzuIAoDdQ",
    authDomain: "forest-school-b8e9c.firebaseapp.com",
    projectId: "forest-school-b8e9c",
    storageBucket: "forest-school-b8e9c.appspot.com",
    messagingSenderId: "1029222601653",
    appId: "1:1029222601653:web:1d7e38aab2349ec01ffffc",
    measurementId: "G-DQMCY6VSY0"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseapp);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
    signInWithPopup(auth, provider)
  

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    } 

return userDocRef;
  }
import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCb3qYZ_lqS2arUPgFBsNUDUPDSnvxi5QI",
  authDomain: "mentalhealthmanagement-2fc6e.firebaseapp.com",
  projectId: "mentalhealthmanagement-2fc6e",
  storageBucket: "mentalhealthmanagement-2fc6e.appspot.com",
  messagingSenderId: "454549191073",
  appId: "1:454549191073:web:7de2c0a2de0e3059a773e0",
  measurementId: "G-2CRK9FEXMW"
};

// Initialize Firebase app
export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

// Creating an instance of GoogleAuthProvider for Google Sign-In
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
                console.log("User logged in:", user);
            } else {
                setUser(null);
                console.log("No user logged in.");
            }
        });

        return () => unsubscribe();
    }, []);



    //this function is for Signup
    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);         


    //this function is for SignIn
    const signInUserWithEmailAndPass = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);              

    //this function is for google authentification
    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);     

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, signInUserWithEmailAndPass, signinWithGoogle, isLoggedIn, user }}>
            {props.children}
        </FirebaseContext.Provider>
    );
}; 


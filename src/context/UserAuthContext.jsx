import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function logIn(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
        console.error("Login error", error);
        })
        .finally(() => setLoading(false));
  }
  function signUp(email, password, userName, profilePic) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => {
      const user =userCredential.user;
      return updateProfile(user, {
        displayName: userName,
        photoURL: profilePic,
      });
    })
        .catch((error) => {
          console.error("Email already in use");
        })
        .finally(()=> setLoading(false));
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    setLoading(true);
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
        .catch((error) => {
      console.error("Google sign-in error: ", error);
    })
        .finally(() => setLoading(false));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{user, logIn, signUp, logOut, googleSignIn, loading}}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}

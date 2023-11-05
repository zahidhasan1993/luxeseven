import { createContext } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthDataProvider = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoader(false);
      }
    });

    return () => unsubscribe();
  }, []);
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const data = {
    user,
    loader,
    googleLogin,
  };

  return (
    <AuthDataProvider.Provider value={data}>
      {children}
    </AuthDataProvider.Provider>
  );
};

export default AuthProvider;

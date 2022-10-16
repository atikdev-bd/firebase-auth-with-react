import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import app from "../Firebase/firebase.config.js";


const provider = new GoogleAuthProvider();

export const AuthContext = createContext();


const auth = getAuth(app);
const ContextApi = ({ children }) => {

    //create user with email and password///
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  ///login user with email and password///
  const loginUser = (email, password)=>{
  return signInWithEmailAndPassword(auth , email, password)
  }
  ///login with google popup///
  const googlePopUp = ()=>{
    return signInWithPopup(auth,provider)
  }
  const authUser = { createUser,loginUser, googlePopUp };
  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export default ContextApi;

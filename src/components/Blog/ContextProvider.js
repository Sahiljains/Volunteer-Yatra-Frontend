import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "./apikey";
import firebase from "firebase";
export const ContextProvider = createContext();
const Ctp = (props) => {
    const [user, setUser] = useState(null);
 

const sendComment = (msg) => {
    db.collection("messages").add({
      msg,
      photo: user.photoURL,
      username: user.displayName,


      email: user.email,
      currentTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <ContextProvider.Provider
      value={{  sendComment }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Ctp;
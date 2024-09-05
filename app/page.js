'use client'
import { initFirebase } from "../firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, EmailAuthProvider, signOut ,} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React from 'react'
export const signIn = async () => {
    const auth = getAuth();
  initFirebase();
  const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };
 export default function Home() {
     const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  if (user) {
    function signOuts(){

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("User signed out successfully.");
          }).catch((error) => {
            // An error happened.
            console.error("Error signing out: ", error);
          });

    }
    return (
    <button onClick={signOuts}>logout</button>)
  }
  return (
    <div className="text-center flex flex-col gap-4 items-center">
      <div>Please sign in to continue</div>
      <button onClick={signIn}>
        <div className="bg-blue-600 text-white rounded-md p-2 w-48">
          Sign In
        </div>
      </button>
    </div>
  );
};

  
     
  
 
 

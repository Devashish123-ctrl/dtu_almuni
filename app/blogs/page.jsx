'use client'
import React from 'react'
import { initFirebase } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from 'firebase/auth';
export default async function page() 
{

    const auth = getAuth();   
            if(auth){
            console.log(auth)
            console.log(useAuthState)
                return(
                    <div>fjjfjfdj {auth.email}</div>
                    
                )
            }
}

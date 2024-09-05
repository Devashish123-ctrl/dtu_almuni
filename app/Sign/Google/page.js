'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import './page.css'
import { useState } from 'react';
import { initFirebase } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
export default function Page() {
  const [Id, SetId] = useState('');

  const [loadings, setLoading] = useState(false);
  const { push } = useRouter();
  const auth = getAuth();
  initFirebase();
  const [user, loading] = useAuthState(auth);


  useEffect(() => {
      if (user) {
        SetId(user.uid);
      }
    }, [user])

 

  const handleSignIn = async () => {
    document.querySelector('.google').style.visibility = 'hidden';
    document.querySelector('.button').style.visibility = 'hidden';
    document.querySelector('.content').style.visibility = 'hidden';
    document.querySelector('.main').style.visibility = 'visible';
      const response = await fetch('/api/auth/sign', {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"id":Id}),
        
      })
     const data = await response.json()
    
    console.log(data.message)
     
     if (data.message=='new_user'){
      
      push('/profile-update')
            
     }
      if (data.message=='old_users'){
      
      push('/forums')
    }}

 const signIn = async () => {
   
  const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    handleSignIn()
  };
  
    return (
      <div className='contains' style={{height:'100%',width:'100%'}}> 
      <div className="main">
      <div class="loadingspinner">
  <div id="square1"></div>
  <div id="square2"></div>
  <div id="square3"></div>
  <div id="square4"></div>
  <div id="square5"></div>
</div>
  
       </div>

      <div className='content' style={{height:'100%',}}>
         <div style={{textAlign:'center', marginTop:'100px'}}>
                <h1 style={{color:'white' ,fontFamily:'monospace' ,fontSize:'60px'}}>
                Reconnect Relive
                </h1>
                <h1 style={{color:'white' ,fontFamily:'monospace' ,fontSize:'40px'}}>
                & Revive Conversations:
                </h1>
          </div>
      <div className='Container'>

        
        <h1 style={{color:'white' ,fontFamily:'sans-serif'}} >Lets start with</h1>
        
      <button className="button google" onClick={signIn}>
  <svg
    viewBox="0 0 256 262"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    ></path>
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    ></path>
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    ></path>
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    ></path>
  </svg>
  Continue with Google
</button>

      </div>
      </div>
      </div>
    )
}

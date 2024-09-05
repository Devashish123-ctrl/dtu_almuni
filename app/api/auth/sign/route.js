// app/api/auth/sign/route.js
'use server'
import { db } from "@/firebase";
import { getDoc,doc } from "firebase/firestore";
export async function POST(req) {
    const { id } = await req.json();
    const userRef = doc(db, "users", id);
    const userSnapshot = await getDoc(userRef);
    
    if (userSnapshot.exists()) {
    return new Response(JSON.stringify({ message: 'old_users' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  else{
    return new Response(JSON.stringify({ message: 'new_user' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  }
}
  




 
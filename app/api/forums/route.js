// pages/api/forums/route.js
import { db } from "@/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

export async function GET(req) {
  try {
    // Reference to the forums collection
    const forumsCollection = collection(db, "Forums");

    // Create a query to order by createdAt field
    const q = query(forumsCollection, orderBy("createdAt", "desc"));

    // Get the documents
    const querySnapshot = await getDocs(q);

    // Extract the documents data
    const forums = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return new Response(JSON.stringify(forums), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error retrieving forums:", error);
    return new Response(JSON.stringify({ error: 'Error retrieving forums' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

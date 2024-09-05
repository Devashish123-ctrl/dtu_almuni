import { doc, setDoc, serverTimestamp } from "firebase/firestore";
 import { db } from "@/firebase";

export async function POST(req) {

    try {
      console.log(req.method)
      const { id, Alumni, Name, UniversityName, Degree, Graduating_Year, Department, Job_Title, Industry, bio } =  await req.json();
      // Reference to the user document
      const userRef = doc(db, "users", id);

      // Create the document with the provided data
      await setDoc(userRef, {
        Alumni: Alumni || "",
        Name: Name || "",
        UniversityName: UniversityName || "",
        Degree: Degree || "",
        Graduating_Year: Graduating_Year || "",
        Department: Department || "",
        Job_Title: Job_Title || "",
        Industry: Industry || "",
        bio: bio || "",

      });

      // Send success response
      return new Response(JSON.stringify({ message: 'Profile created successfully' }),
      {  status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
      
    } catch (error) {
      // Handle any errors
      console.error("Error creating profile: ", error);
      return new Response(JSON.stringify({ error: 'Error creating profile' }),
      {  status: 200,
      headers: { 'Content-Type': 'application/json' }})
    }
  
}

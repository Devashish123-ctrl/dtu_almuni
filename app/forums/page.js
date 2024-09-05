'use client'
  import React, { useEffect } from 'react';
  import data from './../../images/photo_6314437726212046016_y.jpg'
  import { CiHome } from "react-icons/ci";
  import { FaSearch } from "react-icons/fa";
  import { IoIosNotificationsOutline } from "react-icons/io";
  import { MdWorkOutline } from "react-icons/md";
  import { CgProfile } from "react-icons/cg";
  import { GiAchievement } from "react-icons/gi";
  import { BiSolidUpvote } from "react-icons/bi";
  import { getDoc } from 'firebase/firestore';
  import { useRef } from 'react';
  import { signOut } from 'firebase/auth';
  import { MdOutlineModeComment } from "react-icons/md";
  import photo from "./../../images/1.jpeg"
  import Search from '../components/Search';
import Image from 'next/image';
import firebase from 'firebase/app';
  import "./app.css";
  import { useState } from 'react';
  import { getAuth } from 'firebase/auth';
  import { initFirebase } from '@/firebase';
  import { useAuthState } from 'react-firebase-hooks/auth';
  import { FaRegMessage } from "react-icons/fa6";
  import { FaImage, FaSmile, FaPollH, FaCalendarAlt } from 'react-icons/fa';
import { MdOutlineGifBox } from 'react-icons/md';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db,storage } from '@/firebase';
import { addDoc } from 'firebase/firestore';
import { uploadBytes } from 'firebase/storage';
import { POST } from '../api/profile/route';
import ForumList from '../components/POST';
import Link from 'next/link';
import { signIn } from '../page';



   export default function page() {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const textareaRef = useRef(null);
    const [imageURL, setImageURL] = useState('');
    const[ImageName, SetImageName] = useState('')
    const[UploadImage, SetUploadImage] = useState('')
    const [Profile, SetProfile] = useState('')


  
    const handleUpload  = async () => {
      if(!UploadImage){
        const imageDocRef = collection(db, 'Forums',); 
        await addDoc(imageDocRef, {
          UserId : user.uid,
          text:text,
          createdAt: new Date(),
          Username: user.displayName,
          photoURL: photoURL
          
        });
        fetchForums();
        setText('')
        setImage('')
      }
   
    else{const imageRef = ref(storage, `images/${ImageName}`);
    

    try {
      // Upload the file to the specified storage reference
      await uploadBytes(imageRef, UploadImage);
      
      // Get the download URL
      const url = await getDownloadURL(imageRef);
       // Store the download URL in Firestore
       const imageDocRef = collection(db, 'Forums',); 

       await addDoc(imageDocRef, {
         UserId : user.uid,
         url: url,
         text:text,
         createdAt: new Date(),
         Username: user.displayName,
         photoURL: photoURL
         
       });
       fetchForums();
       setText('')
       setImage('')
       textareaRef.current.focus();
       
    
       
    } catch (error) {
      console.error("Error uploading file:", error);
    }}      
  };


  function signOuts(){

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("User signed out successfully.");
          }).catch((error) => {
            // An error happened.
            console.error("Error signing out: ", error);
          });

    }


    function signOuts(){

      signOut(auth).then(() => {
          // Sign-out successful.
          console.log("User signed out successfully.");
          window.location.href = '/Sign';
        }).catch((error) => {
          // An error happened.
          console.error("Error signing out: ", error);
        });

  }

  const [forums, setForums] = useState([]);
  const fetchForums = async () => {
    try {
      const response = await fetch('/api/forums');
      const data = await response.json();
      setForums(data);
    } catch (error) {
      console.error('Error fetching forums:', error);
    }
  };

  useEffect(() => {
   ;

    fetchForums();
  }, []);

  
       
  
       
        

    
  













    useEffect(() => {
        // Adjust the height of the textarea to match its content
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto'; // Reset the height
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
      }, [text]); // Run this effect whenever 'text' changes
    
     

      const handleTextChange = (e) => {
        setText(e.target.value);
      };
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        SetImageName(file.name)
        if (file) {
          setImage(URL.createObjectURL(file));
          SetUploadImage(file)

        }
      };
      async function ProfileGet() {
        const userRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userRef);
       
        SetProfile( userSnapshot.data())
        
      }
    


    const auth = getAuth();
        initFirebase();
        const [user, loading] = useAuthState(auth);
        const [photoURL, setPhotoURL] = useState('');
        useEffect(() => {
            if (user) {
               ProfileGet()
              setPhotoURL(user.photoURL);
            }
          }, [user])

          const handleRemoveImage = () => {
            setImage(null);
          };

  return ( 
    <>
  <div className="sidebar">
    <div style={{height:'fit-content',"width":"100%",borderRadius:"10px",color:"gray"}}>
    <i className="fab fa-twitter" />
    <div className="sidebarOption active">
      <span className="material-icons"> <CiHome style={{height:'30px',width:'auto'}}/> </span>
      <h2>Home</h2>
    </div>
    <div className="sidebarOption">
      <span className="material-icons"> <FaSearch /> </span>
      <h2>Search</h2>
    </div>
    <div className="sidebarOption">
      <span className="material-icons"> <IoIosNotificationsOutline /> </span>
      <h2>Notifications</h2>
    </div>
    <div className="sidebarOption">
      <span className="material-icons"><FaRegMessage /> </span>
      <h2>Messages</h2>
    </div>
    <Link href='/Jobs' style={{textDecoration:'none' ,color:'gray'}} >
        <div className="sidebarOption">
          <span className="material-icons"> <MdWorkOutline /> </span>
        <h2>Jobs</h2> 
        </div>
    </Link>  
    <div className="sidebarOption">
      <span className="material-icons"><CgProfile/> </span>
      <h2>Lists</h2>
    </div>
    <div className="sidebarOption">
      <span className="material-icons"> <GiAchievement /> </span>
      <h2>Profile</h2>
    </div>
    </div>


    <div class="content">
                    
                    <button class="btn" onClick={signOuts}>
                                          logout
                  </button>
        
                </div>
  </div>





  <div className="feed">
    <div className="feed__header">
      <h2>Home</h2>
    </div>
    <div style={{width:"100%",borderBottom: '1px solid #4d4747' ,marginBottom:"10px"}}>
    <div style={styles.container}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="ask any question"
        style={styles.textarea}
        id="wwe"
      />
      {image && (
        <div style={styles.imagePreview}>
          <img src={image} alt="Preview" style={styles.image}  />
          <button class="button" onClick={handleRemoveImage}>
  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>
        </div>
      )}
      <div style={styles.footer}>
        <div style={styles.icons}>
          <label>
            <FaImage style={styles.icon} />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={styles.fileInput}
            />
          </label>
        </div>
        <button style={styles.tweetButton} onClick={()=>handleUpload()}>Post</button>
      </div>
    </div>
    </div>
   <ForumList  forums={forums} />
  
  </div>
  <div className="widgets">
  <Search  url ={photoURL} Profile={Profile}/>
  </div>
</>
)}



const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      maxWidth: '500px',
      margin: '10px auto',
    },
    textarea: {
      width: '100%',
      backgroundColor:"black",
      color:"white",
      border: 'none',
      outline: 'none',
      resize: 'none',
      minHeight: '50px',
      padding: '10px',
      fontSize: '16px',
      boxSizing: 'border-box',
      borderRadius: '8px',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
    },
    icons: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    icon: {
      fontSize: '20px',
      cursor: 'pointer',
    },
    fileInput: {
      display: 'none',
    },
    tweetButton: {
      backgroundColor: '#32cd32;',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '20px',
      cursor: 'pointer',
    },
    imagePreview: {
      position: 'relative',
      marginTop: '10px',
    },
    image: {
      width: '100%',
      borderRadius: '8px',
    },
    removeImageButton: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
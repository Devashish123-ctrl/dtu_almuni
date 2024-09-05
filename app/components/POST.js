import React from 'react'
import Image from 'next/image'; // Make sure to import Image from Next.js
import { BiSolidUpvote } from 'react-icons/bi'; // Make sure you have react-icons installed
import { MdOutlineModeComment } from 'react-icons/md';

function ForumList({ forums }) {
    console.log(forums)
  return (
    <div className="forum-list">
      {forums.map(forum => (

        <div className="post" key={forum.id}>
          <div className="post__avatar">
            <Image
              src={forum.photoURL} // User's avatar
              alt={`${forum.Username}'s avatar`}
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {forum.Username} {/* Display name */}
                  <span className="post__headerSpecial">
                    <span className="material-icons post__badge"> verified </span>
                    @{forum.UserId}
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{forum.text}</p> {/* Forum content */}
              </div>
            </div>
            {forum.url && (
              <Image
                src={forum.url} // Image URL
                alt="Forum related"
                width={600} // Adjust width as needed
                height={400} // Adjust height as needed
                style={{ maxWidth: '100%' }}
              />
            )}
            <div className="post__footer">
              <span className="material-icons"><BiSolidUpvote /></span>
              <span className="material-icons"><MdOutlineModeComment /></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForumList;




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
  
        



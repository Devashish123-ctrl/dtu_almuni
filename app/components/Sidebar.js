import React from 'react'
import "./page.css"
import Image1 from './../../images/dtu sign.png'
import Image from 'next/image'
export default function Side() {
    return (
        <div style={{height :"100%",width:"100%"}}>
               <div class="profile">
                  <Image src={Image1} alt="Profile Image" class="profile-image" />
                  <h2 class="profile-name">Alumni Network</h2>
                </div>

                <nav class="nav-links">
                  <a href="#" class="nav-link">Donate to college campaign</a>
                  <a href="#" class="nav-link"> Interests</a>
                  <a href="#" class="nav-link"> Connect to Alumni of college</a>
                  <a href="#" class="nav-link">Contact</a>
                </nav>
            
        </div>
    )
}

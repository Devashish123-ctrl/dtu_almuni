
'use client'
import React, { use, useState } from 'react'
import "./Search.css";
import Image from 'next/image';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { initFirebase } from '@/firebase';
import img from  './../../images/profile.jpg'

export default function Search(urls ,profile) {
  const [Images,setImageURLs] = useState('')
  const[Name, setName] = useState('')
  const[Job, SetJob] = useState('')




useEffect(()=>{
  if(urls){
    console.log(urls)
   setImageURLs(urls.url)
   setName(urls.Profile.Name)
   SetJob(urls.Profile.Job_Title)
   console.log(Images)
   console.log(Name)
  } 
}
)




    return (
        <div style={{height:'100%' ,width:"100%"}}>
          <div class="grid"></div>
<div id="poda">
  <div class="glow"></div>
  <div class="darkBorderBg"></div>
  <div class="darkBorderBg"></div>
  <div class="darkBorderBg"></div>

  <div class="white"></div>

  <div class="border"></div>

  <div id="main">
    <input placeholder="Search..." type="text" name="text" class="input" />
    <div id="input-mask"></div>
    <div id="pink-mask"></div>
    <div class="filterBorder"></div>
    <div id="filter-icon">
      <svg
        preserveAspectRatio="none"
        height="27"
        width="27"
        viewBox="4.8 4.56 14.832 15.408"
        fill="none"
      >
        <path
          d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
          stroke="#d6d6e6"
          stroke-width="1"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <div id="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        height="24"
        fill="none"
        class="feather feather-search"
      >
        <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
        <line
          stroke="url(#searchl)"
          y2="16.65"
          y1="22"
          x2="16.65"
          x1="22"
        ></line>
        <defs>
          <linearGradient gradientTransform="rotate(50)" id="search">
            <stop stop-color="#f8e7f8" offset="0%"></stop>
            <stop stop-color="#b6a9b7" offset="50%"></stop>
          </linearGradient>
          <linearGradient id="searchl">
            <stop stop-color="#b6a9b7" offset="0%"></stop>
            <stop stop-color="#837484" offset="50%"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>

            
<div class="sidebar2">
        <div class="profile-picture">
           
            <Image src={Images} width={60} height={60}/>
        </div>
        <div class="profile-info">
            <h2 class="name">{Name}</h2>
            <p class="headline">{Job}</p>
        </div>
        <div class="profile-details">
            <p><strong>Location:</strong> Delhi</p>
            <p><strong>Connections:</strong> 500+ connections</p>
        </div>
        <div class="profile-actions">
            <button class="action-button">Connect</button>
            <button class="action-button">Message</button>
        </div>
        </div>



        </div>
    )
}
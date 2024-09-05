import React from 'react';

import Image from 'next/image';
import Image2 from './../../images/photo_6314437726212046016_y.jpg';
import './login.css';
import Link from 'next/link';
import Side from '../components/Sidebar';
import dhiraj from './../../images/Dhiraj.jpg'
import Sushant from './../../images/Sushant.jpg'


export default function Header(){
    return (
      <div style={{backgroundColor:'black' ,height:'100%',width:"100%"}}>
        <div style={{display:"flex",justifyContent:"space-around" ,height:"100%"}}>
          <div className='sidebar' style={{height:'100%',width:'30%'}} >

          <Side/>

                <div class="content">
                    <Link href={'Sign/Google'} style={{textDecoration:'none' ,color: 'rgb(234, 234, 234)'}}>
                    <button class="btn">
                                          Login
                  </button>
                  </Link>
                </div>

                
          </div>
          <div className='main_content' style={{width:"70%",height:"100%"}}>
            <div style={{marginLeft:'60px'}}>
                <h1 style={{color:'white' ,fontFamily:'monospace' ,fontSize:'60px'}}>
                Reconnect Relive
                </h1>
                <h1 style={{color:'white' ,fontFamily:'monospace' ,fontSize:'40px'}}>
                & Revive Conversations:
                </h1>

                
           </div>
 <div className="train-track">

  <div className="train">
  <Image src={Image2} alt="Train Image" className="train-image" />
  <p className="black">Vijay Shekhar</p>
  <p className="white">CEO ,CTO of indian biggest fintech company paytm</p>
</div>
  <div className="train">
  <Image src={dhiraj} alt="Train Image" className="train-image" />
  <p className="black">Dheeraj</p>
  <p className="white">Painter, received a grant from the Royal Norwegian Ministry of Foreign Affairs</p>
</div>
<div className="train">
  <Image src={Sushant} alt="Train Image" className="train-image" height={120} width={120} />
  <p className="black">Sushant</p>
  <p className="white">bollywood late actor .</p>
</div>
<div className="train">
  <Image src={Image2} alt="Train Image" className="train-image" />
  <p className="black">Devashish</p>
  <p className="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div className="train">
  <Image src={Image2} alt="Train Image" className="train-image" />
  <p className="black">Devashish</p>
  <p className="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div className="train">
  <Image src={Image2} alt="Train Image" className="train-image" />
  <p className="black">Devashish</p>
  <p className="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
</div>

  <div class="train-container">
    <div class="train-text">
      <span>Learn, Build, Grow &nbsp; Learn, Build, Grow &nbsp; Learn, Build, Grow</span>
      <span>want a musician</span>
      <span>i recently start the startup</span>
      <span>Need a Cofounder for my company</span>
      <span>hello world!!!</span>
      <span>hello world!!!</span>
      <span>My dreams come true</span>
    </div>
  </div>
  <div class="train-containers">
    <div class="train-texts">
      <span>Learn, Build, Grow &nbsp; Learn, Build, Grow &nbsp; Learn, Build, Grow</span>
      <span>want a musician</span>
      <span>i recently start the startup</span>
      <span>just a learn hello world!!! today in python </span>
      <span>World Sucks</span>
      
    </div>
  </div>
  
 

          </div>
        </div>

      </div>
       
    )
}
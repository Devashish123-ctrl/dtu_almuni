import React from 'react'
import './page.css'
import Image from 'next/image'
import forest from './../../images/forest.jpeg.jpg'
import hand from './../../images/hands.jpg'
import student from './../../images/students.webp'
import imageUrl from './../../images/dtu_college.jpg'
import hostel from './../../images/hostel.png'
import campus from './../../images/campus.jpg'

export default function page() {
    
    return (
      <>

 
  <div className="stat">
    <div />
    <div className="item">
      <h1>10,000 CR</h1>
      <p>10 Year Goal</p>
    </div>
    <div className="item">
      <h1>500 CR</h1>
      <p>Pledged Donation</p>
    </div>
    <div className="item">
      <h1>425+</h1>
      <p>Donors</p>
    </div>
    <div />
  </div>
  <div className="giving">
    <div className="written-1">
      <h1>Giving Back</h1>
      <blockquote>
        "...And miles to go before I sleep." &nbsp; -&nbsp;&nbsp; Robert Frost
      </blockquote>
      <p>
        DTU has come a long way since its inception but has miles to go,
        as Robert Frost mentions. Together, we can support DTU in its
        vision. <br />
        <br />
        DTU Endowment Fund is helping DTU in its journey. Endowments
        are structured to exist in perpetuity, meaning that the institution can
        rely on the endowment’s earnings forever. <br />
        <br />{" "}
        <strong>
          Your generous contributions will help not only today’s generation but
          also generations to follow and ensure a smooth glide path for DTU
          Delhi to reach for the skies.{" "}
        </strong>
      </p>
    </div>
    <div className="box">
      <Image  width={'35%'} src={forest} alt="forest" />
      <h2>General Funds</h2>
      <p>
        Contributions made to the General Fund help DTU the freedom to
        undertake innovative projects, support pathbreaking research
        initiatives, and promote student well being.
      </p>
      <div className="but">
        <span />
        <span />
      </div>
    </div>
  </div>
  <div className="impact">
    <div className="written-2">
      <h1>Impact of Giving</h1>
      <br />
      <p>
        The Endowment and other gifts to the University support DTU’s
        mission. These financial resources provide critical support to the
        University by advancing pioneering research, building infrastructure for
        growth, and supporting student welfare.
      </p>
      <br />
      <button className="red">VIEW MORE &nbsp;&nbsp;→</button>
    </div>
    <div className='data'>
    <Image src={hand} alt="hands" />
    </div>
  </div>
  <div className="priority" style={{height:"fit-content",paddingBottom:"20px"}}>
    <div className="written-2">
      <h1 style={{textAlign :'center'}}>Featured Priorities</h1>
    </div>
    <div className="bl">
      <div className="blocks one">
        <Image src={student} alt="students" />
        <h2 Scholarships> Scholarships</h2>
        <p>
          Scholarships for meritorious students not only provide academic
          encouragement but are also important for the financial support they
          provide. Help us to ensure that all students with the potential to
          excel, have a chance to study at DTU, not just some.
        </p>
        <div className="but">
         
        </div>
      </div>
      <div className="blocks two">
        <Image src={hostel} alt="students" />
        <h2>Hostels</h2>
        <p>
        The most memorable chapter of the story of all alums at DTU is their hostel life. The “home away from home” leaves all its Alumni with innumerable experiences, friends, emotions, and learnings for life.
        </p>
        <div className="but">
         
        </div>
      </div>
      <div className="blocks three">
        <Image src={campus} alt="students" />
        <h2>Naming_opportunity</h2>
        <p>
         DTU provides various opportunities for alumni and corporate donors to acquire naming rights for various physical, and non-physical entities on campus.
        </p>
        <div className="but">
         
        </div>
      </div>
      
    </div>
  </div>


        </>
    )
}

'use client'
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './page.css'; // Import the CSS for styling
import { initFirebase } from '@/firebase';
import { NextResponse, NextRequest } from 'next/server'



const Onboarding = () => {
  const auth = getAuth();
  initFirebase();
  const [user, loading] = useAuthState(auth);
  const [isChecked, setIsChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // State to track the current step
  const [exiting, setExiting] = useState(false); 
  const [Id, SetId] = useState('');
 
  // State to handle exit animation
  const [formData
    , setFormData] = useState({Alumni :false
  }); // State to collect user input data

  const steps = [
    {
      title:"Are You Almuni",
      form:[]
    },
    {
      title: 'Welcome to Our Platform',
      form: [
        { 0: "Name" },
        { 1: "UniversityName" },
        { 2: "Degree" },
      ]
    },
    {
      title: 'More info',
      form: [
        { 0: "Graduating_Year" },
        { 1: "Department" },
      ]
    },
    {
      title: 'Current Status',
      form: [
        { 0: "Job_Title" },
        { 1: "Industry" },
      ]
    },
    {
      title: 'Bio',
      form: [
        { 0: 'bio' },
      ]
    }
  ];

  useEffect(() => {
    console.log(currentStep)
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id : user.uid
      }))
      setFormData((prevFormData) => ({
        ...prevFormData,
        PhotoURl : user.photoURL
      }))
      
    }
  }, [user])


  const handleNext = () => {
    setExiting(true);
    setTimeout(() => {
      if (currentStep === steps.length - 1) {
        handleSubmit(); // Call handleSubmit if on the last step
      } else {
        setCurrentStep((prevStep) => (prevStep + 1) % steps.length); // Loop back to the first step after the last
      }
      setExiting(false); // Reset exiting state after transition
    }, 500); // Match the duration of the animation
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  

 const handleSubmit = async () => {
      
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log('Submission successful:', data);
      window.location.href = '/forums';
      
    }




    // Step 2: Create a function to handle changes
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked); // Update state with checkbox value
      if (event.target.checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          Almuni: true
        }));

       
      } else {
        console.log("no")
        setFormData((prevFormData) => ({
          ...prevFormData,
          Almuni: false
        }));

      }
    };
  

  return (
    <div className="container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${
            index === currentStep
              ? exiting
                ? 'exiting'
                : 'active'
              : ''
          }`}
        >
          
          <div className="containering">
  {steps[currentStep] ? ( // Check if the current step exists
    <div className="step-content">
      <h2 className='data'>{steps[currentStep].title}</h2>
      <p></p>
      <div className="box-input">
        {currentStep === 0 ? (
          <div className="containers">
            <input
              type="checkbox"
              id="check"
              name="check"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="check" className="toggle">
              <div className="toggle__circle"></div>
            </label>
            <div className="toggle-text">
              <span>N</span>
              <span>F</span>
            </div>
          </div>
        ) : (
          steps[currentStep].form.map((steping, i) => (
            <div
              className="border"
              style={steping[i] === "bio" ? { height: "220px" } : {}}
              key={i}
            >
              {steping[i] === "bio" ? (
                <textarea
                  style={{
                    height: "95%",
                    width: "95%",
                    margin: "auto",
                    fontSize: "20px",
                    textDecoration: "none",
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  name={steping[i]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type="text"
                  name={steping[i]}
                  className="input"
                  placeholder={steping[i]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))
        )}
      </div>
      <button className="next-button" type='button' onClick={handleNext}>
        {currentStep === steps.length - 1 ? 'Submit' : 'Next Step'}
      </button>
    </div>
  ) : (
    <p>No step available</p> // Handle the case where the step doesn't exist
  )}
</div>

          
          
          <button className="next-button" type='button' onClick={handleNext}>
            {currentStep === steps.length - 1 ? 'Submit' : 'Next Step'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Onboarding;

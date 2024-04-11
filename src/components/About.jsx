import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-1">About</h1>
        <p>
          Hello, I'm Akhil, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl pb-2">
          Education & Training
        </h1>
        <span className="space-y-4">
          <h1 className="text-xl underline">[Bachelor of Computer Application (BCA)]</h1>
          <h2 className="text-lg">[Omkarananda Institute of Management & Technology]</h2>
          <h3 className="text-md">[2022-2025]</h3> 
          <h1 className="text-xl underline">[Intermediate]</h1>
          <h2 className="text-lg"> [Agape Mission School]</h2>
          <h3 className="text-md">[2021-2022]</h3> 
          <h1 className="text-xl underline">   [ADWD (Advance Diploma in Web Designing )]</h1>
          <h2 className="text-lg">[Riddhika Developer]</h2>
          <h3 className="text-md">  [2023]</h3>
        
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div className="row ">
          <span className="block py-3 text-md ">
            <h1 className="text-xl py-2 uppercase ">Frontend Technologies </h1>
            HTML, CSS, JAVASCRIPT, REACTJS, GIT & GITHUB
          </span>
          <span className="block py-3 text-md ">
            <h1 className="text-xl py-2 uppercase">Backend Teachnologies</h1>
            NODEJS, EXPRESS, MONGODB
          </span>
        </div>

       

        <h1 className="text-green-600 font-semibold text-2xl">
          Mission Statement
        </h1>
        <p className="text-lg pt-2">
          My mission is to leverage my skills and creativity to deliver
          innovative [Web Developement] solutions that exceed client
          expectations and contribute positively to the digital landscape.
        </p>
      </div>
    </div>
  );
}

export default About;

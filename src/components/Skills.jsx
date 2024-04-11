import React from "react";
import html from "/html.png";
import css from "/css.jpg";
import reactjs from "/reactjs.png";
import javascript from "/javascript.png";
import express from "/express.png";
import mongoDB from "/mongodb.jpg";
import nodejs from "/node.png";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
    },
    
    {
      id: 5,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 6,
      logo: express,
      name: "Express",
    },
    {
      id: 7,
      logo: mongoDB,
      name: "MongoDB",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5">Skills</h1>
        {/* <p className="">
          I've more than 2 years of Skills in below technologies.
        </p> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] h-[150px] rounded-full md:w-[200px] md:h-[200px] w-[150px]  shadow-md p-4 cursor-pointer hover:scale-110 duration-300 "
              key={id}
            >
              <img src={logo} className="w-full h-full object-cover  rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

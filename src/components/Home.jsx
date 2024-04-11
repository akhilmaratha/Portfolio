import React from "react";
import pic from "/profileimg.jpeg";

import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-3 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-md  md:text-xl text-justify">
              Hello! I'm [Akhil Maratha], a passionate web developer located in
              town of Rishikesh, Uttarakhand. Proficient in front-end
              technologies like HTML, CSS, and JavaScript, with a keen eye for
              design and user experience. Equally adept at the back end with
              expertise in Node.js, Express, and database management
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center text-lg">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/akhil-maratha-504761296/" target="_blank">
                      <FaLinkedin className="text-3xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/akhilmaratha" target="_blank">
                      <FaGithub className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-lg text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="text-center py-5">
              <a href="./resume-example.pdf" target="_blank">
                <button className="px-4 py-2 bg-blue-500 border-1 rounded-full text-white ">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 mx-auto">
            <img
              src={pic}
              className="rounded-full md:w-[350px] md:h-[350px] w-[250px]
              h-[250px] object-cover object-top"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;

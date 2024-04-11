import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 ">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-10">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/in/akhil-maratha-504761296/"
                target="_blank"
              >
              <FaLinkedinIn size={30} /> 
              </a>
              <a href="https://github.com/akhilmaratha" target="_blank">
                 <FaGithub size={30} />
              </a>
            </div>
            <div className="mt-5 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-md text-center">
                &copy; 2024 <br /> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

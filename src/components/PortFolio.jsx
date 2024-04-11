import React from "react";
import moviesearch from "/movie.jpg"
import pinterest from "/Pinterest.jpg"
import wanderlust from "/wanderlust.jpg"
import html from "/html.png";
import insta from "/insta.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: moviesearch,
      name: "Movie Search App",
      srcCode:"https://github.com/akhilmaratha/MovieAppReact",
      headline:"FilmFind: Exploring Cinema with Ease",
      livelink:"https://movie-app-react-one-lilac.vercel.app/",
      
    },
    {
      id: 2,
      logo: pinterest,
      name: "Pinterest Clone",
      srcCode:"https://github.com/akhilmaratha/Pinterest-Clone",
      headline:"PinQuest: Your Creative Wonderland",
      livelink:"",
    },
    {
      id: 3,
      logo: wanderlust,
      name: "Wanderlust",
      srcCode:"https://github.com/akhilmaratha/WanderLust",
      headline:"StayAway: Explore the World, One Home at a Time",
      livelink:"https://first-project-qnyn.onrender.com/listings",
    },
    {
      id: 4,
      logo: html,
      name: "Obys Agency",
      srcCode:"https://github.com/akhilmaratha/obys-agency",
      headline:"Obys Agency",
      livelink:"https://akhilmaratha.github.io/obys-agency/",
    },
    {
      id: 5,
      logo: insta,
      name: "Insta Clone",
      srcCode:"https://github.com/akhilmaratha/Insta-Clone",
      headline:"SnapLife: Share Your Story, Capture the Moment",
      livelink:"",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name,headline,livelink,srcCode }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] object-cover p-1 rounded-full border-[2px] "
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                 {headline}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={livelink}>
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Live
                </button>
                </a>
               <a href={srcCode}>
                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
               </a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Css/Video.css";
import Negative from "../assets/video/negative.mp4";
import Download from '../assets/gif/download.gif';

const Video = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Brain Voyage - Boost Your Child's Brainpower</title>
          <meta
            name="description"
            content="Don't Miss Out! Boost Your Child's Brainpower and Stay Ahead with Our Engaging Learning Adventures!"
          />
          <meta
            name="keywords"
            content="Digital world,cognitive development,mental stamina,educational game,learning, cognitive abilities,memory retension,attention span ,interactive task, interactive game, boost memory, fun activities, focus duration, critical thinking, problem solving skills, Analytical span"
          />
        </Helmet>

        {/* Wave background */}
        <div className="relative bg-gradient-to-r from-purple-100/90 to-purple-300/100 p-4 pb-0">
          {" "}
          {/* Reduced bottom padding */}
          <svg
            className="absolute inset-x-0 bottom-0 text-teal-400"
            viewBox="0 0 1440 220"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path
              fillOpacity="0.9" // Adjust the fill opacity for the SVG wave
              d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,144C840,128,960,96,1080,90.7C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          {/* Content */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-0 md:mt-0">
            {" "}
            {/* Removed top margin */}
            <div className="w-full md:w-2/3 p-4 pt-0 bg-gradient-to-r from-a1c4fd to-c2e9fb rounded-xl md:rounded-3xl">
              {" "}
              {/* Added gradient background and border radius */}
              {/* <header className="header">
                <h1 className="text-4xl font-extrabold text-center text-yellow-400 drop-shadow-md">About Us</h1>
              </header> */}
              <div className="video-container">
                <iframe
                  className="w-full rounded-xl md:rounded-3xl" // Adjust border-radius for smaller screens
                  src={Negative}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Paragrap
        h content outside the wave */}
        <div className="container mx-auto p-4 md:p-6">
          <div className="bg-gradient-to-r from-blue-100/95 to-purple-100/95 shadow-lg rounded-xl md:rounded-full p-6 md:p-10 relative overflow-hidden">
            {/* Cloud shapes */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-white opacity-80 rounded-full transform -translate-y-10 -translate-x-10 shadow-xl"></div>
            <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-white opacity-80 rounded-full transform -translate-y-10 translate-x-10 shadow-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-white opacity-80 rounded-full transform translate-y-10 -translate-x-10 shadow-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-white opacity-80 rounded-full transform translate-y-10 translate-x-10 shadow-xl"></div>
            <div className="absolute bottom-0 left-1/2 w-24 h-24 md:w-40 md:h-40 bg-white opacity-80 rounded-full transform translate-y-10 -translate-x-1/2 shadow-xl"></div>
            <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-base md:text-lg font-poppins font-bold relative pb-6 md:pb-10">
              In today’s fast-paced digital world, children’s ability to focus
              and think critically is often challenged. Early intervention is
              crucial for enhancing cognitive development and building strong
              mental stamina in kids.
            </p>
            <img
              src={Download}
              alt="Download"
              className="absolute bottom-0 right-0 w-12 h-12 md:w-24 md:h-24 rounded-full"
            />
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Video;

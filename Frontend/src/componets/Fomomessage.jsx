import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Lots from '../assets/img/lots.png';

function Fomomessage() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Brain Voyage</title>
          <meta
            name="keywords"
            content="Digital world, cognitive development, mental stamina, educational game, learning, cognitive abilities, memory retention, attention span, interactive task, interactive game, boost memory, fun activities, focus duration, critical thinking, problem-solving skills, analytical span"
          />
        </Helmet>
        <div className="relative p-8 m-0 md:m-8 rounded-2xl shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-w-full md:min-w-96">
          {/* Content */}
          <div className="relative text-black">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-600">Our Solution</h2>
            <p className="font-bold text-sm md:text-lg leading-relaxed mb-4">
              Our educational game combines fun and learning to help children improve their focus and cognitive abilities through engaging activities.
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-green-900">Features</h3>
            <ul className="list-disc pl-5 mb-4">
              <li className="text-sm md:text-lg leading-relaxed font-bold">Improve memory retention with matching pairs</li>
              <li className="text-sm md:text-lg leading-relaxed font-bold">Pattern Recognition: Enhance analytical skills by identifying and completing patterns</li>
              <li className="text-sm md:text-lg leading-relaxed font-bold">Focus Exercise: Build attention span through interactive tasks</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-900">Benefits</h3>
            <ul className="list-disc pl-5">
              <li className="text-sm md:text-lg leading-relaxed font-bold">Enhanced Memory: Interactive games that boost memory retention</li>
              <li className="text-sm md:text-lg leading-relaxed font-bold">Improved Focus: Fun activities that gradually increase focus duration</li>
              <li className="text-sm md:text-lg leading-relaxed font-bold">Critical Thinking: Puzzles and challenges that develop problem-solving skills</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <img 
              src={Lots} 
              alt="Lots" 
              className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48" 
            />
          </div>
        </div>
      </>
    </HelmetProvider>
  );
}

export default Fomomessage;

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../assets/img/Brain.png';
import Boy from '../assets/img/boy.png';
import Girl from '../assets/img/girl.png';
import Form from './Form';

const Header = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Brain Voyage - Engaging Activities for Kids</title>
          <meta name="description" content="Engaging activities designed to improve focus, memory, and cognitive skills in kids" />
          <meta name="keywords" content="Brain Voyage, kids learning, cognitive skills, educational activities, improve focus, memory, learning fun" />
          <meta name="author" content="Brain Voyage" />
        </Helmet>

        {/* Header Section */}
        <div className=" top-0 z-50 bg-white shadow-md h-20 md:h-24 lg:h-28 flex items-center justify-center"> {/* Increased height */}
          <div className="flex items-center space-x-1 md:space-x-2 relative">
            <img src={Logo} alt="QuizQuest Logo" className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 absolute left-2" /> {/* Increased size and position */}
            <div className="flex items-center space-x-1 md:space-x-2 pl-20 md:pl-28 lg:pl-36"> {/* Adjusted padding */}
              <img src={Boy} alt="Boy" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" /> {/* Increased size */}
              <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-red-800 to-yellow-900 md:text-md lg:text-lg text-center shadow-lg">
                Engaging activities designed to improve focus, memory, and cognitive skills in kids
              </h1>
              <img src={Girl} alt="Girl" className="hidden md:block md:w-12 md:h-12 lg:w-16 lg:h-16" /> {/* Increased size */}
            </div>
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Header;

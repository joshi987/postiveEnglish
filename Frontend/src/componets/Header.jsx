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
        <div className="relative flex flex-col items-center justify-center inset-0">
          <div className="flex items-center space-x-2 md:space-x-4">
            <img src={Logo} alt="QuizQuest Logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            <img src={Boy} alt="Boy" className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-red-800 to-yellow-900 md:text-2xl lg:text-2xl text-center shadow-lg">
              Engaging activities designed to improve focus, memory, and cognitive skills in kids
            </h1>
            <img src={Girl} alt="Girl" className="hidden md:block md:w-16 md:h-16 lg:w-24 lg:h-24" /> {/* Hide on small screens */}
            <div className="hidden md:flex md:items-center md:ml-4">
              {/* <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-md">
                <Form />
              </div> */}
            </div>
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Header;

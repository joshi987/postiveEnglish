
// export default Form;

// import { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import './Css/Form.css';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { motion } from 'framer-motion';

// export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const Form = () => {
//   const [parentName, setParentName] = useState('');
//   const [childAge, setChildAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState(''); // State for phone number
//   const [yourAge, setYourAge] = useState('');
//   const [city, setAddress] = useState('');
//   const [reference, setReference] = useState('');
//   const [otherReference, setOtherReference] = useState(''); // State for other reference text
//   const [formVisible, setFormVisible] = useState(false);
//   const [loading, setLoading] = useState(false); // Loading state

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true when form submission starts
//     const userData = {
//       parentName,
//       childAge,
//       email,
//       phone, // Add phone to userData
//       yourAge,
//       city,
//       reference: reference === 'Other' ? otherReference : reference, // Use otherReference if 'Other' is selected
//     };
  
//     try {
//       const response = await axios.post(`${BACKEND_URL}/api/users/register`, userData, {
//         timeout: 10000, // Set a timeout for the request
//       });
  
//       console.log('Response status:', response.status);
//       console.log('Response data:', response.data);
  
//       if (response.status === 200 || response.status === 201) {
//         toast.success('User registered successfully');
//         // Reset form fields
//         setParentName('');
//         setChildAge('');
//         setEmail('');
//         setPhone(''); // Reset phone number
//         setYourAge('');
//         setAddress('');
//         setReference('');
//         setOtherReference(''); // Reset other reference text
//         setFormVisible(false);
//       } else {
//         throw new Error(`Failed to register user. Status code: ${response.status}`);
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       toast.error(`Failed to register user: ${error.message}`);
//     } finally {
//       setLoading(false); // Set loading to false after form submission
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target.classList.contains('modal-backdrop')) {
//       setFormVisible(false);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-4">
//     <div className="flex justify-center">
//         <button
//           onClick={() => setFormVisible(true)}
//           className="bg-gradient-to-r from-gray-200 to-gray-400 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg text-sm md:text-xl glow-button transition duration-300 ease-in-out transform hover:scale-105"
//         >
//           <span className="text-gray-800 font-extrabold tracking-wide">Join Today</span>
//         </button>
//       </div>

//       {formVisible && (
//         <div
//           className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-backdrop bg-gray-900 bg-opacity-90 backdrop-blur-sm z-20"
//           onClick={handleBackdropClick}
//         >
//           <motion.div
//             className="relative max-w-sm w-full bg-white p-4 rounded-lg shadow-2xl overflow-hidden max-h-screen"
//             initial={{ y: '-100vh' }}
//             animate={{ y: 0 }}
//             transition={{ type: 'spring', stiffness: 120 }}
//           >
//             <button
//               onClick={() => setFormVisible(false)}
//               className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800 focus:outline-none"
//             >
//               <FaTimes />
//             </button>
//             <form onSubmit={handleSubmit}>
//               <h2 className="text-2xl font-extrabold mb-4 text-center text-indigo-600">Connect With Us</h2>
              
//               <div className="mb-2">
//                 <label htmlFor="parentName" className="block text-sm font-medium text-indigo-700">Your Name</label>
//                 <input
//                   type="text"
//                   id="parentName"
//                   className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter your name"
//                   value={parentName}
//                   onChange={(e) => setParentName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="childAge" className="block text-sm font-medium text-indigo-700">Your Child's Age</label>
//                 <input
//                   type="text"
//                   id="childAge"
//                   className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter child's age"
//                   value={childAge}
//                   onChange={(e) => setChildAge(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-indigo-700">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="phone" className="block text-sm font-medium text-indigo-700">Phone Number</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter phone number (optional)"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="yourAge" className="block text-sm font-medium text-indigo-700">Your Age</label>
//                 <input
//                   type="text"
//                   id="yourAge"
//                   className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter your age"
//                   value={yourAge}
//                   onChange={(e) => setYourAge(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="address" className="block text-sm font-medium text-indigo-700">City</label>
//                 <input
//                   type="text"
//                   id="address"
//                   className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Enter your city"
//                   value={city}
//                   onChange={(e) => setAddress(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="mb-2">
//                 <label htmlFor="reference" className="block text-sm font-medium text-indigo-700">How did you hear about us?</label>
//                 <select
//                   id="reference"
//                   className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   value={reference}
//                   onChange={(e) => setReference(e.target.value)}
//                 >
//                   <option value="">Choose an option</option>
//                   <option value="YouTube">YouTube</option>
//                   <option value="LinkedIn">LinkedIn</option>
//                   <option value="Facebook">Facebook</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               {reference === 'Other' && (
//                 <div className="mb-2">
//                   <label htmlFor="otherReference" className="block text-sm font-medium text-indigo-700">Please specify</label>
//                   <input
//                     type="text"
//                     id="otherReference"
//                     className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter reference"
//                     value={otherReference}
//                     onChange={(e) => setOtherReference(e.target.value)}
//                   />
//                 </div>
//               )}

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 shadow-md"
//                   disabled={loading} // Disable button when loading
//                 >
//                   {loading ? 'Please wait...' : 'Submit'}
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       )}
//       <ToastContainer autoClose={3000}  />
//     </div>
//   );
// };

// export default Form;


import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Css/Form.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Form = () => {
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // State for phone number
  const [yourAge, setYourAge] = useState('');
  const [city, setAddress] = useState('');
  const [reference, setReference] = useState('');
  const [otherReference, setOtherReference] = useState(''); // State for other reference text
  const [formVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form submission starts
    const userData = {
      parentName,
      childAge,
      email,
      phone, // Add phone to userData
      yourAge,
      city,
      reference: reference === 'Other' ? otherReference : reference, // Use otherReference if 'Other' is selected
    };

    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/register`, userData);

      console.log('Response status:', response.status);
      console.log('Response data:', response.data);

      if (response.status === 200 || response.status === 201) {
        toast.success('User registered successfully', { autoClose: 3000 }); // Set autoClose to 3 seconds
        // Reset form fields
        setParentName('');
        setChildAge('');
        setEmail('');
        setPhone(''); // Reset phone number
        setYourAge('');
        setAddress('');
        setReference('');
        setOtherReference(''); // Reset other reference text
        setFormVisible(false);
      } else {
        throw new Error(`Failed to register user. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error(`Failed to register user: ${error.message}`, { autoClose: 3000 }); // Set autoClose to 3 seconds
    } finally {
      setLoading(false); // Set loading to false after form submission
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      setFormVisible(false);
    }
  };

  return (
    <>
    <div className="container mx-auto mt-4">
      <div className="flex justify-center">
        <button
          onClick={() => setFormVisible(true)}
          className="bg-gradient-to-r from-gray-200 to-gray-400 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg text-sm md:text-xl glow-button transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-gray-800 font-extrabold tracking-wide">Join Today</span>
        </button>
      </div>

      {formVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-backdrop bg-gray-900 bg-opacity-90 backdrop-blur-sm z-20"
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative max-w-sm w-full bg-white p-4 rounded-lg shadow-2xl overflow-y-auto max-h-screen" // Added overflow-y-auto for scrollbar
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <FaTimes />
            </button>
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-extrabold mb-4 text-center text-indigo-600">Connect With Us</h2>
              
              <div className="mb-2">
                <label htmlFor="parentName" className="block text-sm font-medium text-indigo-700">Your Name</label>
                <input
                  type="text"
                  id="parentName"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="childAge" className="block text-sm font-medium text-indigo-700">Your Child's Age</label>
                <input
                  type="text"
                  id="childAge"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter child's age"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-medium text-indigo-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="phone" className="block text-sm font-medium text-indigo-700">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter phone number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="yourAge" className="block text-sm font-medium text-indigo-700">Your Age</label>
                <input
                  type="text"
                  id="yourAge"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your age"
                  value={yourAge}
                  onChange={(e) => setYourAge(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="address" className="block text-sm font-medium text-indigo-700">City</label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="reference" className="block text-sm font-medium text-indigo-700">How did you hear about us?</label>
                <select
                  id="reference"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                >
                  <option value="">Choose an option</option>
                  <option value="YouTube">YouTube</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {reference === 'Other' && (
                <div className="mb-2">
                  <label htmlFor="otherReference" className="block text-sm font-medium text-indigo-700">Please specify</label>
                  <input
                    type="text"
                    id="otherReference"
                    className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter reference"
                    value={otherReference}
                    onChange={(e) => setOtherReference(e.target.value)}
                  />
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 shadow-md"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? 'Please wait...' : 'Submit'}
                </button>
              </div>
    <ToastContainer autoClose={3000}/> 
            </form>
          </motion.div>
        </div>
      )}
    </div>
    </>
  );
};

export default Form;


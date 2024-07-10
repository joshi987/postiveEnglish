import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Css/Form.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Form = () => {
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [email, setEmail] = useState('');
  const [yourAge, setYourAge] = useState('');
  const [city, setAddress] = useState('');
  const [reference, setReference] = useState('');
  const [otherReference, setOtherReference] = useState(''); // State for other reference text
  const [formVisible, setFormVisible] = useState(false);

  const handleToggleForm = () => {
    setFormVisible(!formVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      parentName,
      childAge,
      email,
      yourAge,
      city,
      reference: reference === 'Other' ? otherReference : reference, // Use otherReference if 'Other' is selected
    };

    try {
      await axios.post(`${BACKEND_URL}/api/users/register`, userData);
      toast.success('User registered successfully');
      // Reset form fields
      setParentName('');
      setChildAge('');
      setEmail('');
      setYourAge('');
      setAddress('');
      setReference('');
      setOtherReference(''); // Reset other reference text
      setFormVisible(false);
    } catch (error) {
      console.error('Error registering user', error);
      toast.error('Failed to register user');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      setFormVisible(false);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-center">
        <button
          onClick={handleToggleForm}
          className="bg-gradient-to-r from-blue-900 to-green-900 hover:from-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg text-lg glow-button"
        >
          Sign Up
        </button>
      </div>

      {formVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-backdrop bg-gray-900 bg-opacity-90 backdrop-blur-sm z-20"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-sm w-full bg-white p-4 rounded-lg shadow-2xl overflow-hidden max-h-screen">
            <button
              onClick={handleToggleForm}
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <FaTimes />
            </button>
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-extrabold mb-4 text-center text-indigo-600">Registration Form</h2>
              
              <div className="mb-2">
                <label htmlFor="parentName" className="block text-sm font-medium text-indigo-700">Parent Name</label>
                <input
                  type="text"
                  id="parentName"
                  className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter parent's name"
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
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Form;

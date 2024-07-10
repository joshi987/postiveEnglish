import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import placeholderImage from '../assets/img/boy.png'; // Make sure to replace with the actual path to the placeholder image

const BlogGrid = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Function to handle click on a testimonial item
  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="p-6 relative z-10"> {/* Lower z-index value */}
      <h2 className="text-3xl font-bold text-center mb-6">Testimonial</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer p-4 h-80" // Added fixed height here and shadow-lg
          onClick={() =>
            handleTestimonialClick({
              name: "John Doe",
              role: "Parent",
              content:
                "BrainVoyage has been an amazing tool for my child's development. The engaging activities have greatly improved their focus and cognitive skills."
            })
          }
        >
          <img src={placeholderImage} alt="John Doe" className="w-full h-32 object-contain"/> {/* Changed to object-contain */}
          <div className="p-2 text-center"> {/* Centered and adjusted text */}
            <h3 className="text-2xl font-bold text-gray-800">John Doe</h3> {/* Made the name larger */}
            <p className="text-sm text-gray-600">Parent</p>
            <p className="text-sm text-gray-600 mt-2">
              "BrainVoyage has been an amazing tool for my child's development..."
            </p>
          </div>
        </div>
        <div
          className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer p-4 h-80" // Added fixed height here and shadow-lg
          onClick={() =>
            handleTestimonialClick({
              name: "Jane Smith",
              role: "Teacher",
              content:
                "As a teacher, I highly recommend BrainVoyage. The educational quizzes are fun and effective, and my students love them!"
            })
          }
        >
          <img src={placeholderImage} alt="Jane Smith" className="w-full h-32 object-contain"/> {/* Changed to object-contain */}
          <div className="p-2 text-center"> {/* Centered and adjusted text */}
            <h3 className="text-2xl font-bold text-gray-800">Jane Smith</h3> {/* Made the name larger */}
            <p className="text-sm text-gray-600">Teacher</p>
            <p className="text-sm text-gray-600 mt-2">
              "As a teacher, I highly recommend BrainVoyage. The educational quizzes..."
            </p>
          </div>
        </div>
        <div
          className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer p-4 h-80" // Added fixed height here and shadow-lg
          onClick={() =>
            handleTestimonialClick({
              name: "Alex Johnson",
              role: "Parent",
              content:
                "My kids can't get enough of BrainVoyage. It's great to see them learning and having fun at the same time!"
            })
          }
        >
          <img src={placeholderImage} alt="Alex Johnson" className="w-full h-32 object-contain"/> {/* Changed to object-contain */}
          <div className="p-2 text-center"> {/* Centered and adjusted text */}
            <h3 className="text-2xl font-bold text-gray-800">Alex Johnson</h3> {/* Made the name larger */}
            <p className="text-sm text-gray-600">Parent</p>
            <p className="text-sm text-gray-600 mt-2">
              "My kids can't get enough of BrainVoyage. It's great to see them..."
            </p>
          </div>
        </div>
      </div>

      {/* Modal for displaying full testimonial content */}
      {selectedTestimonial && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 mt-4 mr-4 text-red-500 hover:text-red-700 focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedTestimonial.name}</h2>
            <h3 className="text-lg text-gray-600 mb-2">{selectedTestimonial.role}</h3>
            <p className="text-gray-800 text-lg">{selectedTestimonial.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Using React Router's Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the solid user icon
import { MdOutlineDashboard } from "react-icons/md"; // Dashboard icon
import { MdInventory2 } from "react-icons/md"; // Book Inventory icon
import { FaBookReader } from "react-icons/fa"; // Readers icon
import { BsFillPersonLinesFill } from "react-icons/bs"; // Request icon
import { IoMdWarning } from "react-icons/io"; // Due Books icon
import { BiLogOut } from "react-icons/bi"; // Log Out icon

function LibSidebar() {
  const [image, setImage] = useState(""); // Initialize state for user image
  const [name, setName] = useState("User"); // Initialize the state for name

  // Load image and name from localStorage on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    const storedUserDetails = localStorage.getItem("userDetails");

    // Set the image from local storage if it exists
    if (storedImage) {
      setImage(storedImage);
    }

    // Set the name from local storage if it exists
    if (storedUserDetails) {
      const { name } = JSON.parse(storedUserDetails);
      setName(name);
    }
  }, []);

  return (
    <div className="min-w-64 bg-teal-500 text-white h-full flex flex-col justify-between p-4">
      {/* User Section */}
      <div>
        <div className="p-4 flex items-center h-10">
          <Link to="/Admin/LibUser" className="flex items-center">
            {image ? (
              <img
                src={image}
                alt="User"
                className="w-10 h-10 rounded-full mr-2" // Set dimensions for user image
              />
            ) : (
              <FontAwesomeIcon
                icon={faUser} // Use the Font Awesome user icon
                className="w-12 h-12 text-white mr-2" // Keep Font Awesome icon white
              />
            )}
          </Link>
          <h1 className="text-black text-sm sm:text-base mb-2 pt-3">
            Welcome, <span className="font-bold">{name}</span>
          </h1>
        </div>
        {/* Navigation Links */}
        <ul className="mt-0 text-gray-300">
          <li className="group rounded py-2 hover:bg-teal-200">
            <Link to="/admin" className="flex items-center px-3 w-full">
              <MdOutlineDashboard className="inline-block mr-2 text-black" /> {/* Dashboard Icon */}
              <span className="transition-colors duration-200 group-hover:text-black text-white">Dashboard</span>
            </Link>
          </li>
          <hr className="border-black" />
          <li className="group rounded py-2 hover:bg-teal-200">
            <Link to="/admin/Request" className="flex items-center px-3">
              <BsFillPersonLinesFill className="inline-block mr-2 text-black" /> {/* Request Icon */}
              <span className="transition-colors duration-200 group-hover:text-black text-white">Request</span>
            </Link>
          </li>
          <hr className="border-black" />
          <li className="group rounded py-2 hover:bg-teal-200">
            <Link to="/admin/BookInventory" className="flex items-center px-3">
              <MdInventory2 className="inline-block mr-2 text-black" /> {/* Book Inventory Icon */}
              <span className="transition-colors duration-200 group-hover:text-black text-white">Book Inventory</span>
            </Link>
          </li>
          <hr className="border-black" />
          <li className="group rounded py-2 hover:bg-teal-200">
            <Link to="/admin/Readers" className="flex items-center px-3">
              <FaBookReader className="inline-block mr-2 text-black" /> {/* Readers Icon */}
              <span className="transition-colors duration-200 group-hover:text-black text-white">Readers</span>
            </Link>
          </li>
          <hr className="border-black" />
          <li className="group rounded py-2 hover:bg-teal-200">
            <Link to="/admin/Due" className="flex items-center px-3">
              <IoMdWarning className="inline-block mr-2 text-black" /> {/* Due Books Icon */}
              <span className="transition-colors duration-200 group-hover:text-black text-white">Due Books</span>
            </Link>
          </li>
          <hr className="border-black" />
          <li className="group rounded py-2 hover:bg-teal-200">
            <Link to="/logout" className="flex items-center px-3">
              <BiLogOut className="inline-block mr-2 text-black" /> {/* Left-facing Log Out Icon */}
              <span className="transition-colors duration-200 group-hover:text-black text-white">Log Out</span>
            </Link>
          </li>
          <hr className="border-black" />
        </ul>
      </div>
      {/* Footer / Image Section */}
      <div className="p-0">
        <img
          src="/rebook-images/bok1.png"
          alt="bgbook"
          className="w-40 h-30 sm:w-48 sm:h-36 mt-auto"
        />
      </div>
    </div>
  );
}

export default LibSidebar;
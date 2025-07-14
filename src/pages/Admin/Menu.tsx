import React from 'react';
import image from "../../assets/Menu-image.jpg";
import { useNavigate } from "react-router-dom";

function Menu() {
   const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Centered Buttons */}
      <div className="relative z-10 flex h-full items-center justify-center gap-6">
        <button onClick={() => navigate("/Admin/addevent")} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-gray-900 dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-white group-hover:dark:bg-gray-900">
Light Up the Schedule
  </span>
</button>

<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-gray-900 dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-white group-hover:dark:bg-gray-900">
    Remove from Calendar
  </span>
</button>

      </div>
    </div>
  );
}

export default Menu;

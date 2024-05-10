import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed top-0 right-0 m-4 z-50">
      <button
        className="px-3 py-2 "
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <CiDark/> : <MdDarkMode/>}
      </button>
    </div>
  );
};

export default DarkModeToggle;

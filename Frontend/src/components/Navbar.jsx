import React from 'react';
import { FaMoon, FaPlusSquare, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';  // Import theme context

function Navbar() {
  const { theme, toggleTheme } = useTheme();  // Get theme and toggle function

  return (
    <footer className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-200'} t text-${theme === 'dark' ? 'white' : 'black'} w-full h-16 fixed top-0 flex justify-between items-center px-6`}>
      <Link to="/" className='text-4xl'>GALLERY</Link>
      <div className='flex gap-4'>
        <Link to="/create" className='bg-gray-600 hover:bg-gray-400 px-4 py-2 rounded'>
          <FaPlusSquare />
        </Link>
        <button onClick={toggleTheme} className='bg-gray-600 hover:bg-gray-400 px-4 py-2 rounded'>
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </footer>
  );
}

export default Navbar;


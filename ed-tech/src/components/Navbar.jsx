import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between md:justify-center lg:justify-between items-center max-w-7xl">
        {/* Logo */}
        <h1 className="text-white text-xl font-semibold">Task Manager</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static left-0 top-14 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex md:space-x-6 transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          } md:block text-center md:text-left`}
        >
          <li className="border-b md:border-none p-3 md:p-0">
            <Link to="/" className="text-white hover:text-gray-300 transition">
              Courses
            </Link>
          </li>
          <li className="border-b md:border-none p-3 md:p-0">
            <Link to="/dashboard" className="text-white hover:text-gray-300 transition">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

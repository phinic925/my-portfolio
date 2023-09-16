import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="bg-slate-400 relative">
        <div className="nav flex justify-around">
          <div className="logo ml-7 p-3">
            <p className="text-4xl font-bold font-signature">Phinic</p>
          </div>
          <div className={`max-[1300px]:hidden`}>
            <ul className="flex list-none no-underline gap-5">
              <li className="ml-7 p-3">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/about" className="text-white">
                  About Me
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/projects" className="text-white">
                  Projects
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/experience" className="text-white">
                  Experience
                </Link>
              </li>
              <li className="ml-7 p-3">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div onClick={close} className="pr-4 z-10 cursor-pointer md:hidden">
            {open ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {open && (
          <ul className="flex flex-col justify-center items-center absolute top-0 right-0  bg-gradient-to-b from-black to-gray-800 text-gray-500">
            <li className="ml-7 p-3">
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/about" className="text-white">
                About Me
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/projects" className="text-white">
                Projects
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/experience" className="text-white">
                Experience
              </Link>
            </li>
            <li className="ml-7 p-3">
              <Link to="/contact" className="bg-slate-400 rounded-sm text-white">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

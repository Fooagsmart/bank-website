import React, { useState, useEffect, useRef } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the navbar
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="w-full top-0 left-0 p-5  flex py-6 fixed backdrop-blur-3xl  justify-between items-center z-[300] ">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <a href={`#${nav.id}`} onClick={handleLinkClick}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div onClick={handleToggle} className="w-[28px] h-[28px] object-contain">
          <img src={toggle ? close : menu} alt={toggle ? 'close' : 'menu'} />
        </div>

        {toggle && (
          <div className="active p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="list-none  flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                  } text-white`}
                >
                  <a href={`#${nav.id}`} onClick={handleLinkClick}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

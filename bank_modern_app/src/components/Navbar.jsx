import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <nav className="w-full top-0 left-0 p-14  flex py-6 fixed backdrop-blur-3xl  justify-between items-center z-[300] ">
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

      <div onClick={handleToggle} className="sm:hidden flex flex-1 justify-end items-center">
        <img src={menu} alt="menu" className="w-[28px] h-[28px] object-contain" />

        {toggle && (
          <div className="active p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <div onClick={handleToggle} className="w-[28px] h-[28px] object-contain">
              <img src={close} alt="" />
            </div>

            <ul className="list-none flex flex-col justify-end items-center flex-1">
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

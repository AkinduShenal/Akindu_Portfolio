// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 left-0 w-full flex items-center py-4 z-50
        bg-primary shadow-lg
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* logo + title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-secondary text-[18px] font-bold cursor-pointer flex">
            Akindu&nbsp;
            <span className="sm:block hidden">| Clean Code. Scalable Solutions</span>
          </p>
        </Link>

        {/* desktop links */}
        <ul className="hidden sm:flex list-none flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                text-[18px] font-medium cursor-pointer
                ${active === nav.title ? "text-white" : "text-secondary"}
                hover:text-accent transition-colors
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile hamburger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div
              className="
                absolute top-16 right-0 mx-4 p-6
                bg-gradient-to-br from-primary to-accent
                rounded-xl shadow-lg
                z-50
              "
            >
              <ul className="flex flex-col gap-4 list-none">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`
                      font-poppins font-medium text-[16px] cursor-pointer
                      ${active === nav.title ? "text-white" : "text-secondary"}
                      hover:text-white
                      transition-colors
                    `}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

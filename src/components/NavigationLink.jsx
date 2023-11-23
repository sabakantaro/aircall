import React from 'react';
import { NavLink } from "react-router-dom";

const NavigationLink = ({ children, linkUrl }) => {
  return (
    <NavLink
      to={linkUrl}
      className={({ isActive }) =>
        `border-b-4 mx-16 ${isActive ? "border-[#2AC420]" : "border-white"} flex items-center justify-center text-center`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;
import React from 'react';
import { NavLink } from "react-router-dom";

const NavigationLink = ({ children, linkUrl }) => {
  return (
    <NavLink
      to={linkUrl}
      className={({ isActive }) =>
        `border-b-4 ${isActive ? "border-[#2AC420]" : "border-white"} flex items-center justify-center`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;
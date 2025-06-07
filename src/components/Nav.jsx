import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </>
  );
};

export default Nav;

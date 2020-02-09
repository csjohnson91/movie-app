import * as React from "react";
import logo from "../images/tmdb-logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return <Link to='/'><img src={logo} alt='Logo'/></Link>
};

export default Header;
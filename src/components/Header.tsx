import * as React from 'react';
import logo from '../images/tmdb-logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return <Link to='/'><img src={logo} alt='Logo' className='header-logo'/></Link>
};

export default Header;
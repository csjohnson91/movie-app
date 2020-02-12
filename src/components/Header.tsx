import * as React from 'react';
import logo from '../images/tmdb-logo.png'
import '../styles/Header.css'

const Header = () => {
  return <img src={logo} alt='Logo' className='header-logo'/>
};

export default Header;
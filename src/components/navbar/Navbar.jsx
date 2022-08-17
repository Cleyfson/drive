import React from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <header>
      <img src={Logo} alt='company logo' />
      <nav>
        <li>
          <a href='/'>Learn More</a>
        </li>
        <li>
          <a href='/'>Log in</a>
        </li>
        <li>
          <a href='/'>Sign up</a>
        </li>
        <li>
          <AiOutlineSearch />
        </li>
        <li>
          <AiOutlineUser />
        </li>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import Logo from '../../images/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className='nav-bar'>
      <img className='nav-bar__logo' src={Logo} alt='company logo' />
      <nav className={nav ? 'nav-bar__list' : 'nav-bar__list active'}>
        <li className='nav-bar__item'>
          <a className='nav-bar__link' href='/'>
            Learn More
          </a>
        </li>
        <li className='nav-bar__item'>
          <a className='nav-bar__link' href='/'>
            Log in
          </a>
        </li>
        <li className='nav-bar__item'>
          <a className='nav-bar__link' href='/'>
            Sign up
          </a>
        </li>
        <li className='nav-bar__item'>
          <AiOutlineSearch size={25} style={{ marginTop: '6px' }} />
        </li>
        <li className='nav-bar__item'>
          <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
        </li>
      </nav>

      <div onClick={() => setNav(!nav)} className='menu'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;

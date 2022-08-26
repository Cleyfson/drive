import React from 'react';
import Logo from '../../images/logo_dark.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <img className='footer__img' src={Logo} alt='' />
        <button className='footer__btn'>Compartilhe um carro</button>
      </div>
    </div>
  );
};

export default Footer;

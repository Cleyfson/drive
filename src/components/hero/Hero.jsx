import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='hero'>
      <form className='hero__form' action=''>
        <div className='hero__text'>
          <label>Local</label>
          <input type='text' placeholder='local de pesquisa' />
        </div>
        <div className='hero__initial-date'>
          <label>Inicio</label>
          <input type='date' />
        </div>
        <div className='hero__final-date'>
          <label>Final</label>
          <input type='date' />
        </div>
        <div className='hero__search'>
          <AiOutlineSearch className='hero__icon' />
          <button className='hero__btn'>busque carros</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='hero'>
      <form className='hero__form' action=''>
        <div className='hero__text'>
          <label>Where</label>
          <input type='text' placeholder='search location' />
        </div>
        <div className='hero__initial-date'>
          <label>From</label>
          <input type='date' />
        </div>
        <div className='hero__final-date'>
          <label>Until</label>
          <input type='date' />
        </div>
        <div className='hero__search'>
          <AiOutlineSearch className='hero__icon' />
          <button className='hero__btn'>search for cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;

import React from 'react';

const Card = ({ img, make }) => {
  return (
    <div className='card'>
      <img className='card__img' src={img} alt='/' />
      <p>{make}</p>
    </div>
  );
};

export default Card;

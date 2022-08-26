import React from 'react';
import Drive from '../../images/drive.png';

const Driver = () => {
  return (
    <div className='driver'>
      <div className='driver__left'>
        <img className='driver__img' src={Drive} alt='/' />
      </div>
      <div className='driver__right'>
        <h2 className='driver__title'>
          Find the perfect car <span>to try before you buy</span>
        </h2>
        <p className='driver__description'>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <button className='driver__btn'>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;

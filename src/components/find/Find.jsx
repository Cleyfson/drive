import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const Find = () => {
  return (
    <div className='find'>
      <div className='find__heading'>
        <h1 className='find__title'>find your drive</h1>
        <div className='find__text'>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>

      <div className='find__slider'></div>
    </div>
  );
};

export default Find;

import React from 'react';

const luxury = () => {
  return (
    <div className='luxury'>
      <div className='luxury__heading'>
        <h1 className='luxury__title'>Seleção de luxo</h1>
        <div className='luxury__text'>
          <p>
            <span>
              Selecione entre os principais veículos de luxo para rodar em
              grande estilo
            </span>
          </p>
        </div>
      </div>

      <div className='luxury__container'>
        <div className='luxury__card'>
          <img
            src='https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <div className='luxury__content'>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className='luxury__card'>
          <img
            src='https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <div className='luxury__content'>
            <h3>Maserati</h3>
          </div>
        </div>
        <div className='luxury__card'>
          <img
            src='https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmdlJTIwcm92ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt=''
          />
          <div className='luxury__content'>
            <h3>Range Rover</h3>
          </div>
        </div>
        <div className='luxury__card'>
          <img
            src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt=''
          />
          <div className='luxury__content'>
            <h3>Porsche</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default luxury;

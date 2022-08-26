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
          Encontre o carro perfeito <span>experimente antes de comprar</span>
        </h2>
        <p className='driver__description'>
          Certifique-se de que seu futuro veiculo funcione bem com seu estilo de
          vida, tomando seu tempo no banco do motorista.
        </p>
        <button className='driver__btn'>Procurar carros</button>
      </div>
    </div>
  );
};

export default Driver;

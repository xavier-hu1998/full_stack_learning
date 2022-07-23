import React from 'react';
// import './styles/Cards.css';


function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
          <div className='cards__item__info'>
            <h5 className='cards__item__title'>{props.title}</h5>
            <p className='cards__item__text'>{props.text}</p>
          </div>
          
      </li>
    </>
  );
}

export default CardItem;

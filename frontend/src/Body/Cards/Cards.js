import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Movies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img_bad_boys.jpg'
              text='Bad boys'
              label='Action'
              path='/services'
            />
            <CardItem
              src='images/img_baywatch.jpg'
              text='Baywatch'
              label='Comedy'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img_bulle.jpg'
              text='Der letzte Bulle'
              label='Action'
              path='/services'
            />
            <CardItem
              src='images/img_life.jpg'
              text='Life'
              label='Sci-Fi'
              path='/products'
            />
            <CardItem
              src='images/img_maennertag.jpg'
              text='Männertag'
              label='Comedy'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
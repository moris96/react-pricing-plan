import React from 'react';
import './PricingCard.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const PricingCard = ({title, price, storage, users}) => {




  return (
    <div className='PricingCard'>
        <header>
            <p className='card-title'>{title}</p>
            <h1 className='card-price'>{price}</h1>
        </header>
        {/* features */}
        <div className='card-features'>
            <div className='card-storage'>{storage}</div>
            <div className='card-users-allowed'>{users} users in total</div>
        </div>
        {/* text popup when pressing button */}
        {/* <button className='card-btn'>READ MORE</button> */}
        <Popup trigger={<button className='card-btn'>READ MORE</button>}>
          <div>This app was made in React.js</div>
        </Popup>
    </div>
  );
};

export default PricingCard

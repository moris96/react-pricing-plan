import React from 'react';
import './PricingCard.css';

// cloud sharing storage 

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
        <button className='card-btn'>READ MORE</button>
    </div>
  );
};

export default PricingCard

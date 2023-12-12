import React, { useState } from 'react';
import './PricingPlan.css';
import PricingCard from '../PricingCard/PricingCard';

const PricingPlan = () => {

    const [selectMonthly, setSelectMonthly] = useState(true)
    // console.log(selectMonthly)


  return (
    <div className='PricingApp'>
        <div className='app-container'>
            {/* header */}
            <header>
                <h1 className='header-topic'>Our Pricing Plans For Floof Cloud Sharing</h1>
                <div className='header-row'>
                    <p>Annually</p>
                    <label className='price-switch'>
                        <input className='price-checkbox' onChange={()=>{
                            setSelectMonthly((prev)=> !prev)
                        }} 
                        type='checkbox' 
                        />
                        <div className='switch-slider'></div>
                    </label>
                    <p>Monthly</p>
                </div>
            </header>
            <div className='pricing-cards' >
                <PricingCard title={'Basic'} price={selectMonthly ? '$2.99' : '$35.88'} storage={'100 GB Storage'} users={'Up To 5'} />
                <PricingCard title={'Premium (Most Popular!)'} price={selectMonthly ? '$9.99' : '$119.88'} storage={'500 GB Storage'} users={'Up to 10'} />
                <PricingCard title={'Professional'} price={selectMonthly ? '$19.99' : '$239.88'} storage={'1 TB Storage'} users={'Up to 20'} />
            </div>
        </div>
    </div>
  );
};

export default PricingPlan

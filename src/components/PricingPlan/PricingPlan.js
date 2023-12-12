import React from 'react';
import './PricingPlan.css'

const PricingPlan = () => {
  return (
    <div className='PricingApp'>
        <div className='app-container'>
            {/* header */}
            <header>
                <h1 className='header-topic'>Our Pricing Plan</h1>
                <div className='header-row'>
                    <p>Annually</p>
                    <label className='price-switch'>
                        <input className='price-checkbox' type='checkbox' />
                        <div className='switch-slider'></div>
                    </label>
                    <p>Monthly</p>
                </div>
            </header>
            <div className='pricing-cards' />
        </div>
    </div>
  )
}

export default PricingPlan

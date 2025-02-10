import React from 'react';
import '../Styles/HersoSection.css';

function HeroSection({title, subtitle}) {
  return (
    <div className='hero-section'>
        <div className='hero-content'>
            <h1 className='hero-title'> {title}</h1>
            <h3 className='hero-subtitle'>{subtitle}</h3>
        </div>
    </div>
  );
}

export default HeroSection;

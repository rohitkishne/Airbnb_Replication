import React from 'react'
import heroBg from '../assets/Hero-Bg.png'

function Hero() {
  return (
    <div className='hero-section'>
        <img src={heroBg} alt="hero-bg" className="hero-bg" />
        <h1 className='hero-title'>Online Experiences</h1>
        <p className="hero-desc">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>
  )
}

export default Hero
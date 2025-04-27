import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Edusity is a non-profit organization that strives to provide quality education to students in need. We believe that education is the key to unlocking the potential of every child and every individual. Edusity is committed to providing a high-quality education that is accessible to all.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
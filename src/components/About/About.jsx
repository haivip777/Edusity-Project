import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Education serves as the cornerstone for personal growth and societal development. A strong educational system not only imparts academic knowledge but also nurtures creativity, critical thinking, and emotional intelligence. </p>
        <p>With the rise of digital technology, traditional methods of teaching are rapidly evolving to meet new learning demands. Blended learning models are becoming increasingly popular. </p>
        <p>Teachers play a crucial role beyond simply delivering lessons; they inspire, guide, and motivate students to reach for their dreams. A dedicated teacher recognizes the unique strengths of each learner. </p>
      </div>
    </div>
  )
}

export default About
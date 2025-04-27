import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'

const App = () => {
  
  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Students Say'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
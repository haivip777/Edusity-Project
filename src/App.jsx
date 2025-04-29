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
import MotionWrapper from './components/MotionWrapper/MotionWrapper.jsx'

const App = () => {
  
  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
      <MotionWrapper direction="down" duration={1} delay={0}>
      <Navbar/>
      </MotionWrapper>
      <Hero/>
      <div className="container">
        <Title subtitle='Dịch vụ của chúng tôi' title='Bạn Thích Kiểu Nào?'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Trưng bày' title='Những bức ảnh đẹp nhất'/>
        <Campus/>
        <Title subtitle='Phản hồi' title='Khách hàng nói gì về chúng tôi?'/>
        <Testimonials/>
        <Title subtitle='Liên hệ chúng tôi' title='Không để bạn thất vọng - Kết nối ngay'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
// import React from 'react'
// import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'
// import MotionWrapper from '../MotionWrapper/MotionWrapper'
// import { Link } from 'react-scroll';

// const Hero = () => {
//   return (
//     <div className='hero container'>
//       <MotionWrapper direction="left" duration={1} delay={0.1}>
//         <div className="hero-text">
//           <h1>We Ensure better education for a better world</h1>
//           <p>Edusity is a non-profit organization that strives to provide quality education to students in need. We believe that education is the key to unlocking the potential of every child and every individual. Edusity is committed to providing a high-quality education that is accessible to all.</p>
//           <Link to='programs' smooth='true' offset={-260} duration={500}>
//             {/* <Motion.button
//               whileHover={{
//                 x: [0, -5, 5, -5, 5, 0], // Di chuyển theo trục X
//                 transition: { duration: 0.5 } // Tổng thời gian lắc
//               }}
//             > */}
//               <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
//               {/* </Motion.button> */}
//           </Link>
//         </div>
//       </MotionWrapper>
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import MotionWrapper from '../MotionWrapper/MotionWrapper'
import { Link } from 'react-scroll'
import { motion as Motion } from 'framer-motion' // 👈 nhớ import motion nhé!

const Hero = () => {
  return (
    <div className='hero container'>
      <MotionWrapper direction="left" duration={1} delay={0.1}>
        <div className="hero-text">
          <h1>"Thanh xuân có hạn – May mắn có Lucky!"</h1>
          <p>Chúng tôi tự hào đồng hành cùng hàng nghìn bạn trẻ lưu giữ khoảnh khắc thanh xuân đẹp nhất. Với đội ngũ nhiếp ảnh gia chuyên nghiệp, sáng tạo và tâm huyết, Lucky Media cam kết mang đến trải nghiệm chụp ảnh kỷ yếu trọn vẹn, cảm xúc và ý nghĩa nhất.</p>
          <Link to="programs" smooth={true} offset={-260} duration={1000}>
            <Motion.button
              className="btn"
              initial={{ x: 0, rotate: 0 }}
              whileHover={{
                x: [0, -10, 10, -10, 10, 0],
                rotate: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.5 }
              }}
            >
              Trải nghiệm ngay <img src={dark_arrow} alt="" />
            </Motion.button>
          </Link>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default Hero

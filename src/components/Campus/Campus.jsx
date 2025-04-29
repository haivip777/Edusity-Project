import React from 'react'
import { useRef } from 'react';
import './Campus.css'
import gallery_1 from '../../assets/photography/gallery-1.png'
import gallery_2 from '../../assets/photography/gallery-2.png'
import gallery_3 from '../../assets/photography/gallery-3.png'
import gallery_4 from '../../assets/photography/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

const galleryData = [ gallery_1, gallery_2, gallery_3, gallery_4 ];
const Campus = () => {
  const slider = useRef();
  const tx = useRef(0); // dùng useRef thay vì let
  const numberOfSlides = galleryData.length;
  const slideWidth = 100/numberOfSlides; // mỗi ảnh chiếm 100% chiều rộng
  const maxTx = -((galleryData.length - 1) * slideWidth);

  const slideForward = () => {
    if (tx.current > maxTx) {
      tx.current -= slideWidth;
    } else {
      tx.current = 0;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += slideWidth;
    } else {
      tx.current = maxTx;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className='campus'>
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider-campus">
        <ul ref={slider} style={{ width: `${galleryData.length * 100}%` }}>
          {galleryData.map((item, index) => (
            <li key={index}>
              <div className="gallery">
                <img src={item} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className='btn dark-btn'>Xem thêm <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus


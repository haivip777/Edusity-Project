import React from 'react';
import './SocialFixedIcons.css'; // CSS riêng để gọn
import fb_img from '../../assets/photography/fb.png';
import zalo_img from '../../assets/photography/zalo.png';
import ins_img from '../../assets/photography/ins.png';

const SocialFixedIcons = () => {
  return (
    <div className="social-fixed-icons">
      <a href="https://www.facebook.com/fucnhw" target="_blank" rel="noopener noreferrer">
        <img src={fb_img} alt="" />
      </a>
      <a href="https://www.instagram.com/_fuc.nhw_/" target="_blank" rel="noopener noreferrer">
        <img src={ins_img} alt="" />

      </a>
      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
      <img src={zalo_img} alt="" />

      </a>
    </div>
  );
};

export default SocialFixedIcons;

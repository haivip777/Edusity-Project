import React from 'react'
import { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7960a65-3493-4ac7-80eb-4ab89e023ed5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message submitted successfully!!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Nếu bạn cần tư vấn hoặc muốn đặt lịch chụp ảnh kỷ yếu, đừng ngần ngại nhắn tin cho chúng tôi! Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ và mang đến cho bạn trải nghiệm tuyệt vời nhất.</p>
        <ul>
          <li><img src={mail_icon} alt="" />tiemanhluckymedia@gmail.com</li>
          <li><img src={phone_icon} alt="" />033 346 0336</li>
          <li><img src={location_icon} alt="" />Hanoi, Vietnam</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Nhập tên của bạn' required />
          <label>Phone number / Email</label>
          <input type="text" name='phone/email' placeholder='Nhập số điện thoại hoặc email của bạn' required />
          <label>Write your messages here</label>
          <textarea name="message" rows='6' placeholder='Nhập thông điệp của bạn' required></textarea>
          <button type='submit' className='btn dark-btn'>Gửi ngay <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        
      </div>
    </div>
  )
}

export default Contact
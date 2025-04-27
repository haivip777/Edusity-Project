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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellendus quisquam delectus molestiae ipsa exercitationem necessitatibus odio ducimus dolorum soluta iure aliquam non sit, distinctio libero voluptatibus unde esse voluptatem.</p>
        <ul>
          <li><img src={mail_icon} alt="" />luuconghai0104@gmail.com</li>
          <li><img src={phone_icon} alt="" />0369017983</li>
          <li><img src={location_icon} alt="" />Nam Dinh, Vietnam</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone number / Email</label>
          <input type="text" name='phone/email' placeholder='Enter your mobile number / email' required />
          <label>Write your messages here</label>
          <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        
      </div>
    </div>
  )
}

export default Contact
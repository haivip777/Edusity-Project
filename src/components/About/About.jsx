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
        <h3>About LUCKY Media</h3>
        <h2>Lưu giữ khoảnh khắc đáng nhớ ngay lúc này</h2>
        <p>Lucky Media cung cấp dịch vụ chụp ảnh kỷ yếu trọn gói, đa dạng phong cách, linh hoạt địa điểm, phù hợp với mọi nhu cầu lưu giữ thanh xuân của học sinh, sinh viên.</p>
        <p>Các dịch vụ hiện có:</p>
        <p>Chụp ảnh kỷ yếu truyền thống: Trang phục áo dài, đồng phục, với phong cách trang trọng, tinh tế.</p>
        <p>Chụp ảnh kỷ yếu sáng tạo: Concept độc đáo, phá cách, bắt kịp xu hướng trẻ trung, năng động.</p>
        <p>Chụp ảnh kỷ yếu ngoại cảnh: Công viên, trường học, studio, bãi cỏ, hoặc bất kỳ địa điểm nào khách hàng lựa chọn.</p>
        <p>➔ Mỗi bộ ảnh tại Lucky Media đều được chúng tôi chăm chút kỹ lưỡng từ khâu lên ý tưởng, tư vấn concept, chụp hình đến hậu kỳ chỉnh sửa, đảm bảo mang đến cho khách hàng những sản phẩm chất lượng cao, cảm xúc nhất và lưu giữ trọn vẹn những khoảnh khắc đáng nhớ.</p>
      </div>
    </div>
  )
}

export default About
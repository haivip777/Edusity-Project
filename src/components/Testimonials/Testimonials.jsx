import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/photography/user-1.png';
import user_2 from '../../assets/photography/user-2.png';
import user_3 from '../../assets/photography/user-3.png';
import user_4 from '../../assets/photography/user-4.png';
import user_5 from '../../assets/photography/user-5.png';
import user_6 from '../../assets/photography/user-6.png';

// Mock Data
const testimonialsData = [
  {
    img: user_1,
    name: "Nguyen Ngoc Anh",
    company: "Thanh Xuan, Hanoi",
    feedback: "Ekip siu có tâm và support nhiệt tình lắm nèeee <3. Raasrt rcm studio này nhaaaa^^ "
  },
  {
    img: user_2,
    name: "Nguyễn Kiều Chinh",
    company: "Cau Giay, Hanoi",
    feedback: "Chụp siêu đẹp, siêu lung linh, màu xinh, chụp buổi tối mà ảnh vẫn đẹp. rcm stu"
  },
  {
    img: user_3,
    name: "Dương Nguyễn",
    company: "Giao Thuy, Nam Dinh",
    feedback: "top 1 studio bạn nên tin tưởng. 11/10 không phải bàn!!"
  },
  {
    img: user_4,
    name: "Thảo Phương",
    company: "Hoai Duc, Hanoi",
    feedback: "Mê li lắm, top 1 trong lòng tôiiiiii."
  },
  {
    img: user_5,
    name: "Luu Thi Kieu Trang",
    company: "Thanh Xuan, Hanoi",
    feedback: "Stu siêu nhiệt tình luôn ạ"
  },
  {
    img: user_6,
    name: "Nguyễn Duy Phong",
    company: "Ba Dinh, Hanoi",
    feedback: "Chụp ảnh siêu chất lượng luôn <3"
  },
  {
    img: user_5,
    name: "Thành Long Nguyễn",
    company: "Hai Hau, Nam Dinh",
    feedback: "Tuyệt vời, 10đ không có nhưng"
  },
  {
    img: user_5,
    name: "Đỗ Thị Thanh Huyền",
    company: "Dong Da, Hanoi",
    feedback: "Làm việc siêu chuyên nghiệp luôn:v"
  }
];

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const numberOfSlides = testimonialsData.length;
  const slideWidth = 100 / numberOfSlides; // Tự động tính phần trăm

  const slideForward = () => {
    if (tx > -((testimonialsData.length - 1) * slideWidth - slideWidth)) {
      tx -= slideWidth;
      slider.current.style.transform = `translateX(${tx}%)`;
    } else {
      tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += slideWidth;
      slider.current.style.transform = `translateX(${tx}%)`;
    } else {
      tx = -((testimonialsData.length - 1) * slideWidth - slideWidth);
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          {testimonialsData.map((item, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.company}</span>
                  </div>
                </div>
                <p>{item.feedback}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

// Mock Data
const testimonialsData = [
  {
    img: user_1,
    name: "William Jackson 1",
    company: "Edusity, USA",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus, ut provident reprehenderit ab, deleniti hic quibusdam mollitia odio tempore aliquam magni unde iusto. Asperiores repellat nesciunt rerum iste ullam, molestias nam vero provident cupiditate quam quaerat et aliquid a?"
  },
  {
    img: user_2,
    name: "Emily Johnson 2",
    company: "TechCorp, UK",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab, deleniti hic quibusdam mollitia odio tempore aliquam magni unde iusto."
  },
  {
    img: user_3,
    name: "Michael Lee 3",
    company: "Innovate, Canada",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio tempore aliquam magni unde iusto. Asperiores repellat nesciunt rerum iste ullam."
  },
  {
    img: user_4,
    name: "Sophia Smith 4",
    company: "BrightMind, Australia",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus, ut provident reprehenderit ab, deleniti hic quibusdam mollitia odio tempore aliquam magni unde iusto."
  },
  {
    img: user_4,
    name: "Sophia Smith 5",
    company: "BrightMind, Australia",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus, ut provident reprehenderit ab, deleniti hic quibusdam mollitia odio tempore aliquam magni unde iusto."
  },
  {
    img: user_4,
    name: "Sophia Smith 6",
    company: "BrightMind, Australia",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus, ut provident reprehenderit ab, deleniti hic quibusdam mollitia odio tempore aliquam magni unde iusto."
  },
  {
    img: user_4,
    name: "Sophia Smith 7",
    company: "BrightMind, Australia",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus, ut provident reprehenderit ab, deleniti hic quibusdam mollitia odio tempore aliquam magni unde iusto."
  },
  {
    img: user_4,
    name: "Sophia Smith 7",
    company: "BrightMind, Australia",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus, ut provident reprehenderit ab, deleniti hic quibusdam mollitia odio tempore aliquam magni unde iusto."
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

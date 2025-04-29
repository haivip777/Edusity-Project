import React from 'react';
import './Programs.css';
import program_1 from '../../assets/photography/program-1.png';
import program_2 from '../../assets/photography/program-2.png';
import program_3 from '../../assets/photography/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import { motion as Motion} from 'framer-motion';

const programData = [
  {
    image: program_1,
    icon: program_icon_1,
    title: "Kỷ yếu truyền thống",
    altText: "Program 1 image",
    iconAltText: "Program 1 icon"
  },
  {
    image: program_2,
    icon: program_icon_2,
    title: "Kỷ yếu sáng tạo",
    altText: "Program 2 image",
    iconAltText: "Program 2 icon"
  },
  {
    image: program_3,
    icon: program_icon_3,
    title: "Kỷ yếu ngoại cảnh",
    altText: "Program 3 image",
    iconAltText: "Program 3 icon"
  },
  // {
  //   image: program_3,
  //   icon: program_icon_3,
  //   title: "Graduation Degree",
  //   altText: "Program 3 image",
  //   iconAltText: "Program 3 icon"
  // },
  // {
  //   image: program_3,
  //   icon: program_icon_3,
  //   title: "Graduation Degree",
  //   altText: "Program 3 image",
  //   iconAltText: "Program 3 icon"
  // },
  // {
  //   image: program_3,
  //   icon: program_icon_3,
  //   title: "Graduation Degree",
  //   altText: "Program 3 image",
  //   iconAltText: "Program 3 icon"
  // }
];

const Programs = () => {
  return (
    <div className='programs'>
      {programData.map((program, index) => (
        <Motion.div
        key={index}
        className="program"
        whileHover={{
          scale: 1.05,  // Phóng to nhẹ khi hover
          transition: { duration: 0.3 }  // Thời gian chuyển động
        }}
        >
          <img src={program.image} alt={program.altText} />
          <div className="caption">
            <img src={program.icon} alt={program.iconAltText} />
            <p>{program.title}</p>
          </div>
        </Motion.div>
      ))}
    </div>
  );
};

export default Programs;

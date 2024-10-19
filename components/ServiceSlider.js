import { RxArrowTopRight, RxDesktop, RxPencil2, RxReader, RxRocket } from 'react-icons/rx';
import { FiDatabase} from 'react-icons/fi';
// data
export const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'Data Visualization',
    description: 'Interactive dashboards transforming complex data into insights.',
  },
  {
    icon: <RxDesktop />,
    title: 'Data Analysis & Reporting',
    description: 'Analyzing datasets to uncover trends and guide strategies.',
  },
  {
    icon: <RxReader />,
    title: 'Predictive Analytics & Machine Learning',
    description: 'Developing models for forecasting and automated decision-making.',
  },
  {
    icon: <FiDatabase />,
    title: 'Data Cleaning & Preparation',
    description: 'Ensuring data accuracy through meticulous cleaning and preparation.',
  },
  {
    icon: <RxRocket />,
    title: 'Customized Solutions',
    description: 'Tailored data analysis solutions for unique business needs.',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[250px] sm:h-[350px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] max-h-96 rounded-lg px-6 py-8 flex sm:flex-col gap-x-6
            sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'
            style={{height: '-webkit-fill-available'}}>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350pc] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl' style={{position: 'absolute', bottom: '18px'}}>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ServiceSlider;

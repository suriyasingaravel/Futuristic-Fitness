
// import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import { Image } from '@chakra-ui/react';

// export default function MySwiper() {
//   return (
//     <>
//       <ReactSwiper
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//         className="mySwiper"
//       >
//         <SwiperSlide> <Image src='https://img.freepik.com/free-photo/people-working-out-indoors-together-with-dumbbells_23-2149175410.jpg?size=626&ext=jpg&ga=GA1.1.1495818249.1701534895&semt=sph' alt='img'/></SwiperSlide>
//         <SwiperSlide> <Image src='https://img.freepik.com/premium-photo/strong-indian-man-woman-holding-dumbbells-plank-position-gym_484651-4019.jpg?size=626&ext=jpg&ga=GA1.1.1495818249.1701534895&semt=sph' alt='img'/></SwiperSlide>
//         <SwiperSlide> <Image src='https://img.freepik.com/premium-photo/athletic-man-doing-bent-row-muscles_754108-1006.jpg?size=626&ext=jpg&ga=GA1.1.1495818249.1701534895&semt=sph' alt='img'/></SwiperSlide>
//       </ReactSwiper>
//     </>
//   );
// }


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 import { Image } from '@chakra-ui/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide> <Image src='https://img.freepik.com/free-photo/people-working-out-indoors-together-with-dumbbells_23-2149175410.jpg?size=626&ext=jpg&ga=GA1.1.1495818249.1701534895&semt=sph' alt='img'/></SwiperSlide>
        <SwiperSlide> <Image src='https://img.freepik.com/premium-photo/strong-indian-man-woman-holding-dumbbells-plank-position-gym_484651-4019.jpg?size=626&ext=jpg&ga=GA1.1.1495818249.1701534895&semt=sph' alt='img'/></SwiperSlide>
        <SwiperSlide> <Image src='https://img.freepik.com/premium-photo/athletic-man-doing-bent-row-muscles_754108-1006.jpg?size=626&ext=jpg&ga=GA1.1.1495818249.1701534895&semt=sph' alt='img'/></SwiperSlide>
      </Swiper>
    </>
  );
}

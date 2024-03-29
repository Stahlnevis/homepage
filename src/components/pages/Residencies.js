import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Residencies = () => {
  return (
    <div>
      <div className="R-hero">
        <div className="R-herotitle">
          <h1>Best Choices</h1>
          <h2>Popular Residencies</h2>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {[
          'r1.png',
          'r2.png',
          'r3.png',
          'r4.png',
          'r5.png',
          'r6.png',
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Residency ${index + 1}`} />
            <p>$66,353 Aliva Priva Jardin Jakarta Garden City street,Cakung.</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Residencies;
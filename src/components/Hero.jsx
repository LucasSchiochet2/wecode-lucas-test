import React from 'react';
import { useState, useEffect } from 'react';
import { getHeroSlides } from '../utils/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/HeroCarousel.scss';

const Hero = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHeroSlides();
        setSlides(data);
      } catch (error) {
        console.error("Erro ao buscar slides do hero:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="hero-slide" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-slide__overlay">
                <div className="hero-slide__content">
                </div>
              </div>
            </div>
            <div className="hero-bottom-bar">
              <button className="hero-slide__button">{slide.buttonText}</button>
              <div className="swiper-pagination" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules'; // Importe FreeMode e Scrollbar
import categories from '../assets/categorySection';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar'; // Estilo para a barra de rolagem, se desejar

import '../styles/CategorySection.scss';

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2 className="category-section__title">Categorias</h2>
      <Swiper
        modules={[FreeMode, Scrollbar]}
        slidesPerView={'auto'} // Permite que o número de slides seja automático
        spaceBetween={15}      // Espaçamento entre os slides
        freeMode={true}        // Permite "arrastar" livremente
        className="category-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="category-slide">
            <a href={"#"} className="category-item">
              <div 
                className="category-item__image" 
                style={{ backgroundImage: `url(${category.image})` }}
                role="img" 
                aria-label={category.name}
              ></div>
              <p className="category-item__name">{category.name}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySection;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import '../styles/CategorySection.scss';
import { useState, useEffect } from 'react';
import { getCategories } from '../utils/utils';

const CategorySection = () => {
   const [categories, setcategories] = useState([])
    const [, setLoading] = useState(true)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getCategories()
          setcategories(data)
        } catch (error) {
          console.error("Erro ao buscar categorias:", error)
        } finally {
          setLoading(false)
        }
      }
  
      fetchData()
    }, [])
  return (
    <section className="category-section">
      <h2 className="category-section__title">Categorias</h2>
      <Swiper
        modules={[FreeMode, Scrollbar]}
        slidesPerView={'auto'}
        spaceBetween={15}s
        freeMode={true}
        className="category-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="category-slide">
            <a href={"/"} className="category-item">
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
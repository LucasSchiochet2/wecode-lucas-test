import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules'; // Importe FreeMode e Scrollbar
import categories from '../assets/releaseSection';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar'; // Estilo para a barra de rolagem, se desejar
import { AddCartIcon, FavoriteIcon, FavoriteFilledIcon } from '../utils/icons';
import { getDiscountedPrice } from '../utils/utils';
import '../styles/ReleaseSection.scss';


const ReleaseSection = () => {
  const [favorites, setFavorites] = useState([]);
  const [cartMessage, setCartMessage] = useState(null);

  const handleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleAddCart = (name) => {
    setCartMessage(`Adicionado ao carrinho!`);
    setTimeout(() => setCartMessage(null), 5000);
  };

  return (
    <section className="release-section">
      <h2 className="release-section__title">Lançamentos</h2>
      {cartMessage && (
        <div className="cart-message">{cartMessage}</div>
      )}
      <Swiper
        modules={[FreeMode, Scrollbar]}
        slidesPerView={1.4}
        spaceBetween={5}
        freeMode={true}
        className="release-swiper"
      >
        {categories.map((release) => (
          <SwiperSlide key={release.id} className="release-slide">
            <div className="product-card">
              <div className="product-card__image-wrapper">

                {release.descount_percent > 0 && (
                  <span className="product-card__discount-badge">
                    {release.descount_percent}% OFF
                  </span>
                )}
                <button
                  className="product-card__favorite"
                  onClick={() => handleFavorite(release.id)}
                >
                  {favorites.includes(release.id) ? (
                    <FavoriteFilledIcon color="#000" />
                  ) : (
                    <FavoriteIcon />
                  )}
                </button>
                <button
                  className="product-card__cart"
                  onClick={() => handleAddCart(release.name)}
                >
                  <AddCartIcon />
                </button>

                <img
                  src={release.image}
                  alt={release.name}
                  className="product-card__image"
                />
              </div>

              <div className="product-card__info">
                <p className="product-card__name">{release.name}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

                  {release.descount_percent > 0 ? (
                    <>
                      <span style={{ textDecoration: 'line-through', color: '#acacac', marginRight: 8 }}>
                        R$ {parseFloat(release.price).toFixed(2)}
                      </span>
                      <span className="product-card__price" style={{ color: '#111', fontWeight: 400 }}>
                        R$ {getDiscountedPrice(release.price, release.descount_percent).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="product-card__price">R$ {parseFloat(release.price).toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReleaseSection;
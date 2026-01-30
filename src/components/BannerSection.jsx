import React from 'react';
import '../styles/BannerSection.scss';

const BannerSection = () => {
  return (
    <div>
       <section className="banner-section">
              <div 
                className="banner-slide" 
                style={{ backgroundImage: `url(/banners_image/banner-menor.png)` }}
              >
                <div className="banner-slide__overlay">
                  <div className="banner-slide__content">
                  </div>
                </div>
              </div>
      </section>
      <section className="banner-1-section">
              <div 
                className="banner-1-slide" 
                style={{ backgroundImage: `url(/banners_image/banner1.png)` }}
              >
                <div className="banner-1-slide__overlay">
                  <div className="banner-1-slide__content">
                  </div>
                </div>
              </div>
      </section>
    </div>
  );
};

export default BannerSection;
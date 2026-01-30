
import React from 'react';
import './styles/App.scss';
import { Header, Hero, CategorySection, BannerSection, ReleaseSection, BlogSection, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CategorySection />
      <BannerSection />
      <ReleaseSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;

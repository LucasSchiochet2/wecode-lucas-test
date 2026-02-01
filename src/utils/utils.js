import posts from '../assets/posts.js';
import heroSlides from '../assets/heroSlides.js';
import menu from '../assets/menu.js';
import release from '../assets/releaseSection.js';
import categories from '../assets/categorySection.js';

// ----------------- Funções para buscar os dados -----------------
export function getProducts() {
     return new Promise((res) => {
          res(release);
     });
}
export function getPosts(){
     return new Promise((res) => {
          res(posts);
     });
}
export function getHeroSlides(){
     return new Promise((res) => {
          res(heroSlides);
     }
     );
}
export function getMenu(){
     return new Promise((res) => {
          res(menu);
     }
     );
} 
export function getCategories(){
     return new Promise((res) => {
          res(categories);
     }
     );
}


// ----------------- Função para calcular preço com desconto -----------------
export function getDiscountedPrice(price, percent) {
     const priceNum = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;
     if (!percent || percent <= 0) return priceNum;
     return Math.round(priceNum * (1 - percent / 100)); // Arredonda ponto flutuante
}


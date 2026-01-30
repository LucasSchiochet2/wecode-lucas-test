
export   function getProducts() {
     return new Promise((res) => {
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: '/static/images/produtos/produto-1.png',
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: '/static/images/produtos/produto-2.png',
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 2,
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: '/static/images/produtos/produto-3.png',
                    price: { amount: 159.90, isDiscount: null },
                    id: 3,
               },
          ]);
     });
}

// Calcula o preço com desconto
export function getDiscountedPrice(price, percent) {
     const priceNum = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;
     if (!percent || percent <= 0) return priceNum;
     return Math.round(priceNum * (1 - percent / 100)); // Arredonda ponto flutuante
}


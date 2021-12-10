import React, { useState } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import CardList from './CardList';
import './style.css';

const listProducts = [
  {
    id: 1,
    name: 'Tomate',
    description: 'Tomate redondo color rojo',
    price: 245.5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg',
    inFav: false,
    countInCart: 0,
  },
  {
    id: 2,
    name: 'Pera',
    description: 'Peras verdes para hacer postres zarpados.',
    price: 245.5,
    img: 'https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg',
    inFav: false,
    countInCart: 0,
  },
  {
    id: 3,
    name: 'Manzana',
    description: 'Manzana para cualquier edad.',
    price: 245.5,
    img: 'https://www.eluniversal.com.mx/sites/default/files/2016/09/07/manzana.jpg',
    inFav: false,
    countInCart: 0,
  },
  {
    id: 4,
    name: 'Tomate',
    description: 'Tomate redondo color rojo',
    price: 245.5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg',
    inFav: false,
    countInCart: 0,
  },
  {
    id: 5,
    name: 'Pera',
    description: 'Peras verdes para hacer postres zarpados.',
    price: 245.5,
    img: 'https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg',
    inFav: false,
    countInCart: 0,
  },
  {
    id: 6,
    name: 'Manzana',
    description: 'Manzana para cualquier edad.',
    price: 245.5,
    img: 'https://www.eluniversal.com.mx/sites/default/files/2016/09/07/manzana.jpg',
    inFav: false,
    countInCart: 0,
  },
];

const App = () => {
  const color = '245, 144, 66';
  const [products, setProducts] = useState(listProducts);
  const addToFav = (id: number) => {
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products.find((p) => p.id === id);
    setProducts([
      ...products.slice(0, productIndex),
      { ...product, inFav: !product.inFav },
      ...products.slice(productIndex + 1),
    ]);
  };

  return (
    <div>
      <Navbar items={products} color={color} />
      <CardList addToFav={addToFav} items={products} color={color} />
    </div>
  );
};

render(<App />, document.getElementById('root'));

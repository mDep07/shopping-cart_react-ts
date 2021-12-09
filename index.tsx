import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import CardList from './CardList';
import './style.css';

const products = [
  {
    name: 'Tomate',
    description: 'Tomate redondo color rojo',
    price: 245.5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg',
  },
  {
    name: 'Pera',
    description: 'Peras verdes para hacer postres zarpados.',
    price: 245.5,
    img: 'https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg',
  },
  {
    name: 'Manzana',
    description: 'Manzana para cualquier edad.',
    price: 245.5,
    img: 'https://www.eluniversal.com.mx/sites/default/files/2016/09/07/manzana.jpg',
  },
  {
    name: 'Tomate',
    description: 'Tomate redondo color rojo',
    price: 245.5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg',
  },
  {
    name: 'Pera',
    description: 'Peras verdes para hacer postres zarpados.',
    price: 245.5,
    img: 'https://farmaciaribera.es/blog/wp-content/uploads/2020/01/Beneficios-de-comer-peras-1024x680.jpg',
  },
  {
    name: 'Manzana',
    description: 'Manzana para cualquier edad.',
    price: 245.5,
    img: 'https://www.eluniversal.com.mx/sites/default/files/2016/09/07/manzana.jpg',
  },
];

const App = () => {
  return (
    <div>
      <Navbar color="12, 84, 77" />
      <CardList color="12, 84, 77" items={products} />
    </div>
  );
};

render(<App />, document.getElementById('root'));

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
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
    name: 'Zapallo',
    description: 'Tomate redondo color rojo',
    price: 130,
    img: 'https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000000060/60.jpg',
    inFav: false,
    countInCart: 0,
  },
  {
    id: 5,
    name: 'Papa',
    description: 'Peras verdes para hacer postres zarpados.',
    price: 245.5,
    img: 'https://lh3.googleusercontent.com/proxy/P0Mua4S4m2pe-eLn9JpUugXAxyCEpUIhZqmyNOKkfr4eXK3vwxUcawh1TBqCL3l_vlq6_bTXSMMmAJp-TDemLKhuwcluEkfLaMZLfQvkflmnkUEeX4uzmiVzILNsTTKYZQ',
    inFav: false,
    countInCart: 0,
  },
  {
    id: 6,
    name: 'Lechuga',
    description: 'Lechuga mantecosa',
    price: 245.5,
    img: 'https://www.jardineriaon.com/wp-content/uploads/2019/10/Lechuga-batavia.jpg',
    inFav: false,
    countInCart: 0,
  },
];

const App = () => {
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

  const addToCart = (id: number, count: number = 1) => {
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products.find((p) => p.id === id);
    setProducts([
      ...products.slice(0, productIndex),
      { ...product, countInCart: product.countInCart + count },
      ...products.slice(productIndex + 1),
    ]);
  };

  const [productsFiltered, setProductsFiltered] = useState<number[]>([]);
  const handleProductsFiltered = (text: string) => {
    const filtered = products
      .filter((p) => p.name.toLowerCase().includes(text.toLowerCase()))
      .map((p) => p.id);

    if (filtered) setProductsFiltered([...filtered]);
  };

  const theme = {
    main: '235, 79, 52',
    secondary: '',
    borderRadius: '8px',
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar
          addToFav={addToFav}
          addToCart={addToCart}
          items={products}
          filtered={handleProductsFiltered}
        />
        <CardList
          addToFav={addToFav}
          addToCart={addToCart}
          items={products}
          filteredItems={productsFiltered}
        />
      </div>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('root'));

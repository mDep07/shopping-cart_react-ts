import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { FiStar } from 'react-icons/fi';

const CardList = styled.section`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding: 0 1rem;

  @media(max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ({ items, addToFav, addToCart }) => (
  <CardList>
    {items.map((item, i) => (
      <Card fav={() => addToFav(item.id)} cart={addToCart} key={i} {...item} />
    ))}
  </CardList>
);

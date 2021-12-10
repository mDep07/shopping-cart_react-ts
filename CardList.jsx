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
`;

export default ({ color, items, addToFav }) => (
  <CardList>
    {items.map((item, i) => (
      <Card fav={() => addToFav(item.id)} key={i} color={color} {...item} />
    ))}
  </CardList>
);

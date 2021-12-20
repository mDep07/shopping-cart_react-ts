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

type Params = {
  items: {
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    inFav: boolean;
    countInCart: number;
  }[];
  addToFav: (id: number) => void;
  addToCart: (id: number, count?: number) => void;
  filteredItems: number[];
};
export default ({ items, addToFav, addToCart, filteredItems }: Params) => {
  console.log({ filteredItems });
  if (filteredItems.length === 0) {
    return (
      <CardList>
        {items.map((item, i) => (
          <Card
            fav={() => addToFav(item.id)}
            cart={addToCart}
            key={i}
            {...item}
          />
        ))}
      </CardList>
    );
  }

  return (
    <CardList>
      {items
        .filter((p) => filteredItems.indexOf(p.id) !== -1)
        .map((item, i) => (
          <Card
            fav={() => addToFav(item.id)}
            cart={addToCart}
            key={i}
            {...item}
          />
        ))}
    </CardList>
  );
};

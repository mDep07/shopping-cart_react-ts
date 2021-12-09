import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlusCircle, FiStar } from 'react-icons/fi';

const Card = styled.div`
  --color: ${({ color }) => (color ? color : '3, 140, 253')};
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px #bdbdbd, 0 2px 4px #cccccc;
  &:hover {
    box-shadow: 0 2px 4px #bdbdbd, 0 4px 8px #cccccc, 0 4px 10px #d1d1d1;
    & .add-to-fav {
      transform: scale(1);
      &:active {
        transform: scale(.95);
      }
    }
  }
`;
const Image = styled.img`
    width: 100%;
    flex: 4
`;
const Details = styled.div`
  padding: 5px;
  flex: 1;
  & * {
    margin: 4px;
  }
`;
const Title = styled.h1`
  color: rgb(var(--color));
  font-size: 1rem;
`;
const Price = styled.p`
  font-size: 2rem;
  font-weight: 400
`;
const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: .8rem;
  color: #808080;
`;

const AddToCart = styled.button`
  margin: 5px;
  border-radius: 8px;
  border: none;
  padding: 5px;
  font-size: .8rem;
  font-weight: 800;
  background-color: rgb(var(--color));
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(var(--color), .3);
    color: rgb(var(--color));
  }
  &:active {
    transform: scale(.97)
  }
  & svg {
    font-size: 1rem;
    vertical-align: bottom;
    margin-right: 5px
  }
`;

const AddToFavs = styled.a`
  position: absolute;
  display: flex;
  top: .5rem;
  right: .5rem;
  font-size: 1.25rem;
  background-color: rgba(var(--color), .6);
  color: white;
  padding: 4px;
  border-radius: 100px;
  cursor: pointer;
  transform: scale(0);
  &.active {
    background-color: rgb(var(--color));
    transform: scale(1);
  }
`;

export default ({ color, name, price, description, img }) => {
  const [state, setState] = useState({ inFav: false, inCart: false });
  const addToFav = () => setState({ ...state, inFav: !state.inFav });

  return (
    <Card color={color}>
      <AddToFavs
        title={state.inFav ? 'In favs' : 'Add to favs'}
        onClick={addToFav}
        className={`add-to-fav ${state.inFav ? 'active' : ''}`}
      >
        <FiStar />
      </AddToFavs>
      <Image src={img} />
      <Details>
        <Title>{name}</Title>
        <Price>${price.toFixed(2)}</Price>
        <Description>{description}</Description>
      </Details>
      <AddToCart>
        <FiPlusCircle />
        Agregar
      </AddToCart>
    </Card>
  );
};

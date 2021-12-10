import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlusCircle, FiMinusCircle, FiStar } from 'react-icons/fi';

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
  font-weight: 400;
  white-space: wrap;
  & small {
    font-size: .5em;
    font-weight: 700;
    color: rgba(var(--color), .8);
  }
`;
const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: .8rem;
  color: #808080;
`;

const Actions = styled.div`
  padding: 5px;
`;

const AddToCart = styled.button`
  ${({ width100 }) => (width100 ? 'display: block;width: 100%;' : '')}
  min-width: 3rem;
  border-radius: 8px;
  border: none;
  padding: 5px;
  font-size: .8rem;
  font-weight: 800;
  background-color: rgb(var(--color));
  color: white;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(var(--color), .3);
    color: rgb(var(--color));
  }
  &:active {
    transform: scale(.97)
  }
  & svg {
    font-size: 1rem;
    ${({ icon }) => (icon ? '' : 'margin-right:5px;')}
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

const ViewCount = styled.span`
  background-color: rgba(var(--color), .2);
  flex: 6;
  font-size: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(var(--color));
  font-weight: 900;
`;

export default ({ color, name, price, description, img, inFav, fav }) => {
  const [state, setState] = useState({
    countInCart: 0,
  });

  const addToCart = ({ action = 'ADD' }: { action: 'ADD' | 'REMOVE' }) => {
    if (action === 'ADD')
      setState({ ...state, countInCart: state.countInCart + 1 });
    if (action === 'REMOVE')
      setState({ ...state, countInCart: state.countInCart - 1 });
  };

  const AddMoreToCart = ({ count, changeCount }) => {
    return (
      <div style={{ display: 'flex', gap: '5px' }}>
        <AddToCart icon onClick={() => changeCount({ action: 'REMOVE' })}>
          <FiMinusCircle />
        </AddToCart>
        <ViewCount>{count}</ViewCount>
        <AddToCart icon onClick={() => changeCount({ action: 'ADD' })}>
          <FiPlusCircle />
        </AddToCart>
      </div>
    );
  };

  return (
    <Card color={color}>
      <AddToFavs
        title={inFav ? 'In favs' : 'Add to favs'}
        onClick={fav}
        className={`add-to-fav ${inFav ? 'active' : ''}`}
      >
        <FiStar />
      </AddToFavs>
      <Image src={img} />
      <Details>
        <Title>{name}</Title>
        <Price>
          ${price.toFixed(2)}
          {state.countInCart > 1 && (
            <small>(${(state.countInCart * price).toFixed(2)})</small>
          )}
        </Price>
        <Description>{description}</Description>
      </Details>
      <Actions>
        {state.countInCart === 0 ? (
          <AddToCart width100 onClick={addToCart}>
            <FiPlusCircle />
            Agregar
          </AddToCart>
        ) : (
          <AddMoreToCart count={state.countInCart} changeCount={addToCart} />
        )}
      </Actions>
    </Card>
  );
};

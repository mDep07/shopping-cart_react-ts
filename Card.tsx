import React from 'react';
import styled from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';

const Card = styled.div`
  --color: ${(props) =>
    props.primaryColor ? props.primaryColor : '3, 140, 253'};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px #bdbdbd, 0 2px 4px #cccccc;
  &:hover {
    box-shadow: 0 2px 4px #bdbdbd, 0 4px 8px #cccccc, 0 4px 10px #d1d1d1;
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

export default ({ color, name, price, description, img }) => (
  <Card primaryColor={color.primary}>
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

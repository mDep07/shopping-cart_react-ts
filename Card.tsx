import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart, FiStar, FiUser } from 'react-icons/fi';

const Card = styled.div`
  --color: ${(props) =>
    props.primaryColor ? props.primaryColor : '3, 140, 253'};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px #bdbdbd, 0 2px 4px #cccccc;
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

export default ({ color, name, price, description, img }) => (
  <Card primaryColor={color.primary}>
    <Image src={img} />
    <Details>
      <Title>{name}</Title>
      <Price>${price.toFixed(2)}</Price>
      <Description>{description}</Description>
    </Details>
  </Card>
);

import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart, FiStar, FiUser } from 'react-icons/fi';

const Navbar = styled.nav`
  --color: ${({ color }) => (color ? color : '3, 140, 253')};
  background-color: rgba(var(--color), .2);
  padding: 5px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  & li:not(:first) {
    margin-left: 1rem
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-left: ${(props) => (props.first ? 0 : '5px')};
`;

const ListItemButton = styled.a`
  position: relative;
  font-size: 1.5rem;
  background-color: transparent;
  color: rgb(var(--color));
  display: flex;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(var(--color), .3);
    color: white;
  }
  &:active {
    transform: scale(.95)
  }
`;

const Badge = styled.span`
  position: absolute;
  bottom: -7px;
  right: -7px;
  font-size: .7rem;
  background-color: rgb(var(--color));
  color: white;
  border-radius: 100px;
  width: 18px;
  height: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ color, items }) => {
  const countFavs = items.filter((p) => p.inFav).length;
  const countCarts = items
    .filter((p) => p.countInCart > 0)
    .reduce((acc, c) => acc + c.countInCart, 0);

  return (
    <Navbar color={color}>
      <List>
        <ListItem first>
          <ListItemButton>
            <FiShoppingCart />
            {countCarts > 0 && (
              <Badge>{countCarts > 9 ? '9+' : countCarts}</Badge>
            )}
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <FiStar />
            {countFavs > 0 && <Badge>{countFavs > 9 ? '9+' : countFavs}</Badge>}
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem first>
          <ListItemButton>
            <FiUser />
          </ListItemButton>
        </ListItem>
      </List>
    </Navbar>
  );
};

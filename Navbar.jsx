import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart, FiStar, FiUser } from 'react-icons/fi';

const Navbar = styled.nav`
  --color: ${(props) =>
    props.primaryColor ? props.primaryColor : '3, 140, 253'};
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

export default ({ color }) => (
  <Navbar primaryColor={color?.primary}>
    <List>
      <ListItem first>
        <ListItemButton>
          <FiShoppingCart />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <FiStar />
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

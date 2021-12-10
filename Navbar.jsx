import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FiShoppingCart,
  FiStar,
  FiUser,
  FiMinusCircle,
  FiPlusCircle,
  FiTrash,
} from 'react-icons/fi';

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
  color: rgb(var(--color));
  & li:not(:first) {
    margin-left: 1rem
  }
  ${({ dropdown }) => (dropdown ? 'font-size: .8rem' : '')}
`;

const ListItem = styled.li`
  position: relative;
  list-style-type: none;
  display: inline-block;
  margin-left: ${(props) => (props.first ? 0 : '5px')};
`;

const ListItemButton = styled.a`
  position: relative;
  font-size: 1.5rem;
  background-color: transparent;
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

const DropDownMenu = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%) ${({ open }) =>
    !open ? 'scale(0)' : 'scale(1)'};
  transform-origin: top left;
  width: auto;
  min-width: 200px;
  min-height: 0;
  background-color: white;
  padding: 4px;
  border-radius: 8px;
  border: 2px solid rgb(var(--color), .2);
  box-shadow: 0 2px 5px rgb(var(--color), .2);
  z-index: 1000;
  transition: transform .15s;
`;

const DropDownMenuItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: start;
  gap: 5px;
  padding: 5px 2px;
  border-radius: 4px;
  & > img {
    width: 65px;
    height: 65PX;
    object-fit: cover;
    border-radius: 8px;
  }

  & p {
    margin: 0;
    white-space: nowrap;
  }

  &:hover {
    background-color: rgba(var(--color), .2);
  }
`;

const DropDownMenuItemButton = styled.button`
  width: 30px;
  height: 20px;
  padding: 0;
  margin: 0 2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--color));
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(.97)
  }
`;

export default ({ color, items, addToFav, addToCart }) => {
  const productsInFav = items.filter((p) => p.inFav);
  const countFavs = productsInFav.length;

  const productsInCart = items.filter((p) => p.countInCart > 0);
  const countCarts = productsInCart.reduce((acc, c) => acc + c.countInCart, 0);

  const [dropdownMenu, setDropdownMenu] = useState('');
  const showDropdown = (show) => {
    if (dropdownMenu === show) setDropdownMenu('');
    else setDropdownMenu(show);
  };

  return (
    <Navbar color={color}>
      <List>
        <ListItem first>
          <ListItemButton onClick={() => showDropdown('cart')}>
            <FiShoppingCart />
            {countCarts > 0 && (
              <Badge>{countCarts > 9 ? '9+' : countCarts}</Badge>
            )}
          </ListItemButton>
          <DropDownMenu open={dropdownMenu === 'cart' && countCarts > 0}>
            <List dropdown>
              {productsInCart.map((p) => (
                <DropDownMenuItem key={p.id}>
                  <img style={{ flex: 2 }} src={p.img} />
                  <div style={{ flex: 5 }}>
                    <p>{p.name}</p>
                    <p>
                      Cant.: <strong>{p.countInCart}</strong>
                    </p>
                    <p>
                      Total.:{' '}
                      <strong>${(p.countInCart * p.price).toFixed(2)}</strong>
                    </p>
                    <div>
                      <DropDownMenuItemButton
                        onClick={() => addToCart(p.id, -1)}
                      >
                        <FiMinusCircle />
                      </DropDownMenuItemButton>
                      <DropDownMenuItemButton onClick={() => addToCart(p.id)}>
                        <FiPlusCircle />
                      </DropDownMenuItemButton>
                    </div>
                  </div>
                </DropDownMenuItem>
              ))}
            </List>
          </DropDownMenu>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => showDropdown('fav')}>
            <FiStar />
            {countFavs > 0 && <Badge>{countFavs > 9 ? '9+' : countFavs}</Badge>}
          </ListItemButton>
          <DropDownMenu open={dropdownMenu === 'fav' && countFavs > 0}>
            <List dropdown>
              {productsInFav.map((p) => (
                <DropDownMenuItem key={p.id}>
                  <img src={p.img} />
                  <div>
                    <p>{p.name}</p>
                    <DropDownMenuItemButton onClick={() => addToFav(p.id)}>
                      <FiTrash />
                    </DropDownMenuItemButton>
                  </div>
                </DropDownMenuItem>
              ))}
            </List>
          </DropDownMenu>
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

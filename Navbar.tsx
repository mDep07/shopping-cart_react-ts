import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FiShoppingCart,
  FiStar,
  FiUser,
  FiMinusCircle,
  FiPlusCircle,
  FiTrash,
  FiDollarSign,
  FiSearch,
} from 'react-icons/fi';

import { SmallButton } from './components/Buttons';

const Navbar = styled.nav`
  --color: ${({ theme }) => theme.main};
  background-color: rgba(var(--color), .2);
  padding: 5px;
  margin: 5px auto;
  max-width: 1200px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 1200px) {
    margin: 5px;
  }
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
  padding: 5px;
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

const DropDownMenuTotalSum = styled.div`
  background-color: rgba(var(--color), .2);
  color: rgb(var(--color));
  border-radius: 4px;
  padding: 4px;
  margin-top: 8px;
`;

const DropDownMenuFinishBuy = styled.button`
  display: block;
  margin-top: 8px;
  width: 100%;
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

export default ({ items, addToFav, addToCart }) => {
  const productsInFav = items.filter((p) => p.inFav);
  const countFavs = productsInFav.length;

  const productsInCart = items.filter((p) => p.countInCart > 0);
  const countCarts = productsInCart.reduce((acc, c) => acc + c.countInCart, 0);

  type TDropDownMenu = '' | 'cart' | 'fav';
  const [dropdownMenu, setDropdownMenu] = useState<TDropDownMenu>('');
  const showDropdown = (show: TDropDownMenu) => {
    if (show === 'cart' && countCarts === 0) show = '';
    if (show === 'fav' && countFavs === 0) show = '';

    if (dropdownMenu === show) setDropdownMenu('');
    else setDropdownMenu(show);
  };

  return (
    <Navbar>
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
                      <SmallButton icon onClick={() => addToCart(p.id, -1)}>
                        <FiMinusCircle />
                      </SmallButton>
                      <SmallButton
                        icon
                        onClick={() => addToCart(p.id)}
                        style={{ marginLeft: 2 }}
                      >
                        <FiPlusCircle />
                      </SmallButton>
                    </div>
                  </div>
                </DropDownMenuItem>
              ))}
            </List>
            <DropDownMenuTotalSum>
              <small>Total:</small>{' '}
              <strong>
                $
                {productsInCart
                  .reduce((acc, c) => acc + c.countInCart * c.price, 0)
                  .toFixed(2)}
              </strong>
            </DropDownMenuTotalSum>
            <DropDownMenuFinishBuy>Finalizar Pedido</DropDownMenuFinishBuy>
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
                    <SmallButton icon onClick={() => addToFav(p.id)}>
                      <FiTrash />
                    </SmallButton>
                  </div>
                </DropDownMenuItem>
              ))}
            </List>
          </DropDownMenu>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => showDropdown('fav')}>
            <FiSearch />
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

import React from 'react';
import '../styles/Menu.css';
import { Data } from '../helpers/Data';
import { MenuItem } from '@mui/material';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>

      <div className='menuList'>
        {Data.map((menuItem, index) => {
          return (
            <MenuItem key={index}>
              <div className='menuItem'>
                <img src={menuItem.image} alt={menuItem.name} className='menuItemImg' />
                <div className='menuItemInfo'>
                  <h3 className='menuItemName'>{menuItem.name}</h3>
                  <p className='menuItemDescription'>{menuItem.description}</p>
                  <p className='menuItemPrice'>{menuItem.price}</p>
                </div>
              </div>
            </MenuItem>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

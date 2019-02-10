import React from 'react';
import s from './Menu.module.css';

const Menu = ({ menuList }) => (
  <ul className={s.menuList}>
    {menuList.map(({ id, image, name, price }) => (
      <li className={s.menuItem} key={id}>
        <img src={image} alt="food" width="200" height="150" />
        <p>{name}</p>
        <p>Price: {price}</p>
      </li>
    ))}
  </ul>
);

export default Menu;

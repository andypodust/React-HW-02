import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => (
    <nav className={s.navigation}>
        <ul className={s.navList}>
            <li><a href=" ">Menu</a></li>
            <li><a href=" ">About</a></li>
            <li><a href=" ">Contact</a></li>
            <li><a href=" ">Delivery</a></li>
        </ul>
    </nav>
);

export default Navigation;
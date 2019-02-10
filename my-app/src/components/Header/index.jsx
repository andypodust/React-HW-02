import React from 'react';
import s from './Header.module.css';
import Logo from './Logo/index';
import Navigation from './Navigation/index';
import UserMenu from './UserMenu/index';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.jpg';

const Header = () => (
  <header className={s.header}>
    <Logo src={logo} />
    <Navigation />
    <UserMenu src={avatar} name="Benedikt Cucumberbacth" />
  </header>
);

export default Header;

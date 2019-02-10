import React from 'react';

import s from './Logo.module.css';

const Logo = ({ src }) => (
  <div>
    <img className={s.logo} src={src} alt="logo" />
  </div>
);

export default Logo;

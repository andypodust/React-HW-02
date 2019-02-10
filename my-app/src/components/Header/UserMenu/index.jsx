import React from "react";

import s from "./UserMenu.module.css";

const UserMenu = ({ src, name }) => (
  <div className={s.usermenu}>
    <img className={s.avatar} src={src} alt="user avatar" />
    <p className={s.username}>{name}</p>
  </div>
);

export default UserMenu;

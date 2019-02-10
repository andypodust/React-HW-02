import React from 'react';

import s from '../History.module.css';

const HistoryItem = ({ el: { date, price, address, rating } }) => (
  <div className={s.HistoryItem}>
    <p>Date: {date}</p>
    <p>Price: {price}</p>
    <p className={s.Address}>Address: {address}</p>
    <p>Rating: {rating}</p>
  </div>
);

export default HistoryItem;

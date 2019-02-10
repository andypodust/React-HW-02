import React from 'react';
import HistoryItem from './HistoryItem/index';

import s from './History.module.css';

const History = ({ list, deleteClick, moreInfoClick }) => (
  <div>
    <h2 className={s.HistoryHeader}>Odrer History</h2>
    <ul className={s.History}>
      {list.map(el => (
        <li key={el.id}>
          <HistoryItem el={el} />
          <button type="button" onClick={() => deleteClick(el.id)}>
            Delete
          </button>
          <button type="button" onClick={() => moreInfoClick(el.id)}>
            More Info
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default History;

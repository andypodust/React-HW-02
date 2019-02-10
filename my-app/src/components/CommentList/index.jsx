import React from 'react';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(item => (
      <li key={item.id}>
        {item.text} <p>Rate: {item.rate}</p>
      </li>
    ))}
  </ul>
);

export default CommentList;

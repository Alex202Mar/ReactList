import React from 'react';

function ListItem({ item, onRemove }) {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.cost}</span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

export default ListItem;

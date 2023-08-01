import React from 'react';
import { premadeItems } from './premadeItems';
import './App.css';

function PremadeItemList({ onAdd }) {
  return (
    <>
      <h2>Add Pre-made Items</h2>
      <ul>
        {premadeItems.map((item, index) => (
          <li key={index}>
            <span class="ListItems">{item.name}</span>
            <span class="ListItems">{item.cost}</span>
            <button onClick={() => onAdd(item)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PremadeItemList;
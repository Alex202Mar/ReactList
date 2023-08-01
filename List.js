import React, { useState } from 'react';
import ListItem from './ListItem';
import NewItemForm from './NewItemForm';
import PremadeItemList from './PremadeItemList';

function List() {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addItem = (newItemObject) => {
    setItems([...items, newItemObject]);
    setTotalCost(totalCost + newItemObject.cost); // Update total cost
  };

  const removeItem = (index, cost) => {
    const updatedItems = [...items];
    const removedItem = updatedItems.splice(index, 1)[0];
    setItems(updatedItems);
    setTotalCost(totalCost - removedItem.cost); // Update total cost
  };

  const addPremadeItem = (item) => {
    const newItemObject = {
      name: item.name,
      cost: parseFloat(item.cost),
    };
    setItems([...items, newItemObject]);
    setTotalCost(totalCost + newItemObject.cost); // Update total cost
  };

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onRemove={() => removeItem(index, item.cost)}
          />
        ))}
      </ul>
      <p>Total Cost: {totalCost}</p>
      <hr />
      <h2>Custom Items</h2>
      <NewItemForm onAdd={addItem} />
      <PremadeItemList onAdd={addPremadeItem} />
    </div>
  );
}

export default List;
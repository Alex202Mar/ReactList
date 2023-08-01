import React, { useState } from 'react';

function NewItemForm({ onAdd }) {
  const [newItem, setNewItem] = useState('');
  const [newItemCost, setNewItemCost] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '' && newItemCost.trim() !== '') {
      const newItemObject = {
        name: newItem,
        cost: parseFloat(newItemCost) // Convert cost to a number
      };
      onAdd(newItemObject);
      setNewItem('');
      setNewItemCost('');
    }
  };

  const handleCostChange = (e) => {
    const costInput = e.target.value;
    if (/^\d*\.?\d*$/.test(costInput)) {
      setNewItemCost(costInput);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        placeholder="Item Name"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <input
        type="text"
        value={newItemCost}
        placeholder="Item Cost"
        onChange={handleCostChange}
        pattern="\d*\.?\d*"
        title="Please enter a valid number"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default NewItemForm;

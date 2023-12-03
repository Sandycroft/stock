// src/app/components/StockForm.tsx
import React, { useState } from 'react';
import db from '../db';

interface StockItem {
  name: string;
  quantity: number;
}

const StockForm: React.FC = () => {
  const [newItem, setNewItem] = useState<StockItem>({ name: '', quantity: 0 });

  const handleAddItem = async () => {
    try {
      await db.query('INSERT INTO stock_items (name, quantity) VALUES (?, ?)', [newItem.name, newItem.quantity]);
      setNewItem({ name: '', quantity: 0 });
    } catch (error) {
      console.error('Error adding stock item:', error);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">Add Stock Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        className="p-2 mr-2 border"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value, 10) })}
        className="p-2 mr-2 border"
      />
      <button onClick={handleAddItem} className="bg-blue-500 text-white p-2">Add Item</button>
    </div>
  );
};

export default StockForm;

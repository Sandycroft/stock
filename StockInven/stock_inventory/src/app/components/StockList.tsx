// src/app/components/StockList.tsx
import React, { useState, useEffect } from 'react';
import db from '../db';

interface StockItem {
  id?: number;
  name: string;
  quantity: number;
}

const StockList: React.FC = () => {
  const [stockItems, setStockItems] = useState<StockItem[]>([]);

  useEffect(() => {
    // Fetch stock items on component mount
    fetchStockItems();
  }, []);

  const fetchStockItems = async () => {
    try {
        const [results] = await db.query('SELECT * FROM stock_items');
      setStockItems(results);
    } catch (error) {
      console.error('Error fetching stock items:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Stock List</h2>
      <ul>
        {stockItems.map((item) => (
          <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;

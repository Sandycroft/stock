// src/pages/index.tsx
import React from 'react';
import MainLayout from '../app/layouts/MainLayout';
import StockList from '../app/components/StockList';
import StockForm from '../app/components/StockForm';
const Home: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-semibold mb-4">Stock Inventory Management</h1>
      <StockList />
      <StockForm />
    </MainLayout>
  );
};

export default Home;

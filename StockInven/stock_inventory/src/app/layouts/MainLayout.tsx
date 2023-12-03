// src/app/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto mt-8">
      {/* You can add a common layout structure here, such as a header or navigation */}
      {children}
    </div>
  );
};

export default MainLayout;

import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
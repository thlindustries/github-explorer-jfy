import React from 'react';
import { ToastProvider } from './toast';
import { FavoritesProvider } from './favorites';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <FavoritesProvider>{children}</FavoritesProvider>
  </ToastProvider>
);

export default AppProvider;

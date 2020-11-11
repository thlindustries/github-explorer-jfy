import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  </>
);

export default App;

import React from 'react';
import { GlobalStyle } from './style';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;

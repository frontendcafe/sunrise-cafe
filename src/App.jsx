import React from 'react';

import Tipography from './molecules/Tipography';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Tipography />
        <AppRouter />
      </div>
    </>
  );
}

export default App;

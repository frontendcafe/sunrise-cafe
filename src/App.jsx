import React from 'react';

import Tipography from './molecules/Tipography';
import Buttons from './molecules/Buttons';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Tipography />
        <Buttons/>
        <AppRouter />
      </div>
    </>
  );
}

export default App;

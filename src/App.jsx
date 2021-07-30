import React from 'react';

import TestSC from './molecules/TestSC';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <TestSC />
        <AppRouter />
      </div>
    </>
  );
}

export default App;

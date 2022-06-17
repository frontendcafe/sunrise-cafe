import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <AppRouter />
      </div>
    </>
  );
}

export default App;

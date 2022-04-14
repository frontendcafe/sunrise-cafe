import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Login />
      </div>
    </>
  );
}

export default App;

import React from 'react';

import Tipography from './molecules/Tipography';
import Buttons from './molecules/Buttons';
import RadioButton from './molecules/RadioButton';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Tipography />
        <Buttons />
        <RadioButton />
        <RadioButton />
        <AppRouter />
      </div>
    </>
  );
}

export default App;

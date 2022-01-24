import React, {useState} from 'react';

import Tipography from './molecules/Tipography';
import Buttons from './molecules/Buttons';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';
import {Header} from './molecules/Header';
import {SearchBar} from './molecules/SearchBar';
import {Counter} from './molecules/Counter';

function App() {
  const [count, setCount] = useState(1);

  const onDeleteCounter = () => {
    console.log('Delete counter');
  };

  const onClickSearch = (searchText) => {
    console.log(searchText);
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <SearchBar onClick={onClickSearch} />
        <Counter count={count} setCount={setCount} onDelete={onDeleteCounter} />
        <Tipography />
        <Buttons />
        <AppRouter />
      </div>
    </>
  );
}

export default App;

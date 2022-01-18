import React from "react";

import Tipography from "./molecules/Tipography";
import Buttons from "./molecules/Buttons";
import AppRouter from "./routers/AppRouter";
import GlobalStyle from "./styles/GlobalStyle";
import { Header } from "./molecules/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Tipography />
        <Buttons />
        <AppRouter />
      </div>
    </>
  );
}

export default App;

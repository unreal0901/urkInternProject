import React from "react";

import MenuBar from "./components/MenuBar/MenuBar";
import FlexContainer from "./components/FlexContainer/FlexContainer";
import AppContainer from "./components/AppContainer/AppContainer";
import Profile from "./components/Profile/Profile";
import Income from "./components/Income/Income";
import Compare from "./components/Compare/Compare";

const App = () => {
  return (
    <>
      <FlexContainer>
        <MenuBar />
        <AppContainer>
          <Profile />
          <Income />
          <Compare />
        </AppContainer>
      </FlexContainer>
    </>
  );
};

export default App;

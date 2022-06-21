import React from 'react';
import {
  Navigate
} from "react-router-dom";
import MainPage from './containers/MainPage';
import GamePage from './containers/GamePage';
import ResPage from './containers/ResPage';
import EndPage from './containers/EndPage';
import GameMainPage from './containers/GameMainPage';
import Tutorial from './containers/Tutorial';
import Story from './containers/Story';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/main" element={<MainPage/>} />
          <Route exact path="/game" element={<GamePage/>} />
          <Route exact path="/res" element={<ResPage/>} />
          <Route exact path="/end" element={<EndPage/>} />
          <Route exact path="/game_main" element={<GameMainPage/>} />
          <Route exact path="/tutorial" element={<Tutorial/>} />
          <Route exact path="/story" element={<Story/>} />
          <Route exact path="/" element={<Navigate replace to="/main" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
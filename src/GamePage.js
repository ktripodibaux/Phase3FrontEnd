import GameInit from "./components/GameInit";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

import Footer from "./components/Footer";
import ExperimentalFooter from "./components/ExperimentalFooter";

import NavbarDefault from "./components/Navbar";
import PlayGame from "./components/PlayGame";

function GamePage() {
  return (
    <>
    <NavbarDefault />

      {/* {gameStarted ? <PlayGame /> : <GameInit />} */}
      <GameInit />

    <ExperimentalFooter/>
    </>
  );
}

export default GamePage;

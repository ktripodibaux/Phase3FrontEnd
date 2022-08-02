import React from "react";
import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import GamePage from "./GamePage";
import NavbarDefault from "./components/Navbar";
import { Routes, Route, useParams } from "react-router-dom";
import PlayGame from "./components/PlayGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GamePage />}></Route>
      <Route path="/game" element={<GamePage />}></Route>
      <Route path="/test" element={<PlayGame />}></Route>
      {/* <Route path=":invoiceId" element={<Invoice />} />
      <Route path="sent" element={<SentInvoices />} /> */}
      
  </Routes>
  )
}

export default App;

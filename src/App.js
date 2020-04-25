// src/App.js
import { Udaipur } from "./game.js";
import { Client } from "boardgame.io/react";
import UdaipurBoard from "./components/board.jsx";

const App = Client({
  game: Udaipur,
  board: UdaipurBoard,
});

export default App;
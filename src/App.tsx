import React from "react";
import GerenciadorDeLivros from "./components/GerenciadorDeLivros/GereciadorDeLivros";
import NavBar from "./components/Navbar/Navbat";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <GerenciadorDeLivros />
    </div>
  );
};

export default App;

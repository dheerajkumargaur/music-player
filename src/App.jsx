import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Artist from "./components/artist/artist";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Artist />
    </div>
  );
}

export default App;

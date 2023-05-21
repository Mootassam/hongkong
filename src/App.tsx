import { useRef, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./view/routes/RoutesComponent";

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;

import { useRef, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./view/routes/RoutesComponent";
import { Provider } from "react-redux";
import {
  configureStore,
  getHistory,
} from './modules/store';
const store = configureStore();

function App() {
  return (

    <Provider store={store}>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
    </Provider>
  );
}

export default App;

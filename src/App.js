import React from 'react';
import './App.css';
import Login from "./Component/Login/Login.jsx";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Reg from "./Component/Registration/Reg.jsx"
import Home from "./Home"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}>
          </Route>
          <Route
            path="/login"
            element={<Login />}>
          </Route>

          <Route
            path="/registration"
            element={<Reg />}>
          </Route>

        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;

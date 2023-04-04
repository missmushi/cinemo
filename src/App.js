import "./App.css";
import Login from "./pages/Login";
import React from "react";
import Drawer from "./components/DrawerLeft";
import { FavoriteContextProvider } from "./contexts/FavoriteContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <FavoriteContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Drawer />} />
        </Routes>
      </FavoriteContextProvider>
    </BrowserRouter>
  );
}

export default App;

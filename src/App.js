import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/secured" element={<SecuredPage />} />
      </Routes>
    </div>
  );
}

export default App;

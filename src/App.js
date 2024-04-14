import React from "react";
import "./index.css"
import AnaSayfa from "./routes/AnaSayfa"
import Hizmetler from "./routes/Hizmetler"
import Hakkımızda from "./routes/Hakkımızda"
import İletişim from "./routes/İletişim"

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<AnaSayfa />}/>
      <Route path="/ana-sayfa" element={<AnaSayfa />}/>
      <Route path="/hizmetler" element={<Hizmetler />}/>
      <Route path="/hakkımızda" element={<Hakkımızda />}/>
      <Route path="/iletişim" element={<İletişim />}/>
    </Routes>
    </>
    );
}

export default App;

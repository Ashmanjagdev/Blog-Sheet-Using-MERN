
import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Compose from "./Components/Compose";
import Delete from "./Components/Delete";

function App() {

return (
<>
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/compose" element={<Compose />} />
<Route exact path="/delete" element={<Delete />} />
</Routes>
</>
)

}

export default App;
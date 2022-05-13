import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home.js';
import FavList from './components/favlist/FavList';
import Navbarjs from './components/navbar/Navbar';

import './App.css';

function App() {
  return (
     <div>
      <Navbarjs />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList  />} />
      </Routes>
    </div>
    
  );
}

export default App;

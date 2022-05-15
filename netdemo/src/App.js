import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbarjs from './components/navbar/Navbar';
import FavList from "./components/favlist/FavList";


import './App.css';

function App() {
  return (
    <div className="main">
    <Navbarjs />
    <br></br>
    <br></br>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favList" element={<FavList />}/>
    </Routes>
  </div>
    
  );
}

export default App;

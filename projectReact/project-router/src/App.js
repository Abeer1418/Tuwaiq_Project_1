import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Children from './pages/Children';
import Bill from './pages/Bill'
import { Routes, Route } from 'react-router';

//import {Routes, Route } from 'react-router';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route exact path="/Clothes" element={<Clothes />}>
          <Route path="Children/:id" element={<Children />} />
        </Route>
        <Route path="/Bill" element={<Bill />} />
        {/* <Route path="/login" element={<Login/>}/> */}
      </Routes>

    </div>
  );
}

export default App;

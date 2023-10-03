import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

//Importing Components
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Cart from './components/cart/cart';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <Navbar />
        </ul>
      </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </div>
  );
}

export default App;
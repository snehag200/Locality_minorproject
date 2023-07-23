import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Checkout from './component/Checkout';
import AddShop from './component/AddShop';
import BrowseShop from './component/BrowseShop';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="home" />
          <Route element={<Login />} path="login" />
          <Route element={<Signup />} path="signup" />
          <Route element={<AddShop />} path="Addshop" />
          <Route element={<BrowseShop />} path="Browseshop" />
          <Route element={<Checkout />} path="Checkout" />

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;

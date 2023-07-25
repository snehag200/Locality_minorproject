import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Checkout from "./component/Checkout";
import AddShop from "./component/AddShop";
import BrowseShop from "./component/BrowseShop";
import BrowseProducts from "./component/BrowseProducts";
import { UserProvider } from "./UserContext";
import ViewOrders from "./component/ViewOrders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="Home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<AddShop />} path="Addshop" />
            <Route element={<BrowseShop />} path="Browseshop" />
            <Route element={<BrowseProducts />} path="Browseproduct/:index" />
            <Route element={<Checkout />} path="Checkout" />
<<<<<<< HEAD
            {/* <Route element={<Login2 />} path="Login2" /> */}
=======
            <Route element={<ViewOrders />} path="orders" />
>>>>>>> 0aa00739f85eb387a914502111a7480899b4f66a
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

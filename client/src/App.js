import "./App.css";

import { Routes, Route } from "react-router-dom";

import Shop from "./routes/Shop";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Wishlist from "./routes/Wishlist";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Header from "./components/global/header/Header";

function App() {
  return (
    <div className="App">
      {/* header / nav */}
      <Header />
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* footer */}
    </div>
  );
}

export default App;

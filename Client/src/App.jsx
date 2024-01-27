import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import "./index.css";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Buy from "./Pages/CustomerPanel/Buy";
import AddProduct from "./Pages/AdminPanel/AddProduct";
import ProductList from "./Pages/AdminPanel/ProductList";
import Update from "./Pages/AdminPanel/Update";
import Cart from "./Pages/CustomerPanel/Cart";
import ConfirmBuy from "./Pages/CustomerPanel/ConfirmBuy";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/ConfirmBuy" element={<ConfirmBuy />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MenuPage from "./Pages/MenuPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SinglePage from "./Pages/SinglePage";
import Delivery from "./components/Our Services/Delivery";
import Discount from "./components/Our Services/Discount";
import FreshFood from "./components/Our Services/FreshFood"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/singleproducts/:id" element= {<SinglePage/>} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/delivery" element = {<Delivery/>} />
        <Route path="/discount" element = {<Discount/>} />
        <Route path="/freshfood" element = {<FreshFood/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

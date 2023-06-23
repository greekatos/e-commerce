import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CartModal from "./components/CartModal";
import CheckoutPage from "./components/Checkout";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductsList";
import { CartContext } from "./context/CartContext";
import { Announcements } from "./components/Announcements";
import { AnnouncementsPage } from "./components/AnnouncementsPage";
import Footer from "./components/Footer";

function App() {
  const { showCart } = useContext(CartContext);
  //Todo: Add cart to local storage
  //Todo: Footer
  //Todo:  Form

  return (
    <>
      <Navbar />
      {showCart && <CartModal />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='products' element={<ProductsList />} />
        <Route path='products/:id' element={<ProductPage />} />
        <Route path='sales' element={<ProductsList />} />
        <Route path='announcements' element={<AnnouncementsPage />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

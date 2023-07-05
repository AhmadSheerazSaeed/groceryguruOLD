import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Authorization from "./components/signinandup/Authorization";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import NewCustomer from "./components/newCustomer/NewCustomer";
import Categories from "./components/categories/Categories";
import Contact from "./components/contact/Contact";
import Sale from "./components/sale/Sale";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pagenotfound/PageNotFound";

function App() {
  return (
    <div className="whole_wrapper">
      <Header />
      <div className="routesWrapper">
        <Routes>
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/sale" element={<Sale />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signinandsignup" element={<Authorization />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/newcustomer" element={<NewCustomer />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

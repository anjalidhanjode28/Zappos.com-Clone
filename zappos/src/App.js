
import Home from "./Pages/Home";
import './App.css';
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import LoginPage from "./Pages/LoginPage";
import { WomenPage } from "./Pages/WomenPage";
import { Sneaker } from "./Pages/Sneakers";
import AddtoCart from "./Pages/AddtoCart";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div className="App">
    
    <Routes>
    <Route path='/' element={<Home />}/>
   <Route path="/create-account" element={<CreateAccount />} /> 
   <Route path="/login" element={<LoginPage />} /> 
   <Route path="/women" element={<WomenPage />} /> 
   <Route path="/sneaker" element={<Sneaker />} /> 
   <Route path="/addtocart" element={<AddtoCart />} /> 
   <Route path="/checkout" element={<Checkout />} /> 
   
    </Routes>
  
    </div>
  );
}

export default App;


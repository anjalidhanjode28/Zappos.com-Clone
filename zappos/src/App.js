import Navbar from "./Routes/Navbar"
import { Footer } from "./Components/Footer";
import Home from "./Pages/Home";
import './App.css';
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home />}/>
   <Route path="/create-account" element={<CreateAccount />} /> 

   
    </Routes>
    </div>
  );
}

export default App;


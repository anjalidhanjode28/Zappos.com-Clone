import React, { useState } from "react";
import { tops } from "../Pages/WomenPage";
import { womenSneakers } from "../Pages/Sneakers";

export const AppContext = React.createContext();
function AppContextProvider({ children }) {
    const [cart, setCart] = useState([])

  const [state, setState] = useState({
    isAuth: false,
    token: null
  });

  const handleAdd = (id) => {
    let x = tops.filter((ele) =>{
      return ele.id === id

    })
    setCart([...cart,x[0]])
   }

   const handleAdd2 = (id) => {
    let x = womenSneakers.filter((ele) =>{
      return ele.id === id

    })
    setCart([...cart,x[0]])
   } 
   const removeItem = (id) => {
    // setCart(cart.filter((ele) =>{
    //   return ele.id !== id
    // }))
    let x = cart.filter((ele,ind) =>{
      return ele.id !== id

    })
    setCart(x)
  
   }
    //console.log(cart)

  const loginUser = (token) => {
    setState({
      ...state,
      isAuth: true,
      token
    });
  };
  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
  };
  return (
    <AppContext.Provider value={{ authState: state, loginUser, logoutUser, cart,setCart,handleAdd,removeItem,handleAdd2 }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

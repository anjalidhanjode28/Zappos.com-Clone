
import { Box, Heading, Text, Button, Flex, Image} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import style from "../Style/cart.module.css";

function AddtoCart() {
  const {cart,removeItem} = useContext(AppContext);
  const navigate = useNavigate();
   

    return (
        <>
        <Box mt='30px' mb='40px' m='auto'>
        <Heading as='h2' size='xl'>My Cart</Heading>
        <Box w='50%' m='auto' textAlign='center' mt='30px'>
        <Flex gap='60px'>
        <Button onClick={()=>navigate("/create-account")} w='100px' colorScheme='blue' variant='outline'>Sign-In</Button>
        <Button onClick={()=>navigate("/")} colorScheme='blue' variant='outline'>Home Page</Button>
        <Button  colorScheme='blue' variant='outline' onClick={()=>navigate("/sneaker")} >Brand Name</Button>
        <Button onClick={()=>navigate("/women")} colorScheme='blue' variant='outline'>Products</Button>
        <Button onClick={()=>navigate("/checkout")} colorScheme='blue' variant='outline'>Checkout</Button>
        </Flex>
        </Box>

        <div className={style.box1}>
       
        {
          cart.map((ele) => (
         
        <div className={style.tops} key={ele.id}>
            <div><img src={ele.imageurl} /></div>
          <div>
          <h1>{ele.desc}</h1>
          <h2 >{ele.brand}</h2>
          <p >${ele.price}</p>
          </div>
          <div className={style.btn}>
             <Button  colorScheme='blue' variant='solid' onClick={() => removeItem(ele.id)}>Remove</Button>
          </div>
         </div> 
         
          ))
        }
        </div>
        </Box>
        
        </>
    )
}
export default AddtoCart;
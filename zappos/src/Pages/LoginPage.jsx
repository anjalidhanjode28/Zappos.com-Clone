import { Text , Input, Box, Spacer,Flex, Button ,Image } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";
import CreateAccount from "./CreateAccount";
import { useContext } from "react";


function LoginPage () {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginUser, logoutUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          loginUser(res.token);
          console.log(res);
          alert("Login Successful")
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
   
    const handleClick = () => {
        navigate("/create-account");
        
      };
  

    return (
        <>
        <div>
        <Box m='auto' w='30%' mt='30px'>
        <Box>
     <Image w='100px' m='auto' src='https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg' />
     </Box>
    
     <form onSubmit={handleSubmit}>
     <Box border='1px solid black' p='20px' textAlign='left'>
     
     
    
     <Text fontSize='3xl' textAlign='center'>LogIn</Text>
    
    
      <Text fontWeight='bold'>Email</Text>
      <Input  type='email' placeholder='' size='sm' mb='10px'  value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      <Flex>
      <Text fontWeight='bold'
      >
      Password</Text> <Spacer />
      <Text >Forgot Password?</Text>
      </Flex>
      <Input type='password' placeholder='' size='sm' mb='10px'  value={password} onChange={(e) => setPassword(e.target.value)} />
      
      
     
      <Button mt='20px' w='420px' mb='40px' colorScheme='blue' type="submit">Log In</Button>

      <Text textAlign='center'>New to Zappos?</Text>
      <Button mt='10px' w='420px' mb='40px' colorScheme='blue' type="submit"
      onClick={handleClick}
      >Create your zappos Account</Button>
     </Box>
   
     </form>
     
     
     </Box>
        </div>
        </>
    )
}
export default LoginPage;
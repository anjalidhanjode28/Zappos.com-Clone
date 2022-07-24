import { Image , Input, Box, Flex, Button} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

function Checkout() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
        alert("Payment Successfull")
        
      };
    return (
        <>
        <div>
        <Image w='100px' m='auto' mt='30px'  src='https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg' />
        <Box w='35%' m='auto' mt='30px' p='40px' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
       
        
        <Box m='auto'justifyContent='center' >
        <Image m='auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAOesmfaUcy7DMwQtfbYGnFjD9FeEtsRi8g&usqp=CAU'/>
        </Box>

        <Box mt='50px'>
        <Input placeholder='Card Number' size='sm' type='number'w='400px' mb='20px'/>
        <Input placeholder='Name' size='sm' w='400px' mb='20px' />
        <Box gap='30px' m='auto'>
        <Flex gap='100px' m='auto' w='400px'>
        <Input placeholder='mm/yy' size='sm'  w='150px'/>
        <Input placeholder='CVC' size='sm' type='number'  w='150px'/>
        </Flex>
        </Box>
        <Button w='400px' colorScheme='blue' variant='solid' mt='40px' onClick={handleClick}>PAY</Button>
        </Box>
        </Box>
        </div>
        </>
    )
}
export default Checkout;
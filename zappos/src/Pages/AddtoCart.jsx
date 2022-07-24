
import { Box, Heading, Text, Button, Flex, Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AddtoCart() {
    const navigate = useNavigate();
    return (
        <>
        <Box mt='30px' mb='40px' m='auto'>
        <Heading as='h2' size='xl'>My Cart</Heading>
        <Box w='50%' m='auto' textAlign='center' mt='30px'>
        <Flex gap='60px'>
        <Button onClick={()=>navigate("/create-account")} w='100px' colorScheme='blue' variant='outline'>Sign-In</Button>
        <Button onClick={()=>navigate("/")} colorScheme='blue' variant='outline'>Home Page</Button>
        <Button  colorScheme='blue' variant='outline'>Brand Name</Button>
        <Button onClick={()=>navigate("/women")} colorScheme='blue' variant='outline'>Products</Button>
        <Button onClick={()=>navigate("/checkout")} colorScheme='blue' variant='outline'>Checkout</Button>
        </Flex>
        </Box>

        <Box w='20%' m='auto' mt='50px'>
          <Box  w='300px' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
         
          <Box p='10px'>
         
          <Image src='https://m.media-amazon.com/images/I/71oq4d1UQ3L._AC_SR255,340_.jpg' />
          </Box>
          <Box mb='10px'>
          <Text fontSize='lg' fontWeight='bold'>Short sleves Round Neck Tees</Text>
          <Text fontSize='md' fontWeight='medium'>CeCe</Text>
          <Text fontSize='md' fontWeight='medium'>$50</Text>
          </Box>
          <Button mb='10px' colorScheme='blue' variant='solid'>Remove</Button>
          </Box>
          
        </Box>
        
        </Box>
        
        </>
    )
}
export default AddtoCart;
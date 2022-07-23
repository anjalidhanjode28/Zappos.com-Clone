
import { Box, Heading, Text, Button, Flex} from "@chakra-ui/react";
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

        <Box w='80%'>
        
        
        </Box>
        
        </Box>
        
        </>
    )
}
export default AddtoCart;
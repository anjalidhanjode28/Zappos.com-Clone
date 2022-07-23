import {Flex, Box, Button, Text, Image} from "@chakra-ui/react";


function FlexBox1() {
    return (
        <div>
        <Flex w='90%' h='400px' m='auto' mt='40px'>
        <Box w='35%'h='400px' textAlign='center' pt='150px'>
        <Text fontSize='2xl'>UGG Kid: School Style Star Here</Text>
        <Text fontSize='lg'>Find Cheerful design, cozy classic & the easy-to-wear Rennon collection!</Text>
        <Button colorScheme='blue' variant='outline'>SHOP UGG FOOTEWEAR FOR KID</Button>
        </Box>

        <Box w='65%' h='400px' >
        <Image w='100%' h='400px' src='https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2022-03/Zappos%27%20Spring%20Shoe%20Sale%202022.jpg?h=c673cd1c&itok=WlJyZrEZ' />
        </Box>
        </Flex>
        </div>
    )
}
export default FlexBox1;
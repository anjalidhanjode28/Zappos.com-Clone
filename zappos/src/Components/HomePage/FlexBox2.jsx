import {Flex, Box, Button, Text, Image} from "@chakra-ui/react";


function FlexBox2() {
    return (
        <div>
        <Flex w='90%' h='400px' m='auto' mt='40px'>
        <Box w='65%' h='400px' >
        <Image w='100%' h='400px' src='https://d24y65w6idg7xf.cloudfront.net/uploads/style-room/W_TRENDS_DETAIL_2022_7_90SNEWSTALGIA_XL1X.jpg' />
        </Box>

        <Box w='35%'h='400px' textAlign='left' pt='130px' ml='20px'>
        <Text fontSize='3xl'>THE STYLE ROOM</Text>
        <Text fontSize='xl' fontWeight='bold'>90s Newstalgia</Text>
        <Text fontSize='lg'>Minimalistic styling, sleek details and sublime tailoring go from the boardroom to happy hour with ease</Text>
        <Button colorScheme='blue' variant='outline'>SHOP 90S NEWSTALGIA</Button>
        </Box>
        </Flex>
        </div>
    )
}
export default FlexBox2;
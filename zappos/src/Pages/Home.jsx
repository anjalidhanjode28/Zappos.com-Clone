import { Box, Text, Image, Button } from "@chakra-ui/react";


function Home() {
    return (
        <>
        <div>
        <Box bg='lavender' h='40px' w='100%' m='auto' p='5px'>
        <Text fontSize='lg'>Be the first to shop the newest home styles—now on Zappos! Shop Home Now</Text>
        </Box>

        <Box w='90%' m='auto'>
       <Box position='relative'>
        <Image src='https://m.media-amazon.com/images/G/01/2022/homepage7.18/COOP-ASICS-KIDS-BTS-HERO-1440x500.jpg'  boxSize='100%'/>
       </Box>
        <Box position='absolute' bg='white' mt='-300px' ml='1000px' w='20%' h='230px' textAlign='center' p='20px' alignSelf='right'>
        <Text fontSize='xl' fontWeight='bold'>ASICS Sneakers for School Sports & Beyond</Text>
        <Text fontSize='lg'>Find the sneakers they need for tennis, volleyball, running, and more!</Text>
        <Button colorScheme='teal'  variant='outline'>SHOP ASICS SNEAKERS</Button>
        </Box>
        </Box>
        </div>
        </>
    )
}
export default Home;
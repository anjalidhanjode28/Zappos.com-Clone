import { TriangleDownIcon ,Search2Icon} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Spacer,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    Text,
    Box,
    Image,
    Input,
   
  } from '@chakra-ui/react'
  
import { useDisclosure } from "@chakra-ui/react";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
    return (
        <>
       <div className="nav1">
       <Flex width='90%' margin='auto' gap='1rem' >
       
       <img src='https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg'  />
       {/*<img src='https://logodix.com/logo/1068489.jpg' />*/}
       <img src='https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg' />
       </Flex>

       
       </div>

       <div className='nav2' width='100%' >
       
       <Flex >
       <Box>
       <Menu>
       <MenuButton as={Button} background='#0076bd' borderRadius='none' color='white' _hover={{ bg: '#0076bd' }}>
        Customer Service <TriangleDownIcon color='white'/>
       </MenuButton>
       <MenuList>
      <MenuItem>Contact Info</MenuItem>
      <MenuItem>FAQ </MenuItem>
      <MenuItem>Give Us Feedback </MenuItem>
      </MenuList>
      </Menu>
      </Box>
      <hr/ >
      <Box bg='#0076bd' w='100%'>
      <Text  fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} p='1' color='white'>Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day Return Policy! More About Shipping & Returns</Text>
      </Box>
       </Flex>
       </div>

       <div className="nav3">
       <Flex w='90%' margin='auto' mt='20px' h='50px'>
       <Box boxSize='8rem'>
       <Image src='https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg'  />
       
       </Box>
       <Box ml='10px'>
       <Flex>
       <Input variant='outline' placeholder='Search for Shoes, Clothes etc.' width='400px' borderRadius='none' />
       <Button background='#003953' variant='solid' borderRadius='3px' color='white'   _hover={{ bg: '#0076bd' }}>Search</Button>
       </Flex>
       </Box>
       <Spacer/>
       <Box>
       <Button colorScheme='teal'  color='#003953' variant='outline'_hover={{ bg: '99d98c' }}>
        MY CART
     </Button>
     </Box>
       </Flex>
       </div>

       <div className="nav4">
       <Flex w='90%' m='auto' mt='20px' bg='#edf2f7' wrap='wrap'>
       <Box>

       <Menu>
  <MenuButton as={Button} borderRadius='none'>
    New <TriangleDownIcon color='gray' />
  </MenuButton>
  <MenuList>
  <Flex>
  <Box>
    <MenuGroup title='The Find'>
      <MenuItem>The Ultimate Sneaker Guide </MenuItem>
      <MenuItem>The Sandals Guide</MenuItem>
      <MenuItem>Fresh Spring/Summer Denim</MenuItem>
      <MenuItem>Energizing Sporty Looks</MenuItem>
      <MenuItem>Western-Inspired Wear</MenuItem>
      <MenuItem>L.L. Bean Hiking Musts</MenuItem>
    </MenuGroup>
    
    </Box>

    <Box>
    <MenuGroup title='The Style Room'>
      <MenuItem>Must-Have Headliners</MenuItem>
      <MenuItem>Chroma-Cation </MenuItem>
      <MenuItem>90s Newstalgia</MenuItem>
      <MenuItem>Joyful Accessories</MenuItem>
      <MenuItem>Men's Take Center Stage</MenuItem>
      <MenuItem>Men's Colorful Crush</MenuItem>
    </MenuGroup>
    
    </Box>

    <Box>
    <MenuGroup title='New Arrivals'>
    <MenuItem>Sandles</MenuItem>
    <MenuItem>Toys & Games </MenuItem>
    <MenuItem>Frinkware</MenuItem>
    <MenuItem>Sporting Goods</MenuItem>
    <MenuItem>Home Decor</MenuItem>
    <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
      
    </MenuGroup>
    
    </Box>
    
    <Box w='120px' h='120px' mr='20px'>
       <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ad1236798_zappos_july_placements_nav74.jpg' />
       <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/WOMENS-SAM-EDELMAN-NEW-ARRIVALS-GLOBAL-NAV.jpg' />
    </Box>
    </Flex>
    </MenuList>
    </Menu>


    <Menu>
  <MenuButton as={Button} borderRadius='none'>
    Women <TriangleDownIcon color='gray' />
  </MenuButton>
  <MenuList>
  <Flex>
  <Box>
    <MenuGroup title='Shoes'>
      <MenuItem>Sneakers & Athletic </MenuItem>
      <MenuItem>sandles</MenuItem>
      <MenuItem>Clogs & Mules</MenuItem>
      <MenuItem>Heels</MenuItem>
      <MenuItem>Boots & Booties</MenuItem>
      <MenuItem>Slippers</MenuItem>
      <MenuItem>Flats</MenuItem>
      <MenuItem>Loafers</MenuItem>
      <MenuItem>Comfort</MenuItem>
      <MenuItem>Wide</MenuItem>
    </MenuGroup>
    
    </Box>

    <Box>
    <MenuGroup title='Clothing'>
      <MenuItem>Shirts & Top</MenuItem>
      <MenuItem>Swimwear </MenuItem>
      <MenuItem>Dresses</MenuItem>
      <MenuItem>Shorts</MenuItem>
      <MenuItem>Jean's & Denim</MenuItem>
      <MenuItem>Slipwear</MenuItem>
      <MenuItem>Activewear</MenuItem>
    </MenuGroup>
    
    </Box>

    <Box>
    <MenuGroup title='Accessories & More'>
    <MenuItem>Bags & Handwear</MenuItem>
    <MenuItem>Sunglasses </MenuItem>
    <MenuItem>Hats</MenuItem>
    <MenuItem>Blue Light Glass</MenuItem>
    <MenuItem>Face Mask</MenuItem>
    <MenuItem>Earrings</MenuItem>
      
    </MenuGroup>
    
    </Box>
    
    <Box w='140px' h='140px' mr='20px'>
       <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/WOMENS-BEST-SANDALS-GLOBAL-NAV.jpg' />
       <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/RB_2140_350x350_NL.jpg' />
    </Box>
    </Flex>
    </MenuList>
    </Menu>

    <Menu>
  <MenuButton as={Button} borderRadius='none'>
    Men <TriangleDownIcon color='gray' />
  </MenuButton>
  <MenuList>
  <Flex>
  <Box>
    <MenuGroup title='The Find'>
      <MenuItem>The Ultimate Sneaker Guide </MenuItem>
      <MenuItem>The Sandals Guide</MenuItem>
      <MenuItem>Fresh Spring/Summer Denim</MenuItem>
      <MenuItem>Energizing Sporty Looks</MenuItem>
      <MenuItem>Western-Inspired Wear</MenuItem>
      <MenuItem>L.L. Bean Hiking Musts</MenuItem>
    </MenuGroup>
    
    </Box>

    <Box>
    <MenuGroup title='The Style Room'>
      <MenuItem>Must-Have Headliners</MenuItem>
      <MenuItem>Chroma-Cation </MenuItem>
      <MenuItem>90s Newstalgia</MenuItem>
      <MenuItem>Joyful Accessories</MenuItem>
      <MenuItem>Men's Take Center Stage</MenuItem>
      <MenuItem>Men's Colorful Crush</MenuItem>
    </MenuGroup>
    
    </Box>

    <Box>
    <MenuGroup title='New Arrivals'>
    <MenuItem>Sandles</MenuItem>
    <MenuItem>Toys & Games </MenuItem>
    <MenuItem>Frinkware</MenuItem>
    <MenuItem>Sporting Goods</MenuItem>
    <MenuItem>Home Decor</MenuItem>
    <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
      
    </MenuGroup>
    
    </Box>
    
    <Box w='120px' h='120px' mr='20px'>
       <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/MENS-CLASSIC-SNEAKERS-GLOBAL-NAV.jpg' />
       <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/MENS-SANDALS-BESTSELLERS-GLOBAL-NAV.jpg' />
    </Box>
    </Flex>
    </MenuList>
    </Menu>

    <Menu>
    <MenuButton as={Button} borderRadius='none'>
      Kids <TriangleDownIcon color='gray' />
    </MenuButton>
    <MenuList>
    <Flex>
    <Box>
      <MenuGroup title='The Find'>
        <MenuItem>The Ultimate Sneaker Guide </MenuItem>
        <MenuItem>The Sandals Guide</MenuItem>
        <MenuItem>Fresh Spring/Summer Denim</MenuItem>
        <MenuItem>Energizing Sporty Looks</MenuItem>
        <MenuItem>Western-Inspired Wear</MenuItem>
        <MenuItem>L.L. Bean Hiking Musts</MenuItem>
      </MenuGroup>
      
      </Box>
  
      <Box>
      <MenuGroup title='The Style Room'>
        <MenuItem>Must-Have Headliners</MenuItem>
        <MenuItem>Chroma-Cation </MenuItem>
        <MenuItem>90s Newstalgia</MenuItem>
        <MenuItem>Joyful Accessories</MenuItem>
        <MenuItem>Men's Take Center Stage</MenuItem>
        <MenuItem>Men's Colorful Crush</MenuItem>
      </MenuGroup>
      
      </Box>
  
      <Box>
      <MenuGroup title='New Arrivals'>
      <MenuItem>Sandles</MenuItem>
      <MenuItem>Toys & Games </MenuItem>
      <MenuItem>Frinkware</MenuItem>
      <MenuItem>Sporting Goods</MenuItem>
      <MenuItem>Home Decor</MenuItem>
      <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
        
      </MenuGroup>
      
      </Box>
      
      <Box w='120px' h='120px' mr='20px'>
         <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/COOP-BTS-GLOBAL-NAV-350x350.jpg' />
        
      </Box>
      </Flex>
      </MenuList>
      </Menu>

      <Menu>
      <MenuButton as={Button} borderRadius='none'>
        Departments <TriangleDownIcon color='gray' />
      </MenuButton>
      <MenuList>
      <Flex>
      <Box>
        <MenuGroup title='The Find'>
          <MenuItem>The Ultimate Sneaker Guide </MenuItem>
          <MenuItem>The Sandals Guide</MenuItem>
          <MenuItem>Fresh Spring/Summer Denim</MenuItem>
          <MenuItem>Energizing Sporty Looks</MenuItem>
          <MenuItem>Western-Inspired Wear</MenuItem>
          <MenuItem>L.L. Bean Hiking Musts</MenuItem>
        </MenuGroup>
        
        </Box>
    
        <Box>
        <MenuGroup title='The Style Room'>
          <MenuItem>Must-Have Headliners</MenuItem>
          <MenuItem>Chroma-Cation </MenuItem>
          <MenuItem>90s Newstalgia</MenuItem>
          <MenuItem>Joyful Accessories</MenuItem>
          <MenuItem>Men's Take Center Stage</MenuItem>
          <MenuItem>Men's Colorful Crush</MenuItem>
        </MenuGroup>
        
        </Box>
    
        <Box>
        <MenuGroup title='New Arrivals'>
        <MenuItem>Sandles</MenuItem>
        <MenuItem>Toys & Games </MenuItem>
        <MenuItem>Frinkware</MenuItem>
        <MenuItem>Sporting Goods</MenuItem>
        <MenuItem>Home Decor</MenuItem>
        <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
          
        </MenuGroup>
        
        </Box>
        
        <Box w='120px' h='120px' mr='20px'>
           <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ad1236798_zappos_july_placements_nav74.jpg' />
           <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/WOMENS-SAM-EDELMAN-NEW-ARRIVALS-GLOBAL-NAV.jpg' />
        </Box>
        </Flex>
        </MenuList>
        </Menu>

        <Menu>
        <MenuButton as={Button} borderRadius='none'>
          Brands <TriangleDownIcon color='gray' />
        </MenuButton>
        <MenuList>
        <Flex>
        <Box>
          <MenuGroup title='The Find'>
            <MenuItem>The Ultimate Sneaker Guide </MenuItem>
            <MenuItem>The Sandals Guide</MenuItem>
            <MenuItem>Fresh Spring/Summer Denim</MenuItem>
            <MenuItem>Energizing Sporty Looks</MenuItem>
            <MenuItem>Western-Inspired Wear</MenuItem>
            <MenuItem>L.L. Bean Hiking Musts</MenuItem>
          </MenuGroup>
          
          </Box>
      
          <Box>
          <MenuGroup title='The Style Room'>
            <MenuItem>Must-Have Headliners</MenuItem>
            <MenuItem>Chroma-Cation </MenuItem>
            <MenuItem>90s Newstalgia</MenuItem>
            <MenuItem>Joyful Accessories</MenuItem>
            <MenuItem>Men's Take Center Stage</MenuItem>
            <MenuItem>Men's Colorful Crush</MenuItem>
          </MenuGroup>
          
          </Box>
      
          <Box>
          <MenuGroup title='New Arrivals'>
          <MenuItem>Sandles</MenuItem>
          <MenuItem>Toys & Games </MenuItem>
          <MenuItem>Frinkware</MenuItem>
          <MenuItem>Sporting Goods</MenuItem>
          <MenuItem>Home Decor</MenuItem>
          <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
            
          </MenuGroup>
          
          </Box>
          
          <Box w='120px' h='120px' mr='20px'>
             <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ad1236798_zappos_july_placements_nav74.jpg' />
             <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/WOMENS-SAM-EDELMAN-NEW-ARRIVALS-GLOBAL-NAV.jpg' />
          </Box>
          </Flex>
          </MenuList>
          </Menu>

          <Menu>
          <MenuButton as={Button} borderRadius='none'>
            Sale <TriangleDownIcon color='gray' />
          </MenuButton>
          <MenuList>
          <Flex>
          <Box>
            <MenuGroup title='The Find'>
              <MenuItem>The Ultimate Sneaker Guide </MenuItem>
              <MenuItem>The Sandals Guide</MenuItem>
              <MenuItem>Fresh Spring/Summer Denim</MenuItem>
              <MenuItem>Energizing Sporty Looks</MenuItem>
              <MenuItem>Western-Inspired Wear</MenuItem>
              <MenuItem>L.L. Bean Hiking Musts</MenuItem>
            </MenuGroup>
            
            </Box>
        
            <Box>
            <MenuGroup title='The Style Room'>
              <MenuItem>Must-Have Headliners</MenuItem>
              <MenuItem>Chroma-Cation </MenuItem>
              <MenuItem>90s Newstalgia</MenuItem>
              <MenuItem>Joyful Accessories</MenuItem>
              <MenuItem>Men's Take Center Stage</MenuItem>
              <MenuItem>Men's Colorful Crush</MenuItem>
            </MenuGroup>
            
            </Box>
        
            <Box>
            <MenuGroup title='New Arrivals'>
            <MenuItem>Sandles</MenuItem>
            <MenuItem>Toys & Games </MenuItem>
            <MenuItem>Frinkware</MenuItem>
            <MenuItem>Sporting Goods</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
              
            </MenuGroup>
            
            </Box>
            
            <Box w='120px' h='120px' mr='20px'>
               <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ADIDAS-ORIGINALS-GLOBAL-NAV.jpg' />
               <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ONIEL-LENNOX-STRETCH-BOARDSHORTS.jpg' />
            </Box>
            </Flex>
            </MenuList>
            </Menu>

            <Menu>
            <MenuButton as={Button} borderRadius='none'>
              Clothing <TriangleDownIcon color='gray'/>
            </MenuButton>
            <MenuList>
            <Flex>
            <Box>
              <MenuGroup title='The Find'>
                <MenuItem>The Ultimate Sneaker Guide </MenuItem>
                <MenuItem>The Sandals Guide</MenuItem>
                <MenuItem>Fresh Spring/Summer Denim</MenuItem>
                <MenuItem>Energizing Sporty Looks</MenuItem>
                <MenuItem>Western-Inspired Wear</MenuItem>
                <MenuItem>L.L. Bean Hiking Musts</MenuItem>
              </MenuGroup>
              
              </Box>
          
              <Box>
              <MenuGroup title='The Style Room'>
                <MenuItem>Must-Have Headliners</MenuItem>
                <MenuItem>Chroma-Cation </MenuItem>
                <MenuItem>90s Newstalgia</MenuItem>
                <MenuItem>Joyful Accessories</MenuItem>
                <MenuItem>Men's Take Center Stage</MenuItem>
                <MenuItem>Men's Colorful Crush</MenuItem>
              </MenuGroup>
              
              </Box>
          
              <Box>
              <MenuGroup title='New Arrivals'>
              <MenuItem>Sandles</MenuItem>
              <MenuItem>Toys & Games </MenuItem>
              <MenuItem>Frinkware</MenuItem>
              <MenuItem>Sporting Goods</MenuItem>
              <MenuItem>Home Decor</MenuItem>
              <MenuItem>Exclusive "Heatwave" Capsule</MenuItem>
                
              </MenuGroup>
              
              </Box>
              
              <Box w='120px' h='120px' mr='20px'>
                 <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/PERFORMANCE-HOODIES-SWEATSHIRTS-GLOBAL-NAV.jpg' />
                 <Image src='https://m.media-amazon.com/images/G/01/2022/Global-Nav/July/ENS-SUMMER-WORKOUT-CLOTHING-GLOBAL-NAV.jpg' />
              </Box>
              </Flex>
              </MenuList>
              </Menu>

       </Box>
        <Spacer/>


       <Box>
       <Button onClick={onOpen } colorScheme='black' variant='link' pt='5px' mr='2px'>Sign In / Register</Button>
       <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} w='800px' m='auto'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign-In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Flex gap='40px'>
           <Box w='50%'mt='20px' >
           <Button colorScheme='blue' variant='outline' mb='10px'onClick={()=>navigate("/create-account")}>SIGN IN WITH ZAPPOS</Button>
           <Button colorScheme='blue' variant='outline' mb='10px'onClick={()=>navigate("/create-account")}>SIGN IN WITH AMAZON</Button>
           <Button colorScheme='blue' variant='outline' mb='10px' onClick={()=>navigate("/create-account")}>SIGN IN WITH GOOGLE</Button>
           <Text fontSize='sm' mb='10px'>or</Text>
           <Button colorScheme='blue' variant='outline' mb='10px' onClick={()=>navigate("/create-account")}>CREATE YOUR ACCOUNT</Button>

           <Text fontSize='xs'mt='80px'>By signing in, you agree to Zappos </Text>
           <Text fontSize='sm'>Terms & Conditon and Privacy Policy</Text>
           </Box>

           <Box  w='1000PX'>
           <Text fontSize='m' fontWeight='bold' mb='10px'> By logging in with Amazon, you may be eligible for additional
           Prime benefits like FREE Upgraded Shipping. Then, join Zappos
           VIP for additional Prime-linked VIP perks:</Text>
           <Text fontSize='sm'>Get FREE Expedited Shipping</Text>
           <Text fontSize='sm'>Earn 2 Points for Every $1 Spent</Text>
           <Text fontSize='sm'>Receive Bonus Points on Select Brands</Text>
           <Text fontSize='sm'>Redeem Points for VIP Codes</Text>
           
           </Box>
           
           </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>

    </Box> 

       
       </Flex>
       </div>

        </>
    )
}
export default Navbar;
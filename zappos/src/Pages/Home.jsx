import { Box, Text, Image, Button } from "@chakra-ui/react";
import { ShopPopularCategories } from "../Components/HomePage/ShopPopularCategory";
import { Part3 } from "../Components/./HomePage/Part3";
import { Carousels } from "../Components/HomePage/Carousel";
import FlexBox1 from "../Components/HomePage/FlexBox1";
import FlexBox2 from "../Components/HomePage/FlexBox2";
import { AfterPay } from "../Components/HomePage/AfterPay";
import Navbar from "../Routes/Navbar";
import { Footer } from "../Components/Footer";

 const part3Data = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-CASUAL-SNEAKERS-JULY-TRIPTYCH-500X500.jpg",
      title: "Anything But Ordinary: Women Sneakers",
      desc: "Look for head-turning prints & colorways",
      link: "SHOP EVERYDAY WOMEN'S SNEAKERS",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/G/01/2022/homepage7.04/WOMENS-HP-SWIM-ON-SALE-JULY-TRIPTYCH-500X500.jpg",
      title: "Women's Swimwear On Sale",
      desc: "Find styles she'll love from Tory Burch, COACH, Marc Jacobs and more!",
      link: "SHOP SALE WEMEN'S SWIM",
    }, 
    {
      id: 3,
      img: "https://m.media-amazon.com/images/G/01/2022/Mens/MENS-SWIM-NEW-ARRIVAL-JUNE-TRIPTYCH-500X500.jpg",
      title: "End-of-Session Swimwear for Male",
      desc: "Dive In! It's not too late to seup for pool session",
      link: "SHOP SALE MEN'S SWIM",
    },
  ];

  
const beforeFooter = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png",
    title: "Diversity Equity & Inclusion",
    desc: "At Zappos, diversity and individuality are central to our core values",
    link: "LEARN MORE ABOUT ZAPPOS ONE PORPOSE",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg",
    title: "Zappos for Good",
    desc: "Learn how to easily donate or recycle your secondhand items",
    link: "EXPLORE ZAPPOS FOR GOOD",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png",
    title: "Goods for Good",
    desc: "We're highlighting brands who are making a difference and helping build a better place for us all",
    link: "SHOP GOODS FOR GOOD",
  },
];



function Home() {
    return (
  
        <>
        <Navbar />
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

       
       <ShopPopularCategories />
        <Part3 key={part3Data.id} data={part3Data} />
        <FlexBox1 />
        <Carousels />
        <FlexBox2 />
        <AfterPay />
        <Part3 key={beforeFooter.id} data={beforeFooter} />
        <Footer />

        </>
    )
}


export default Home;
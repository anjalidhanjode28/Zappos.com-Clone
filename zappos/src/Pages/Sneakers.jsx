import styles from "../Style/sneaker.module.css";
import { Button , Box, Heading, Text} from "@chakra-ui/react"
import { Footer } from "../Components/Footer";
import Navbar from "../Routes/Navbar";

const womenSneakers = [
    {
      "imageurl": "https://m.media-amazon.com/images/I/719oXoOFoML._AC_UL320_.jpg",
      "desc": "Damyuan Women's Walking Shoes Tennis Sneakers Casual Lace Up Lightweight Running Shoes",
      "ratings": "4,450",
      "price": 31.44,
      "cutoff_price": 36.99,
      "id": 17
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/61bBZe-hCrL._AC_UL320_.jpg",
      "desc": "Skechers Women's D'Lites Memory Foam Lace-up Sneaker",
      "ratings": "55,193",
      "price": 55.99,
      "cutoff_price": 65.00,
      "id": 18
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/71Xj3eDJ0UL._AC_UL320_.jpg",
      "desc": "adidas Women's Puremotion Adapt Running Shoe",
      "ratings": "8,936",
      "price": 45.99,
      "cutoff_price": 65.00,
      "id": 19
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/71gHxcu8r9L._AC_UL320_.jpg",
      "desc": "Mishansha Women's Running Walking Shoes Breathable Air Cushion Sneakers",
      "ratings": "8,521",
      "price": 39.99,
      "cutoff_price": 49.99,
      "id": 20
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/61alcr5GlXL._AC_UL320_.jpg",
      "desc": "New Balance Women's 608 V5 Casual Comfort Cross Trainer",
      "ratings": "20,852",
      "price": 69.95,
      "cutoff_price": 74.99,
      "id": 21
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/71lrB7cklUL._AC_UL320_.jpg",
      "brand": "Addidas",
      "desc": "New Balance Women's Fresh Foam Roav V1 Running Shoe",
      "ratings": "20,864",
      "price": 79.95,
      "cutoff_price": 84.99,
      "id": 22
    },
  
    {
      "imageurl": "https://m.media-amazon.com/images/I/71Ylx0ggGsL._AC_UL320_.jpg",
      "brand": "CeCe",
      "desc": "Women Air Athletic Running Shoes - Air Cushion Shoes for Womens Mesh Sneakers Fashion Tennis Breathable Walking Gym Work Shoes",
      "ratings": "3,246",
      "price": 53.99,
      "id": 23
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/71L3ull4CxL._AC_UL320_.jpg",
      "brand": "Sporto",
      "desc": "Skechers Women's Go Walk Joy-15641 Sneaker",
      "ratings": "3,828",
      "price": 65.00,
      "id": 24
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/81loxjzrNwL._AC_UL320_.jpg",
      "brand": "PUMA",
      "desc": "PUMA Women's Tazon 6 WN's FM Cross-Trainer Shoe",
      "ratings": "11,628",
      "price": 36.98,
      "cutoff_price": 70.00,
      "id": 25
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/7109yUsURpS._AC_UL320_.jpg",
      "brand": "Athelitiie",
      "desc": "Easy Spirit Women's Punter Athletic Shoe",
      "ratings": "2,042",
      "price": 42.50,
      "cutoff_price": 79.00,
      "id": 26
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/61Xlmvtw6AL._AC_UL320_.jpg",
      "brand": "Addidas",
      "desc": "STQ Women's Running Shoes Breathable Air Cushion Sneakers",
      "ratings": "20,026",
      "price": 35.60,
      "cutoff_price": 68.99,
      "id": 27
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/61W4ID2z0kS._AC_UL320_.jpg",
      "brand": "PUMA",
      "desc": "Avia Avi-Verge Women’s Sneakers - Workout, Walking, Athletic, Cross Training, Tennis, Gym Shoes for Women",
      "ratings": "2,119",
      "price": 34.98,
      "cutoff_price": 45.00,
      "id": 28
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/71kO+HGXsTL._AC_UL320_.jpg",
      "brand": "CeCe",
      "desc": "Nike Women's Air Zoom Pegasus 36 Running Shoes",
      "ratings": "5,112",
      "price": 99.99,
      "id": 29
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/719mpPkDhUL._AC_UL320_.jpg",
      "brand": "Athelete",
      "desc": "Nike womens Sneaker",
      "ratings": "862",
      "price": 129.67,
      "id": 30
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/71kN6GMBVRL._AC_UL320_.jpg",
      "brand": "Puma",
      "desc": "New Balance Women's 411 V1 Training Shoe",
      "ratings": "10,608",
      "price": 64.95,
      "cutoff_price": 69.99,
      "id": 31
    },
    {
      "imageurl": "https://m.media-amazon.com/images/I/61eg9KPzgVL._AC_UL320_.jpg",
      "brand": "Casual",
      "desc": "Lamincoa Women's Air Running Shoes Breathable Walking Sneakers, Athletic Casual Sport Gym Jogging Tennis Shoes",
      "ratings": "304",
      "price": "$44.99",
      "id": 32
    }
]


export const Sneaker = () => {
    return (
      <>
      <Navbar />
      <Box bg='lavender' h='40px' w='100%' m='auto' p='5px'>
      <Text fontSize='lg'>Be the first to shop the newest home styles—now on Zappos! Shop Home Now</Text>
      </Box>

      <Box mt='20px' mb='40px'>
      <Heading as='h2' size='xl'>Sneakers</Heading>
      
      </Box>
      <div className={styles.gridDiv}>
      { 
        womenSneakers.map((data) => {
            return  (
               <div className={styles.flexDiv}>
               <div>
                <img src={data.imageurl}  />
               </div>
                <p className={styles.desc}>{data.desc}</p>
                <p className={styles.brand}>{data.brand}</p>
                <p className={styles.price}>${data.price}</p>
                <Button colorScheme='teal' variant='solid' w='150px'h='40px' m='auto' mb='10px'>Add to card</Button>
            </div> 
          
    
            
        
            )
 
        })
    
      }
      </div>
      <Footer />
      </>

    );
  };
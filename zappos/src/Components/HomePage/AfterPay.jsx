import React from "react";
import { Box, Image } from "@chakra-ui/react"
// import styled from "styled-components";

// const Parent = styled.div`
//   height: 250px;
//   width: 100%;
//   margin-top: 50px;
//   cursor: pointer;
// `;

export const AfterPay = () => {
  return (
    // <Parent>
     <Box m='auto' w='90%' mt='30px' mb='30px'>
      <Image
        w='100%'
        src="https://m.media-amazon.com/images/G/01/zopus2020v/ZAfterpay/Afterpay_Banner_CTA_1440x250.jpg"
        alt=""
      />
      </Box>
    // </Parent>
  );
};

import React from "react";
import { Box } from "@mantine/core";
import Header from "./Components/Header";
import { Center,Container, Flex } from "@mantine/core";
import ContactSection from "./Components/ContactSection";
import SocialMedia from "./Components/SocialMedia";

function BusCard() {
  return (
    <Container  style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
      <Box style={{ width: 'fit-content', maxWidth: '800px', height: 'fit-content' , border: '2px solid black', backgroundColor:"rgba(232, 230, 230, 1)" }}
    // <Container>
    //   <Flex
    //     justifyContent="center"
    //     alignItems="center"
    //     marginTop="10px"
    //     marginBottom="8px"
    >
    {/* //     <Box bg={"rgba(232, 230, 230, 1)"} my={10}> */}
          <Header />
          <ContactSection />
          <SocialMedia />
        </Box>
      {/* </Flex> */}
    {/* </Container> */}
    </Container>
  );
}

export default BusCard;

import React from "react";
import { Box } from "@mantine/core";
import Header from "./Components/Header";
import {Container, Flex } from "@mantine/core";
import ContactSection from "./Components/ContactSection";
import SocialMedia from "./Components/SocialMedia";

function BusCard() {
  return (
    <Container>
      <Flex
      justifyContent="center"
      alignItems="center"
      marginTop="10px"
      marginBottom="8px"
      >
         
      <Box bg={'rgba(232, 230, 230, 1)'} my={10}>
        <Header />
        <ContactSection />
        <SocialMedia />
      </Box>
      </Flex>
    </Container>
  );
}

export default BusCard;

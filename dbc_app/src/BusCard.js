import React from "react";
import { Box } from "@mantine/core";
import Header from "./Components/Header";
import { Center } from "@mantine/core";
import ContactSection from "./Components/ContactSection";
// import HeaderTest from "./Components/HeaderTest";

function BusCard() {
  return (
    <Center  style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center', marginTop: '40px'}}>
      <Box style={{ width: 'fit-content', maxWidth: '800px', height: 'fit-content' , border: '2px solid black' }}
        // w={300}
        // h={200}
        // bg="white"
        // c="black"
        // style={{
        //   border: "2px solid black",
        //   display: "flex",
      >
        <Header />
        <ContactSection />
      </Box>
    </Center>
  );
}

export default BusCard;

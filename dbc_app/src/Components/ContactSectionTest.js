import {  Container, Flex, Title, Text, Box } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from '@mantine/hooks';


function ContactSectionTest() {
  
const extraSmall = useMediaQuery('(max-width: 576px)');
const smallScreen = useMediaQuery('(min-width: 577px) and (max-width: 768px)');
const mediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 992px)');
// const largeScreen = useMediaQuery('(min-width: 1024px)');

const containerWidth = extraSmall
    ? '15%' // Fit for extra small screens
    : smallScreen
    ? '32%' // Fit for small screens
    : mediumScreen
    ? '35%' // Fit for medium screens
    : '37%'; // Default for large screens
    const hrWidth = extraSmall ? 290 : smallScreen ? 390 : mediumScreen ? 400 : 410;



  return (
    <Container style={{ width: containerWidth, margin: 'auto' }}>
      <Flex
        w={300}
        // bg="yellow"
        gap={10}
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
        mt={20}
        ml={-140}
      >
        <Title ml={10} pb={3} pt={5} order={2} color={'yellow'}> Coordonnées</Title>
        {/* Phone Number */}
        <Box display={"flex"} >
          <FontAwesomeIcon
            icon={faPhone}
            style={{
              color: "black",
              fontSize: "24px",
              marginRight: "30px",
              marginLeft: "10px",
            }}
          />
          <Text>06 06 06 06 06</Text>
        </Box>
        <hr
          style={{
            width: hrWidth,
            // maxWidth: "500px",
            border: "1px solid black",
            marginTop: "1px",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        ></hr>
        {/* Email */}
        <Box display={"flex"}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              color: "black",
              fontSize: "24px",
              marginRight: "30px",
              marginLeft: "10px",
            }}
          />
          <Text>Test@gmail.com</Text>
        </Box>
        <hr
          style={{
            width: hrWidth,
            border: "1px solid black",
            marginTop: "2px",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        ></hr>
        {/* Localisation */}
        <Box display={"flex"}>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{
              color: "black",
              fontSize: "24px",
              marginRight: "30px",
              marginLeft: "10px",
            }}
          />
          <Text size="md">17 Rue Othman Ben Affane, Ex Lafuente, Casablanca</Text>
        </Box>
        <hr
          style={{
            width: hrWidth,
            border: "1px solid black",
            marginTop: "2px",
            marginLeft: "10px",
          }}
        ></hr>


      </Flex>
    </Container>
  );
}

export default ContactSectionTest;

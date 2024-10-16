import {  Container, Flex, Title, Text, Box } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ContactSection() {
  return (
    <Container>
      <Flex
        w={400}
        bg="gray.3"
        gap="md"
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
        mt={20}
        ml={70}
      >
        <Title ml={10} pt={10} order={2}> Coordonnées</Title>
        {/* Phone Number */}
        <Box display={"flex"}>
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
            width: "350px",
            border: "1px solid black",
            marginTop: "2px",
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
            width: "350px",
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
            width: "350px",
            border: "1px solid black",
            marginTop: "2px",
            marginLeft: "10px",
          }}
        ></hr>


      </Flex>
    </Container>
  );
}

export default ContactSection;

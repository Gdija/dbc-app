import { Avatar, Group, Container, Flex, Title } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <Container>
      <Flex
        w={400}
        // bg="blue"
        gap="md"
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
        my={20}
        ml={70}
      >
        <Title ml={10} mb={-9} pt={5} order={2}>
          Réseaux Sociaux
        </Title>
        <Group gap={40} mt={8} mb={-4} ml={10} position="center">
          <Avatar radius="xl" size={60} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faFacebookF} />
          </Avatar>
          <Avatar radius="xl" size={60} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Avatar>
          <Avatar radius="xl" size={60} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Avatar>
          <Avatar radius="xl" size={60} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faInstagram} />
          </Avatar>
        </Group>
      </Flex>
    </Container>
  );
}

export default SocialMedia;

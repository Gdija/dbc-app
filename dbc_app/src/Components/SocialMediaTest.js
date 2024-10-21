import { Avatar, Group, Container, Flex, Title } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "@mantine/hooks";

function SocialMediaTest() {
  const extraSmall = useMediaQuery("(max-width: 576px)");
  const smallScreen = useMediaQuery("(min-width: 577px) and (max-width: 768px)");
  const mediumScreen = useMediaQuery("(min-width: 768px) and (max-width: 992px)");

  // const avatarIcons = [faFacebookF, faTwitter, faLinkedin, faInstagram];
  
  const containerWidth = extraSmall ? '85%' : smallScreen? 50 : mediumScreen ? 55 : 60;

  const avatarSize = extraSmall
    ? 40 // Smaller avatar for extra small screens
    : smallScreen
    ? 50 // Medium size for small screens
    : mediumScreen
    ? 55 // Larger size for medium screens
    : 60; // Default for large screens
  return (
    <Container style={{ width: containerWidth, margin: 'auto' }}>
      <Flex
        w="100%"
        // bg="blue"
        gap={extraSmall ? 'sm' : 'md'}
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
        my={20}
        // ml={-40}
      >
        <Title align={extraSmall ? 'center' : 'left'} ml={extraSmall ? 0 : 10} pt={-2} mt={-3} order={2}>
          Réseaux Sociaux
        </Title>
        <Group gap={extraSmall ? 20 : 50} mt={8} mb={-4} ml={extraSmall ? 0 : 10} position="center">
          <Avatar radius="xl" size={avatarSize} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faFacebookF} />
          </Avatar>
          <Avatar radius="xl" size={avatarSize} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Avatar>
          <Avatar radius="xl" size={avatarSize} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Avatar>
          <Avatar radius="xl" size={avatarSize} color="white" bg={"black"}>
            <FontAwesomeIcon icon={faInstagram} />
          </Avatar>
        </Group>
      </Flex>
    </Container>
  );
}

export default SocialMediaTest;

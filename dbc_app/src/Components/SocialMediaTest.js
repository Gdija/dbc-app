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
  const mediumScreen = useMediaQuery("(min-width: 769px) and (max-width: 992px)");

  // const avatarIcons = [faFacebookF, faTwitter, faLinkedin, faInstagram];
  
  const containerWidth = extraSmall ? '85%' : smallScreen? '90%' : mediumScreen ? '90%' : '100%';

  const avatarSize = extraSmall ? 40 : smallScreen ? 50 : mediumScreen ? 55 : 60;
   const iconsGap = extraSmall ? 41 : smallScreen ? 65 : mediumScreen ? 55 : 60;
  return (
    <Container style={{ width: containerWidth, margin: 'auto' }}>
      <Flex
        w="100%"
        // bd={"2px solid black"}
        // bg="blue"
        gap={extraSmall ? 'md' : 'md'}
        justify="center"
        align="flex-start"
        direction="column"
        wrap="wrap"
        my={20}
        // ml={-40}
      >
        <Title align='left' ml={extraSmall ? 0 : 10} pt={5}  mt={-3} order={2}>
          Réseaux Sociaux
        </Title>
        <Group gap={iconsGap} mt={-3} mb={-4} ml={extraSmall ? 0 : 5} position="center">
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

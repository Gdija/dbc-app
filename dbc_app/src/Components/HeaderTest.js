import {
  Avatar,
  Container,
  Group,
  Box,
  Text,
  Title,
  Flex,
} from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import ResponsiveAvatar from "./responsiveAvatar";



function HeaderTest() {
  // const theme = useMantineTheme();
  const icons = [faPhone, faEnvelope, faMessage];

  const extraSmall = useMediaQuery('(max-width: 576px)');
  const smallScreen = useMediaQuery('(min-width: 577px) and (max-width: 768px)');
  const mediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 992px)');
  const largeScreen = useMediaQuery('(min-width: 1024px)');
// box width and height based on screen size
  const infoWidth = extraSmall ? 300 : smallScreen ? 400 : mediumScreen ? 410 : largeScreen ? 420 : 410;
  const infoHeight = extraSmall ? 150 : smallScreen ? 200 : mediumScreen ? 200 : largeScreen ? 240 : 300;
  
  // Calculate avatar size based on screen size
  const avatarWidth = extraSmall ? 107 : smallScreen ? 150 : mediumScreen ? 150 : largeScreen ? 150 : 170; 
  const avatarHeight = extraSmall ? 150 : smallScreen ? 200 : mediumScreen ? 200 : largeScreen ? 235 : 170;
  
  // const { classes } = useStyles();

  
  
  // texte size based on screen size in info size
  const titleSize = extraSmall ? 18 : smallScreen ? 25 : mediumScreen ? 25 : largeScreen ? 28 : 20;
  const textSize = extraSmall ? 16 : smallScreen ? 23 : mediumScreen ? 23 : largeScreen ? 23 : 15;
  return (
    <Container px={0}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "256px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 100,0 100,37.5 50,50 0,37.5" fill="black" />
          </svg>
        </Box>

        <Flex
          style={{
            width: `${infoWidth}px`,
            // maxWidth: "800px",
            height: `${infoHeight}px`,
            border: "2px solid red",
            borderRadius: "20px",
            marginTop: "-140px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            flexDirection: "row",
          }}
        >
          {/* User image */}

          <Avatar
          radius="lg" 
          src={null} 
          alt="no image here"
          style={{ width: `${avatarWidth}px`, height: `${avatarHeight}px`, marginRight: '30px', marginLeft: '1px' }}
          />
          <Group>
            {/* User info */}
            <Box mr={20} mt={12}>
              <Box
                align="flex-start"
                pl={8}
              >
                <Title order={4} size={titleSize}>Ismail Ettaoussi</Title>
                <Text style={{ fontSize: `${textSize}px` }}>JS Developer</Text>
                <Text style={{ fontSize: `${textSize}px` }}>GLM</Text>
              </Box>

              <Group
              ml={9}
                gap={20}
                mt={20}
                position="center"
                mb={5}
                style={{
                  width: "100%", // Make sure the Group takes full width
                  justifyContent: "start", // Center items on all screen sizes
                   

                  // Responsive behavior for smaller screens
                  // [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  //   // flexDirection: "column", // Stack vertically on small screens
                  //   alignItems: "center", // Center the items
                  //   spacing: 5, // Increase the spacing between items
                  //   paddingBottom: "20px",
                  // },
                }}
              >
                {icons.map((icon, index) =>(
                  <ResponsiveAvatar key={index} icon={icon} />
                ))}
                {/* <Avatar radius="xl" size={50} color="white" bg={"black"}>
                  <FontAwesomeIcon icon={faPhone} />
                </Avatar>
                <Avatar radius="xl" size={50} color="white" bg={"black"}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Avatar>
                <Avatar radius="xl" size={50} color="white" bg={"black"}>
                  <FontAwesomeIcon icon={faMessage} />
                </Avatar> */}
              </Group>
            </Box>
          </Group>
        </Flex>
      </Box>
    </Container>
  );
}

export default HeaderTest;

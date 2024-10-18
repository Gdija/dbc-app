import {
  Avatar,
  Container,
  Group,
  Box,
  Text,
  Title,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import ResponsiveAvatar from "./responsiveAvatar";



function Header() {
  const theme = useMantineTheme();
  const icons = [faPhone, faEnvelope, faMessage];

  const smallScreen = useMediaQuery('(max-width: 576px)');
  const mediumScreen = useMediaQuery('(max-width: 768px)');
  const largeScreen = useMediaQuery('(max-width: 992px)');

  // Calculate avatar size based on screen size
  const avatarWidth = smallScreen ? 107 : mediumScreen ? 150 : largeScreen ? 150 : 170; 
  const avatarHeight = smallScreen ? 150 : mediumScreen ? 200 : largeScreen ? 150 : 170;
  // const { classes } = useStyles();

  // box width and height based on screen size
  const infoWidth = smallScreen ? 300 : mediumScreen ? 400 : largeScreen ? 300 : 300;
  const infoHeight = smallScreen ? 150 : mediumScreen ? 200 : largeScreen ? 300 : 300;
  
  // texte size based on screen size in info size
  const titleSize = smallScreen ? 15 : mediumScreen ? 25 : largeScreen ? 20 : 20;
  const textSize = smallScreen ? 12 : mediumScreen ? theme.fontSizes.md : largeScreen ? 15 : 15;
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
                <Text size={textSize}>JS Developer</Text>
                <Text >GLM</Text>
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

export default Header;

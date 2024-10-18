import { Avatar, Container, Group, Box, Text, Title, Flex } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMessage,} from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
   
      <Container px={0}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
              style={{ width: "100%", height: "100%"}}
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 100,0 100,37.5 50,50 0,37.5" fill="black" />
            </svg>
          </Box>

          <Flex
          style={{
            width: 'fit-content',
            height: '170px',
            // border: '2px solid red',
            borderRadius: '20px',
            marginTop: '-140px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
            {/* User image */}

            <Avatar radius="lg" src={null} alt="no image here" 
            style={{ width: '138px', height: '170px', marginRight: '30px', marginLeft: '1px'}} 
            />
            <Group >

              {/* User info */}
              <Box mr={20} mt={12} >
                <Box align="flex-start" pl={8}>
                    <Title order={4}>Ismail Ettaoussi</Title>
                    <Text>JS Developer</Text>
                    <Text>GLM</Text>
                </Box>

                <Group spacing={10} mt={24} position="center">
                <Avatar radius="xl" size={50} color="white" bg={"black"}>
                    <FontAwesomeIcon icon={faPhone} />
                    </Avatar>
                  <Avatar radius="xl" size={50} color="white" bg={"black"}>
                      <FontAwesomeIcon icon={faEnvelope} />
                  </Avatar>
                  <Avatar radius="xl" size={50} color="white" bg={"black"}>
                      <FontAwesomeIcon icon={faMessage} />
                  </Avatar>
                </Group>
              </Box>
            </Group>
          </Flex>
        </Box>
      </Container>
  );
}

export default Header;

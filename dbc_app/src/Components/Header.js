import { Avatar, Container, Group, Box, Text, Title, Flex } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMessage,} from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
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
              overflow: "hidden",
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
            height: '176px',
            border: '2px solid red',
            borderRadius: '20px',
            marginTop: '-120px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
            
            <Avatar radius="xd" src={null} alt="no image here" 
            style={{ width: '128px', height: '176px', marginRight: '29px' }} 
            />
            {/* User image */}
            <Group >

              {/* User info */}
              <Box mr={20} mt={12} >
                <Title order={4} align="center">Ismail Ettaoussi</Title>
                <Text align="center">JS Developer</Text>
                <Text align="center">GLM</Text>

                <Group spacing={20} mt={24} position="center">
                <Avatar radius="xl" size={45} color="black">
                    <FontAwesomeIcon icon={faPhone} />
                    </Avatar>
                  <Avatar radius="xl" size={45} color="black">
                      <FontAwesomeIcon icon={faEnvelope} />
                  </Avatar>
                  <Avatar radius="xl" size={45} color="black">
                      <FontAwesomeIcon icon={faMessage} />
                  </Avatar>
                </Group>
              </Box>
            </Group>
          </Flex>
        </Box>
      </Container>
    </header>
  );
}

export default Header;

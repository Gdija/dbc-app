import { Container, Flex } from "@mantine/core";
import HeaderTest from "./Components/HeaderTest";
import ContactSectionTest from "./Components/ContactSectionTest";
import SocialMediaTest from "./Components/SocialMediaTest";

function BusCardTest() {
  return (
    //         <Container
    //   size="md"
    //   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
    // >
    <Container
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid black', backgroundColor:"rgba(232, 230, 230, 1)", width: '100%', maxWidth: '500px',  paddingLeft: '0px', paddingRight: '0px'}}>
      <Flex
        // w={"fit-content"}
        // bg="rgba(232, 230, 230, 1)"
        // border="2px solid black"
        // justify="center"
        // align="center"
        // size="md"
        // style={{
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     // minHeight: '100vh',
        //     flexDirection: 'column',
        //     width: 'fit-content',
        //     // maxWidth: '600px',
        //     paddingLeft: '0px',
        //     paddingRight: '0px',

        // //   width: '100%',
        // //   maxWidth: '100%',
        //   backgroundColor: 'rgba(232, 230, 230, 1)',
        //   border: '2px solid black',
        //  borderRadius: '8px',
      ></Flex>
      <HeaderTest />
      <ContactSectionTest />
      <SocialMediaTest />
    </Container>
    // </Container>
  );
}
export default BusCardTest;

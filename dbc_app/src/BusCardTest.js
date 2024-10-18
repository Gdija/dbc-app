import { Box, Container, Flex, Text, theme } from '@mantine/core';
import HeaderTest from './Components/HeaderTest';
import ContactSection from './Components/ContactSection';
// import SocialMedia from './Components/SocialMedia';

function BusCardTest() {
    return (
//         <Container
//   size="md"
//   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
// >
  <Container
  size="md"
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // minHeight: '100vh',
        flexDirection: 'column',
        width: 'fit-content',
        paddingLeft: '0px',
        paddingRight: '0px',
        
    //   width: '100%',
    //   maxWidth: '100%',
      backgroundColor: 'rgba(232, 230, 230, 1)',
      border: '2px solid black',
     borderRadius: '8px',
      '@media (max-width: 500px)': {
      Width: '400px',
      backgroundColor: 'red', // Apply a smaller width on mobile screens
    },
    }}
  >
        <HeaderTest />
        <Text sx={(theme) => ({ color: theme.colors.white[0], fontSize: 18, lineHeight: 1.4 })}>Text with custom styles</Text>
        {/* <ContactSection /> */}
        {/* <SocialMedia /> */}
  </Container>
// </Container>
    )
}
export default BusCardTest;


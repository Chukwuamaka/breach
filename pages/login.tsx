import Page from '@/components/Page';
import { Box, Text, VStack } from '@chakra-ui/react';
import BackButton from '@/components/BackButton';
import AuthForm from '@/components/AuthForm';

export default function Login() {
  return (
    <Page title='Create a Breach Account' withNavbar={true}>
      <Box as='section'>
        <Box pt={6} pb='112px' className='responsive_container'>
          <Box ml='8.9vw'>
            <BackButton />
          </Box>

          <VStack spacing={2} align='center' maxW='448px' mx='auto'>
            <Text as='h1' textStyle='md_heading' letterSpacing={-0.32} textAlign='center'>
              Log in to Breach
            </Text>
            <Text textStyle='md_text' textAlign='center' lineHeight='30px'>
              Break through the noise and discover content that matters to you in under 3 minutes.
            </Text>
          </VStack>
          
          <AuthForm purpose='login' />
        </Box>
      </Box>
    </Page>
  )
}

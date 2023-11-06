import Page from '@/components/Page';
import { Box, Text, VStack } from '@chakra-ui/react';
import BackButton from '@/components/BackButton';
import CustomLink from '@/components/CustomLink';
import { space_grotesk } from '@/fonts';
import AuthForm from '@/components/AuthForm';

export default function Signup() {
  return (
    <Page title='Create a Breach Account' withNavbar={true}>
      <Box as='section'>
        <Box pt={6} pb='112px' className='responsive_container'>
          <Box ml='8.9vw'>
            <BackButton />
          </Box>

          <VStack spacing={2} align='center' maxW='448px' mx='auto'>
            <Text as='h1' textStyle='md_heading' letterSpacing={-0.32} textAlign='center'>
              Join Breach
            </Text>
            <Text textStyle='md_text' textAlign='center' lineHeight='30px'>
              Break through the noise and discover content that matters to you in under 3 minutes.
            </Text>
          </VStack>
          
          <AuthForm />

          <Text textStyle='sm_text' textAlign='center' mt='126px' className={space_grotesk.className}>
            By signing up, you agree to Breach&apos;s {' '} 
            <CustomLink href='/terms' textDecor='underline' textStyle='sm_text'
              customStyles={{color: '#8311F9', fontSize: '0.875rem'}}
            >
              Terms
            </CustomLink>
            {' '} & {' '}
            <CustomLink href='/privacy-policy' textDecor='underline' textStyle='sm_text'
              customStyles={{color: '#8311F9', fontSize: '0.875rem'}}
            >
              Privacy Policy
            </CustomLink>
          </Text>
        </Box>
      </Box>
    </Page>
  )
}

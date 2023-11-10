import Page from '@/components/Page';
import { Box, Text, VStack } from '@chakra-ui/react';
import happy_beaver from "../public/happy_beaver.webp";
import hurray from "../public/hurray.gif";
import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
import useUser from '@/hooks/useUser';
import Loading from '@/components/Loading';

export default function WelcomeScreen() {
  const { user } = useUser();

  if (!user) {
    return (
      <Page title='Welcome to Breach' withNavbar={true}>
        <Box as='section'>
          <Box pt={6} pb='60px' className='responsive_container'>
            <Loading size='xl' containerProps={{
                display: 'flex', h: '50dvh', justifyContent: 'center', alignItems: 'center'
              }}
            />
          </Box>
        </Box>
      </Page>
    )
  }
  return (
    <Page title='Welcome to Breach' withNavbar={true}>
      <Box as='section'>
        <VStack spacing={7} pb={24} className='responsive_container'>
          <Box pos='relative'>
            <Image src={happy_beaver} alt='A happy beaver' width={270} height={270} priority />
            <Box pos='absolute' top='-40%' left='-40%' w='max-content'>
              <Image src={hurray} alt='' width={500} height={500} />
            </Box>
          </Box>

          <VStack spacing='18px' maxW='470px'>
            <Text as='h1' color='brand.grey.900' fontSize='2.625rem' fontWeight='semibold' 
              textAlign='center' letterSpacing={-0.42}
            >
              Welcome to Breach 🥳
            </Text>
            <Text textStyle='md_text' textAlign='center' lineHeight='30px'>
              Just a few quick questions to help personalise your Breach experience. Are you ready?
            </Text>
          </VStack>

          <CustomLink href='/select-interests' variant='solid' customStyles={{backgroundColor: '#181818'}}>
            Let&apos;s begin!
          </CustomLink>
        </VStack>
      </Box>
    </Page>
  )
}
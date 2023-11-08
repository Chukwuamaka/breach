import BackButton from "@/components/BackButton";
import Page from "@/components/Page";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import beaver from "../public/beaver.webp";
import { categories } from "@/data";
import Tag from "@/components/Tag";
import CustomLink from "@/components/CustomLink";

export default function SelectInterests() {
  return (
    <Page title='Select your interests | Breach' withNavbar={true}>
      <Box as='section'>
        <Box pt={6} pb='60px' className='responsive_container'>
          <Box ml='8.9vw'>
            <BackButton />
          </Box>

          <VStack spacing={10} maxW='732px' m='auto'>
            <Box textAlign='center'>
              <Box maxW='max-content' mx='auto'>
                <Image src={beaver} alt='A beaver' width={100} height={100} />
              </Box>
              <Text textStyle='subheading' mt={3}>What are your interests?</Text>
              <Text textStyle='md_text' mt={2}>
                Select your interests and I&apos;ll recommend some series I&apos;m certain you&apos;ll enjoy!
              </Text>
            </Box>
            <HStack spacing={5} justify='center' flexWrap='wrap'>
              {categories.map(({title, icon}, index) => (
                <Tag key={title+index} leftIcon={<Text>{icon}</Text>} iconSpacing={2}>
                  {title}
                </Tag>
              ))}
            </HStack>
            <VStack spacing='18px'>
              <Button bg='brand.grey.900'>Next</Button>
              <CustomLink href="/dashboard/home" size='sm' textStyle='sm_text' style={{color: '#6A6A6A', fontWeight: 400}}>
                Skip for later
              </CustomLink>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Page>
  )
}

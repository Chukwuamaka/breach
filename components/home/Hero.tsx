import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import beaver_with_telescope_animation from "../../public/beaver_with_telescope_animation.gif";
import CustomLink from "../CustomLink";
import { space_grotesk } from "@/fonts";

export default function Hero() {
  return (
    <Box as='section' bg='brand.nearWhite'>
      <Flex justify='space-between' align='end' pb='130px' mt={-2.5} className="responsive_container">
        <VStack spacing='18px' align='start' flexBasis='45%'>
          <Text color='brand.grey.900' fontSize='4.5rem' fontWeight='semibold' lineHeight='117.5%' letterSpacing={-0.8}>
            Find <Text as='span' color='brand.purple.700'>Great</Text> Ideas
          </Text>
          <Text textStyle='subheading' lineHeight='183.33%' fontWeight='normal'>
            Subscribe to your favourite creators and thinkers. Support work that matters
          </Text>
          <CustomLink variant="solid" href='/join' className={space_grotesk.className} mt={8}
            customStyles={{fontSize: 20, fontWeight: 'bold', height: 60, lineHeight: 8}}
          >
            Join Breach
          </CustomLink>
        </VStack>
        <Box flex='1'>
          <Image src={beaver_with_telescope_animation} alt='A beaver looking through a telescope'
            width={641} height={512} priority
          />
        </Box>
      </Flex>
    </Box>
  )
}

import { Box, Flex, HStack } from "@chakra-ui/react";
import CustomLink from "./CustomLink";
import Image from "next/image";
import breach_logo from "../public/breach_logo.svg"

export default function Footer() {
  return (
    <Box as='footer' bg='white' borderTop='1px solid' borderColor='brand.grey.100'>
      <Flex justify='space-between' align='center' py={9} className="responsive_container">
        <Box>
          <Image src={breach_logo} alt='Breach logo' />
        </Box>
        <HStack spacing={10}>
          <CustomLink href='mailto:support@breach.example' color='brand.purple.600'>
            support@breach.example
          </CustomLink>
          <CustomLink href="/about">About Breach</CustomLink>
          <CustomLink href="/terms">Terms</CustomLink>
          <CustomLink href="/privacy-policy">Privacy Policy</CustomLink>
        </HStack>
      </Flex>
    </Box>
  )
}

import { Box, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import breach_logo from "../public/breach_logo.svg"
import CustomLink from "./CustomLink";
import { space_grotesk } from "@/fonts";

export default function Navbar({ withNavbarCTAs = false }: { withNavbarCTAs?: boolean }) {
  return (
    <Box as='nav' bg='brand.nearWhite'>
      <Flex justify='space-between' align='center' py={9} className="responsive_container">
        <Box>
          <Image src={breach_logo} alt='Breach logo' />
        </Box>
        {withNavbarCTAs && 
          <HStack spacing={8}>
            <CustomLink href="/login" variant="outline" fontWeight='medium' className={space_grotesk.className}>
              Log in
            </CustomLink>
            <CustomLink href="/join" variant="solid" fontWeight='medium'>Join Breach</CustomLink>
          </HStack>
        }
      </Flex>
    </Box>
  )
}

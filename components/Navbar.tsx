import { Box, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import breach_logo from "../public/breach_logo.svg"
import CustomLink from "./CustomLink";
import { space_grotesk } from "@/fonts";
import Link from "next/link";

export default function Navbar({ withNavbarCTAs = false }: { withNavbarCTAs?: boolean }) {
  return (
    <Box as='nav' bg={withNavbarCTAs ? 'brand.nearWhite' : 'white'}>
      <Flex justify='space-between' align='center' py={9} className="responsive_container">
        <Link href='/'>
          <Image src={breach_logo} alt='Breach logo' priority />
        </Link>
        {withNavbarCTAs && 
          <HStack spacing={8}>
            <CustomLink href="/login" variant="outline" className={space_grotesk.className}>
              Log in
            </CustomLink>
            <CustomLink href="/signup" variant="solid">Join Breach</CustomLink>
          </HStack>
        }
      </Flex>
    </Box>
  )
}

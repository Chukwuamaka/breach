import { Box, Button, HStack, Icon, Link, StackProps, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import breach_logo from "../../public/breach_logo.svg";
import Pencil from "../icons/PencilIcon";
import CustomLink from "../CustomLink";
import { useRouter } from "next/router";
import HomeIcon from "../icons/HomeIcon";
import MessageTextIcon from "../icons/MessageTextIcon";
import GridIcon from "../icons/GridIcon";
import { PropsWithChildren } from "react";
import useUser from "@/hooks/useUser";
import Loading from "../Loading";

const sidebarItems = [
  { title: 'Home', route: '/dashboard/home', icon: HomeIcon },
  { title: 'Dashboard', route: '/dashboard', icon: GridIcon },
  { title: 'Publications', route: '/dashboard/publications', icon: MessageTextIcon },
]

export default function Dashboard({ children, ...props }: PropsWithChildren<StackProps>) {
  const { pathname } = useRouter();
  const { user } = useUser();

  return (
    <HStack align='start' {...props}>
      <Box py='51px' px={6} h='100vh' flexBasis='20%'
        borderRight='1px solid' borderBottom='1px solid' borderColor='brand.grey.200'
      >
        <Box px={3}>
          <Link href='/'>
            <Image src={breach_logo} alt='Breach logo' priority />
          </Link>
        </Box>
        <Button w='full' mt='70px' fontSize='0.875rem' iconSpacing={2} leftIcon={<Icon as={Pencil} />}>
          Start writing
        </Button>
        <VStack spacing={5} mt={10} align='start'>
          {sidebarItems.map(({title, route, icon}) => (
            <CustomLink key={route} href={route} w='full' borderRadius={8} bg={pathname === route ? '#FAF2FF' : 'none'}
              customStyles={{color: pathname === route ? '#8311F9' : '#929292', padding: '12px 16px', textDecoration: 'none' }}
            >
              <Text as='span' mr={3} verticalAlign='middle'>
                <Icon as={icon} boxSize='1.25em' />
              </Text>
              {title}
            </CustomLink>
          ))}
        </VStack>
      </Box>
      <Box flex='1'>
        {user ?
          children
          :
          <Loading size='xl' containerProps={{
              display: 'flex', h: '100dvh', justifyContent: 'center', alignItems: 'center'
            }}
          />
        }
      </Box>
    </HStack>
  )
}

import { Button, Icon } from "@chakra-ui/react";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button variant='unstyled' color='brand.grey.900' fontSize='1.125rem' fontWeight='medium'
      display='inline-flex' letterSpacing={-0.18} onClick={() => router.back()}
      iconSpacing={1} leftIcon={<Icon as={ChevronLeftIcon} mb='1px' />}
    >
      Back
    </Button>
  )
}

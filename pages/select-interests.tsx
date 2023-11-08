import BackButton from "@/components/BackButton";
import Page from "@/components/Page";
import { Box, Button, HStack, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import Image from "next/image";
import beaver from "../public/beaver.webp";
import Tag from "@/components/Tag";
import CustomLink from "@/components/CustomLink";
import useSWR from "swr";
import { fetchData } from "@/services/fetch.service";
import { CategoryData } from "@/components/home/Categories";
import { useState } from "react";
import { sendData } from "@/services/send_data.service";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

const fetcher = (args: string) => fetchData(args);

export default function SelectInterests() {
  const { data: categories, isLoading, error } = useSWR('/blog/categories', fetcher);
  const [interests, setInterests] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { user } = useUser();
  const makeToast = useToast();

  const handleSelect = (value: string) => {
    const interestsCopy = new Set(interests);
    interestsCopy.has(+value) ? interestsCopy.delete(+value) : interestsCopy.add(+value)
    setInterests(Array.from(interestsCopy));
  }

  const handleError = (toastId: string, message: string, description?: string) => {
    if (!makeToast.isActive(toastId)) {
      return makeToast({
        id: toastId,
        title: message,
        description,
        status: 'error',
        duration: 5000,
      })
    }
  }

  const handleSuccess = (toastId: string, message: string) => {
    if (!makeToast.isActive(toastId)) {
      makeToast({
        id: toastId,
        title: message,
        status: 'success',
        duration: 3000,
      });
    }
    setInterests([]);
    router.push('/dashboard/home');
  }

  const submitCategories = async () => {
    setLoading(true);
    try {
      const res = await sendData(`/users/${user?.userId}/interests`, { interests }, user?.token);
      if (res.status === 201) {
        handleSuccess('submit_status', 'Interests saved successfully');
      } else {
        handleError('submit_status', "An error ocurred", "Please try again later")
      }
    }
    catch (error) {
      handleError("An error ocurred", "Please check your internet connection or try again later.");
    }
    setLoading(false);
  }
  
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
            {error ?
              handleError('fetch_categories_toast', 'Could not fetch categories', "Please check your internet connection or try again later.")
              :
              isLoading ?
                <Box textAlign='center' mt={8}>
                  <Spinner color='purple.600' size='lg' />
                </Box>
              :
              <HStack spacing={5} justify='center' flexWrap='wrap'>
                {(categories as CategoryData[]).map(({id, name, icon}) => (
                  <Tag key={id} id={`${id}`} isSelected={interests.includes(id)} handleSelect={handleSelect} 
                    leftIcon={<Text>{icon}</Text>} iconSpacing={2}
                  >
                    {name}
                  </Tag>
                ))}
              </HStack>
            }
            <VStack spacing='18px'>
              <Button bg='brand.grey.900' isLoading={loading} loadingText='Saving...' onClick={submitCategories}
              >
                Next
              </Button>
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

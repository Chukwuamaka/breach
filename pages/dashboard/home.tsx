import Dashboard from "@/components/dashboard/Dashboard";
import Image from "next/image";
import top_pick from "../../public/top_pick.webp";
import { Box, Flex, StackDivider, Text, VStack } from "@chakra-ui/react";
import { space_grotesk } from "@/fonts";
import ArticleSection from "@/components/articles/ArticleSection";
import { streams } from "@/data";
import StreamSummary from "@/components/dashboard/StreamSummary";
import useWebSocket from "@/hooks/useWebSocket";

function TopPick() {
  return (
    <VStack spacing={3.5} mt='18px' align='start'>
      <Box>
        <Image src={top_pick} alt="" width={666} priority />
      </Box>
      <VStack spacing={2} align='start'>
        <Text textStyle='subheading'>How to succeed at long-term investments</Text>
        <Text textStyle='md_text' color='brand.grey.600'>
          I recently started contemplating how to apply my carefree mentality to my financial planning. I&apos;ve mainly been considering looking at my crypto wallets whenever I feel
        </Text>
      </VStack>
    </VStack>
  )
}

export default function DashboardHome() {
  const { events } = useWebSocket();
  return (
    <Dashboard>
      <Flex maxH='100vh' overflowY='auto'>
        <VStack spacing='50px' p={10} pb='186px' flex='1'>
          <Box>
            <Text as='h2' textStyle='sm_heading' className={space_grotesk.className}>Top Picks</Text>
            <Text textStyle='md_text' color='brand.grey.600'>Experience the best of Breach</Text>
            <TopPick />
          </Box>
          <ArticleSection />
        </VStack>

        <VStack spacing={6} px={7} py={10} divider={<StackDivider />} flexBasis='35%' h='full'
          borderLeft='1px solid' borderBottom='1px solid' borderColor='brand.grey.200'
        >
          <Box className={space_grotesk.className}>
            <Text as='h2' textStyle='sm_heading'>Streams</Text>
            <Text textStyle='md_text' color='brand.grey.600' letterSpacing='normal'>
              Discover trending content from topics you care about in real time
            </Text>
          </Box>
          <VStack spacing='33px'>
            {streams.map((stream, index) => (
              <StreamSummary key={stream.published_date+index} {...stream} />
            ))}
          </VStack>
        </VStack>
      </Flex>
    </Dashboard>
  )
}

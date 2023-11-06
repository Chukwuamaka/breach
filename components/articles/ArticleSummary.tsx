import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface ArticleSummaryProps {
  imageSrc: StaticImageData;
  sub_category: string;
  title: string;
  excerpt: string;
  author: string;
  published_date: string;
}

export default function ArticleSummary(props: ArticleSummaryProps) {
  const { imageSrc, sub_category, title, excerpt, author, published_date } = props;
  return (
    <HStack spacing={7} align='start'>
      <Box flexBasis='35%'>
        <Image src={imageSrc} alt='' width={266} height={184} />
      </Box>
      <VStack spacing={2} align='start' flex='1'>
        <Text textTransform='uppercase' textStyle='sm_text'>{sub_category}</Text>
        <VStack spacing={1} align='start'>
          <Text textStyle='subheading'>{title}</Text>
          <Text textStyle='md_text' color='brand.grey.600' noOfLines={2}>{excerpt}</Text>
        </VStack>
        <HStack spacing={2} color='brand.grey.900' textTransform='uppercase' letterSpacing={0.22}
          fontSize={11} divider={<Box w={1.5} h={1.5} borderRadius='50%' bg='brand.grey.900'></Box>}
        >
          <Text>{author}</Text>
          <Text>{published_date}</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

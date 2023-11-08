import { Box, HStack, Text } from "@chakra-ui/react";

interface StreamSummaryProps {
  title: string;
  excerpt: string;
  author: string;
  published_date: string;
}

export default function StreamSummary({ title, excerpt, author, published_date }: StreamSummaryProps) {
  return (
    <Box>
      <Text textStyle='md_text' textTransform='uppercase' fontWeight='semibold' lineHeight={5}>{title}</Text>
      <Text mt={1} noOfLines={2} textStyle='md_text' color='brand.grey.600'>{excerpt}</Text>
      <HStack spacing={2} mt={2} divider={<Box w={1} h={1} borderRadius='50%' bg='brand.grey.900'></Box>}
        color='brand.grey.900' textTransform='uppercase' letterSpacing={0.22} fontSize={11}
      >
        <Text>{author}</Text>
        <Text>
          {new Intl.DateTimeFormat("en-GB", {dateStyle: 'medium'}).format(new Date(published_date))}  
        </Text>
      </HStack>
    </Box>
  )
}

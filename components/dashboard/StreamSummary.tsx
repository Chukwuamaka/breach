import { StreamEvent } from "@/hooks/useWebSocket";
import { Box, HStack, Text } from "@chakra-ui/react";

export default function StreamSummary(props: StreamEvent) {
  const { title, content, author, createdAt } = props;

  return (
    <Box>
      <Text textStyle='md_text' textTransform='uppercase' fontWeight='semibold' lineHeight={5}>{title}</Text>
      <Text mt={1} noOfLines={2} textStyle='md_text' color='brand.grey.600'>{content}</Text>
      <HStack spacing={2} mt={2} divider={<Box w={1} h={1} borderRadius='50%' bg='brand.grey.900'></Box>}
        color='brand.grey.900' textTransform='uppercase' letterSpacing={0.22} fontSize={11}
      >
        <Text>{author.name}</Text>
        <Text>
          {new Intl.DateTimeFormat("en-GB", {dateStyle: 'medium'}).format(new Date(createdAt))}  
        </Text>
      </HStack>
    </Box>
  )
}

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Article } from "./ArticleList";

export default function ArticleSummary(props: Article) {
  const { imageUrl, category, title, content, author, createdAt } = props;

  return (
    <HStack spacing={7} align='stretch'>
      <Box flexBasis='35%' maxH='184px'>
        <Image src={imageUrl} alt='' width={266} height={184} style={{width: '100%', height: '100%'}} />
      </Box>
      <VStack spacing={2} align='start' flex='1'>
        <Text textTransform='uppercase' textStyle='sm_text'>{category.name}</Text>
        <VStack spacing={1} align='start'>
          <Text textStyle='subheading'>{title}</Text>
          <Text textStyle='md_text' color='brand.grey.600' noOfLines={2}>{content}</Text>
        </VStack>
        <HStack spacing={2} color='brand.grey.900' textTransform='uppercase' letterSpacing={0.22}
          fontSize={11} divider={<Box w={1.5} h={1.5} borderRadius='50%' bg='brand.grey.900'></Box>}
        >
          <Text>{author.name}</Text>
          <Text>
            {new Intl.DateTimeFormat("en-GB", {dateStyle: 'medium'}).format(new Date(createdAt))}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

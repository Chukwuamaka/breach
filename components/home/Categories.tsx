import { categories } from "@/data";
import { Box, HStack, Text } from "@chakra-ui/react";
import Tag from "../Tag";

export default function Categories({...props}) {
  return (
    <Box as='section' {...props}>
      <Text as='h2' textStyle='md_heading'>Categories</Text>
      <Text textStyle='md_text' color='brand.grey.600'>Discover content from topics you care about</Text>
      <HStack spacing={5} mt={3.5} flexWrap='wrap'>
        {categories.map(({title, icon}, index) => (
          <Tag key={title+index} selectable={false} leftIcon={<Text>{icon}</Text>} iconSpacing={2}>
            {title}
          </Tag>
        ))}
      </HStack>
    </Box>
  )
}

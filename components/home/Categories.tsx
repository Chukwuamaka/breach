import { Box, BoxProps, HStack, Text, useToast } from "@chakra-ui/react";
import Tag from "../Tag";
import useSWR from "swr";
import { fetchData } from "@/services/fetch.service";
import { Category } from "@/pages";
import Loading from "../Loading";

export interface CategoryData {
  id: number;
  name: string;
  icon: string;
}

interface CategoriesProps extends BoxProps {
  selectedCategory: Category;
  saveCategory: (value: Category) => void;
}

const fetcher = (args: string) => fetchData(args);

export default function Categories({selectedCategory, saveCategory, ...props}: CategoriesProps) {
  const { data: categories, isLoading, error } = useSWR('/blog/categories', fetcher);
  const makeToast = useToast();
  const toastId = 'fetch_categories_toast';

  const handleSelect = (value: string) => {
    saveCategory(value);
  }

  return (
    <Box as='section' {...props}>
      <Text as='h2' textStyle='md_heading'>Categories</Text>
      <Text textStyle='md_text' color='brand.grey.600'>Discover content from topics you care about</Text>
      {error ?
        !makeToast.isActive(toastId) && 
          makeToast({
            id: toastId,
            title: 'Could not fetch categories',
            description: "Please check your internet connection or try again later.",
            status: 'error',
            duration: 9000,
          })
        :
        isLoading ?
          <Loading containerProps={{textAlign: 'center', mt: 8}} />
        :
          <HStack spacing={5} mt={3.5} flexWrap='wrap'>
            {(categories as CategoryData[]).map(({id, name, icon}) => (
              <Tag key={name+id} id={`${id}`} isSelected={id === +selectedCategory}
                handleSelect={handleSelect} leftIcon={<Text>{icon}</Text>} iconSpacing={2}
              >
                {name}
              </Tag>
            ))}
          </HStack>
      }
    </Box>
  )
}

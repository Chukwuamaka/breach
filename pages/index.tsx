import Page from '@/components/Page';
import Hero from '@/components/home/Hero';
import { Box, Flex } from '@chakra-ui/react';
import ArticleSection from '@/components/articles/ArticleSection';
import Categories from '@/components/home/Categories';
import { useState } from 'react';

export type Category = number | string;

export default function Home() {
  const [category, setCategory] = useState<Category>('');

  const saveCategory = (value: Category) => {
    setCategory(value);
  }

  return (
    <Page title='Welcome to Breach' withNavbar={true} withNavbarCTAs={true} withFooter={true}>
      <Hero />
      {/* Article Section */}
      <Box as='section' bg='white'>
        <Flex justify='space-between' pt='60px' pb='200px' className="responsive_container">
          <ArticleSection flexBasis='64%' category={category} />
          <Categories flexBasis='32.5%' selectedCategory={category} saveCategory={saveCategory} />
        </Flex>
      </Box>
    </Page>
  )
}

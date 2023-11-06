import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ArticleList from "./ArticleList";

const categories = ["featured", "popular", "recent"];

export default function ArticleSection({...props}) {
  return (
    <Tabs variant="unstyled" w='full' isLazy {...props}>
      <TabList gap={10} pb={5} px={1}>
        {categories.map((category) => (
          <Tab key={`tab${category}`} textStyle='md_text' pb={2} color='brand.grey.900' opacity={0.64} textTransform='capitalize'
            pl={0} pr={2} _selected={{ opacity: 1, borderBottom: '1.5px solid', borderBottomColor: 'brand.grey.900' }}
          >
            {category}
          </Tab>
        ))}
      </TabList>
      <TabPanels pt={5} px={1}>
        {categories.map((category) => (
          <TabPanel key={`panel${category}`} px={0}>
            <ArticleList category={category} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

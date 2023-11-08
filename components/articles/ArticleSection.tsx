import { Tabs, TabList, TabPanels, Tab, TabPanel, TabsProps } from "@chakra-ui/react";
import ArticleList from "./ArticleList";

const labels = ["featured", "popular", "recent"];

interface ArticleSectionProps extends Omit<TabsProps, 'children'> {
  category?: number | string;
}

export default function ArticleSection({category, ...props}: ArticleSectionProps) {
  return (
    <Tabs variant="unstyled" w='full' isLazy {...props}>
      <TabList gap={10} pb={5} px={1}>
        {labels.map((label) => (
          <Tab key={`tab${label}`} textStyle='md_text' pb={2} color='brand.grey.900' opacity={0.64} textTransform='capitalize'
            pl={0} pr={2} _selected={{ opacity: 1, borderBottom: '1.5px solid', borderBottomColor: 'brand.grey.900' }}
          >
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanels pt={5} px={1}>
        {labels.map((label) => (
          <TabPanel key={`panel${label}`} px={0}>
            <ArticleList category={category} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

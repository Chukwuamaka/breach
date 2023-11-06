import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import ArticleSummary from "./ArticleSummary";
import { articles } from "@/data";

export default function ArticleList({ category }: { category: string }) {
  // const [articles, setArticles] = useState<{}[]>([])
  return (
    <VStack spacing={16}>
      {articles.map((article, index) => (
        <ArticleSummary key={article.title+index} {...article} />
      ))}
    </VStack>
  )
}

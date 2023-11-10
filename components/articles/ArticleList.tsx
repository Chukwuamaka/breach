import { Text, VStack, useToast } from "@chakra-ui/react";
import ArticleSummary from "./ArticleSummary";
import useSWR from "swr";
import { fetchData } from "@/services/fetch.service";
import { Category } from "@/pages";
import Loading from "../Loading";

export interface Article {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  author: {
    id: number;
    name: string;
  },
  category: {
    id: number;
    name: string;
    icon: string;
  },
  series: {
    id: number;
    name: string;
  },
  createdAt: string;
}

const fetcher = (args: string) => fetchData(args);

export default function ArticleList({ category }: { category?: Category }) {
  const { data: articles, isLoading, error } = useSWR(
    `/blog/posts${category ? `?categoryId=${category}` : ''}`,
    fetcher
  );
  const makeToast = useToast();
  const toastId = 'fetch_article_toast';

  if (error) {
    if (!makeToast.isActive(toastId)) {
      makeToast({
        id: toastId,
        title: 'Could not fetch articles',
        description: "Please check your internet connection or try again later.",
        status: 'error',
        duration: 9000,
      })
    }
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (articles) {
    return (
      articles.length === 0 ?
        <Text textStyle='md_text'>There are no posts in this category.</Text>
      :
        <VStack spacing={16}>
          {(articles as Article[]).map(article => (
            <ArticleSummary key={article.id} {...article} />
          ))}
        </VStack>
    )
  }
}

import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../../components/postCard/PostCard.jsx";
import LoadMoreButton from "../../components/loadMoreButton/LoadMoreButton.jsx";
import { Container, PostList, Title } from "./styles.js";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Erro ao buscar posts", error);
      }
    };

    fetchPosts();
  }, []);

  const loadMorePosts = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const response = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${nextPage}`
      );

      setPosts((prevPosts) => [...prevPosts, ...response.data]);
      setPage(nextPage);
    } catch (error) {
      console.error("Erro ao carregar mais posts", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Últimas Postagens</Title>
      <PostList>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostList>

      <LoadMoreButton loadMorePosts={loadMorePosts} isLoading={isLoading} />
    </Container>
  );
};

export default Home;

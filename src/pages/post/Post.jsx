import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Content, FeaturedImage, PostWrapper, Title } from "./styles";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
      .then((response) => {
        setPost(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar o post:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <PostWrapper>
      <Title>{post.title.rendered}</Title>
      {post._embedded && post._embedded["wp:featuredmedia"] && (
        <FeaturedImage
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt={post.title.rendered}
        />
      )}
      <Content dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </PostWrapper>
  );
};

export default Post;

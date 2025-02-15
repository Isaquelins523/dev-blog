import React from "react";
import { LoadButton } from "./styles";

const LoadMoreButton = ({ loadMorePosts, isLoading }) => {
  return (
    <LoadButton onClick={loadMorePosts} disabled={isLoading}>
      {isLoading ? "Carregando..." : "Carregar mais..."}
    </LoadButton>
  );
};

export default LoadMoreButton;

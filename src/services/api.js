import axios from "axios";

const api = axios.create({
  baseURL: "https://blog.apiki.com/wp-json/wp/v2/",
});

export const getPosts = async (page = 1) => {
  const response = await api.get(`/posts?_embed&categories=518&page=${page}`);
  return response.data;
};

export const getPostBySlug = async (slug) => {
  const response = await api.get(`/posts?_embed&slug=${slug}`);
  return response.data[0]; // Retorna o primeiro item do array
};

export default api;

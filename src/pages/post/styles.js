import styled from "styled-components";

export const PostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;

  a {
    color: #0066cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const LoadingText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 50px;
`;

export const ErrorText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: red;
  margin-top: 50px;
`;

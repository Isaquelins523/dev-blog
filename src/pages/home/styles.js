import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2a3d66;
  text-align: center;
  margin-bottom: 30px;
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

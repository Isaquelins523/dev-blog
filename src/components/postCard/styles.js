import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 400px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 12px 0;
`;

export const ReadMore = styled(Link)`
  display: inline-block;
  margin-top: 8px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

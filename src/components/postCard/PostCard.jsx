import { Card, ReadMore, Thumbnail, Title } from "./styles";

const PostCard = ({ post }) => {
  const { title, slug, _embedded } = post;
  const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  return (
    <Card>
      {imageUrl && <Thumbnail src={imageUrl} alt={title.rendered} />}
      <Title dangerouslySetInnerHTML={{ __html: title.rendered }} />
      <ReadMore to={`/post/${slug}`}>Ler mais</ReadMore>
    </Card>
  );
};

export default PostCard;

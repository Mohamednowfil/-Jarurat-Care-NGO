import { useParams } from "react-router-dom";
import { usePostContext } from "../context/PostContext"; 

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = usePostContext(); 

  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) return <p>Post not found!</p>;

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;

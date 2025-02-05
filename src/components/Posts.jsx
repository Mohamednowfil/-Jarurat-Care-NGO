import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchPosts, useAddPost } from "../hooks/useFetchPosts";
import { usePostContext } from "../context/PostContext";  

const Posts = () => {
  const { data: apiPosts, isLoading, error } = useFetchPosts();
  const mutation = useAddPost();
  const [newPost, setNewPost] = useState("");
  const [search, setSearch] = useState("");

  const { posts, setPosts, addPost } = usePostContext();  

  
  const allPosts = [...posts, ...(apiPosts || [])];

  
  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPost.trim() === "") return;
    const post = { id: allPosts.length + 1, title: newPost, body: "New Post" };
    addPost(post);  
    mutation.mutate(post);
    setNewPost("");
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts!</p>;

  
  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="posts-container">
      <h2>Posts</h2>

      {}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {}
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Enter new post"
          required
        />
        <button type="submit">Add Post</button>
      </form>

      {}
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

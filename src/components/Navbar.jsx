import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext"; 

const Navbar = () => {
  const { posts } = usePostContext(); 

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts ({posts.length})</Link>
      <Link to="/map">Map</Link>
    </nav>
  );
};

export default Navbar;


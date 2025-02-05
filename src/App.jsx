import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostProvider } from "./context/PostContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import MapComponent from "./components/MapComponent";
import "./index.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>  
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        </Router>
      </PostProvider>
    </QueryClientProvider>
  );
};

export default App;

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
  return data;
};

export const useFetchPosts = () => {
  return useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
};


export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newPost) => {
      const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); 
    },
  });
};

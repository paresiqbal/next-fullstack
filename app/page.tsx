"use client";

// Components
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

// Libarary
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Fetch all posts
const allPosts = async () => {
  const response = await axios.get("/api/posts/getPost");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "Loading ...";

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1>Hello World</h1>
      <CreatePost />
      {data.map((post) => (
        <Post
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}

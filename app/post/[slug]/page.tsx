"use client";

// Components
import AddComment from "@/app/components/AddComment";
import Post from "@/app/components/Post";

// Library
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Types
type URL = {
  params: {
    slug: string;
  };
};

// Fetching all post
const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  });

  if (isLoading) return "Loading ...";
  console.log(data);

  return (
    <div>
      <Post
        id={data.id}
        name={data.user.name}
        avatar={data.user.image}
        postTitle={data.title}
        Comment={data.Comment}
      />
      <AddComment id={data.id} />
    </div>
  );
}

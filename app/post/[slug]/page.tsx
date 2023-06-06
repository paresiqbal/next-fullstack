"use client";

// Components
import AddComment from "@/app/components/AddComment";
import Post from "@/app/components/Post";

// Library
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

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
      <AddComment id={data?.id} />
      {data?.Comment?.map((comment) => (
        <div key={comment.id} className="bg-white my-6 text-sm p-4 rounded-md">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src={comment.user?.image}
              alt="avatar"
            />
            <h3 className="font-semibold">{comment?.user?.name}</h3>
            <h2 className="text-sm">{comment.createdAt}</h2>
          </div>
          <div className="py-2 ml-10">{comment.message}</div>
        </div>
      ))}
    </div>
  );
}

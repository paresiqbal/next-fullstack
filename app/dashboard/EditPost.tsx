"use client";

// Next
import Image from "next/image";
import { useState } from "react";

// Library
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type EditProps = {
  id: string;
  avatar: string;
  name: string;
  title: string;
  comments?: {
    id: string;
    postId: string;
    userId: string;
  }[];
};

export default function EditPost({
  avatar,
  name,
  title,
  comments,
  id,
}: EditProps) {
  const [toggle, setToggle] = useState(false);

  const { mutate } = useMutation(
    async (id: string) =>
      await axios.delete("/api/posts/deletePost", { data: id })
  );

  return (
    <>
      <div className="bg-white my-8 p-5 rounded-md">
        <div className="flex gap-2">
          <Image
            width={32}
            height={32}
            src={avatar}
            alt="avatar"
            className="w-6 rounded-full"
          />
          <h3 className="text-gray-900 text-sm font-semibold">{name}</h3>
        </div>
        <div>
          <h1 className="ml-8 text-sm break-all">{title}</h1>
        </div>
        <div className="flex items-center gap-4 ml-8 my-2">
          <p className="text-sm font-semibold">{comments?.length} Comments</p>
          <button
            className="text-sm font-semibold text-red-500"
            onClick={(e) => {
              setToggle(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

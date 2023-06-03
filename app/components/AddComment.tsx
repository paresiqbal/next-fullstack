"use client";

// Library
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { error } from "console";
import { useState } from "react";
import { toast } from "react-hot-toast";

type PostProps = {
  id?: string;
};

type Comment = {
  postId?: string;
  title: string;
};

export default function AddComment({ id }: PostProps) {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();

  let commentToastID: string;

  // Comments functionality
  const { mutate } = useMutation(
    async (data: Comment) => axios.post("/api/posts/addComment", { data }),
    {
      onSuccess: (data) => {
        setTitle("");
        setIsDisabled(false);
        toast.success("Comment added", { id: commentToastID });
      },
      onError: (error) => {
        setIsDisabled(false);
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: commentToastID });
        }
      },
    }
  );

  // Submit Comments
  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    commentToastID = toast.loading("Adding your comment", {
      id: commentToastID,
    });
    mutate({ title, postId: id });
  };

  return (
    <form className="my-8 ">
      <h3>Add a comment</h3>
      <div className="flex flex-col my-2">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 text-lg rounded-md my-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          className="text-sm bg-teal-500 text-white py-2 px-4 rounded-md"
          disabled={isDisabled}
          type="submit"
        >
          Add Comment
        </button>
        <p
          className={`font-bold ${
            title.length > 300 ? "text-red-500" : "text-gray-900"
          }`}
        >{`${title.length}/300`}</p>
      </div>
    </form>
  );
}

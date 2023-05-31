"use client";
// Next
import { useState } from "react";

// Library
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // Create a post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message);
        }
        setIsDisabled(false);
      },
      onSuccess: (data) => {
        setTitle("");
        setIsDisabled(false);
        toast.success("Post has been made 🔥");
      },
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost}>
      <div className="flex flex-col my-4">
        <textarea
          name="title"
          id="title"
          cols={45}
          rows={10}
          className="rounded-md p-4 text-lg bg-white outline-none focus:outline-teal-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's on your mind ?"
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-900"
          }`}
        >{`${title.length}/300`}</p>
        <button
          className="text-sm font-semibold text-white bg-teal-600 py-2 px-6 rounded-md"
          type="submit"
          disabled={isDisabled}
        >
          Create a post
        </button>
      </div>
    </form>
  );
}

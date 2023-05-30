"use client";
// Next
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form>
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
      <div>
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

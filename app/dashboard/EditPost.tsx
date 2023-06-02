"use client";

// Next
import Image from "next/image";
import { useState } from "react";

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
  return (
    <div className="bg-white my-8 p-5 rounded-md">
      <div className="flex gap-2">
        <Image
          width={32}
          height={32}
          src={avatar}
          alt="avarat"
          className="w-6 rounded-full"
        />
        <h3 className="text-gray-900 text-sm font-semibold">{name}</h3>
      </div>
      <div>
        <h1 className="ml-8 text-sm">{title}</h1>
      </div>
    </div>
  );
}
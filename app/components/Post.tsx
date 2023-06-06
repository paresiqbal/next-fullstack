"use client";

// Next
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  avatar: string;
  name: string;
  postTitle: string;
  id: string;
  Comment: string;
};

export default function Post({
  avatar,
  name,
  postTitle,
  id,
  Comment,
}: PostProps) {
  return (
    <div className="bg-white my-8 p-8 rounded-lg w-full">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
          alt="avatar"
        />
        <h3 className="font-bold text-gray-900">{name}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{postTitle}</p>
      </div>
      <div className="flex gap-4 cursor-pointer items-cennter">
        <Link href={`/post/${id}`}>
          <p className="text-sm font-bold ">{Comment?.length} Comment</p>
        </Link>
      </div>
    </div>
  );
}

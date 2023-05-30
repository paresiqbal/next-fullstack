"use client";
// Next
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
  username: string;
  image: string;
};

export default function Logged({ image, username }: User) {
  return (
    <div>
      <li className="flex gap-8 items-center">
        <button
          className="text-sm bg-teal-700 text-white font-semibold py-2 px-6 rounded-md disabled:opacity-25"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        <Link
          href={"/dashboard"}
          className="flex flex-col justify-center items-center"
        >
          <Image
            src={image}
            width={64}
            height={64}
            className="w-10 rounded-full "
            alt=""
            priority
          />
          <p className="text-sm">{username}</p>
        </Link>
      </li>
    </div>
  );
}

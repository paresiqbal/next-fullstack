"use client";
// Next
import { signOut } from "next-auth/react";

export default function Logged() {
  return (
    <div>
      <li className="flex gap-8 items-center">
        <button className="text-sm bg-teal-700 text-white font-semibold py-2 px-6 rounded-md disabled:opacity-25" onClick={() => signOut()}>
          Sign Out
        </button>
      </li>
    </div>
  );
}

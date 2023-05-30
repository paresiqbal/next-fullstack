"use client";
// Next
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <li className="list-none">
        <button
          className="text-sm bg-teal-700 text-white font-semibold py-2 px-6 rounded-md disabled:opacity-25"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </li>
    </div>
  );
}

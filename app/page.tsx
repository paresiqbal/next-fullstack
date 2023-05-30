"use client";

// Components
import CreatePost from "./components/CreatePost";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1>Hello World</h1>
      <CreatePost />
    </main>
  );
}

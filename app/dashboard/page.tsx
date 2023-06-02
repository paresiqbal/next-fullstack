// Next
import { getServerSession } from "next-auth";

// Components
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

// Pages
import MyPosts from "./MyPost";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome back {session.user?.name} !
      </h1>
      <MyPosts />
    </div>
  );
}

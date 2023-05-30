// Next
import Link from "next/link";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

// Components
import Login from "./Login";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <nav className="flex justify-between items-center py-8">
        <Link href={"/"} className="font-bold text-lg">
          Dashboard
        </Link>
        <ul className="flex items-center gap-6">
          <Login />
        </ul>
      </nav>
    </div>
  );
}

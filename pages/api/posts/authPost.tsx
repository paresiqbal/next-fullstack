// Next
import type { NextApiResponse, NextApiRequest } from "next";

// Libary
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

// Components
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);

    // Check user login or not
    if (!session) return res.status(401).json({ message: "Please sign in 😉" });

    // Get auth user posts
    try {
      const data = await prisma.user.findUnique({
        where: {
          email: session.user?.email,
        },
        include: {
          Post: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              Comment: true,
            },
          },
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res
        .status(403)
        .json({ message: "Error has occure whilst making a post 😥" });
    }
  }
}

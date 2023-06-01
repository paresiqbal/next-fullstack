// Next
import type { NextApiResponse, NextApiRequest } from "next";

// Components
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Fetch all post
    try {
      const data = await prisma.post.findMany({
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(403).json({ message: "Error has occure fetching posts 😥" });
    }
  }
}

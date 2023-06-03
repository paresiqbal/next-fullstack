import prisma from "@/prisma/client";

// Next
import type { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Get auth user posts
    try {
      const data = await prisma.post.findUnique({
        where: {
          id: req.query.details,
        },
        include: {
          user: true,
          Comment: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              user: true,
            },
          },
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      res
        .status(403)
        .json({ message: "Error has occure whilst making a post 😥" });
    }
  }
}

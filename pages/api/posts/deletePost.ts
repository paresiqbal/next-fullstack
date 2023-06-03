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
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions);

    // Check user login or not
    if (!session) return res.status(401).json({ message: "Please sign in 😉" });

    // Delete a post

    try {
      const postId = req.body;
      const result = await prisma.post.delete({
        where: {
          id: postId,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res
        .status(403)
        .json({ message: "Error has occure whilst making a post 😥" });
    }
  }
}

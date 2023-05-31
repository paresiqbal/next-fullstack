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
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);

    // Check user login or not
    if (!session) return res.status(401).json({ message: "Please sign in 😉" });
    const title: string = req.body.title;

    // Get user
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    // CHeck title
    if (title.length > 300)
      return res.status(403).json({ message: "Please write les then 300 🙏" });

    if (title.length)
      return res.status(403).json({ message: "Do not leave this empety 😁" });

    // Create post
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser.id,
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

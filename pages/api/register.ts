import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// http://localhost:3000/api/register

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const checkUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (checkUser) {
    res.status(400).json({ message: "user already exists" });
  } else {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        phone: phone,
      },
    });
    res.status(200).json({ message: "user created successfully", newUser });
  }
};

export default registerUser;

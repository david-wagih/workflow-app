import { NextApiRequest, NextApiResponse } from "next";
import { createToken } from "../../controller/createToken";
import prisma from "../../lib/prisma";

// http://localhost:3000/api/login

const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const checkUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (checkUser) {
    const checkPhone = await prisma.user.findUnique({
      where: {
        phone: phone,
      },
    });
    if (checkPhone) {
      const token = createToken(email, phone);
      res.status(200).json({ message: "user logged in successfully", token });
    } else {
      res.status(400).json({ message: "phone number is incorrect" });
    }
  } else {
    res.status(400).json({ message: "user not found" });
  }
};

export default loginUser;

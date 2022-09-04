import { config } from "../config";
import jwt from "jsonwebtoken";

export const createToken = (email: string, phone: string) => {
  const secret = config.secret;
  const token = jwt.sign(
    {
      email: email,
      phone: phone,
    },
    secret
  );
  return token;
};

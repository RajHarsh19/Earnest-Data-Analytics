import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prisma";

const generateTokens = (userId: number) => ({
  accessToken: jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "15m" }),
  refreshToken: jwt.sign({ userId }, process.env.JWT_REFRESH!, { expiresIn: "7d" })
});

import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hashed } });
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ msg: "Invalid credentials" });

  res.json(generateTokens(user.id));
};

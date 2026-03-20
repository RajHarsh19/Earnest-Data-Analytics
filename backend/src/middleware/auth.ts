import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    req.userId = (decoded as any).userId;

    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
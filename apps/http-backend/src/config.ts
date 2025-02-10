import dotenv from "dotenv";

dotenv.config();

export const jwtpass: any = process.env.JWT_SECRET;
export const jwtsecret: any = process.env.JWT_SECRET_ADMIN;
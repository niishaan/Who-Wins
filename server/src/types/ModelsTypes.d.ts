import { InferAttributes } from "@sequelize/core";
import { User } from "../models/user.model.ts";

export type UserType = InferAttributes<User>;
export type PublicUserType = Omit<UserType, "password" | "refresh_token">;

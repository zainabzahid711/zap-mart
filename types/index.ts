import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: Date;
  updatedAt: Date;
  emailVerified: Date | null;
};

import { User } from "@prisma/client";

export const renderUsername = (user: User): string => {
  if (user.firstName && user.lastName) {
    return user.firstName + " " + user.lastName;
  } else {
    return user.username;
  }
};

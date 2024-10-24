import prisma from "@/lib/db/prismaClient";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import FriendRequestList from "./FriendRequestList";
import { FollowRequest, User } from "@prisma/client";

const FriendRequests = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const requests: any = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests.length === 0) return null;

  return (
    <div className="p-4 shadow-md bg-white text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* USER  */}
      {<FriendRequestList requests={requests} />}
    </div>
  );
};

export default FriendRequests;

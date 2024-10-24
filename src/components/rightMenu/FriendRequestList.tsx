"use client";

import {
  acceptFollowRequest,
  declineFollowRequest,
} from "@/lib/actions/user.actions";
import { renderUsername } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);

    try {
      await acceptFollowRequest(userId);

      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.log(error);
    }
  };

  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);

    try {
      await declineFollowRequest(userId);

      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.log(error);
    }
  };

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );

  return (
    <>
      {optimisticRequests.map((request) => (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
            />
            <span className="font-semibold">
              {renderUsername(request.sender)}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(request.id, request.senderId)}>
              <button>
                <Image
                  src="/accept.png"
                  alt="accept"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={() => accept(request.id, request.senderId)}
                />
              </button>
            </form>
            <form action={() => decline(request.id, request.senderId)}>
              <button>
                <Image
                  src="/reject.png"
                  alt="avatar"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequestList;

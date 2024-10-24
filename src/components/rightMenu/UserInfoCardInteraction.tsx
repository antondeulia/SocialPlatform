"use client";

import { switchBlock, switchFollow } from "@/lib/actions/user.actions";
import { useOptimistic, useState } from "react";

type Props = {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingRequestSent: boolean;
};

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingRequestSent,
}: Props) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingRequestSent,
  });

  const follow = async () => {
    switchOptimisticState("follow");

    try {
      await switchFollow(userId, currentUserId);

      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const block = async () => {
    switchOptimisticState("block");

    try {
      await switchBlock(userId, currentUserId);

      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingRequestSent:
              !state.following && !state.followingRequestSent ? true : false,
          }
        : {
            ...state,
            blocked: !state.blocked,
          }
  );

  return (
    <>
      <form action={follow}>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2 w-full">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>

      <form action={block} className="self-end">
        <button>
          <span className="text-red-400 self-end text-xs cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;

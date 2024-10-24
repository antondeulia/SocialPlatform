import { User } from "@prisma/client";
import Ad from "./Ad";
import Birthdays from "./rightMenu/Birthdays";
import FriendRequests from "./rightMenu/FriendRequests";
import UserInformationCard from "./rightMenu/UserInfoCard";
import UserMediaCard from "./rightMenu/UserMediaCard";
import { Suspense } from "react";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user && (
        <>
          <Suspense fallback="loading...">
            <UserInformationCard user={user} />
          </Suspense>
          <Suspense>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      )}
      <FriendRequests />
      <Birthdays />
      <Ad
        size="md"
        text="Hello Anton How are you? How do you look at take a break and watch some youtube? Huh? What do you mean? I don`t to, stop it please"
      />
    </div>
  );
};

export default RightMenu;

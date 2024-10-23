import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInformationCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId && (
        <>
          <UserInformationCard userId={userId} />
          <UserMediaCard userId={userId} />
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

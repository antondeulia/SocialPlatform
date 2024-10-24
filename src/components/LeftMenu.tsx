import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Ad from "./Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}

      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/posts.png" alt="icon" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/activity.png" alt="icon" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/events.png" alt="icon" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/albums.png" alt="icon" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/videos.png" alt="icon" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/news.png" alt="icon" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/courses.png" alt="icon" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/lists.png" alt="icon" width={20} height={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 transition-all rounded-lg "
        >
          <Image src="/settings.png" alt="icon" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>

      <Ad
        size="sm"
        text="Lorem ipsum dorum haha it`s me writing the fish text by myself"
      />
    </div>
  );
};

export default LeftMenu;

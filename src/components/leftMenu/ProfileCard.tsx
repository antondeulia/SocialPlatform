import prisma from "@/lib/db/prismaClient";
import { renderUsername } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/1764702/pexels-photo-1764702.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt="image"
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-index"
        />
      </div>

      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">{renderUsername(user)}</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              width={12}
              height={12}
              className="rounded-md object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              width={12}
              height={12}
              className="rounded-md object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              width={12}
              height={12}
              className="rounded-md object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">
            {user._count.followers} Followers
          </span>
        </div>

        <Link
          href={`/profile/${user.username}`}
          className="bg-blue-500 w-full text-white text-xs p-2 rounded-md hover:text-blue-500 hover:bg-white transition-all duration-300 border border-blue-500 text-center"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;

import prisma from "@/lib/db/prismaClient";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const UserMediaCard = async ({ user }: { user: User }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-4 shadow-md bg-white text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 ">
        {postsWithMedia.length ? (
          postsWithMedia.map((post) => (
            <div className="relative w-1/5 h-24" key={post.id}>
              <Image
                src={post.img!}
                alt="image"
                fill
                className="object-cover rounded-md cursor-pointer"
              />
            </div>
          ))
        ) : (
          <>No media found!</>
        )}
      </div>
    </div>
  );
};

export default UserMediaCard;

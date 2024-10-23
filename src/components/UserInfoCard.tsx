import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 shadow-md bg-white text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* INFO  */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Maria Deulia</span>
          <span className="text-sm">mariadeulia</span>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          consectetur vel nulla, mollitia laudantium illo autem doloribus
          asperiores ducimus beatae!
        </p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="map" width={16} height={16} />
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="map" width={16} height={16} />
          <span>
            Went to <b>Edgar Hight School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="map" width={16} height={16} />
          <span>
            Works at <b>Google Inc.</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="map" width={16} height={16} />
            <Link
              href="https://antondeulia.com"
              className="text-blue-500 font-medium"
            >
              antondeulia.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="map" width={16} height={16} />
            <span>Joined January 2022</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2 hover:bg-transparent transition-all duration-300 hover:text-blue-500 hover:border border border-solid border-blue-500">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block user
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;

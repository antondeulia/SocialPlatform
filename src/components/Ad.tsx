import Image from "next/image";

const Ad = ({ size, text }: { size: "sm" | "md" | "lg"; text: string }) => {
  return (
    <div className="p-4 shadow-md bg-white text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>

      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/25244460/pexels-photo-25244460/free-photo-of-a-fashionable-young-woman-standing-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25244460/pexels-photo-25244460/free-photo-of-a-fashionable-young-woman-standing-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Oleksij Deulia</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>{text}</p>
        <button className="bg-gray-200 text-gray-500 text-xs p-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;

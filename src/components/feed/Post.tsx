import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27375086/pexels-photo-27375086/free-photo-of-a-man-holding-a-basketball-ball-in-his-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>

        <Image
          src="/more.png"
          alt="more"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>

      {/* DESC  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/29023460/pexels-photo-29023460/free-photo-of-brazilian-cowboy-riding-horse-in-arena.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem
          molestiae ab omnis commodi velit nam hic minus consequuntur!
          Voluptates consectetur saepe adipisci! Accusantium cupiditate eligendi
          fugiat excepturi autem est.
        </p>
      </div>

      {/* INTERACTION  */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              487 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              487 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              487 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default Post;

import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28924817/pexels-photo-28924817/free-photo-of-hong-kong-island-dazzling-night-skyline.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />

        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="avatar"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* COMMENTS  */}
      <div className="">
        {/* COMMENT  */}
        <div className="flex gap-4 mt-6 justify-between">
          {/* AVATAR  */}
          <Image
            src="https://images.pexels.com/photos/28924817/pexels-photo-28924817/free-photo-of-hong-kong-island-dazzling-night-skyline.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />

          {/* DESC  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Anton Deulia</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur vel labore maxime at et esse quisquam nihil ex dolore
              ad, quasi quod explicabo totam molestiae illum minus sunt ab
              iusto.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt="More"
                  width={12}
                  height={12}
                  className="cursor-pointer w-3 h-3"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">4 Likes</span>
              </div>

              <div className="">Reply</div>
            </div>
          </div>

          <Image
            src="/more.png"
            alt="More"
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;

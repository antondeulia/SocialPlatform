import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      <Image
        src="https://images.pexels.com/photos/14690502/pexels-photo-14690502.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="image"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/* POST  */}
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="image"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>

        {/* OPTIONS  */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addImage.png"
              alt="image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt="image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/poll.png"
              alt="image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt="image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 shadow-md bg-white text-sm">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>

      {/* USER  */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://images.pexels.com/photos/7331227/pexels-photo-7331227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
            />
            <span className="font-semibold">Anton Deulia</span>
          </div>
          <div className="flex gap-3 justify-end">
            <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
              Celebrate
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://images.pexels.com/photos/7331227/pexels-photo-7331227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
            />
            <span className="font-semibold">Anton Deulia</span>
          </div>
          <div className="flex gap-3 justify-end">
            <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
              Celebrate
            </button>
          </div>
        </div>

        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 cursor-pointer">
          <Image src="/gift.png" alt="gift" width={24} height={24} />
          <Link href="" className="flex flex-col gap-1 text-xs">
            <span className="text-gray-700 font-semibold">
              Upcoming Birthdays
            </span>
            <span className="text-gray-500">
              See others 16 have upcoming birthdays
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;

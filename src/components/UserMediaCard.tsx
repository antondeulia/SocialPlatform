import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 shadow-md bg-white text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27834342/pexels-photo-27834342/free-photo-of-a-bride-and-groom-are-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27834342/pexels-photo-27834342/free-photo-of-a-bride-and-groom-are-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27834342/pexels-photo-27834342/free-photo-of-a-bride-and-groom-are-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27834342/pexels-photo-27834342/free-photo-of-a-bride-and-groom-are-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27834342/pexels-photo-27834342/free-photo-of-a-bride-and-groom-are-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27834342/pexels-photo-27834342/free-photo-of-a-bride-and-groom-are-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27834342/pexels-photo-27834342/free-photo-of-a-bride-and-groom-are-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;

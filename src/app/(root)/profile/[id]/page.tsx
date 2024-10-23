import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[15%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[55%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId={params.id} />
      </div>
    </div>
  );
};

export default ProfilePage;

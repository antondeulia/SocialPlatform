import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-42">
        <Navbar />
      </div>

      <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-42">
        {children}
      </div>
    </>
  );
};

export default AppLayout;

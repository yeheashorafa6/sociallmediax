import LeftBar from "@/components/LeftBar/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
import MobileNav from "@/components/MobileNav/MobileNav";
import { currentUser } from "@clerk/nextjs/server";

export default async function BoardLayout({ children, modal }) {
  const user = await currentUser();
  const simplifiedUser = user
    ? {
        username: user.username,
        imageUrl: user.imageUrl,
      }
    : null;
  return (
    <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex flex-col justify-between min-h-screen">
      <div className="flex flex-1 justify-between">
        {/* Left sidebar - hidden on small screens */}
        <div className="hidden sm:block px-2 xsm:px-4 xxl:px-8">
          <LeftBar user={simplifiedUser}/>
        </div>
        
        {/* Main content */}
        <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
          {children}
          {modal}
        </div>
        
        {/* Right sidebar - only visible on large screens */}
        <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
          <RightBar />
        </div>
      </div>
      
      {/* Mobile bottom navigation - only visible on small screens */}
      <div className="block  sm:hidden fixed bottom-0 left-0 right-0 border-t-[1px]  border-borderGray z-10">
        <MobileNav user={simplifiedUser}/>
      </div>
    </div>
  );
}
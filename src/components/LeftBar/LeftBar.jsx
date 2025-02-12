import Link from "next/link";
import React from "react";
import Image from "../Image/Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];
function LeftBar() {
  return (
    <div className="sticky top-0 flex justify-between pt-2 pb-7 h-screen flex-col">
      {/* MENU LOGO BUTTON */}
      <div className="flex flex-col gap-3 text-lg items-center xl:text-start">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-2">
          {menuList.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="flex items-center gap-3 p-2 rounded-full hover:bg-[#181818]">
                <Image
                  src={`icons/${item.icon}`}
                  width={24}
                  height={24}
                  alt={item.name}
                />
                <span className="ml-3 hidden xl:inline">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
       {/* BUTTON */}
       <Link
          href={{
            pathname: '/compose/post'
          }}
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image src="icons/post.svg" alt="new post" width={24} height={24} />
        </Link>
        <Link
          href={{
            pathname: '/compose/post'
          }}
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/* USER AVATAR */}
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 relative rounded-full overflow-hidden bg-black shadow-2xl">
            <Image
              src={"general/user-avatar.png"}
              width={100}
              height={100}
              tr={true}
              alt={"user avatar"}
            />
          </div>
          <div className="hidden xl:flex flex-col">
            <span className="text-sm font-bold">Yeh_Sh</span>
            <span className="text-xs text-textGray">@yeheashorafa</span>
          </div>
        </div>
        <div className="hidden xl:block font-bold cursor-pointer">...</div>
      </div>
    </div>
  );
}

export default LeftBar;

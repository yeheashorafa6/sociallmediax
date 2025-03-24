import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import Notification from "../Notification/Notification";
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
        name: "Profile",
        // link: `/${user.username}`,
        link: `/`,
        icon: "profile.svg",
      },
    // {
    //   id: 3,
    //   name: "Notification",
    //   link: "/",
    //   icon: "notification.svg",
    // },
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
    
  ];
async function MobileNav() {
      const user = await currentUser();
    
  return (
    <div className=" w-full flex items-center justify-center  py-3">
      <div className="flex">
          {menuList.map((item, i) => (
            <div className="flex items-center justify-center gap-3" key={item.id || i}>
              {i === 2 && user && (
                <div >
                  <Notification />
                </div>
              )}
              <Link
                href={item.link}
                className="p-2 rounded-full hover:bg-[#181818] flex items-center"
              >
                <Image
                  path={`icons/${item.icon}`}
                  alt={item.name}
                  w={24}
                  h={24}
                />
                <span className="hidden xxl:inline">{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
}

export default MobileNav
"use client";
import Link from "next/link";
import Notification from "../Notification/Notification";
import Image from "../Image/Image";
import { useState } from "react";
import { useClerk } from "@clerk/nextjs";

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
    link: `/`,
    icon: "profile.svg",
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
];

export default function MobileNav({ user }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { signOut } = useClerk();


  return (
    <div className="w-full flex items-center justify-center py-3 relative">
      <div className="flex items-center justify-center ">
        {menuList.map((item, i) => (
          <div 
            className="flex items-center justify-center gap-3 relative" 
            key={item.id || i}
          >
            {i === 2 && user && (
              <div>
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

        {/* زر More مع Dropdown */}
        <div className="relative flex">
          <button 
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="p-2  rounded-full"
          >
            ...
          </button>

          {isMoreOpen && (
            <div className="absolute bottom-full mb-2 right-0 w-[250px] bg-white text-black rounded-xl shadow-lg z-50 p-4">
              <div className="flex flex-col gap-3">
                {/* عناصر القائمة */}
                <Link
                  href="/profile"
                  className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => setIsMoreOpen(false)}
                >
                  User Profile
                </Link>
                <Link
                  href="/saved"
                  className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Saved Posts
                </Link>
                <Link
                  href="/settings"
                  className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Settings
                </Link>
                <hr className="my-2" />
                <button
                  className="w-full bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
                  onClick={() => {
                    signOut()
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
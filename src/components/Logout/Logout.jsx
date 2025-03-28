"use client";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import Image from "../Image/Image";

const Logout = ({user}) => {
  const [open, setOpen] = useState(false);
  const { signOut } = useClerk();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 cursor-pointer h-10 relative rounded-full overflow-hidden"  onClick={() => setOpen((prev) => !prev)}>
          <Image
            src={user?.imageUrl}
            alt={user?.username}
            w={100}
            h={100}
            tr={true}
           
          />
        </div>
        <div className="hidden xxl:flex flex-col">
          <span className="font-bold">{user?.username}</span>
          <span className="text-sm text-textGray">@{user?.username}</span>
        </div>
      </div>

      <div className=" relative">
        {/* زر أكثر للشاشات الكبيرة وأيضاً الصغيرة */}
        <div
          className="hidden xl:block cursor-pointer p-2 rounded-full hover:bg-[#181818]"
          onClick={() => setOpen((prev) => !prev)}
        >
          ...
        </div>

        {open && (
          <div
            className="absolute z-50 bg-white text-black py-4 px-6 rounded-xl shadow-lg 
        left-4 bottom-full mb-2
        xxl:left-4 xxl:bottom-4 
        w-[250px]"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/profile"
                className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                onClick={() => setOpen(false)}
              >
                User Profile
              </Link>
              <Link
                href="/saved"
                className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                onClick={() => setOpen(false)}
              >
                Saved Posts
              </Link>
              <Link
                href="/settings"
                className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                onClick={() => setOpen(false)}
              >
                Settings
              </Link>
              <hr className="my-2" />
              <button
                className="w-full bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;

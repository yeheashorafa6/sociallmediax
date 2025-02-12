import Feed from "@/components/Feed/Feed";
import Image from "@/components/Image/Image";
import Link from "next/link";
import React from "react";

function UserPage() {
  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md bg-[#00000084] p-4 z-10">
        <Link href={"/"}>
          <Image src="icons/back.svg" alt={"back"} width={24} height={24} />
        </Link>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg">yehea shorafa</h2>
          <span className="text-textGray text-sm">0 post</span>
        </div>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <Image
              src="general/cover.jpg"
              alt=""
              width={600}
              height={200}
              tr={true}
            />
          </div>
          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image
              src="general/user-avatar.png"
              alt=""
              width={100}
              height={100}
              tr={true}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-end gap-3 p-2">
          <div className="w-9 h-9 flex items-center rounded-full justify-center border-[1px] border-gray-500 cursor-pointer">
            <Image src="icons/more.svg" alt="" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center rounded-full justify-center border-[1px] border-gray-500 cursor-pointer">
            <Image src="icons/explore.svg" alt="" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center rounded-full justify-center border-[1px] border-gray-500 cursor-pointer">
            <Image src="icons/message.svg" alt="" width={20} height={20} />
          </div>
          <button className="py-2 px-4 bg-iconBlue text-white rounded-3xl font-medium">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="flex flex-col gap-2 p-4">
          {/* USER NAME & HANDEL */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">yeheashorafa</h1>
            <span className="text-sm text-textGray">@yeheashorfa</span>
          </div>
          {/* DATA LOCATION JOB */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                src={"icons/userLocation.svg"}
                width={20}
                height={20}
                alt={"user location"}
              />
              <span>PS - Gaza</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"icons/date.svg"}
                width={20}
                height={20}
                alt={"date"}
              />
              <span>Joined December 2024</span>
            </div>
          </div>
          {/* FOLLOWER */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-3">
              <span className="text-lg text-white">100</span>
              <p className="text-textGray text-[16px]">followers</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg text-white">10</span>
              <p className="text-textGray text-[16px]">following</p>
            </div>
          </div>
        </div>
      </div>
      {/* FEED */}
      <Feed/>
    </div>
  );
}

export default UserPage;

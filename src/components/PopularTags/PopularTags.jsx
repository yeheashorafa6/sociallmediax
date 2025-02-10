import React from "react";
import Image from "../Image/Image";

function PopularTags() {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1>{"What’s Happening"}</h1>
      {/* TREND EVENT */}
      <div className="flex gap-4">
        {/* IMAGE */}
        <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
          <Image
            src={"general/event.jpg"}
            tr={true}
            width={120}
            height={120}
            alt={"event"}
          />
        </div>
        {/* TEXT */}
        <div className="flex-1">
          <h2 className="font-bold text-sm text-textGray">
            Nadal v Federer Grand Slanc
          </h2>
          <span className="text-Xs text-textGrayLight">Last Night</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoHore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">2eK posts</span>
      </div>
       {/* TOPICS */}
       <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoHore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">2eK posts</span>
      </div>
       {/* TOPICS */}
       <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoHore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">2eK posts</span>
      </div>
       {/* TOPICS */}
       <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoHore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">2eK posts</span>
      </div>
    </div>
  );
}

export default PopularTags;

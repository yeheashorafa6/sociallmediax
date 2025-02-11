import React from "react";
import Image from "../Image/Image";
import Link from "next/link";

function PopularTags() {
  const topics = [
    { category: "Technology - Trending", name: "OpenAI", posts: "2K posts" },
    { category: "Science - Popular", name: "SpaceX", posts: "5K posts" },
    { category: "AI - Latest", name: "ChatGPT", posts: "3.2K posts" },
    { category: "Coding - Hot", name: "Next.js", posts: "1.8K posts" },
  ];

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
      <div className="flex flex-col gap-3">
        {topics.map((topic, index) => (
          <div key={index} className="">
            <div className="flex items-center justify-between">
              <span className="text-textGray text-sm">{topic.category}</span>
              <Image src="icons/infoMore.svg" alt="info" width={16} height={16} className={"cursor-pointer"}/>
            </div>
            <h2 className="text-textGrayLight font-bold">{topic.name}</h2>
            <span className="text-textGray text-sm">{topic.posts}</span>
          </div>
        ))}
      </div>
      <Link href={"/"} className='text-iconBlue '>Show More</Link>

    </div>
  );
}

export default PopularTags;

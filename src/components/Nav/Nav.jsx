"use client"
import Link from "next/link";
import React, { useState } from "react";

function Nav() {
    const [activeTab , setActiveTab] = useState("for-you")

    const handleChange = (evnt) =>{
        setActiveTab(evnt)
    }
  return (
    <div className="flex justify-around  px-4 pt-4 border-b-[1px] text-textGray border-borderGray">
      <Link
        href={"/"}
        onClick={() => handleChange("for-you")}
        className={`flex transition-all duration-300 items-center border-b-2 pb-4 ${
          activeTab === "for-you" ? "border-iconBlue text-white" : "border-transparent"
        }`}
      >
        For You
      </Link>
      <Link href={"/"}  onClick={() => handleChange("following")}
        className={`flex transition-all duration-300 items-center border-b-2 pb-4 ${
          activeTab === "following" ? "border-iconBlue text-white" : "border-transparent"
        }`}>
        Following
      </Link>
      {/* <Link href={"/"} className="flex items-center pb-4">React js</Link>
    <Link href={"/"} className="flex items-center pb-4">Next js</Link>
    <Link href={"/"} className="flex items-center pb-4">HTML</Link> */}
    </div>
  );
}

export default Nav;

import React from "react";
import Search from "../Search/Search";
import PopularTags from "../PopularTags/PopularTags";
import Recommendation from "../Recommendation/Recommendation";
import Link from "next/link";

function RightBar() {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendation />
      <div className="flex flex-wrap gap-x-4 text-sm text-gray-400">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>so 2025 L Corp .</span>
      </div>
    </div>
  );
}

export default RightBar;

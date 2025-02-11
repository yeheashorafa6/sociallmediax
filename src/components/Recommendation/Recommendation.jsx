import Link from "next/link";
import React from "react";
import Image from "../Image/Image";

function Recommendation() {
  const users = [
    {
      username: "john-doe",
      name: "John Doe",
      handle: "@john",
      avatar: "general/user1.png",
    },
    {
      username: "jane-smith",
      name: "Jane Smith",
      handle: "@JaneSmith",
      avatar: "general/user2.png",
    },
    {
      username: "mark-johnson",
      name: "Mark Johnson",
      handle: "@MarkJohnson",
      avatar: "general/user3.png",
    },
    {
      username: "sarah-wilson",
      name: "Sarah Wilson",
      handle: "@Sarah",
      avatar: "general/user-avatar.png",
    },
  ];

  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1>{"Who To Follow"}</h1>
      {/* USER CARD */}
      <div className="flex flex-col gap-3">
        {users.map((user, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* TEXT */}
            <div className="flex items-center gap-2 flex-1">
              <div className="relative rounded-full w-10 h-10 overflow-hidden">
                <Image
                  src={user.avatar}
                  width={100}
                  height={100}
                  alt={"avatar"}
                  tr={true}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <Link
                  href={`/user/[username]`}
                  className="text-md font-bold"
                  as={`/user/${user.username}`}
                >
                  {user.name}
                </Link>
                <span className="text-sm text-textGray">{user.handle}</span>
              </div>
            </div>
            {/* BUTTON */}
            <div>
              <button className="bg-iconBlue text-white px-4 py-2 rounded-3xl">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/"} className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
}

export default Recommendation;

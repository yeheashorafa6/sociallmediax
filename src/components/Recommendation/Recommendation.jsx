import Link from "next/link";
import Image from "../Image/Image";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

const Recommendations = async () => {
  const { userId } = await auth();

  if (!userId) return;

  const followingIds = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });

  const followedUserIds = followingIds.map((f) => f.followingId);

  // First try to get friend recommendations
  let recommendations = await prisma.user.findMany({
    where: {
      id: { not: userId, notIn: followedUserIds },
      followings: { some: { followerId: { in: followedUserIds } } },
    },
    take: 3,
    select: { id: true, displayName: true, username: true, img: true },
  });

  // If no friend recommendations are found, get random users instead
  if (recommendations.length === 0) {
    recommendations = await prisma.user.findMany({
      where: {
        id: { not: userId, notIn: followedUserIds },
      },
      take: 3,
      orderBy: {
        // This creates a random order
        id: 'asc', // You can use any field, we'll randomize below
      },
      select: { id: true, displayName: true, username: true, img: true },
    });
    
    // Shuffle the results for randomness
    recommendations = recommendations.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {recommendations.map((person) => (
        <div className="flex items-center justify-between" key={person.id}>
          {/* IMAGE AND USER INFO */}
          <div className="flex items-center gap-2">
            <div className="relative rounded-full overflow-hidden w-10 h-10">
              <Image
                path={person.img || "general/no_avatar.png"}
                alt={person.username}
                w={100}
                h={100}
                tr={true}
              />
            </div>
            <div className="">
              <h1 className="text-md font-bold">{person.displayName || person.username}</h1>
              <span className="text-textGray text-sm">@{person.username}</span>
            </div>
          </div>
          {/* BUTTON */}
          <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
            Follow
          </button>
        </div>
      ))}

      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
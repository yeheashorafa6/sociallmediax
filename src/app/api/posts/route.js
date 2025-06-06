import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const userProfileId = searchParams.get("user");
  const page = searchParams.get("cursor");
  const LIMIT = 3;

  const { userId } = await auth();

  if (!userId) {
    // إذا كان المستخدم غير موجود
    return NextResponse.json({ error: 'User is required' }, { status: 400 });
  }
  const whereCondition =
    userProfileId !== "undefined"
      ? { parentPostId: null, userId: userProfileId  }
      : {
          parentPostId: null,
          userId: {
            in: [
              userId,
              ...(
                await prisma.follow.findMany({
                  where: { followerId: userId },
                  select: { followingId: true },
                })
              ).map((follow) => follow.followingId),
            ],
          },
        };

  const postIncludeQuery = {
    user: { select: { displayName: true, username: true, img: true } },
    _count: { select: { likes: true, rePosts: true, comments: true } },
    likes: { where: { userId: userId }, select: { id: true } },
    rePosts: { where: { userId: userId }, select: { id: true } },
    saves: { where: { userId: userId }, select: { id: true } },
  };

  const posts = await prisma.post.findMany({
    where: whereCondition,
    include: {
      rePost: {
        include: postIncludeQuery,
      },
      ...postIncludeQuery,
    },
    take: LIMIT,
    skip: (Number(page) - 1) * LIMIT,
    orderBy: { createdAt: "desc" }
  });

  const totalPosts = await prisma.post.count({ where: whereCondition });

  const hasMore = Number(page) * LIMIT < totalPosts;

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return Response.json({ posts, hasMore });
}

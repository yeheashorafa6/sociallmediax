"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../Post/Post";
import Image from "../Image/Image";

const fetchPosts = async (pageParam, userProfileId) => {
  const res = await fetch(
    "http://localhost:3000/api/posts?cursor=" +
      pageParam +
      "&user=" +
      userProfileId
  );
  return res.json();
};

const InfiniteFeed = ({ userProfileId }) => {
  const { data, error, status, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 2 }) => fetchPosts(pageParam, userProfileId),
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 2 : undefined,
  });

  if (!data) {
    return <div>Loaded All Post</div>;
  }

  if (error) return "Something went wrong!";
  if (status === "pending") return "Loading...";

  console.log("data : ", data);

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  console.log("allPosts : ", allPosts);

  // if (!data) {
  //   return(
  //     <div>Loaded All Post</div>
  //   )
  // }

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <div className="flex justify-center items-center gap-4">
          <Image path={"gif/1.gif"} w={20} h={20} alt={"loading"} />
          <h2>Loading Post ... </h2>
        </div>
      }
      endMessage={
        <div className="flex justify-center items-center gap-4 ">
          <Image path={"gif/finsh.gif"} w={40} h={40} alt={"finsh"} />
          <h2>Loaded All Post !!</h2>
        </div>
      }
    >
      {allPosts.map((post) => {
        if (!post || !post.id) {
          console.log("Post or post.id is undefined", post);
          return null;
        }
        return <Post key={post.id} post={post} />;
      })}
    </InfiniteScroll>
  );
};

export default InfiniteFeed;

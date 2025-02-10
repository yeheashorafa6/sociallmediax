import React from "react";
import Image from "../Image/Image";
import PostInfo from "../PostInfo/PostInfo";
import PostInteractions from "../PostInteractions/PostInteractions";
import { imagekit } from "@/lib/utils";
import Video from "../Video/Video";

async function Post() {
  // FETCH POST MEDIA

  const getFileDetails = (fileId) => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result);
      });
    });
  };
  const fileDetails = await getFileDetails("67a9ff9e432c476416c644db");

  console.log("file details", fileDetails);
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        {/* POST TYPE */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span className="text-sm">username</span>
      </div>
      {/* POST CONTENT */}
      <div className="flex gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          {/* IMAGE */}
          <Image
            src={"general/user-avatar.png"}
            width={100}
            height={100}
            alt={"avatar"}
            tr={true}
            className={"rounded-full"}
          />
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-3">
          {/* TOP */}
          <div className="flex  justify-between gap-2 items-center">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-md font-bold ">yeheashorsfa</h1>
              <span className="text-sm text-textGray">@yehea</span>
              <span className="text-sm text-textGray">1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              dolore eius, fugit vel, iste temporibus similique ducimus sit unde
              veritatis asperiores? Tempora placeat itaque maxime illo, eum
              repellendus rerum? Minus!
            </p>
            {fileDetails && fileDetails.fileType === "image" ? (
              <Image
                src={fileDetails.filePath}
                className={`rounded-lg ${
                  fileDetails.customMetadata.sensitive ? "blur-md" : ""
                }`}
                width={fileDetails.width}
                height={fileDetails.height}
                alt={"post"}
              />
            ) : (
              <Video
                path={fileDetails.filePath}
                className={`rounded-lg ${
                  fileDetails.customMetadata.sensitive ? "blur-md" : ""
                }`}
              />
            )}
            {/* POST INTERACTIONS */}
            <PostInteractions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

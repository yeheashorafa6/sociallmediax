"use server";

import { imagekit } from "./utils";

export const shareAction = async (
  formData,
  settings
) => {
  const file = formData.get("file");
  // const desc = formData.get("desc");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;

  console.log("esstins actions : " , settings)
  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      ...(file.type.includes("image") && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result , "sttings : ",settings);
    }
  );
};
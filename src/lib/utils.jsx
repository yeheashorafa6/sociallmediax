import ImageKit from "imagekit"

export const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  privateKey: "private_jUxRU2JxhfzM9HTvzG8Kfo0S+YU=",
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT,
});

export const LIMIT_POST = 5 ; 
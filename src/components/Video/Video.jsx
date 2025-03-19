"use client";
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;



const Video = ({ path, className }) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      transformation={[
        { width: "1920", height: "1080", q: "90" },
        { raw: "l-text,i-LamaDev,fs-100,co-white,l-end" },
      ]}
      controls
    />
  );
};

export default Video;

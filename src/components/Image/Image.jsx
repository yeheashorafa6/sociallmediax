"use client";

import { IKImage } from "imagekitio-next";


const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!urlEndpoint) {
  throw new Error('Error: Please add urlEndpoint to .env or .env.local')
}

const Image = ({ path, src, w, h, alt, className, tr }) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      src={src}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
    />
  );
};

export default Image;

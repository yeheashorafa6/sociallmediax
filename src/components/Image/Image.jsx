"use client";
import React from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!urlEndpoint) {
  throw new Error('Error: Please add urlEndpoint to .env or .env.local')
}

function Image({src,width,height,alt,className ,tr}) {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      lqip={{active: true , quality : 20}}
      {...(tr
        ? { transformation: [{ width: `${width}`, height: `${height}` }] }
        : { width:  width , height: height  })}

        
    />
  );
}

export default Image;

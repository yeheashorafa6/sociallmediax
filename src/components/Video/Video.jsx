"use client"
import React from 'react'
import { IKVideo, ImageKitProvider } from "imagekitio-next";

function Video({path , className}) {
  return (
    <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}>
    <IKVideo
      path={path}
      transformation={[{ height: "1080", width: "1920" , q : "90" } ]}
      controls={true}
      className={className}
    />
  </ImageKitProvider>
  )
}

export default Video

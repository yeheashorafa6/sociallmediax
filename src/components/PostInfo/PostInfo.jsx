import React from 'react'
import Image from '../Image/Image'

function PostInfo() {
  return (
    <div className='relative h-4 w-4 cursor-pointer'>
        <Image src={"icons/infoMore.svg"} width={25} height={25} tr={true} alt={"more information"}/>
    </div>
  )
}

export default PostInfo

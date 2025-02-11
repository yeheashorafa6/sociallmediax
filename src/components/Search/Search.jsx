import React from 'react'
import Image from '../Image/Image'

function Search() {
  return (
    <div className='py-2 px-4 flex items-center  gap-4 rounded-full border-[1px] border-borderGray'>
        <Image src={"icons/explore.svg"} width={16} height={16} alt={"search"} />
        <input type="text" placeholder='Search' name="search" id="search" className='bg-transparent outline-none  placeholder:text-textGray' />
      
    </div>
  )
}

export default Search

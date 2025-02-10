import React from 'react'
import Image from '../Image/Image'

function Search() {
  return (
    <div className='py-2 px-4 flex items-center bg-inputGray gap-4 rounded-full'>
        <Image src={"icons/explore.svg"} width={16} height={16} alt={"search"} />
        <input type="text" name="search" id="search" className='bg-transparent outline-none placeholder:text-textGray' />
      
    </div>
  )
}

export default Search

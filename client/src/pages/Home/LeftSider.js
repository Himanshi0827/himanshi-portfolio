import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10  sm:static'>
    <div className='flex flex-col items-center '>
      <div className='flex flex-col gap-3 sm:flex-row'>
      <a href=''> <i class="ri-linkedin-fill text-gray-400 text-3xl">
        
      </i></a>
      <i class="ri-mail-fill text-gray-400 text-3xl"></i>
      <i class="ri-github-fill text-gray-400 text-3xl"></i>
      <i class="ri-instagram-line text-gray-400 text-3xl"></i>
      
      </div>
      <div className='w-[1px] h-60 bg-[#b2b5c052] sm:hidden'></div>
      </div>
    </div>
  )
}

export default LeftSider

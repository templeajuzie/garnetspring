'use ck'

import Image from 'next/image'
import React from 'react'

function Info1() {
  return (
    <div>
      

<section>

  <div class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    
    <div class="flex flex-col-reverse gap-8 sm:gap-20 lg:grid lg:grid-cols-2">
    
      <div>
        <Image src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b549c924696d892dd122f_Frame 48028-4.png" alt="" class="inline-block h-full w-full max-w-[640px]"  height={200} width={200}/>
      </div>
    
      <div class="flex flex-col items-start lg:justify-center">
      
        <h2 class="mb-4 text-3xl font-bold md:text-2xl">Understand sales performance better</h2>
        <div class="max-w-[480px]">
          <p class="text-[#647084]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
        </div>
       
        <div class="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]"></div>
        
        <ul class="flex flex-col items-start">
          <li class="mb-2 flex items-center">
            <Image src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg" height={200} width={200} alt="" class="mr-2 inline-block h-4 w-4" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </li>
          <li class="mb-2 flex items-center">
            <Image src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg" height={200} width={200} alt="" class="mr-2 inline-block h-4 w-4" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </li>
          <li class="mb-2 flex items-center">
            <Image src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg" height={200} width={200} alt="" class="mr-2 inline-block h-4 w-4" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </li>
          <li class="flex items-center">
            <Image src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg" height={200} width={200} alt="" class="mr-2 inline-block h-4 w-4" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Info1

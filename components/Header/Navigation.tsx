import { NavigationItemSlice } from '@/prismicio-types'
import NavigationItem from '@/slices/NavigationItem'
import { SliceZone } from '@prismicio/client'
import React from 'react'

interface INavigation {
  slices: SliceZone<NavigationItemSlice>
}

export default function Navigation({slices}: INavigation) {
  return <section className='w-full'>
    <nav className="">
      <ul className='flex items-center justify-around'>
        {slices.length > 0 && slices.map((slice, index) => {
          return <div key={slice.id}>
            <NavigationItem slice={slice} index={index} slices={[]} context={undefined} />
          </div>
        })}
      </ul>
    </nav>
  </section>
}

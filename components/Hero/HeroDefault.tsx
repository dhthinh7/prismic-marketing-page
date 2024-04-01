import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../Shared/RichText'
import Button from '../Shared/Button'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

interface IHeroDefault {
  slice: {
    slice_type: "hero";
    slice_label: null;
    id: string;
  } & Content.HeroSliceDefault
}
export default function HeroDefault({ slice }: IHeroDefault) {
  return (
    <div className='w-1/2 flex items-center h-full'>
      <div className=''>
        <RichText field={slice.primary.title} className="font-semibold text-white leading-tight text-4xl mb-3" />
        <RichText field={slice.primary.description} className="font-semibold text-white leading-snug text-2xl" />
        <Button>
          <PrismicNextLink field={slice.primary.cta_link}>
            {slice.primary.cta_label}
          </PrismicNextLink>
        </Button>
        <div className='flex items-center absolute top-[80%] right-[10%] gap-4'>
          <Button variant='solid' color='black'>
            {slice.primary.cta_tag}
          </Button>
          <PrismicNextLink field={slice.primary.cta_apple} className='h-16 w-16'>
            <PrismicNextImage field={slice.primary.apple_icon} className='h-full w-full'/>
          </PrismicNextLink>
          <PrismicNextLink field={slice.primary.cta_ch_play} className='h-16 w-16'>
            <PrismicNextImage field={slice.primary.ch_play_icon} className='h-full w-full'/>
          </PrismicNextLink>
        </div>
      </div>
    </div>
  )
}

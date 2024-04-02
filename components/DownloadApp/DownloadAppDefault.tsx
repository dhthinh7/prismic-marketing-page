import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../Shared/RichText'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

interface IDownloadAppDefault {
  slice: Content.DownloadAppSlice
}

export default function DownloadAppDefault({ slice }: IDownloadAppDefault) {
  return <div className='flex flex-col items-center text-center'>
    <RichText field={slice.primary.title} h3Class='font-semibold'/>
    <div className='flex items-stretch gap-2'>
      <PrismicNextLink field={slice.primary.cta_apple}>
        <PrismicNextImage field={slice.primary.cta_apple_image}/>
      </PrismicNextLink>
      <PrismicNextLink field={slice.primary.cta_ch_play}>
        <PrismicNextImage field={slice.primary.cta_ch_play_image}/>
      </PrismicNextLink>
    </div>
  </div>
}

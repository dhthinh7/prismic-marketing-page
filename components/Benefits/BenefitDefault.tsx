import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../Shared/RichText'
import Button from '../Shared/Button'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

interface IBenefitDefault {
  slice: Content.BenifitsSlice
}

export default function BenefitDefault({ slice }: IBenefitDefault) {
  return <div className='flex items-center'>
    <div className='flex-1 pr-14'>
      <div className='flex flex-col'>
        <RichText field={slice.primary.title}/>
        <RichText field={slice.primary.description} />
        <PrismicNextLink field={slice.primary.cta_link_register}>
          <Button variant='solid' color='black' className='p-5 rounded-xl'>
            {slice.primary.cta_label_register}
          </Button>
        </PrismicNextLink>
      </div>
    </div>
    <div className='flex-1'>
      <PrismicNextImage field={slice.primary.image} className='w-[500px]'/>
    </div>
  </div>
}

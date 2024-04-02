import { Simplify } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import React from 'react'
import RichText from '../Shared/RichText'
import { PrismicNextImage } from '@prismicio/next'
import { cn } from '@/utils'

interface IFeatureCard {
  item: Simplify<Content.FeatureSliceDefaultItem>
  className?: string
}

export default function FeatureCard({ item, className }: IFeatureCard) {
  return <div className={cn('flex flex-col items-center gap-6', className)}>
    <PrismicNextImage field={item.icon}/>
    <RichText field={item.title} h3Class='mb-0'/>
    <RichText field={item.description} className='text-center text-secondary'/>
  </div>
}

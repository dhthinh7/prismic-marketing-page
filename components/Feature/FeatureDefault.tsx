import { Content } from '@prismicio/client'
import React from 'react'
import Tags from '../Shared/Tags'
import RichText from '../Shared/RichText'
import { PrismicNextImage } from '@prismicio/next'
import GridFlatten from '../Shared/GridFlatten'
import FeatureCard from './FeatureCard'

interface IFeatureDefault {
  slice: Content.FeatureSlice
}
export default function FeatureDefault({slice}: IFeatureDefault) {
  return <section>
    <div className='text-center mb-12'>
      <div className='w-full flex justify-center mb-4'>
        <Tags tag={slice.primary.tag}/>
      </div>
      <RichText field={slice.primary.title}/>
      <RichText field={slice.primary.description} className='text-secondary max-w-[80%] mx-auto'/>
    </div>
    <div>
      <PrismicNextImage field={slice.primary.image} className='w-full'/>
    </div>
    <div className='flex items-stretch flex-wrap m-auto justify-around mt-20'>
      {slice.items.length > 0 && slice.items.map((item, index) => {
        return <GridFlatten key={index} length={slice.items.length} className='!w-[350px]'>
          <FeatureCard item={item}/>
        </GridFlatten>
      })}
    </div>
  </section>
}

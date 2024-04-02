import React from 'react'
import { Content } from '@prismicio/client'
import FeatureCard from './FeatureCard';
import { PrismicNextImage } from '@prismicio/next';
import Tags from '../Shared/Tags';
import RichText from '../Shared/RichText';

interface IFeatureFindCandidate {
  slice: {
    slice_type: "feature";
    slice_label: null;
    id: string;
  } & Content.FeatureSliceFindCandidates
}
export default function FeatureFindCandidate({ slice }: IFeatureFindCandidate) {
  const itemLeft = [...slice.items].slice(0, 2)
  const itemRight = [...slice.items].slice(2, 4)
  return <div>
    <div className='text-center mb-12'>
      <div className='w-full flex justify-center mb-4'>
        <Tags tag={slice.primary.tag}/>
      </div>
      <RichText field={slice.primary.title}/>
      <RichText field={slice.primary.description} className='text-secondary max-w-[80%] mx-auto'/>
    </div>
    <div className='flex items-center justify-around text-center px-1'>
      <div className='flex flex-col gap-8'>
        {itemLeft.map((item, index) => {
          return <div key={index} className='w-[355px]'>
            <FeatureCard item={item} className='!gap-2'/>
          </div>
        })}
      </div>
      <div className=''>
        <PrismicNextImage field={slice.primary.image} className='h-[650px]'/>
      </div>
      <div className='flex flex-col gap-8'>
        {itemRight.map((item, index) => {
          return <div key={index} className='w-[355px]'>
            <FeatureCard item={item} className='gap-2'/>
          </div>
        })}
      </div>
    </div>
  </div>
}

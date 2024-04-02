import { KeyTextField } from '@prismicio/client'
import React from 'react'

interface ITags {
  tag: KeyTextField
}
export default function Tags({tag}: ITags) {
  return (
    <div className='px-3 uppercase rounded-2xl w-fit font-medium text-primary-tag bg-primary-tag-bg'>
      {tag}
    </div>
  )
}

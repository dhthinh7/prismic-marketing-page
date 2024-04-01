import { cn } from '@/utils'
import { NumberField } from '@prismicio/client'
import React, { CSSProperties, ReactNode } from 'react'

interface ISectionWrapper {
  children: ReactNode
  className?: string
  paddingTop?: NumberField
  paddingBottom?: NumberField
}

export default function SectionWrapper({children, className, paddingTop, paddingBottom}: ISectionWrapper) {
  // const style: CSSProperties = {
  //   paddingTop: paddingTop !==null && paddingTop !== undefined ? paddingTop + 'px' : '30px',
  //   paddingBottom: paddingBottom !== null && paddingBottom !== undefined ? paddingBottom + 'px' : '30px'
  // }

  let style: CSSProperties = {}

  if (paddingTop !==null && paddingTop !== undefined) {
    style = {
      ...style,
      paddingTop: paddingTop + 'px'
    }
  }

  if (paddingBottom !== null && paddingBottom !== undefined) {
    style = {
      ...style,
      paddingBottom: paddingBottom + 'px'
    }
  }

  return (
    <div className={cn('p-12', className)} style={style}>
      {children}
    </div>
  )
}

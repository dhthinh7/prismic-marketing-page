import { cn } from '@/utils';
import React from 'react'

type Variant = 'solid' | 'outline' | 'shadow';
type Color = 'white' | 'black';

interface IButton {
  variant?: Variant;
  color?: Color;
  className?: string;
  href?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const baseStyles = {
  solid: 'flex items-center justify-center border-0 rounded-md px-8 py-3 focus:outline-none text-base font-medium min-w-16',
  outline: 'flex items-center justify-center border border-white rounded-md px-8 py-3 focus:outline-none text-base font-medium min-w-16',
  shadow: 'flex items-center justify-center border-0 rounded-md px-8 py-3 focus:outline-none text-base font-medium min-w-16 shadow-button transition-all hover:shadow-hight-light'
};

const variantStyles = {
  solid: {
    white: 'text-white bg-primary',
    black: 'text-black bg-primary'
  },
  outline: {
    white: 'text-white bg-transparent',
    black: 'text-black bg-transparent'
  },
  shadow: {
    white: 'text-white bg-primary',
    black: 'text-black bg-primary'
  }
};

export default function Button({variant = 'solid', color='black', className, children, ...props}: IButton) {
  // const classNames = `${baseStyles[variant] + variantStyles[variant][color]} ${className}`
  const classNames = cn(baseStyles[variant], variantStyles[variant][color], className);
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

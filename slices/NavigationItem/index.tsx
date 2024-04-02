'use client'

import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { usePathname } from "next/navigation";

/**
 * Props for `NavigationItem`.
 */
export type NavigationItemProps =
  SliceComponentProps<Content.NavigationItemSlice>;

/**
 * Component for "NavigationItem" Slices.
 */
const NavigationItem = ({ slice }: NavigationItemProps): JSX.Element => {
  const pathName = usePathname()
  let isActive = false
  if (isFilled.contentRelationship(slice.primary.link)) {
    const uid = slice.primary.link.uid
    isActive = `${"/" + uid}` === pathName || (pathName === '/' && uid === 'home_page')
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`text-white inline-block hover:cursor-pointer duration-100 ${isActive ? 'font-medium underline underline-offset-8' : ''}`}
    >
      {slice.variation === 'default' && <PrismicNextLink field={slice.primary.link}>
          {slice.primary.label}
        </PrismicNextLink>}
    </section>
  );
};

export default NavigationItem;

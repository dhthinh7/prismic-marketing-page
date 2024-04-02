import { LayoutDocument } from "@/prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import SectionWrapper from "../Shared/SectionWrapper";

interface IFooter {
  layout: LayoutDocument<string>
}
export default function Footer({ layout }: IFooter) {
  return <div className="bg-black py-4">
    <SectionWrapper>
      <div className="flex justify-between">
        <div>
          <PrismicNextLink field={layout.data.cta_link_logo}>
            <PrismicNextImage field={layout.data.cta_logo} />
          </PrismicNextLink>
        </div>
        <div className="flex items-center gap-4">
          {layout.data.footer_navigate.length > 0 && layout.data.footer_navigate.map((item, index) => {
            return <div key={index} className={index < layout.data.footer_navigate.length - 1 ? 'border-r border-white pr-4' : ''}>
              <PrismicNextLink field={item.cta_link} className="text-white hover:underline">
                {item.cta_label}
              </PrismicNextLink>
            </div>
          })}
        </div>
      </div>
    </SectionWrapper>
  </div>;
}

import HeroDefault from "@/components/Hero/HeroDefault";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper>
        <div className="h-[98vh] relative">
          <div className="h-full w-full absolute top-0 -z-10">
            <PrismicNextImage field={slice.primary.image} className="h-full w-full object-cover bg-no-repeat object-top"/>
          </div>
          <SectionWrapper className="h-full pt-20 pb-0">
            {slice.variation === 'default' && <HeroDefault slice={slice} />}
          </SectionWrapper>
        </div>
      </SliceWrapper>
    </section>
  );
};

export default Hero;

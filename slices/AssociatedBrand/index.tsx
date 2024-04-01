import GridFlatten from "@/components/Shared/GridFlatten";
import RichText from "@/components/Shared/RichText";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AssociatedBrand`.
 */
export type AssociatedBrandProps =
  SliceComponentProps<Content.AssociatedBrandSlice>;

/**
 * Component for "AssociatedBrand" Slices.
 */
const AssociatedBrand = ({ slice }: AssociatedBrandProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.custom_padding_top} paddingBottom={slice.primary.custom_padding_bottom}>
          {slice.primary.title && <RichText field={slice.primary.title} className="text-center" />}
          <div className="flex items-stretch flex-wrap m-auto justify-center">
            {slice.variation === 'default' && slice.items.length > 0 && slice.items.map((item, index) => {
              return <GridFlatten key={index} length={slice.items.length} className="lg:w-[260px] lg:h-[146px] flex items-center justify-center shadow-card-shadow rounded-sm m-4">
                <PrismicNextImage field={item.image}/>
              </GridFlatten>
            })}
          </div>
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default AssociatedBrand;

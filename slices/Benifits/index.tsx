import BenefitDefault from "@/components/Benefits/BenefitDefault";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Benifits`.
 */
export type BenifitsProps = SliceComponentProps<Content.BenifitsSlice>;

/**
 * Component for "Benifits" Slices.
 */
const Benifits = ({ slice }: BenifitsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.custom_padding_top} paddingBottom={slice.primary.custom_padding_bottom}>
          {slice.variation === 'default' && <BenefitDefault slice={slice}/>}
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default Benifits;

import FeatureDefault from "@/components/Feature/FeatureDefault";
import FeatureFindCandidate from "@/components/Feature/FeatureFindCandidate";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Feature`.
 */
export type FeatureProps = SliceComponentProps<Content.FeatureSlice>;

/**
 * Component for "Feature" Slices.
 */
const Feature = ({ slice }: FeatureProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.custom_padding_top} paddingBottom={slice.primary.custom_padding_bottom}>
          {slice.variation === 'default' && <FeatureDefault slice={slice}/>}
          {slice.variation === 'findCandidates' && <FeatureFindCandidate slice={slice}/>}
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default Feature;

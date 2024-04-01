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
      Placeholder component for benifits (variation: {slice.variation}) Slices
    </section>
  );
};

export default Benifits;

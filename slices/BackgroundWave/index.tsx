import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BackgroundWave`.
 */
export type BackgroundWaveProps =
  SliceComponentProps<Content.BackgroundWaveSlice>;

/**
 * Component for "BackgroundWave" Slices.
 */
const BackgroundWave = ({ slice }: BackgroundWaveProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background} className="relative -z-10">
        <div className="h-[87px] w-full ">
          <PrismicNextImage field={slice.primary.image} className=" w-full absolute top-0 left-0" style={{clipPath: 'rect(0, 100px, 200px, 0)'}}/>
        </div>
      </SliceWrapper>
    </section>
  );
};

export default BackgroundWave;

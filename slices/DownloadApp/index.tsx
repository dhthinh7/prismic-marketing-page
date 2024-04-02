import DownloadAppDefault from "@/components/DownloadApp/DownloadAppDefault";
import SectionWrapper from "@/components/Shared/SectionWrapper";
import SliceWrapper from "@/components/Shared/SliceWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DownloadApp`.
 */
export type DownloadAppProps = SliceComponentProps<Content.DownloadAppSlice>;

/**
 * Component for "DownloadApp" Slices.
 */
const DownloadApp = ({ slice }: DownloadAppProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceWrapper background={slice.primary.background}>
        <SectionWrapper paddingTop={slice.primary.custom_padding_top} paddingBottom={slice.primary.custom_padding_bottom}>
          {slice.variation === 'default' && <div className="max-w-[1200px] mx-auto">
              <DownloadAppDefault slice={slice} />
            </div>}
        </SectionWrapper>
      </SliceWrapper>
    </section>
  );
};

export default DownloadApp;

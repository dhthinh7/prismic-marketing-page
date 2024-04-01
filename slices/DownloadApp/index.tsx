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
      Placeholder component for download_app (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DownloadApp;

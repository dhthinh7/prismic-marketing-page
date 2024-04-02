// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomePageDocumentDataSlicesSlice =
  | BackgroundWaveSlice
  | DownloadAppSlice
  | BenifitsSlice
  | FeatureSlice
  | AssociatedBrandSlice
  | HeroSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

/**
 * Item in *Layout → Logo*
 */
export interface LayoutDocumentDataLogoItem {
  /**
   * Logo Icon field in *Layout → Logo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.logo[].logo_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_icon: prismic.ImageField<never>;

  /**
   * Logo icon link field in *Layout → Logo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.logo[].logo_icon_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_icon_link: prismic.LinkField;
}

/**
 * Item in *Layout → CTA*
 */
export interface LayoutDocumentDataCtaItem {
  /**
   * CTA Login field in *Layout → CTA*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.cta[].cta_login
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_login: prismic.KeyTextField;

  /**
   * CTA Signup field in *Layout → CTA*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.cta[].cta_signup
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_signup: prismic.KeyTextField;
}

type LayoutDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Item in *Layout → Footer Navigate*
 */
export interface LayoutDocumentDataFooterNavigateItem {
  /**
   * CTA Link field in *Layout → Footer Navigate*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.footer_navigate[].cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA Label field in *Layout → Footer Navigate*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.footer_navigate[].cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;
}

type LayoutDocumentDataSlices1Slice = never;

/**
 * Content for Layout documents
 */
interface LayoutDocumentData {
  /**
   * Logo field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.logo[]
   * - **Tab**: header
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  logo: prismic.GroupField<Simplify<LayoutDocumentDataLogoItem>>;

  /**
   * CTA field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.cta[]
   * - **Tab**: header
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cta: prismic.GroupField<Simplify<LayoutDocumentDataCtaItem>>;

  /**
   * Slice Zone field in *Layout*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.slices[]
   * - **Tab**: header
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LayoutDocumentDataSlicesSlice> /**
   * CTA Link logo field in *Layout*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.cta_link_logo
   * - **Tab**: footer
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */;
  cta_link_logo: prismic.LinkField;

  /**
   * CTA Logo field in *Layout*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.cta_logo
   * - **Tab**: footer
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_logo: prismic.ImageField<never>;

  /**
   * Footer Navigate field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.footer_navigate[]
   * - **Tab**: footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_navigate: prismic.GroupField<
    Simplify<LayoutDocumentDataFooterNavigateItem>
  >;

  /**
   * Slice Zone field in *Layout*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.slices1[]
   * - **Tab**: footer
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices1: prismic.SliceZone<LayoutDocumentDataSlices1Slice>;
}

/**
 * Layout document from Prismic
 *
 * - **API ID**: `layout`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LayoutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LayoutDocumentData>,
    "layout",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | BackgroundWaveSlice
  | BenifitsSlice
  | FeatureSlice
  | DownloadAppSlice
  | HeroSlice
  | AssociatedBrandSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HomePageDocument | LayoutDocument | PageDocument;

/**
 * Primary content in *AssociatedBrand → Primary*
 */
export interface AssociatedBrandSliceDefaultPrimary {
  /**
   * Background field in *AssociatedBrand → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: associated_brand.primary.background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background: prismic.BooleanField;

  /**
   * Custom padding top field in *AssociatedBrand → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: associated_brand.primary.custom_padding_top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_top: prismic.NumberField;

  /**
   * Custom padding bottom field in *AssociatedBrand → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: associated_brand.primary.custom_padding_bottom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_bottom: prismic.NumberField;

  /**
   * Title field in *AssociatedBrand → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: associated_brand.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *AssociatedBrand → Items*
 */
export interface AssociatedBrandSliceDefaultItem {
  /**
   * Image field in *AssociatedBrand → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: associated_brand.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for AssociatedBrand Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AssociatedBrandSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AssociatedBrandSliceDefaultPrimary>,
  Simplify<AssociatedBrandSliceDefaultItem>
>;

/**
 * Slice variation for *AssociatedBrand*
 */
type AssociatedBrandSliceVariation = AssociatedBrandSliceDefault;

/**
 * AssociatedBrand Shared Slice
 *
 * - **API ID**: `associated_brand`
 * - **Description**: AssociatedBrand
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AssociatedBrandSlice = prismic.SharedSlice<
  "associated_brand",
  AssociatedBrandSliceVariation
>;

/**
 * Primary content in *BackgroundWave → Primary*
 */
export interface BackgroundWaveSliceDefaultPrimary {
  /**
   * Image field in *BackgroundWave → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: background_wave.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Background field in *BackgroundWave → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: background_wave.primary.background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background: prismic.BooleanField;
}

/**
 * Default variation for BackgroundWave Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BackgroundWaveSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BackgroundWaveSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BackgroundWave*
 */
type BackgroundWaveSliceVariation = BackgroundWaveSliceDefault;

/**
 * BackgroundWave Shared Slice
 *
 * - **API ID**: `background_wave`
 * - **Description**: BackgroundWave
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BackgroundWaveSlice = prismic.SharedSlice<
  "background_wave",
  BackgroundWaveSliceVariation
>;

/**
 * Primary content in *Benifits → Primary*
 */
export interface BenifitsSliceDefaultPrimary {
  /**
   * Background field in *Benifits → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: benifits.primary.background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background: prismic.BooleanField;

  /**
   * Custom padding top field in *Benifits → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.custom_padding_top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_top: prismic.NumberField;

  /**
   * Custom padding bottom field in *Benifits → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.custom_padding_bottom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_bottom: prismic.NumberField;

  /**
   * Title field in *Benifits → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Benifits → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA Link Register field in *Benifits → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.cta_link_register
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link_register: prismic.LinkField;

  /**
   * CTA Label Register field in *Benifits → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.cta_label_register
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label_register: prismic.KeyTextField;

  /**
   * Image field in *Benifits → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text footer field in *Benifits → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.text_footer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_footer: prismic.RichTextField;

  /**
   * CTA Apple field in *Benifits → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.cta_apple
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_apple: prismic.LinkField;

  /**
   * CTA Apple image field in *Benifits → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.cta_apple_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_apple_image: prismic.ImageField<never>;

  /**
   * CTA CH play field in *Benifits → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.cta_ch_play
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_ch_play: prismic.LinkField;

  /**
   * CTA CH play image field in *Benifits → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: benifits.primary.cta_ch_play_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_ch_play_image: prismic.ImageField<never>;
}

/**
 * Default variation for Benifits Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenifitsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BenifitsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Benifits*
 */
type BenifitsSliceVariation = BenifitsSliceDefault;

/**
 * Benifits Shared Slice
 *
 * - **API ID**: `benifits`
 * - **Description**: Benifits
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenifitsSlice = prismic.SharedSlice<
  "benifits",
  BenifitsSliceVariation
>;

/**
 * Primary content in *DownloadApp → Primary*
 */
export interface DownloadAppSliceDefaultPrimary {
  /**
   * Background field in *DownloadApp → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: download_app.primary.background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background: prismic.BooleanField;

  /**
   * Custom padding top field in *DownloadApp → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: download_app.primary.custom_padding_top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_top: prismic.NumberField;

  /**
   * Custom padding bottom field in *DownloadApp → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: download_app.primary.custom_padding_bottom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_bottom: prismic.NumberField;

  /**
   * Title field in *DownloadApp → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: download_app.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * CTA Apple field in *DownloadApp → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: download_app.primary.cta_apple
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_apple: prismic.LinkField;

  /**
   * CTA Apple image field in *DownloadApp → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: download_app.primary.cta_apple_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_apple_image: prismic.ImageField<never>;

  /**
   * CTA CH play field in *DownloadApp → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: download_app.primary.cta_ch_play
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_ch_play: prismic.LinkField;

  /**
   * CTA CH play image field in *DownloadApp → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: download_app.primary.cta_ch_play_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_ch_play_image: prismic.ImageField<never>;
}

/**
 * Default variation for DownloadApp Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DownloadAppSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DownloadAppSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DownloadApp*
 */
type DownloadAppSliceVariation = DownloadAppSliceDefault;

/**
 * DownloadApp Shared Slice
 *
 * - **API ID**: `download_app`
 * - **Description**: DownloadApp
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DownloadAppSlice = prismic.SharedSlice<
  "download_app",
  DownloadAppSliceVariation
>;

/**
 * Primary content in *Feature → Primary*
 */
export interface FeatureSliceDefaultPrimary {
  /**
   * Background field in *Feature → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: feature.primary.background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background: prismic.BooleanField;

  /**
   * Custom padding top field in *Feature → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.custom_padding_top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_top: prismic.NumberField;

  /**
   * Custom padding bottom field in *Feature → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.custom_padding_bottom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_bottom: prismic.NumberField;

  /**
   * Tag field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;

  /**
   * Title field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Feature → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Feature → Items*
 */
export interface FeatureSliceDefaultItem {
  /**
   * Icon field in *Feature → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Title field in *Feature → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Feature → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Feature Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeatureSliceDefaultPrimary>,
  Simplify<FeatureSliceDefaultItem>
>;

/**
 * Primary content in *Feature → Primary*
 */
export interface FeatureSliceFindCandidatesPrimary {
  /**
   * Background field in *Feature → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: feature.primary.background
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  background: prismic.BooleanField;

  /**
   * Custom padding top field in *Feature → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.custom_padding_top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_top: prismic.NumberField;

  /**
   * Custom padding bottom field in *Feature → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.custom_padding_bottom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  custom_padding_bottom: prismic.NumberField;

  /**
   * Tag field in *Feature → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag: prismic.KeyTextField;

  /**
   * Title field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Feature → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Feature → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Feature → Items*
 */
export interface FeatureSliceFindCandidatesItem {
  /**
   * Icon field in *Feature → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Title field in *Feature → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Feature → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Find Candidates variation for Feature Slice
 *
 * - **API ID**: `findCandidates`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSliceFindCandidates = prismic.SharedSliceVariation<
  "findCandidates",
  Simplify<FeatureSliceFindCandidatesPrimary>,
  Simplify<FeatureSliceFindCandidatesItem>
>;

/**
 * Slice variation for *Feature*
 */
type FeatureSliceVariation = FeatureSliceDefault | FeatureSliceFindCandidates;

/**
 * Feature Shared Slice
 *
 * - **API ID**: `feature`
 * - **Description**: Feature
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureSlice = prismic.SharedSlice<
  "feature",
  FeatureSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA tag field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_tag: prismic.KeyTextField;

  /**
   * Apple icon field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.apple_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  apple_icon: prismic.ImageField<never>;

  /**
   * CTA Apple field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_apple
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_apple: prismic.LinkField;

  /**
   * CH Play icon field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.ch_play_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  ch_play_icon: prismic.ImageField<never>;

  /**
   * CTA CH play field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_ch_play
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_ch_play: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *NavigationItem → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Label field in *NavigationItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      LayoutDocument,
      LayoutDocumentData,
      LayoutDocumentDataLogoItem,
      LayoutDocumentDataCtaItem,
      LayoutDocumentDataSlicesSlice,
      LayoutDocumentDataFooterNavigateItem,
      LayoutDocumentDataSlices1Slice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AssociatedBrandSlice,
      AssociatedBrandSliceDefaultPrimary,
      AssociatedBrandSliceDefaultItem,
      AssociatedBrandSliceVariation,
      AssociatedBrandSliceDefault,
      BackgroundWaveSlice,
      BackgroundWaveSliceDefaultPrimary,
      BackgroundWaveSliceVariation,
      BackgroundWaveSliceDefault,
      BenifitsSlice,
      BenifitsSliceDefaultPrimary,
      BenifitsSliceVariation,
      BenifitsSliceDefault,
      DownloadAppSlice,
      DownloadAppSliceDefaultPrimary,
      DownloadAppSliceVariation,
      DownloadAppSliceDefault,
      FeatureSlice,
      FeatureSliceDefaultPrimary,
      FeatureSliceDefaultItem,
      FeatureSliceFindCandidatesPrimary,
      FeatureSliceFindCandidatesItem,
      FeatureSliceVariation,
      FeatureSliceDefault,
      FeatureSliceFindCandidates,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
    };
  }
}

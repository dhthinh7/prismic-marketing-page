import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import MenuItems from "./MenuItems";
import { LayoutDocument } from "@/prismicio-types";

// Import css
import './style.css'
import Navigation from "./Navigation";
import Button from "../Shared/Button";

interface IHeader {
  layout: LayoutDocument<string>
}

export default async function Header({layout}: IHeader) {
  return <div className="relative">
    <div className="fixed top-0 z-10 w-full">
      <div className="px-8 py-5 lg:px-12 bg-[#25252540] h-[120px]" style={{backdropFilter: 'blur(4px)'}}>
        <div className="">
          <div className="flex justify-between">
            <div className="logo-wrapper relative">
              <PrismicNextLink field={layout.data.logo[0]?.logo_icon_link}>
                <PrismicNextImage field={layout.data.logo[0]?.logo_icon} />
              </PrismicNextLink>
            </div>
            <div className="flex justify-end items-center">
              <div className='flex-[5] w-[600px]'>
                <Navigation slices={layout.data.slices}/>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" color="white" className="">
                  Log In
                </Button>
                <Button variant="solid" color="white" className="">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

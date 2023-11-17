"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Image from "next/image";
import Info4 from "../Components/ProductPackging/Info4";
import Offering from "../Components/HomeComponent/Offering";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ProductPackaging() {

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
  return (
    <div>
      <div
        className="bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to- 
      [#11113A]  h-fit"
      >
        <NavbarWithMegaMenu />
      </div>
      <div
        className="flex flex-col justify-center items-center px-10 md:px-16 mx-auto text-center md:mb-12 lg:mb-5 bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to- 
      [#11113A]  h-[30vh] shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white md:text-3xl">
          Product Packaging
        </h2>

        <p className="mt-4 w-full text-[12px] text-gray-200 sm:text-[14px] md:w-[40vw]">
          Our comprehensive product packaging services are crafted to meet the
          diverse needs of your brand
        </p>
      </div>
      <div className="flex flex-col gap-8 md:flex-col">
        
      </div>
      <Info4 />
      <Offering />
      <FooterWithSitemap />
    </div>
  );
}

export default ProductPackaging;

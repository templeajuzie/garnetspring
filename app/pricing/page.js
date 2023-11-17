"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Pricing from "../Components/PricingComponent/Pricing"
import Image from "next/image";

function PricingSection() {
  return (
    <div>
      <div className="bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to-[#11113A] h-fit">
            <NavbarWithMegaMenu />
          </div>
          <div
            className="flex flex-col justify-center items-center px-10 md:px-16 mx-auto text-center md:mb-12 lg:mb-5 bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to-[#11113A] h-[30vh] shadow-lg">
            <h2 className="text-3xl font-bold text-white md:text-3xl">
              Pricing
            </h2>

            <p className="mt-4 w-full text-[12px] text-gray-200 sm:text-[14px] md:w-[40vw]">
              Lets help you get started with our easy and intuitive pricing.
            </p>
          </div>
      <>
        <section>
          <div className="px-5 py-10 mx-auto max-w-7xl md:px-10 ">
            <Pricing />
          </div>
        </section>
      </>
      <FooterWithSitemap />
    </div>
  );
}

export default PricingSection;

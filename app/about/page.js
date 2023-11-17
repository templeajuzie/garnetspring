"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Pricing from "../Components/PricingComponent/Pricing";
import Image from "next/image";
import CompanyInfo from "../Components/HomeComponent/CompanyInfo";

function AboutSection() {
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
        <h2 className="text-3xl font-bold md:text-3xl text-white">About US</h2>

        <p className="mt-4 w-full text-[12px] text-gray-200 sm:text-[14px] md:w-[40vw]">
          Get to know about us, our mission, what we believe in, what drives us,
          and the services we provide us.
        </p>
      </div>
      <>
        <section>
          <div className="py-10 mx-auto max-w-7xl md:px-10">
            <CompanyInfo />
          </div>
        </section>
      </>
      <FooterWithSitemap />
    </div>
  );
}

export default AboutSection;

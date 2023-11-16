"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Pricing from "../Components/PricingComponent/Pricing"
import Image from "next/image";
import CompanyInfo from "../Components/HomeComponent/CompanyInfo";

function AboutSection() {
  return (
    <div>
      <NavbarWithMegaMenu />
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

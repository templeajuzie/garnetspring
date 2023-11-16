"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Pricing from "../Components/PricingComponent/Pricing"
import Image from "next/image";

function PricingSection() {
  return (
    <div>
      <NavbarWithMegaMenu />
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

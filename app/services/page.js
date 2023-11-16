"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Image from "next/image";
import Info4 from "../Components/HomeComponent/Info4";

function Services() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <>
      <Info4 /> 
      </>
      <FooterWithSitemap />
    </div>
  );
}

export default Services;

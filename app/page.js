'use client'

import Image from "next/image";
import { NavbarWithMegaMenu } from "./Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "./Components/FooterComponent/Footer";
import HomeSec from "./Components/HomeComponent/HomeSec";
import Info1 from "./Components/HomeComponent/Info1";
import CompanyInfo from "./Components/HomeComponent/CompanyInfo";
import AboutUs from "./Components/HomeComponent/AboutUs";
import Info4 from "./Components/ProductPackging/Info4";
import Info5 from "./Components/HomeComponent/Info5";
import Pricing from "./Components/PricingComponent/Pricing";
import Newsletter from "./Components/HomeComponent/Newsletter";
import Testimonials from "./Components/TestimonialsComponent/Testimonials";
import Offering from "./Components/HomeComponent/Offering";
import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function Home() {
  const tawkMessengerRef = useRef();
  

  return (
    <div className="bg-white">
      <div
        className="bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to- 
      [#11113A]"
      >
        <div className="">
          <NavbarWithMegaMenu />
          <HomeSec />
        </div>
      </div>
      <CompanyInfo />
      <Info1 />
      <Newsletter />
      <Testimonials />
      <FooterWithSitemap />
      <TawkMessengerReact
        propertyId="655b7978d600b968d31528ab"
        widgetId="default"
        ref={tawkMessengerRef}
      />
    </div>
  );
}

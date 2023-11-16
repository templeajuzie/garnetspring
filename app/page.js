import Image from "next/image";
import { NavbarWithMegaMenu } from "./Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "./Components/FooterComponent/Footer";
import HomeSec from "./Components/HomeComponent/HomeSec";
import Info1 from "./Components/HomeComponent/Info1";
import CompanyInfo from "./Components/HomeComponent/CompanyInfo";
import AboutUs from "./Components/HomeComponent/AboutUs";
import Info4 from "./Components/HomeComponent/Info4";
import Info5 from "./Components/HomeComponent/Info5";
import Pricing from "./Components/PricingComponent/Pricing";
import Newsletter from "./Components/HomeComponent/Newsletter";
import Testimonials from "./Components/TestimonialsComponent/Testimonials";
import Offering from "./Components/HomeComponent/Offering";

export default function Home() {
  return (
    <div>
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
      <Pricing />
      <Info1 />
      <Offering />
      <Newsletter />
      <Testimonials />
      <FooterWithSitemap />
    </div>
  );
}

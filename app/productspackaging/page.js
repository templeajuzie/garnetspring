"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Image from "next/image";
import Info4 from "../Components/ProductPackging/Info4";
import Offering from "../Components/HomeComponent/Offering";
import productpackaging from "../Resources/Images/productpackaging.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";

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
  const [open, setOpen] = React.useState(2);

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
      <div className="flex flex-col gap-8 md:flex-col"></div>

      <div className="grid items-center gap-8 px-4 justify-items-start sm:gap-20 lg:gap-28 lg:grid-cols-2 md:px-14 lg:px-20">
        <div className="a">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              Eco-friendly Paper Packaging
            </AccordionHeader>
            <AccordionBody>
              <ul className="flex flex-col items-start gap-4">
                <li className="flex items-start mb-2">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Corrugated boxes
                  </p>
                </li>
                <li className="flex items-start mb-2">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Paperboard cartons
                  </p>
                </li>
                <li className="flex items-start mb-2">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Paper tubes
                  </p>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Paperboard rolls
                  </p>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Paperboard sheets
                  </p>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Paperboard cartons
                  </p>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Paper sacks
                  </p>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Paper bags
                  </p>
                </li>
              </ul>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Eco-friendly plastic Packaging
            </AccordionHeader>
            <AccordionBody>
              <ul className="flex flex-col items-start gap-4">
                <li className="flex items-start mb-2">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Compostable packing bags
                  </p>
                </li>
                <li className="flex items-start mb-2">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Grip & Zip Seal
                  </p>
                </li>
                <li className="flex items-start mb-2">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">
                    Zip Slider Bags
                  </p>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    height={200}
                    width={200}
                    alt=""
                    className="inline-block w-4 h-4 mr-2"
                  />
                  <p className="text-start text-sm text-[#636262]">Jute Bags</p>
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
        </div>

        <div class="lg:inset-y-0 lg:right-0 lg:w-full">
          <Image
            className="inline-block rounded-xl h-[60vh] md:h-[70vh] w-full object-cover"
            src={productpackaging}
            alt=""
            height={500}
            width={500}
          />
        </div>
      </div>

      <div>
        <div className="max-w-3xl px-2 mx-auto mt-4 mb-8 text-center md:px-10 lg:px-16 md:mb-12 lg:mb-5">
          <h2 className="text-3xl font-bold md:text-3xl">
            Environmental impact
          </h2>

          <p className="mt-4 text-sm text-[#636262] sm:text-base">
            Using eco-friendly packaging can have a significant positive impact
            on the environment. <br /> <br /> Eco-friendly packaging is made
            from materials that can be broken down naturally, which helps to
            reduce waste and pollution. <br /> <br /> It can also help to
            conserve resources and reduce greenhouse gas emissions.
          </p>
        </div>
      </div>

      <Info4 />
      <Offering />
      <FooterWithSitemap />
    </div>
  );
}

export default ProductPackaging;

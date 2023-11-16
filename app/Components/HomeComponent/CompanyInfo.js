"use ck";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function CompanyInfo() {
  return (
    <div>
      <section className="relative">
        <div className="w-full py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-10">
          <section className="bg-white dark:bg-gray-900">
            <div className="items-center max-w-screen-xl gap-16 px-4 py-2 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="a">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-2xl font-bold text-black md:text-xl">
                    Get to know about us
                  </h2>
                  <p className="text-sm text-gray-800 sm:text-sm">
                    Garnet Spring Limited is business solution delivery company
                    committed to providing tailored solutions that are
                    affordable, competitive, accessible and sustainable. We are
                    dedicated to shaping the future of business solutions and
                    transforming the business ecosystem. With a relentless
                    commitment to innovation, excellence, and client success, we
                    stand as a pillar of trust and reliability in the
                    ever-evolving world of business technology.
                  </p>
                </div>
                <div className="mt-6 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-2xl font-bold text-black md:text-xl">
                    The Solution we provide
                  </h2>
                  <p className="text-sm text-gray-800 sm:text-sm">
                    As part of our mission to helping business scale, we offer
                    innovative and sustainable product packaging solutions to
                    meet your unique needs. <br /> We understand the importance
                    of packaging in protecting your products, promoting your
                    brand, and aligning with your eco-conscious values for a
                    sustainable future. <br /> <br /> Our top-tier product
                    packaging solutions for businesses include paper packaging
                    and our innovative line Eco friendly plastic packaging that
                    provide the perfect blend of functionality, aesthetics, and
                    environmental responsibility.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Image
                  className="w-full rounded-lg"
                  src="https://i.pinimg.com/474x/f1/83/6f/f1836f431ddb298554194b831101edb4.jpg"
                  alt="office content 1"
                  height={500}
                  width={500}
                />
                <Image
                  className="w-full mt-4 rounded-lg lg:mt-10"
                  src="https://i.pinimg.com/474x/f3/d4/e4/f3d4e4e5b0dfa282df47b0402dd8cbb2.jpg"
                  alt="office content 2"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </section>

          <ul class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-0 w-full">
            <li className="flex flex-col items-center gap-6 border-r-[1px] px-4 md:px-10 py-4 max-[767px]:p-8 max-[767px]:[border-right-style:none]">
              <p className="text-xl font-semibold">Our Mission</p>
              <p className="text-center text-sm text-[#636262]">
                To be the trusted partner of choice, known for our relentless
                pursuit of excellence, passion for innovation, and unwavering
                commitment to our clients success.
              </p>
              <Image
                className="w-full rounded-lg h-[50vh] object-cover"
                src="https://i.pinimg.com/564x/b7/dd/db/b7dddb8f6817157c2df34271d8904ebb.jpg"
                alt="office content 1"
                height={500}
                width={500}
              />
            </li>
            <li className="flex flex-col items-center gap-6 border-r-[1px] px-4 md:px-10 py-4 max-[767px]:p-8 max-[767px]:[border-right-style:none]">
              <p className="text-xl font-semibold">Our Vision</p>
              <p className="text-center text-sm text-[#636262]">
                To drive transformative change for businesses by delivering
                tailored solutions that optimize operations, enhance
                competitiveness, and drive sustainable growth.
              </p>
              <Image
                className="w-full rounded-lg h-[50vh] object-cover"
                src="https://i.pinimg.com/564x/a8/d0/3d/a8d03d79035aeccf5ccfe09763efbf2e.jpg"
                alt="office content 1"
                height={500}
                width={500}
              />
            </li>

            <li class="flex flex-col items-center gap-6 border-r-[1px] px-4 md:px-10 py-4 max-[767px]:p-8 max-[767px]:[border-right-style:none]">
              <p class="text-xl font-semibold">Our Values</p>
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
                    Excellence: We strive for excellence in every project,
                    aiming to exceed expectations and set industry benchmarks.
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
                    Customer-Centricity: Our clients are at the heart of
                    everything we do. We focus on their needs, preferences, and
                    long-term success.
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
                    Innovation: We embrace creativity and innovation to provide
                    cutting-edge solutions that keep our clients ahead in a
                    rapidly changing business landscape.
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
                    Accountability: We take ownership of our commitments,
                    delivering on promises and being accountable for our
                    actions.
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
                    Sustainability: We are committed to minimizing our
                    environmental impact and promoting sustainable business
                    practices.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CompanyInfo;

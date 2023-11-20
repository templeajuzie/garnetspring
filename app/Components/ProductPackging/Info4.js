"use client";

import Image from "next/image";
import React from "react";

function Info4() {
  return (
    <div>
      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 lg:px-16 md:py-24 lg:py-20">
          <div className="max-w-3xl px-2 mx-auto mt-4 mb-8 text-center md:px-10 lg:px-16 md:mb-12 lg:mb-5">
            <h2 className="text-3xl font-bold md:text-3xl">
              Product Packaging Process
            </h2>

            <p className="mt-4 text-sm text-[#636262] sm:text-base">
              Our product packaging process is a systematic and essential
              procedure that involves the design, creation, and assembly of
              packaging for a product.
            </p>
          </div>
          <section>
            <div class="mx-auto w-full max-w-7xl px-2 py-16 md:px-10 md:py-24 lg:py-10">
              <ul class="grid max-w-2xl grid-1 mg:grid-col-2 lg:grid-cols-3 sm:gap-3 lg:max-w-none">
                <li class="flex flex-col p-5">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                    height={200}
                    width={200}
                  />
                  <p class="mb-4 font-semibold"> Packaging Solution</p>
                  <p class="text-sm text-[#636262]">
                    We plan how to make the best package for our product –
                    choosing materials and design.
                  </p>
                </li>
                <li class="flex flex-col p-5">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                    height={200}
                    width={200}
                  />
                  <p class="mb-4 font-semibold">Packaging Design</p>
                  <p class="text-sm text-[#636262]">
                    We create a good-looking and practical package with all the
                    necessary information.
                  </p>
                </li>
                <li class="flex flex-col p-5">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                    height={200}
                    width={200}
                  />
                  <p class="mb-4 font-semibold">
                    Packaging Printing/Production
                  </p>
                  <p class="text-sm text-[#636262]">
                    We print and produce the designed package, making sure it
                    looks just right.
                  </p>
                </li>
                <li class="flex flex-col p-5">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                    height={200}
                    width={200}
                  />
                  <p class="mb-4 font-semibold">Packaging Assembly</p>
                  <p class="text-sm text-[#636262]">
                    All the pieces come together, and the final package is
                    assembled.
                  </p>
                </li>
                <li class="flex flex-col p-5">
                  <Image
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                    alt=""
                    class="mb-4 inline-block h-10 w-10"
                    height={200}
                    width={200}
                  />
                  <p class="mb-4 font-semibold">
                    Packaging Logistics and Delivery
                  </p>
                  <p class="text-sm text-[#636262]">
                    We take care of getting the packaged products where they
                    need to go – efficiently and safely.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Info4;

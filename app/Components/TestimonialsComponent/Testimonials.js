"use client";

import Image from "next/image";
import React, { useState } from "react";

const Testimonials = () => {
  const clientTestify = [
    {
      text: "Garnet Spring Limited has been a game-changer for my business. The innovative product packaging solutions they provided not only protected my products but also beautifully showcased my brand. The eco-friendly plastic packaging aligns perfectly with my values for a sustainable future. Kudos to Garnet Spring for their commitment to excellence!",
      name: "Bimbo Adetunde Adeoti",
      position: "Director of Operations, Epexi",
      image:
        "https://i.pinimg.com/474x/55/6c/b3/556cb37071ede2eb5b1e93de723bf943.jpg",
      id: 2,
    },
    {
      text: "I am impressed by the tailored solutions delivered by Garnet Spring Limited. Their paper packaging solutions elevated the presentation of my products, making them stand out in the market. The team's dedication to affordability and sustainability is truly commendable. Garnet Spring is not just a business solution provider; they are partners in our success.",
      name: "Chukwuemeka Okonkwo",
      position: "Founder, GreenHarvest Foods",
      image:
        "https://i.pinimg.com/474x/aa/4f/14/aa4f1494ba69f716fb92f0115a6c5fb4.jpg",
      id: 3,
    },
    {
      text: "Garnet Spring Limited exceeded our expectations with their top-tier product packaging solutions. The eco-friendly plastic packaging not only met our unique needs but also contributed to our commitment to environmental responsibility. Their dedication to transforming the business ecosystem is evident in every solution they provide. Proud to be associated with Garnet Spring!",
      name: "Alhaji Musa Mohammed",
      position: "CEO, BioSolutions Ltd",
      image:
        "https://i.pinimg.com/474x/c5/e4/aa/c5e4aab80a67edcf446d1650cb059820.jpg",
      id: 4,
    },
  ];
  // const [clientTestify, setClientTestify] = useState();

  return (
    <div>
      <section class="block">
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-10 lg:px-16">
          <h2 class="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-3xl lg:mb-16 ">
            What our clients are saying
          </h2>

          <div class="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
            {clientTestify.map((client) => (
              <div
                class="grid grid-cols-1 gap-6 rounded-md border border-solid border-[#cdcdcd] bg-white p-8 md:p-10 shadow-lg"
                key={client.id}
              >
                <div class="flex">
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    class="mr-1 inline-block w-3.5 flex-none"
                    height={200}
                    width={200}
                  />
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    class="mr-1 inline-block w-3.5 flex-none"
                    height={200}
                    width={200}
                  />
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    class="mr-1 inline-block w-3.5 flex-none"
                    height={200}
                    width={200}
                  />
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    class="mr-1 inline-block w-3.5 flex-none"
                    height={200}
                    width={200}
                  />
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    class="mr-1 inline-block w-3.5 flex-none"
                    height={200}
                    width={200}
                  />
                </div>
                <div class="text-[#636262]">{client.text}</div>
                <div class="flex flex-row items-start">
                  <Image
                    className="w-[50px] h-[50px] mr-2 rounded-full object-cover"
                    src={client.image}
                    alt="office content 1"
                    height={500}
                    width={500}
                  />

                  <div class="flex flex-col items-start">
                    <h6 class="text-base font-bold flex flex-row items-center gap-2">
                      {client.name}
                      <Image
                        src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                        height={200}
                        width={200}
                        alt=""
                        className="inline-block w-4 h-4 mr-2"
                      />
                    </h6>
                    <p class="text-sm text-[#636262] sm:text-sm">
                      {client.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="flex flex-col">
            <a href="#" class="mx-auto font-bold text-black">
              Check all reviews
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

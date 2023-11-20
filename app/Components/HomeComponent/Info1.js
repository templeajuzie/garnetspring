"use ck";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Info1() {
  return (
    <div>
      <section>
        <div className="gap-10 px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-24 lg:px-16">
          <div className="flex flex-col-reverse gap-8 sm:gap-6 h-[60vh] lg:grid lg:grid-cols-2 lg:gap-10">
            {/* <div>
              <Image
                src="https://i.pinimg.com/564x/b7/2c/74/b72c7481803d27d97c887500a52469de.jpg"
                alt=""
                className="inline-block h-[60vh] object-cover w-full max-w-[640px] rounded-lg"
                height={200}
                width={200}
              />
            </div> */}
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/YoTFS4eaAQU?si=ed69qkfMvL2EyDxl"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col items-start lg:justify-center">
              

              <div className="mb-2 mt-5 h-0 w-40 border [border-top-style:solid]"></div>

              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-2xl font-bold text-black md:text-xl">
                Environmental impact
                </h2>
                <p className="text-sm text-gray-800 sm:text-[15px]">
                Using eco-friendly packaging can have a significant positive
                  impact on the environment. <br /> <br /> Eco-friendly packaging is made from
                  materials that can be broken down naturally, which helps to
                  reduce waste and pollution. <br /> <br /> It can also help to conserve
                  resources and reduce greenhouse gas emissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info1;

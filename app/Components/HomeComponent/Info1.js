"use ck";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Info1() {
  return (
    <div>
      <section>
        <div className="gap-10 px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-24 lg:px-16">
          <div className="flex flex-col-reverse gap-8 md:flex-row sm:gap-6 h-[60vh]">
            <div className="relative w-full h-full">
              <iframe
                className="w-full h-[50vh] lg:h-full rounded-lg"
                src="https://www.youtube.com/embed/ZuNBl6xd-0I?si=DEhOLiMPa5hhGI0Y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {/* <h2 className="mb-4 text-2xl font-bold text-black md:text-xl">
                Environmental impact
              </h2>
              <p className="text-sm text-gray-800 sm:text-[15px]">
                Using eco-friendly packaging can have a significant positive
                impact on the environment. <br /> <br /> Eco-friendly packaging
                is made from materials that can be broken down naturally, which
                helps to reduce waste and pollution. <br /> <br /> It can also
                help to conserve resources and reduce greenhouse gas emissions.
              </p> */}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info1;

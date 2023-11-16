"use ck";

import Image from "next/image";
import React from "react";

function Info5() {
  return (
    <div>
      <section>
        <div className="px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-32">
          <div className="flex flex-col-reverse gap-8 sm:gap-20 lg:grid lg:grid-cols-2 h-[50vh]">
            <div>
              <Image
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b549c924696d892dd122f_Frame 48028-4.png"
                alt=""
                className="inline-block h-[60vh] w-auto object-cover"
                height={200}
                width={200}
              />
            </div>

            <section >
              <div>
                <h2 className="mb-8 text-3xl font-bold text-center md:mb-12 md:text-2xl lg:mb-4">
                  Get Started In 4 Easy Steps
                </h2>

                <div className="grid gap-6 mx-auto">
                  <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition hover:bg-black hover:text-white">
                    <div className="flex items-center justify-center flex-none w-10 h-10 bg-white rounded-full w-fit">
                      <Image
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6479e56de3b9bdc2fe6babc3_CodepenLogo.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="inline-block h-[30px]"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-xl font-bold">Download the app</h5>
                      <p className="text-sm opacity-50 sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition hover:bg-black hover:text-white">
                    <div className="flex items-center justify-center flex-none w-20 h-20 bg-white rounded-full">
                      <Image
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/646615133cac996bb8503eca_GitlabLogo.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="inline-block h-[30px]"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-xl font-bold">Sign up for account</h5>
                      <p className="text-sm opacity-50 sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition hover:bg-black hover:text-white">
                    <div className="flex items-center justify-center flex-none w-20 h-20 bg-white rounded-full">
                      <Image
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6479e56de3b9bdc2fe6babc3_CodepenLogo.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="inline-block h-[30px]"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-xl font-bold">Activate virtual card</h5>
                      <p className="text-sm opacity-50 sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition hover:bg-black hover:text-white">
                    <div className="flex items-center justify-center flex-none w-20 h-20 bg-white rounded-full">
                      <Image
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6479e56de3b9bdc2fe6babc3_CodepenLogo.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="inline-block h-[30px]"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <h5 className="text-xl font-bold">Ready set go!</h5>
                      <p className="text-sm opacity-50 sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        ut aliquam, purus sit amet dolor sit amet consectetur
                        adipiscing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info5;

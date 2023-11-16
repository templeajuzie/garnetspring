'use client'

import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 lg:px-16">
          <div class="grid justify-items-center gap-4 bg-[#f2f2f7] p-2 sm:p-10 md:grid-cols-[1.5fr_1fr] md:justify-items-start md:p-6 rounded-lg">
            <div class="text-center md:text-start">
              <h3 class="mb-2 text-2xl font-bold md:text-3xl">
                Get the latest and greatest
              </h3>
              <p class="max-w-md max-[479px]:text-sm">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div class="max-w-md sm:max-w-full">
              <form
                name="email-form"
                method="get"
                class="relative mx-auto mb-4 flex w-full flex-col justify-center sm:flex-row"
              >
                <input
                  type="email"
                  class="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Notify me"
                  class="relative right-0 top-[5px] w-full cursor-pointer rounded-md bg-black px-3 py-2 text-sm font-semibold text-white sm:absolute sm:right-[5px] sm:w-24 lg:w-28 lg:text-base"
                />
              </form>
              <p class="text-sm text-[#636262] sm:text-base">
                Join a community of over <span>5000+ Webflow Developers</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;

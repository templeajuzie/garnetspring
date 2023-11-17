"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Image from "next/image";
import homeimg from "../Resources/Images/career.png";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

function ProductPackaging() {
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
          Join Our WorkForce
        </h2>

        <p className="mt-4 w-full text-[12px] text-gray-200 sm:text-[14px] md:w-[40vw]">
          Discover your future with Garnet Spring. Join us and be part of
          innovation, collaboration, and success!
        </p>
      </div>

      <section className="dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-2 py-8 mx-10 md:px-6 auto mt- lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Fill this form
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fullname
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+234-905-XXXX-XXX"
                    required=""
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="position"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Desired Position
                  </label>

                  <select
                    id="position"
                    name="position"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      Select a position
                    </option>
                    <option value="SEO">SEO</option>
                    <option value="Digital Advertising">
                      Digital Advertising
                    </option>
                    <option value="Brand Content">Brand Content</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="resume"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Upload your CV:
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    placeholder="Upload your CV"
                    className="peer block w-full appearance-none border-none bg-transparent py-2.5 px-0 text-sm bg-gray-50 border border-gray-300"
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Cover Letter *"
                    className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <Link
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="terms"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <Button variant="gradient" size="sm" fullWidth>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterWithSitemap />
    </div>
  );
}

export default ProductPackaging;

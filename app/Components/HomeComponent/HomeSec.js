import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import homeimg from "../../Resources/Images/heroimg.png";

const HomeSec = () => {
  return (
    <div>
      <header>
        <div className="w-full px-5 py-10 mx-auto max-w-7xl md:px-14">
          <div className="grid items-center gap-8 justify-items-start sm:gap-20 lg:gap-28 lg:grid-cols-2">
            <div className="flex flex-col">
              <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:w-[80%] text-gray-100">
                We provide amazing solutions for your business
              </h1>
              <p className="max-w-lg mb-6 text-sm text-gray-300 sm:text-[15px] md:mb-10 lg:mb-9">
                We embrace creativity and innovation to provide cutting-edge
                solutions that keep our clients ahead in a rapidly changing
                business landscape.
              </p>

              <div class="flex flex-row items-center mb-7">
                <Link
                  href=""
                  className="px-6 py-3 mr-6 font-semibold text-center text-white rounded-md bg-gradient-to-r from-red-500 via-red-700 to-yellow-500 w-36 lg:mr-8"
                >
                  Get Started
                </Link>
                <Link href="" class="flex max-w-full items-center font-bold">
                  <FaArrowTrendUp className="mr-2 text-white" />
                  <p className="text-gray-200">View Showreel</p>
                </Link>
              </div>

              <div className="max-w-xs">
                <p className="mb-4 text-sm text-[#dddddd]">
                  with unwavering integrity, always acting ethically, and
                  honesty.
                </p>
                <div className="flex items-center gap-11 sm:flex-row sm:items-center">
                  <div className="flex items-center">
                    <Image
                      src="https://icon-library.com/images/verified-icon-png/verified-icon-png-11.jpg"
                      className="w-full h-10 rounded-full"
                      alt=""
                      height={500}
                      width={500}
                    />
                    <p className="text-sm font-bold text-gray-200">Secured</p>
                  </div>
                  <div className="flex">
                    <p className="mr-2 text-sm font-bold text-gray-300">5.0</p>
                    <Image
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      height={500}
                      width={500}
                      className="mr-1.5 inline-block w-4"
                    />
                    <Image
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      className="mr-1.5 inline-block w-4"
                      height={500}
                      width={500}
                    />
                    <Image
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      height={500}
                      width={500}
                      className="mr-1.5 inline-block w-4"
                    />
                    <Image
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      height={500}
                      width={500}
                      className="mr-1.5 inline-block w-4"
                    />
                    <Image
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                      alt=""
                      height={500}
                      width={500}
                      className="mr-1.5 inline-block w-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:inset-y-0 lg:right-0 lg:w-full">
              <Image
                className="inline-block rounded-xl h-[80vh] w-full object-cover"
                src={homeimg}
                alt=""
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeSec;

"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Pricing from "../Components/PricingComponent/Pricing";
import Image from "next/image";
import CompanyInfo from "../Components/HomeComponent/CompanyInfo";

function TeamSection() {
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "John Doe",
      role: "General Manager",
      imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Alex Johnson",
      role: "Accountant",
      imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Eva Brown",
      role: "Business Analyst",
      imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael White",
      role: "Legal Advisor",
      imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  
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
          Meet Our Team
        </h2>

        <p className="mt-4 w-full text-[12px] text-gray-200 sm:text-[14px] md:w-[40vw]">
          Get to know about us, our mission, what we believe in, what drives us,
          and the services we provide us.
        </p>
      </div>
      <>
        <section>
          <div className="flex items-center justify-center w-full py-10 md:px-10">
            <ul
              role="list"
              className="grid items-center justify-center px-2 md:px-10  w-[85%] gap-x-10 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center mx-auto gap-x-6">
                    <Image
                      className="w-16 h-16 rounded-full"
                      src={person.imageUrl}
                      alt=""
                      height={200}
                      width={200}
                    />
                    <div className="text-center">
                      {" "}
                      {/* Centering text elements */}
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
      <FooterWithSitemap />
    </div>
  );
}

export default TeamSection;

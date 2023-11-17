"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to-[#11113A] h-fit">
        <NavbarWithMegaMenu />
      </div>
      <div className="flex flex-col justify-center items-center px-10 md:px-16 mx-auto text-center md:mb-12 lg:mb-5 bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to-[#11113A] h-[30vh] shadow-lg">
        <h2 className="text-3xl font-bold text-white md:text-3xl">FAQ</h2>

        <p className="mt-4 w-full text-[12px] text-gray-200 sm:text-[14px] md:w-[40vw]">
          Frequently Asked Questions
        </p>
      </div>
      <>
        <section>
          <div className="flex flex-col items-center justify-center w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-32 lg:px-40 ">
            <>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What services does your company offer to SMEs?
                </AccordionHeader>
                <AccordionBody>
                  We provide a range of business support services tailored for
                  Small and Medium Enterprises (SMEs). Our services include
                  cartoon branding, nylon design, and more. We are committed to
                  helping SMEs enhance their brand presence and achieve their
                  business goals.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How can cartoon branding benefit my business?
                </AccordionHeader>
                <AccordionBody>
                  Cartoon branding adds a unique and engaging element to your
                  brand identity. It helps you stand out in the market, capture
                  the attention of your target audience, and create a memorable
                  brand image. Our team of experts can work with you to develop
                  creative and effective cartoon branding strategies for your
                  business.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What is the process for nylon design services?
                </AccordionHeader>
                <AccordionBody>
                  Our nylon design services involve a collaborative process
                  where we work closely with you to understand your brand,
                  goals, and preferences. From concept creation to final
                  production, our team ensures high-quality and visually
                  appealing nylon designs that effectively represent your brand
                  on various materials.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 4} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Can I customize the cartoon branding for my specific industry?
                </AccordionHeader>
                <AccordionBody>
                  Absolutely! We understand that each industry has its unique
                  characteristics and target audience. Our team will collaborate
                  with you to tailor the cartoon branding to align with your
                  industry, ensuring that it resonates well with your customers
                  and effectively communicates your brand message.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 5} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How long does the nylon design process take?
                </AccordionHeader>
                <AccordionBody>
                  The duration of the nylon design process can vary depending on
                  the complexity of the project and your specific requirements.
                  Our team works efficiently to deliver high-quality designs
                  within agreed-upon timelines. We prioritize timely delivery
                  without compromising on the creative and visual appeal of the
                  nylon designs.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 6} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  Do you offer other business support services besides cartoon
                  branding and nylon design?
                </AccordionHeader>
                <AccordionBody>
                  Yes, in addition to cartoon branding and nylon design, we
                  offer a range of business support services tailored to meet
                  the diverse needs of SMEs. Contact us to discuss your specific
                  requirements, and our team will provide comprehensive
                  solutions to support the growth and success of your business.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 7} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(7)}>
                  How can cartoon branding impact my brands online presence?
                </AccordionHeader>
                <AccordionBody>
                  Cartoon branding can significantly enhance your online
                  presence by making your brand visually appealing and
                  memorable. Engaging visuals are more likely to be shared on
                  social media, increasing your brands visibility and reach. Our
                  cartoon branding services are designed to create a positive
                  and lasting impression in the digital space.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 8} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(8)}>
                  What materials can be used for nylon design, and how durable
                  are the designs?
                </AccordionHeader>
                <AccordionBody>
                  Nylon designs can be applied to various materials such as
                  banners, flags, and promotional items. Our designs are crafted
                  with durability in mind, ensuring they withstand different
                  weather conditions and maintain their vibrancy over time. We
                  use high-quality materials and printing techniques to ensure
                  longevity and visual impact.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 9} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(9)}>
                  Can I request revisions to the cartoon branding or nylon
                  designs?
                </AccordionHeader>
                <AccordionBody>
                  Yes, we value your input and collaboration. Our team is open
                  to revisions to ensure that the final cartoon branding or
                  nylon design aligns perfectly with your vision and
                  requirements. We work closely with you throughout the process,
                  making adjustments as needed to achieve the desired outcome
                  for your brand.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 10} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(10)}>
                  What industries have you worked with in the past for business
                  support services?
                </AccordionHeader>
                <AccordionBody>
                  Our company has experience working with a diverse range of
                  industries, including retail, hospitality, technology, and
                  more. We tailor our business support services, including
                  cartoon branding and nylon design, to suit the specific needs
                  and preferences of each industry. Feel free to inquire about
                  our past projects and industry expertise.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 11} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(11)}>
                  Is there a minimum order quantity for nylon design services?
                </AccordionHeader>
                <AccordionBody>
                  We accommodate orders of various sizes, and there is no strict
                  minimum order quantity for our nylon design services. Whether
                  you need a few promotional items or a larger quantity for an
                  event, we can tailor our services to meet your specific
                  requirements. Contact us to discuss your project, and we will
                  provide a customized solution.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 12} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(12)}>
                  How can I request a quote for the business support services
                  your company offers?
                </AccordionHeader>
                <AccordionBody>
                  Requesting a quote is easy! Simply visit our website and fill
                  out the quote request form, providing details about your
                  specific needs and preferences. Our team will review your
                  request and provide you with a comprehensive quote tailored to
                  the services you require. We are committed to transparent
                  pricing and delivering value for your investment.
                </AccordionBody>
              </Accordion>
            </>
            <p className="mx-auto mt-12 text-base text-center text-gray-500 font-inter">
              {" "}
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a href="" className="text-[black]">
                customer support team.
              </a>
            </p>
          </div>
        </section>
      </>
      <FooterWithSitemap />
    </div>
  );
}

export default FAQ;

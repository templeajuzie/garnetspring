"use client";

import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Image from "next/image";
import Info4 from "../Components/ProductPackging/Info4";

function Services() {
  return (
    <div>
      <div className="bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to-[#11113A] h-fit">
        <NavbarWithMegaMenu />
      </div>
      <div className="flex flex-col justify-center items-center px-10 md:px-16 mx-auto text-center md:mb-12 lg:mb-5 bg-[#11113A] bg-gradient-to-br from-[#11113A] via-[#11113A] to-[#11113A] h-[30vh] shadow-lg">
        <h2 className="text-3xl font-bold text-white md:text-3xl">
          TERMS OF SERVICE
        </h2>

        <p className="mt-4 w-full text-[12px] text-gray-200 sm:text-[14px] md:w-[40vw]">
          Last Updated as of November 11, 2023
        </p>
      </div>

      <section>
        <div className="flex flex-col items-center justify-center px-5 md:px-10 lg:px-16">
          <div className="w-full py-12 mx-auto md:py-16 lg:py-20">
            <div className="flex flex-col items-center gap-y-14">
              <p className="max-w-3xl text-sm text-center sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <div className="flex flex-col min-w-full gap-y-10">
                <div className="flex min-w-full py-4 [border-bottom:1px_solid_rgb(226,_226,_226)]">
                  <h6 className="text-base font-bold">
                    GENERAL TERMS &amp; CONDITIONS
                  </h6>
                </div>
                <div className="flex flex-col gap-y-10">
                  <div className="flex flex-col items-start min-w-full gap-y-6">
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">SERVICES</p>
                      <p className="text-sm">
                        Flowspark offers a comprehensive range of design
                        services, including but not limited to graphic design,
                        web design, branding, illustration, and user interface
                        design. The Company will provide the agreed-upon
                        services with professionalism, creativity, and technical
                        expertise, while adhering to industry standards, design
                        principles, and best practices. The specific details,
                        deliverables, timelines, and pricing for each project
                        will be outlined in a separate agreement or proposal,
                        mutually agreed upon by the Company and the Client.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">
                        CLIENT RESPONSIBILITIES
                      </p>
                      <p className="text-sm">
                        The Client agrees to provide accurate and timely
                        information, materials, and feedback necessary for the
                        successful completion of the project. The Client is
                        responsible for obtaining any necessary permissions,
                        licenses, or copyrights for materials provided to the
                        Company for use in the project, including but not
                        limited to logos, images, text, and any other
                        intellectual property. The Client acknowledges that
                        delays or failures in providing required materials or
                        feedback may impact project timelines, deliverables, and
                        the overall success of the project.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">INTELLECTUAL PROPERTY</p>
                      <p className="text-sm">
                        Any intellectual property rights, including but not
                        limited to copyrights and trademarks, in the final
                        deliverables created by the Company shall be transferred
                        to the Client upon receipt of full payment unless
                        otherwise agreed upon in writing. The Client warrants
                        that any materials provided to the Company for use in
                        the project do not infringe upon the intellectual
                        property rights of any third party.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">PAYMENT</p>
                      <p className="text-sm">
                        The Client agrees to pay the Company the agreed-upon
                        fees for the services rendered. Payment terms, including
                        the amount, method, and schedule, will be specified in
                        the separate agreement or proposal. The Company reserves
                        the right to suspend or terminate services in the event
                        of non-payment or late payment.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">CONFIDENTIALITY</p>
                      <p className="text-sm">
                        The Company and the Client agree to keep confidential
                        any proprietary or sensitive information disclosed
                        during the course of the project. Both parties shall
                        take reasonable measures to protect such information
                        from unauthorized access or disclosure.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">
                        LIMITATION OF LIABILITY
                      </p>
                      <p className="text-sm">
                        The Company shall not be liable for any direct,
                        indirect, incidental, or consequential damages arising
                        out of the use or inability to use the services
                        provided. The Client acknowledges that the Companys
                        liability is limited to the amount paid for the services
                        rendered.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">TERMINATION</p>
                      <p className="text-sm">
                        Either party may terminate this Agreement with written
                        notice if the other party breaches any material
                        provision and fails to remedy the breach within a
                        reasonable time. In the event of termination, the Client
                        shall pay the Company for the services provided up to
                        the termination date.
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <p className="text-sm font-bold">GOVERNING LAW</p>
                      <p className="text-sm">
                        This Agreement shall be governed by and construed in
                        accordance with the laws of [Your Jurisdiction]. Any
                        disputes arising out of this Agreement shall be subject
                        to the exclusive jurisdiction of the courts of [Your
                        Jurisdiction].
                      </p>
                    </div>
                  </div>
                  <div className="min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
                  <p className="text-sm">
                    By accessing, browsing, or utilizing any design services,
                    communication channels, or materials provided by Flowspark,
                    including but not limited to graphic design, web design,
                    branding, illustration, and user interface design, whether
                    through our website, email, phone, or any other means, you
                    expressly acknowledge, understand, and agree that you have
                    carefully read, comprehended, and fully consent to be
                    legally bound by all the provisions, terms, and conditions
                    set forth in these Terms of Service, including any
                    additional agreements, policies, guidelines, or amendments
                    referenced or incorporated herein.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterWithSitemap />
    </div>
  );
}

export default Services;

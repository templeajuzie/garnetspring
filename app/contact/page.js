import React from "react";
import { NavbarWithMegaMenu } from "../Components/NavbarComponent/Nav";
import { FooterWithSitemap } from "../Components/FooterComponent/Footer";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <>
        <section>
          <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-24 lg:py-32 lg:w-[60%]">
            <h2 className="text-3xl font-bold md:text-3xl">Contact Sales</h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-[#636262] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>

            <form
              name="wf-form-name"
              method="get"
              className="mx-auto mb-4 text-left sm:px-4 md:px-20"
            >
              <div className="grid w-full grid-cols-2 gap-6 mb-4">
                <div>
                  <label for="name-2" className="mb-1 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label for="name-3" className="mb-1 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                    placeholder=""
                    required=""
                  />
                </div>
              </div>
              <div className="mb-4">
                <label for="field" className="mb-1 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                />
              </div>
              <div className="mb-4">
                <label for="field" className="mb-1 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                />
              </div>
              <div className="mb-5 md:mb-6 lg:mb-8">
                <label for="field" className="mb-1 font-medium">
                  Message
                </label>
                <textarea
                  placeholder=""
                  maxlength="5000"
                  name="field"
                  className="mb-2.5 block h-auto min-h-[186px] w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-[#333333]"
                >
                  {" "}
                </textarea>
              </div>
              <label className="flex items-center justify-start pb-4 pl-5 mb-1 font-mediume">
                <input
                  type="checkbox"
                  name="checkbox-2"
                  className="-ml-[20px] mt-1"
                />
                <span
                  className="inline-block ml-4 text-sm cursor-pointer"
                  for="checkbox-2"
                >
                  By selecting this, you agree to the
                  <a href="#"> Privacy Policy</a>
                </span>
              </label>
              <input
                type="submit"
                value="Join Garnet Spring"
                className="inline-block w-full px-6 py-3 font-semibold text-center text-white bg-black cursor-pointer"
              />
            </form>
          </div>
        </section>
      </>
      <FooterWithSitemap />
    </div>
  );
}

export default Contact;

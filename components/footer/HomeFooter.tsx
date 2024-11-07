import React from "react";

export const HomeFooter = () => {
  return (
    <div className="w-full px-[5%] bg-[#f1b807] py-20">
      <h3 className="w-full mb-12 text-center text-[#021f33] text-[64px] max-md:text-[40px] font-bold">
        What
        <span className="text-[#021f33] italic font-normal font-['Times New Roman']">
          {" you "}
        </span>
        are getting
      </h3>

      {/* Content Section */}
      <div className="relative text-gray-900 flex flex-col gap-2 max-md:gap-10">
        {/* Center Divider Line */}
        <div className="hidden md:flex bg-gray-300 absolute h-full inset-y-0 top-5 left-1/2 transform -translate-x-1/2 w-px">
          {/* Colored part at the top */}
          <div className="bg-[#021F33] h-32 w-full"></div>
          {/* Divider Line */}
          <div className="bg-gray-300 flex-1"></div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[8%]">
          <div className="block max-md:hidden">&nbsp;</div>
          <div className="flex flex-col md:items-start gap-4 md:max-w-80">
            <h2 className="text-black text-3xl font-bold">
              Experienced Advisors
            </h2>

            <p className="text-black text-base font-normal">
              Our team of career advisors brings a wealth of knowledge and
              experience to help you achieve your career aspirations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[8%]">
          <div className="md:mt-16 flex flex-col md:max-w-80 ml-auto max-md:text-right">
            <h2 className="text-black text-3xl font-bold">Alumni Network</h2>
            <p className="text-black text-base font-normal">
              Tap into our extensive network of successful alumni who are eager
              to mentor and support the next generation of FUTA graduates.
            </p>
          </div>
          <div className="block max-md:hidden">&nbsp;</div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[8%]">
          <div className="block max-md:hidden">&nbsp;</div>
          <div className="flex flex-col md:items-start gap-4 md:max-w-80">
            <h2 className="text-black text-3xl font-bold">
              Comprehensive Resources
            </h2>
            <p className="text-black text-base font-normal">
              From resume building to interview preparation, we provide the
              tools and resources you need to succeed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[8%]">
          <div className="md:mt-16 flex flex-col md:max-w-80 ml-auto max-md:text-right">
            <h2 className="text-black text-3xl font-bold">
              Personalized Support
            </h2>
            <p className="text-black text-base font-normal">
              We understand that every career journey is unique. Our services
              are tailored to meet your individual needs and goals.
            </p>
          </div>
          <div className="block max-md:hidden">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

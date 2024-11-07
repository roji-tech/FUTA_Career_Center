import React from "react";

export const CareerAndWorkshop = () => {
  return (
    <div className="flex flex-col gap-16 px-[5%] pb-[74px]">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="min-h-[242px] flex-1 p-6 bg-[#0464b8] rounded-[20px] border border-[#d8dadb] grid grid-cols-2 gap-2">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-[#f0f0f1] text-3xl font-bold">
              Career Counseling
            </div>
            <div className="max-w-[366px] text-[#f0f0f1] text-base font-normal">
              Get one-on-one guidance to explore your career options, refine
              your job search strategies, and develop a personalized career
              plan.
            </div>
          </div>
          <img
            className="max-w-[356px] w-full h-auto max-h-[194px]"
            src="/paperplane.png"
          />
        </div>

        <div className="min-h-[242px] max-lg:w-[90%] max-lg:max-w-[414px] mx-auto basis-1/3 p-6 bg-[#f9bf0a] rounded-[20px] border border-[#d8dadb] flex-col justify-start items-start gap-6 flex">
          <div className="text-[#4c6171] text-3xl font-bold">
            Workshops & Events
          </div>
          <div className="text-[#6d7880] text-base font-medium leading-normal">
            Participate in skill-building workshops, seminars, and career fairs
            to enhance your employability and connect with industry
            professionals
          </div>
        </div>
      </div>

      <div className="flex gap-5 max-lg:flex-col">
        <div className="min-h-[242px] max-lg:w-[90%] max-lg:max-w-[414px] mx-auto basis-1/3 p-6 bg-[#f9bf0a] rounded-[20px] border border-[#d8dadb] flex-col justify-start items-start gap-6 flex">
          <div className="text-[#4c6171] text-3xl font-bold">
            Mentorship Program
          </div>
          <div className="text-[#6d7880] text-base font-medium leading-normal">
            Connect with experienced alumni mentors who can provide valuable
            insights, advice, and support as you navigate your career path
          </div>
        </div>

        <div className="min-h-[242px] flex-1 p-6 bg-[#0464b8] rounded-[20px] border border-[#d8dadb] grid grid-cols-2 gap-2">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="text-[#f0f0f1] text-3xl font-bold">
              Job & Internship Opportunities
            </div>
            <div className="max-w-[366px] text-[#f0f0f1] text-base font-normal">
              Access a curated list of job and internship opportunities from our
              network of alumni and industry partners
            </div>
          </div>
          <img
            className="max-w-[356px] w-full h-auto max-h-[194px]"
            src="/paperplane.png"
          />
        </div>
      </div>
    </div>
  );
};

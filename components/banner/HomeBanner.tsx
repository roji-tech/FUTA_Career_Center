import React from "react";

export const HomeBanner = () => {
  return (
    <div className="flex flex-col">
      <h2 className="flex gap-6 justify-center">
        <div className="cursor-pointer py-2 border-b-2 border-b-[#021f33] text-center text-[#021f33] text-base font-bold">
          Student
        </div>
        <div className="cursor-pointer py-2 text-center text-[#b2b4b6] text-base font-bold">
          Alumni
        </div>
      </h2>

      <div className="w-full pt-8 flex-col justify-start items-center gap-[21px] inline-flex">
        <div className="max-w-[583px] text-center">
          <span className="text-[#021f33] text-[64px] font-bold">
            Empowering Your Future,{" "}
          </span>
          <span className="text-[#021f33] text-[64px] font-normal font-['Times New Roman']">
            Today
          </span>
        </div>
        <div className="max-w-[658px] text-center text-[#52606b] text-base font-medium">
          At the Federal University of Technology Akure, our Center for Career
          Services is dedicated to supporting students and alumni in achieving
          their career goals. Whether you are seeking guidance, mentorship, or
          opportunities, we are here to help you every step of the way.
        </div>
      </div>

      <div className="grid">
        
      </div>
    </div>
  );
};

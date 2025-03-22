import React from "react";

export const AllEvents = () => {
  return (
    <div className="px-[5%] mb-24 flex flex-col gap-0">
      <h2 className="text-[#021f33] text-[34px] lg:text-[40px] font-medium">All Events</h2>

      <div className="min-h-[331px] p-6 bg-[#fefcf8] rounded-[20px] border border-[#d8dadb] justify-center gap-6 flex flex-col lg:flex-row">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#021f33] text-[34px] lg:text-5xl font-bold">
            Meet & Greet With <br className="lg:block hidden" />
            Engr. Fatima
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#6d7880] text-2xl font-medium leading-normal">
              Aug. 24 2024
            </div>
            <div className="self-stretch text-[#6d7880] text-2xl font-medium leading-normal">
              Hilltop Auditorium, FUTA
            </div>
          </div>
          <div className="px-10 py-4 bg-[#086cb4] rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-[#f0f0f1] text-xl font-bold">
              Register
            </div>
          </div>
        </div>
        <img
          className="lg:max-w-[59%] mx-auto w-auto h-[283px] rounded-[10px]"
          src="/sister.png"
        />
      </div>

      <div className="flex justify-center items-center w-full pt-8 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <circle cx="17" cy="17" r="17" fill="#086CB4" />
        </svg>

        {Array.from({ length: 4 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <circle cx="17" cy="17" r="17" fill="#D9DBDC" />
          </svg>
        ))}
      </div>
    </div>
  );
};

import React from "react";

export function Welcome() {
  return (
    <div className="flex justify-between max-lg:gap-6 gap-8 max-lg:flex-col mb-32 max-w-full">
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-1 flex-col">
          <h1>
            <span className="text-[#032740] max-lg:text-xl text-[32px] font-bold">
              Welcome,
            </span>
            <span className="text-[#032740] max-lg:text-xl text-[32px] font-normal font-['Times New Roman']">
              {" "}
              Duglas
            </span>
          </h1>

          <p className="text-[#032740] text-base font-medium">
            You have an upcoming event
          </p>
        </div>

        <div className="min-h-[159px] max-w-4xl p-6 bg-white rounded-2xl border border-[#d8dadb] flex-col justify-start items-start gap-7 inline-flex">
          <div className="self-stretch text-[#6d7880] max-lg:text-lg text-xl font-bold">
            What are you searching for today?
          </div>
          <div className="justify-center items-center gap-7 flex max-sm:flex-col w-full">
            <input
              placeholder="Search for events, meetups and mentors"
              className="w-full flex-1 h-[58px] bg-[#f0f0f1] rounded-lg border border-[#d8dadb] p-3"
            />
            <div className="max-sm:p-2 p-4 cursor-pointer bg-[#086cb4] rounded justify-center items-center gap-2.5 flex max-sm:rounded-lg max-sm:w-full">
              <div className="text-center text-[#f0f0f1] text-xl font-bold">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-lg:self-center max-w-[346px] min-h-[202px] flex-col justify-start items-start gap-[35px] inline-flex">
        <div className="self-stretch text-center text-black max-lg:text-lg text-xl font-bold">
          Your upcoming events
        </div>
        <div className="self-stretch h-[142px] max-md:px-3 max-md:py-4 px-5 py-6 bg-white rounded-[10px] border border-[#d8dadb] flex-col justify-center items-center gap-6 flex">
          <div className="justify-center items-center gap-6 inline-flex">
            <div className="text-center text-[#4c6171] text-sm font-extrabold">
              25 AUG - 31 AUG
            </div>
          </div>
          <div className="justify-start items-start gap-4 max-[400px]:bg-black inline-flex">
            <div className="max-md:w-6 w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="max-[400px]:text-xs text-center text-[#6d7880] text-sm font-medium">
                SUN
              </div>
              <div className="max-md:text-xs text-center text-[#6d7880] text-sm font-extrabold">
                25
              </div>
            </div>
            <div className="max-md:w-6 w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="max-[400px]:text-xs text-center text-[#6d7880] text-sm font-medium">
                MON
              </div>
              <div className="max-md:text-xs text-center text-[#6d7880] text-sm font-extrabold">
                26
              </div>
            </div>
            <div className="max-md:w-6 w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="max-[400px]:text-xs text-center text-[#6d7880] text-sm font-medium">
                TUE
              </div>
              <div className="max-md:text-xs text-center text-[#6d7880] text-sm font-extrabold">
                27
              </div>
            </div>
            <div className="max-md:w-6 w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="max-[400px]:text-xs text-center text-[#6d7880] text-sm font-medium">
                WED
              </div>
              <div className="max-md:text-xs text-center text-[#6d7880] text-sm font-extrabold">
                28
              </div>
            </div>
            <div className="max-md:w-6 w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="max-[400px]:text-xs text-center text-[#6d7880] text-sm font-medium">
                THU
              </div>
              <div className="max-md:text-xs text-center text-[#6d7880] text-sm font-extrabold">
                29
              </div>
            </div>
            <div className="max-md:w-6 w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="max-[400px]:text-xs text-center text-[#6d7880] text-sm font-medium">
                FRI
              </div>
              <div className="max-md:text-xs text-center text-[#6d7880] text-sm font-extrabold">
                30
              </div>
            </div>
            <div className="max-md:w-6 w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="max-[400px]:text-xs text-center text-[#6d7880] text-sm font-medium">
                SAT
              </div>
              <div className="max-md:text-xs text-center text-[#6d7880] text-sm font-extrabold">
                31
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

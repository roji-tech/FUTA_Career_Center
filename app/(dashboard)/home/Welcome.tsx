import React from "react";

export function Welcome() {
  return (
    <div className="flex justify-between gap-8 mb-32">
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-1 flex-col">
          <h1>
            <span className="text-[#032740] text-[32px] font-bold font-['Eudoxus Sans']">
              Welcome,
            </span>
            <span className="text-[#032740] text-[32px] font-normal font-['Times New Roman']">
              {" "}
              Duglas
            </span>
          </h1>

          <p className="text-[#032740] text-base font-medium font-['Eudoxus Sans']">
            You have an upcoming event
          </p>
        </div>

        <div className="h-[159px] max-w-4xl p-6 bg-white rounded-2xl border border-[#d8dadb] flex-col justify-start items-start gap-7 inline-flex">
          <div className="self-stretch text-[#6d7880] text-xl font-bold font-['Eudoxus Sans']">
            What are you searching for today?
          </div>
          <div className="justify-center items-center gap-7 flex w-full">
            <input
              placeholder="Search for events, meetups and mentors"
              className="w-full flex-1 h-[58px] bg-[#f0f0f1] rounded-lg border border-[#d8dadb] p-3"
            />
            <div className="p-4 bg-[#086cb4] rounded justify-center items-center gap-2.5 flex">
              <div className="text-center text-[#f0f0f1] text-xl font-bold font-['Eudoxus Sans']">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[346px] h-[202px] flex-col justify-start items-start gap-[35px] inline-flex">
        <div className="self-stretch text-black text-xl font-bold font-['Eudoxus Sans']">
          Your upcoming events
        </div>
        <div className="self-stretch h-[142px] px-5 py-6 bg-white rounded-[10px] border border-[#d8dadb] flex-col justify-center items-center gap-6 flex">
          <div className="justify-center items-center gap-6 inline-flex">
            <div className="text-center text-[#4c6171] text-sm font-extrabold font-['Eudoxus Sans']">
              25 AUG - 31 AUG
            </div>
          </div>
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="text-center text-[#6d7880] text-sm font-medium font-['Eudoxus Sans']">
                SUN
              </div>
              <div className="text-center text-[#6d7880] text-sm font-extrabold font-['Eudoxus Sans']">
                25
              </div>
            </div>
            <div className="w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="text-center text-[#6d7880] text-sm font-medium font-['Eudoxus Sans']">
                MON
              </div>
              <div className="text-center text-[#6d7880] text-sm font-extrabold font-['Eudoxus Sans']">
                26
              </div>
            </div>
            <div className="w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="text-center text-[#6d7880] text-sm font-medium font-['Eudoxus Sans']">
                TUE
              </div>
              <div className="text-center text-[#6d7880] text-sm font-extrabold font-['Eudoxus Sans']">
                27
              </div>
            </div>
            <div className="w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="text-center text-[#6d7880] text-sm font-medium font-['Eudoxus Sans']">
                WED
              </div>
              <div className="text-center text-[#6d7880] text-sm font-extrabold font-['Eudoxus Sans']">
                28
              </div>
            </div>
            <div className="w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="text-center text-[#6d7880] text-sm font-medium font-['Eudoxus Sans']">
                THU
              </div>
              <div className="text-center text-[#6d7880] text-sm font-extrabold font-['Eudoxus Sans']">
                29
              </div>
            </div>
            <div className="w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="text-center text-[#6d7880] text-sm font-medium font-['Eudoxus Sans']">
                FRI
              </div>
              <div className="text-center text-[#6d7880] text-sm font-extrabold font-['Eudoxus Sans']">
                30
              </div>
            </div>
            <div className="w-[30px] flex-col justify-center items-center gap-4 inline-flex">
              <div className="text-center text-[#6d7880] text-sm font-medium font-['Eudoxus Sans']">
                SAT
              </div>
              <div className="text-center text-[#6d7880] text-sm font-extrabold font-['Eudoxus Sans']">
                31
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

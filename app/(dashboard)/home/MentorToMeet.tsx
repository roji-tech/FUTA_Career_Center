import React from "react";

export const MentorToMeet = () => {
  const MENTORS = [
    { name: "", occupation: "" },
    { name: "", occupation: "" },
  ];

  return (
    <div className="mb-24 flex flex-col gap-1">
      <h2 className="text-[#021f33] text-[40px] font-medium">
        Mentors to meet
      </h2>

      <div className="flex gap-10 items-center">
        <div className="h-[522px] px-6 py-10 bg-[#021727] rounded-[20px] flex-col justify-center items-start gap-6 inline-flex">
          <div className="justify-center items-center gap-6 inline-flex">
            <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-[#f0f0f1] text-3xl font-bold font-['Eudoxus Sans']">
                Discover Mentors
              </div>
              <div className="self-stretch text-[#f0f0f1] text-base font-medium font-['Eudoxus Sans'] leading-normal">
                Over 2000 Mentors available
              </div>
            </div>
          </div>
          <img
            className="w-[280px] h-[267px] rounded-[20px]"
            src="https://via.placeholder.com/280x267"
          />
          <div className="px-10 py-4 bg-[#086cb4] rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-[#f0f0f1] text-xl font-bold font-['Eudoxus Sans']">
              Explore Mentors
            </div>
          </div>
        </div>

        {MENTORS.map((mentor, i) => (
          <div
            key={i}
            className="h-[486px] p-6 bg-white rounded-[20px] border border-[#d8dadb] flex-col justify-start items-start gap-6 inline-flex"
          >
            <img
              className="w-[276px] h-[328px] rounded-[20px]"
              src="https://via.placeholder.com/276x328"
            />
            <div className="text-center text-[#4c6171] text-3xl font-bold font-['Eudoxus Sans']">
              Abiola Oloko
            </div>
            <div className="justify-center items-center gap-6 inline-flex">
              <div className="w-[226px] text-[#6d7880] text-base font-medium font-['Eudoxus Sans'] leading-normal">
                UX Designer, Google
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

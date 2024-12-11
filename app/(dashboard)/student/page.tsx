import { AllEvents1 } from "@/components/AllEvents1";
import React from "react";
import { Welcome } from "../dashboard/Welcome";
import { MentorToMeet } from "../dashboard/MentorToMeet";


const Home = () => {
  return (
    <div className="flex flex-col p-[47px_60px] max-xl:p-[30px_40px] max-lg:p-[15px_30px] max-sm:p-[10px_15px] max-md:p-[10px_20px] max-w-full">
      <Welcome />

      <AllEvents1 />

      <MentorToMeet />
    </div>
  );
};

export default Home;

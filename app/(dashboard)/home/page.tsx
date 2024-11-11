import { AllEvents1 } from "@/components/AllEvents1";
import React from "react";
import { MentorToMeet } from "./MentorToMeet";
import { Welcome } from "./Welcome";

const Home = () => {
  return (
    <div className="flex flex-col p-[47px_60px]">
      <Welcome />

      <AllEvents1 />

      <MentorToMeet />
    </div>
  );
};

export default Home;

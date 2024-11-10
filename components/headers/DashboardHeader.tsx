import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import { SheetMenu } from "../admin-panel/sheet-menu";

export const DashboardNavbar = () => {
  return (
    <div className="w-full h-[80px] px-[5%] bg-[#f1b807] justify-between items-center inline-flex">
      <img src={"/logo.svg"} />

      <div className="justify-start items-center gap-2.5 flex">
        <SheetMenu />

        <ModeToggle />

        <Link
          href={"#"}
          className="p-4 bg-[#086cb4] rounded justify-center items-center gap-2.5 flex"
        >
          <span className="whitespace-nowrap text-center text-[#f0f0f1] text-xl font-bold">
            Book A Session
          </span>
        </Link>
      </div>
    </div>
  );
};

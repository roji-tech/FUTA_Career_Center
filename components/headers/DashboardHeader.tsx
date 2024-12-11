import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../mode-toggle";
import { SheetMenu } from "../admin-panel/sheet-menu";

export const DashboardNavbar = () => {
  return (
    <div className="w-full max-w-full h-[80px] max-md:h-[70px] px-[5%] bg-[#f1b807] justify-between items-center inline-flex">
      <img src={"/logo.svg"} className="max-md:w-24 max-sm:w-20" />

      <div className="justify-start items-center gap-2.5 flex">
        <SheetMenu />

        {/* <ModeToggle /> */}

        <Link
          href={"#"}
          className="p-4 max-md:p-2 bg-[#086cb4] rounded justify-center items-center gap-2.5 flex max-md:h-[90%]"
        >
          <span className="whitespace-nowrap text-center text-[#f0f0f1] text-xl max-md:text-lg max-sm:text-sm font-bold">
            Book A Session
          </span>
        </Link>
      </div>
    </div>
  );
};

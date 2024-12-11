"use client";

import Link from "next/link";
import { Ellipsis, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  calendarSvgIcon,
  exploreSvgIcon,
  homeSvgIcon,
  notificationSvgIcon,
} from "../svgs";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();

  const menuList = [
    { icon: homeSvgIcon, label: "Home" },
    { icon: exploreSvgIcon, label: "Explore" },
    { icon: calendarSvgIcon, label: "Appointments" },
    { icon: notificationSvgIcon, label: "Notifications" },
  ];

  return (
    <ScrollArea className="bg-[#f0f2f4] [&>div>div[style]]:!block h-full">
      <nav className="pt-14 h-full w-full flex flex-col justify-between overflow-y-auto box-border max-h-[85vh]">
        <ul className="flex flex-col gap-6 items-start space-y-1 px-2 justify-center">
          {menuList.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex-col cursor-pointer py-2 w-full justify-center items-center gap-2 flex hover:bg-[#ffffff70] transition-all duration-200",
                "max-lg:flex-row max-lg:justify-start max-lg:gap-5"
              )}
            >
              <div className="w-max lg:mx-auto">{item.icon}</div>
              <div className="text-center text-[#032740] text-[10px] font-medium font-['Eudoxus Sans']">
                {item.label}
              </div>
            </div>
          ))}
        </ul>

        <div className="pb-12">
          <div className="image ">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src="/lady.png"
            />
          </div>
        </div>
      </nav>
    </ScrollArea>
  );
}

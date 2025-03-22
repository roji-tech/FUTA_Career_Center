import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HomeBanner = () => {
  const IMGs = ["/lady.png", "/shortlady.png", "/smilyman.png", "/man.png"];

  return (
    <div className="flex flex-col px-[5%] mb-24">
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
          <span className="text-[#021f33] text-[34px] lg:text-[64px] font-bold">
            Empowering Your Future,{" "}
          </span>
          <span className="text-[#021f33] text-[34px] lg:text-[64px] font-normal font-['Times New Roman']">
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

      <Carousel className="md:hidden w-full max-w-[80%] mt-6 mx-auto">
        <CarouselContent>
          {IMGs.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={img} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <div>
          <img className="mx-auto" src="/lady.png" alt="" />
        </div>
        <div>
          <img className="mx-auto" src="/shortlady.png" alt="" />
        </div>
        <div>
          <img className="mx-auto" src="/smilyman.png" alt="" />
        </div>
        <div className="max-lg:custom-grid-area">
          <img className="mx-auto" src="/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

import { AllEvents } from "@/components/AllEvents";
import { HomeBanner } from "@/components/banner/HomeBanner";
import { BridgingGap } from "@/components/BridgingGAp";
import { CareerAndWorkshop } from "@/components/CareerAndWorkshop";
import { HomeFooter } from "@/components/footer/HomeFooter";
import { LanndingPageHeader } from "@/components/headers/HomeHeader";

export default function Home() {
  return (
    <main className="bg-white flex mx-auto min-h-screen flex-col max-w-[1500px]">
      <LanndingPageHeader />
      <HomeBanner />
      <AllEvents />
      <BridgingGap />
      <CareerAndWorkshop />
      <HomeFooter />
    </main>
  );
}

import { HomeBanner } from "@/components/banner/HomeBanner";
import { LanndingPageHeader } from "@/components/footer/LanndingPageHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LanndingPageHeader />
      <HomeBanner />
    </main>
  );
}

import { DashboardNavbar } from "@/components/headers/DashboardHeader";
import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <DashboardNavbar />
        <div className="wrapper">{children}</div>

        <AppSidebar />
        <main>{children}</main>
      </SidebarProvider>
    </div>
  );
}

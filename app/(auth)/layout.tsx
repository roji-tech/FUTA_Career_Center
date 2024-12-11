"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Logo } from "@/components/svg/logo";
// import { Icons } from "@/components/ui/icons";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LanndingPageHeader } from "@/components/headers/HomeHeader";

export default function AuthPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [pending, setPending] = useState(false);
  //   const { status } = useSession();
  const router = useRouter();

  const formSubmitted = async (event: any) => {
    event.preventDefault();
    setPending(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      if (res?.error) {
        console.log("res error :::: ", res);
        setErrorMessage(res.error);
        setPending(false);
      } else {
        setPending(false);
        // Handle successful login here (e.g., redirect or store user data)
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login");
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col justify-between lg:min-h-screen">
      <LanndingPageHeader />

      <div className="w-full lg:grid lg:min-h-[calc(100vh-100px)] lg:grid-cols-[1fr_1.1fr]">
        <div
          className="bg-primary-600 flex flex-1 items-center justify-center bg-no-repeat max-lg:fixed max-lg:inset-0 max-lg:-bottom-4 max-lg:-z-10 filter brightness-75"
          style={{
            background: "url(authBgImage.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        <div className="flex items-center justify-center p-6 bg-secondary-600 max-lg:min-h-[calc(100vh-100px)] max-lg:backdrop-brightness-50">
          {children}
        </div>
      </div>
    </div>
  );
}



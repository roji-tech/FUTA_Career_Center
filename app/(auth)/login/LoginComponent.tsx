"use client";

import { setCookie } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define type for login form data
type LoginFormInputs = {
  matricNumber: string;
  password: string;
};

export function LoginComponent() {
  const [loading, setLoading] = useState(false); // State to manage loading status
  const router = useRouter(); // Initialize useRouter for navigation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log("Login Form Submitted: ", data);
    setLoading(true); // Start loading
    try {
      console.log("Form Data Submitted: ", data);
      // sessionStorage.setItem("isLoggedIn", "true"); // Set isLoggedIn in session storage
      setCookie("isLoggedIn", "true", 1); // Set the isLoggedIn cookie (expires in 1 day)

      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Remove this in production
      router.push("/dashboard"); // Redirect to dashboard after registration
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const formStyles = (condition: any, otherStyles = "") =>
    `w-full px-4 py-2 border rounded-sm outline outline-none hover:outline-[0.5px] ${
      condition ? "border-red-500" : "border-none"
    } bg-[#FAF7EE] ${otherStyles} `;

  return (
    <div className="flex items-center justify-center bg-gray-100 max-w-[583px]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <p className="text-sm mb-6">
          You don't have an account?{" "}
          <Link href="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Matric Number */}
          <div>
            <input
              type="text"
              placeholder="Matric Number (e.g., MNE/20/0343)"
              {...register("matricNumber", {
                required: "Matric number is required",
                pattern: {
                  value: /^[A-Z]{3}\/\d{2}\/\d{4}$/,
                  message: "Matric number must follow the format MNE/20/0343",
                },
              })}
              className={formStyles(errors.matricNumber)}
            />
            {errors.matricNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.matricNumber.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className={formStyles(errors.password)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#086CB4] text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? "Submitting..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

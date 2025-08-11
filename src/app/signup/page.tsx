"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const heading = "Signup";
  const logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  };
  const buttonText = "Create Account";
  const signupText = "Already a user?";
  const signupUrl = "https://shadcnblocks.com";

  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Fill in your details to sign up</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="username" className="pb-2 pl-1.5">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email" className="pb-2 pl-1.5">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="relative">
                <Label htmlFor="password" className="pb-2 pl-1.5">
                  Password
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="pr-10" // padding for the icon space
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[33px] text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button className="w-full cursor-pointer">Sign up</Button>
            </CardFooter>
          </Card>

          {/* hello */}

          <section className="bg-muted h-screen">
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-6 lg:justify-start">
                {/* Logo */}
                <a href={logo.url}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10 dark:invert"
                  />
                </a>
                <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
                  {heading && (
                    <h1 className="text-xl font-semibold">{heading}</h1>
                  )}
                  <div className="flex w-full flex-col gap-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="text-sm"
                      required
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="text-sm"
                      required
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="text-sm"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {buttonText}
                  </Button>
                </div>
                <div className="text-muted-foreground flex justify-center gap-1 text-sm">
                  <p>{signupText}</p>
                  <a
                    href={signupUrl}
                    className="text-primary font-medium hover:underline"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Signup;

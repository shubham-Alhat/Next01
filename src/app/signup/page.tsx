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
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSignup = async () => {
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* hello */}

      <section className="bg-muted h-screen">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-6 lg:justify-start">
            <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
              <h1 className="text-xl font-semibold">Sign up</h1>
              <div className="flex w-full flex-col gap-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="text-sm"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  className="text-sm"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="Username"
                  className="text-sm"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  required
                />
              </div>
              <Button
                type="submit"
                onClick={handleSignup}
                className="w-full cursor-pointer"
              >
                Create Account
              </Button>
            </div>
            <div className="text-muted-foreground flex justify-center gap-1 text-sm">
              <p>Already a user?</p>
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

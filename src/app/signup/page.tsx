"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";

function Signup() {
  return (
    <>
      <div className="text-2xl text-green-600 w-full text-center">Signup</div>
      <Button className="cursor-pointer">Sign up</Button>
    </>
  );
}

export default Signup;

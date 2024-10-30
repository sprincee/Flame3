import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="grow flex flex-col items-center justify-evenly">
        <section className="space-y-6">
          <div className="container flex flex-col items-center gap-8 text-center">
            <h1 className="max-w-4xl font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
              Welcome to Flame.
            </h1>
            <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              No design skills? No problem.
              Just input your preferences, and Flame will generate multiple thumbnail options in seconds. 
            </p>
            <div className="space-x-4">
              <Link href="/login">
                <Button size="lg">Get Started.</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container mt-8">
        </section>
      </div>
    </>
  );
}

import { Badge } from "@/components/ui/badge"; // Not being utilized, replace with another component from SHADCN
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div>
              
            </div>
            <div>
              <Card className=" shadow-emerald-200 shadow-md border-emerald-400">
                <CardHeader>
                  <CardTitle>Looking for a job?</CardTitle>
                  <CardDescription>
                    Use JobLogr's AI tools to help you find your next job.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="https://joblogr.com?utm_source=venefish&utm_medium=landing&utm_campaign=ten"
                    target="_blank"
                    className="underline text-slate-800 font-medium"
                  >
                    JobLogr.com
                  </Link>{" "}
                  is an awesome job search tool that uses AI to help you find
                  your next job faster than ever before. It's free to try, but
                  if you decide to upgrade to the pro plan, you can use code
                  "VENEFISH" for $10 off.
                  <Link
                    className={cn(
                      buttonVariants({ size: "xl" }),
                      "mt-4 w-full"
                    )}
                    href="https://joblogr.com?utm_source=venefish&utm_medium=landing&utm_campaign=ten"
                  >
                    Use JobLogr for Free
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div>
                
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

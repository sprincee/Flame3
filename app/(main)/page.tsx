import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { Particles } from "@/components/animations/particles";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Particles />
      <div className="grow flex flex-col items-center justify-evenly relative z-10">
        <StaggerContainer>
          <section className="space-y-6">
            <div className="container flex flex-col items-center gap-8 text-center">
              <FadeIn delay={0.1}>
                <h1 className="max-w-4xl font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
                  Welcome to Flame.
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                  No design skills? No problem.
                  Just input your preferences, and Flame will generate stylish thumbnail options in seconds. 
                </p>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <div className="space-x-4">
                  <Link href="/login">
                    <Button size="lg">Get Started.</Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>
          
          <FadeIn delay={0.7}>
            <section className="container mt-8">
              {/* Your future content here */}
            </section>
          </FadeIn>
        </StaggerContainer>
      </div>
    </>
  );
}
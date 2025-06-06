"use client";

import { FlameKindling } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { Particles } from "@/components/animations/particles";

export default function AboutPage() {
  return (
    <>
      <Particles />
      <main className="min-h-screen flex flex-col items-center justify-start pt-20 p-6 relative z-10">
        <StaggerContainer className="flex flex-col items-center">
          <FadeIn delay={0.1}>
            <FlameKindling className="w-40 h-40 mb-10 logo" />
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold mb-4">About Flame</h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg text-center max-w-lg">
              Developed by Mahad Khan, a student at the University of Maryland -- Flame is
              a powerful tool designed to help creators generate stunning YouTube thumbnails effortlessly.
              Our goal is to make design easy & accessible for everyone.
            </p>
          </FadeIn>
        </StaggerContainer>
      </main>
    </>
  );
}
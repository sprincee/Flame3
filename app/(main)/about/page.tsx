// src/app/about/page.tsx
"use client";

import { FlameKindling } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-20 p-6">
        <FlameKindling className="w-40 h-40 mb-10 logo" />
        
        <h1 className="text-4xl font-bold mb-4">About Flame</h1>
        <p className="text-lg text-center max-w-lg">
            Developed by Mahad Khan, a student at the University of Maryland -- Flame is
            a powerful tool designed to help creators generate stunning YouTube thumbnails effortlessly.
            Our goal is to make design easy & accessible for everyone.
        </p>
    </main>
  );
}


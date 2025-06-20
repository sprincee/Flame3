"use client";

import { AuthCard } from "@/components/auth-card";
import { ProviderLoginButtons } from "@/components/auth/provider-login-buttons";
import { OrSeparator } from "@/components/ui/or-separator";
import { Particles } from "@/components/animations/particles";
import { useState } from "react";

export default function LoginPage() {
  const [isShowingSignUp, setIsShowingSignUp] = useState(false);

  return (
    <>
      <Particles />
      <div className="grow flex flex-col items-center justify-center relative z-10">
        <section className="w-[32rem] space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            {isShowingSignUp ? "Sign up" : "Log in"}
          </h1>
          <AuthCard
            isShowingSignUp={isShowingSignUp}
            setIsShowingSignUp={setIsShowingSignUp}
           />
          <OrSeparator />
          <ProviderLoginButtons />
        </section>
      </div>
    </>
  );
}
"use client";

import { useState } from "react";
import TermsStep from "./_components/terms";
import EmailStep from "./_components/email";
import { SignUpStep } from "./_types";

export default function SignUpPage() {
  const [step, setStep] = useState<SignUpStep>("terms");

  return (
    <main className="flex-1 grid place-items-center px-4 animate-[fade-in_0.15s_ease-out]">
      <div key={step} className="w-full max-w-[520px] animate-[fade-in-up_0.2s_ease-out]">
        {step === "terms" ? (
          <TermsStep onNext={() => setStep("email")} />
        ) : (
          <EmailStep onBack={() => setStep("terms")} />
        )}
      </div>
    </main>
  );
}
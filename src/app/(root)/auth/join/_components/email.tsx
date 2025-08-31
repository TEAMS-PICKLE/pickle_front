"use client";

import { useMemo, useState } from "react";

export default function EmailStep({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState("");
  const isValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);

  return (
    <section className="space-y-7">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">사용할 이메일을 입력해 주세요.</h2>
        <p className="text-sm text-gray-500">Please enter your email address.</p>
      </div>

      <div className="space-y-2">
        <input
          type="email"
          inputMode="email"
          placeholder="pickle@gmail.com"
          className={`w-full rounded-xl border px-4 py-3 outline-none
            ${email && !isValid ? "border-red-400" : "border-gray-300 focus:border-gray-500"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!email && !isValid}
        />
        {email && !isValid && <p className="text-sm text-red-500">올바른 이메일 주소를 입력해 주세요.</p>}
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          disabled={!isValid}
          className={`h-12 rounded-full text-white transition
            ${isValid ? "bg-black hover:opacity-90" : "bg-gray-300 cursor-not-allowed"}`}
        >
          다음
        </button>
        <button type="button" onClick={onBack} className="text-sm underline text-gray-500">
          Back
        </button>
      </div>
    </section>
  );
}
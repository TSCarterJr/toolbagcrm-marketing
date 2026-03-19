"use client";

import { useState } from "react";

export default function WaitlistForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: Replace with your actual form endpoint (Mailchimp, ConvertKit, Formspark, etc.)
      // Example with Formspark: https://formspark.io
      // const res = await fetch("https://submit-form.com/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json", Accept: "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      // if (!res.ok) throw new Error("Form submission failed");

      // Temporary: just simulate success until backend is wired
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`max-w-md mx-auto text-center py-3 px-6 bg-white/20 rounded-lg ${className ?? ""}`}>
        <span className="text-white font-bold text-lg">🎉 You&apos;re on the list!</span>
        <p className="text-blue-200 text-sm mt-1">We&apos;ll be in touch when we launch.</p>
      </div>
    );
  }

  return (
    <form
      className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${className ?? ""}`}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yourcompany.com"
        className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
      >
        {status === "loading" ? "Joining…" : "Join the Waitlist"}
      </button>
      {status === "error" && (
        <p className="w-full text-red-300 text-sm mt-1">Something went wrong — try again or email us directly.</p>
      )}
    </form>
  );
}

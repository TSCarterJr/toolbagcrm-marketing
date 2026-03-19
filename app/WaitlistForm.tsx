"use client";

// TODO: Replace GOOGLE_FORM_URL with your actual Google Form link
// Create at: https://forms.google.com
// Suggested fields: Name, Email, Company, Trade, Team Size, Current Software
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_WAITLIST_FORM_URL ?? "";

export default function WaitlistForm({ className }: { className?: string }) {
  if (!GOOGLE_FORM_URL) {
    // Form URL not set yet — show a "notify me" placeholder
    return (
      <div className={`max-w-md mx-auto text-center ${className ?? ""}`}>
        <div className="bg-white/10 border border-white/20 rounded-lg px-6 py-4">
          <p className="text-white font-semibold text-lg">🚀 Waitlist opening soon</p>
          <p className="text-blue-200 text-sm mt-1">
            Check back shortly — we&apos;re setting up signups now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-md mx-auto text-center ${className ?? ""}`}>
      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg shadow-md"
      >
        Join the Waitlist →
      </a>
      <p className="text-blue-200 text-sm mt-3">
        Takes 2 minutes. Free until your first job.
      </p>
    </div>
  );
}

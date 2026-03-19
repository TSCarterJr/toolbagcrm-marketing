"use client";

export default function WaitlistForm({ className }: { className?: string }) {
  return (
    <form
      className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${className ?? ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector("input") as HTMLInputElement;
        alert(`Thanks! We'll be in touch at ${input.value}`);
        input.value = "";
      }}
    >
      <input
        type="email"
        placeholder="you@yourcompany.com"
        className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
      >
        Join the Waitlist
      </button>
    </form>
  );
}

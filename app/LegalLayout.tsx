import Image from "next/image";
import Link from "next/link";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image src="/logo.png" alt="ToolbagCRM" width={40} height={40} />
            <span className="text-xl font-bold">
              <span className="text-blue-700">Toolbag</span>
              <span className="text-orange-500">CRM</span>
            </span>
          </Link>
          <Link
            href="/#waitlist"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            Join the Waitlist
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ToolbagCRM" width={24} height={24} />
            <span className="font-bold">
              <span className="text-blue-400">Toolbag</span>
              <span className="text-orange-400">CRM</span>
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div>© {new Date().getFullYear()} ToolbagCRM. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

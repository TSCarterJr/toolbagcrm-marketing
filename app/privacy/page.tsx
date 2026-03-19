import LegalLayout from "../LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout>
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-black mb-6 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 text-sm">Last updated: March 2026</p>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            ToolbagCRM (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
            committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, and share information about you when you use our
            website and services.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
          <p>
            We collect email addresses when you sign up for our waitlist. We do
            not sell or share your personal information with third parties for
            marketing purposes.
          </p>
          <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
          <p>
            We use your email address to send you product updates, launch
            announcements, and information about ToolbagCRM. You can unsubscribe
            at any time.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>Questions? Contact details coming soon.</p>
        </div>
      </div>
    </LegalLayout>
  );
}

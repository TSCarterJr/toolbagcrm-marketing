import LegalLayout from "../LegalLayout";

export default function Terms() {
  return (
    <LegalLayout>
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-black mb-6 text-gray-900">Terms of Service</h1>
        <p className="text-gray-500 mb-8 text-sm">Last updated: March 2026</p>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            By accessing or using ToolbagCRM (&quot;the Service&quot;), you agree
            to be bound by these Terms of Service. If you do not agree, do not use
            the Service.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Use of Service</h2>
          <p>
            ToolbagCRM is currently in pre-launch. By joining our waitlist, you
            agree to receive product communications from us. You can opt out at
            any time.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
          <p>
            ToolbagCRM is provided &quot;as is&quot; without warranties of any
            kind. We are not liable for any indirect, incidental, or consequential
            damages arising from your use of the Service.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the
            Service after changes constitutes acceptance.
          </p>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>Questions? Contact details coming soon.</p>
        </div>
      </div>
    </LegalLayout>
  );
}

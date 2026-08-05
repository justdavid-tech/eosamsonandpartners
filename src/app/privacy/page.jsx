export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm mt-6">Last updated August 2026</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-2xl mx-auto px-6 py-16 lg:py-20 space-y-12">
          <div>
            <p className="text-slate leading-relaxed">
              E O Samson & Partners respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or engage our services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Information We Collect</h2>
            <p className="text-slate leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate">
              <li>Contact details you provide, such as your name, email address, and phone number, when you submit a form or book a consultation.</li>
              <li>Details of your legal matter, when shared through our contact or consultation booking forms.</li>
              <li>Technical information such as browser type and general usage data, collected automatically when you visit our website.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">How We Use Your Information</h2>
            <p className="text-slate leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate">
              <li>Respond to enquiries and consultation requests.</li>
              <li>Communicate with you about your legal matter, where an engagement exists.</li>
              <li>Improve our website and the services we offer.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Confidentiality</h2>
            <p className="text-slate leading-relaxed">
              Information shared through our contact or consultation forms is treated with strict confidentiality. However, please note that submitting a form or sending an enquiry does not, on its own, create an attorney client relationship. Please avoid sharing highly sensitive case details until an engagement has been formally confirmed.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Third Party Services</h2>
            <p className="text-slate leading-relaxed">
              We use trusted third party services to operate this website, including hosting, content management, and transactional email delivery for form submissions. These providers process data solely to support the functioning of our website and are not authorized to use your information for their own purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Data Retention</h2>
            <p className="text-slate leading-relaxed">
              We retain personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law and professional obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Your Rights</h2>
            <p className="text-slate leading-relaxed">
              In accordance with the Nigeria Data Protection Act 2023, you have the right to request access to, correction of, or deletion of your personal information, subject to applicable legal exceptions. To exercise these rights, please contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Changes to This Policy</h2>
            <p className="text-slate leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Contact Us</h2>
            <p className="text-slate leading-relaxed">
              If you have questions about this Privacy Policy or how your information is handled, please contact us at 1, Ondo Street, Garki, FCT, Abuja, or by phone at +234 806 355 3009.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
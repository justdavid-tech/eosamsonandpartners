export default function CookiesPage() {
  return (
    <div>
      <section className="bg-navy text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center animate-fade-in-up">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1]">
            Cookie Policy
          </h1>
          <p className="text-white/60 text-sm mt-6">Last updated August 2026</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-2xl mx-auto px-6 py-16 lg:py-20 space-y-12 animate-fade-in-up animation-delay-100">
          <div>
            <p className="text-slate leading-relaxed">
              This Cookie Policy explains how E O Samson & Partners uses cookies and similar tracking technologies on our website. By using our website, you consent to our use of cookies in accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">What are Cookies?</h2>
            <p className="text-slate leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help us remember your preferences, keep you logged in, analyze site traffic, and optimize your overall browsing experience.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">How We Use Cookies</h2>
            <p className="text-slate leading-relaxed mb-3">
              We use cookies for the following categories of services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate">
              <li><strong>Essential Cookies:</strong> Necessary for the basic functioning of the website, such as managing forms and securing your session.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting information anonymously, helping us improve site navigation.</li>
              <li><strong>Preference Cookies:</strong> Allow our website to remember choices you make (such as language preferences or layout settings) to customize your experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Managing Your Preferences</h2>
            <p className="text-slate leading-relaxed mb-4">
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
            </p>
            <p className="text-slate leading-relaxed">
              Additionally, our site displays a <strong>Cookie Preferences</strong> banner when you first visit, allowing you to easily accept or decline non-essential cookies. You can also clear cookies at any time directly through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-navy mb-3">Contact Us</h2>
            <p className="text-slate leading-relaxed">
              If you have any questions about our use of cookies, please contact us at 1, Ondo Street, Garki, FCT, Abuja, or by phone at +234 806 355 3009.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

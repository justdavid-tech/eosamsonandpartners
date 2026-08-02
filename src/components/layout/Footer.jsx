export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-xl text-white mb-3">E-O Samson & Partners</h3>
          <p className="text-sm leading-relaxed mb-4">
            Excellence in Advocacy. Integrity in Service.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-brass transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brass transition-colors">Twitter</a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Practice Areas</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/practice-areas/civil-litigation" className="hover:text-brass transition-colors">Civil Litigation</a></li>
            <li><a href="/practice-areas/corporate-commercial-law" className="hover:text-brass transition-colors">Corporate & Commercial</a></li>
            <li><a href="/practice-areas/family-law" className="hover:text-brass transition-colors">Family Law</a></li>
            <li><a href="/practice-areas" className="hover:text-brass transition-colors">View all &rarr;</a></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Firm</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="/about" className="hover:text-brass transition-colors">About</a></li>
            <li><a href="/insights" className="hover:text-brass transition-colors">Insights</a></li>
            <li><a href="/faq" className="hover:text-brass transition-colors">FAQ</a></li>
            <li><a href="/contact" className="hover:text-brass transition-colors">Contact</a></li>
          </ul>
          <p className="text-sm">1, Ondo Street, Garki, FCT, Abuja</p>
        </div>
      </div>

      <div className="hairline max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-white/60 gap-3">
        <p>&copy; {new Date().getFullYear()} E-O Samson & Partners. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-brass transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-brass transition-colors">Terms</a>
          <a href="/cookies" className="hover:text-brass transition-colors">Cookies</a>
        </div>
      </div>
      <p className="text-center text-[11px] text-white/40 pb-6 px-6">
        Attorney Advertising. Prior results do not guarantee a similar outcome.
      </p>
    </footer>
  );
}
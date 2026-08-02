export default function Section({ children, tone = "white", className = "" }) {
  const bgClasses = {
    navy: "bg-navy text-white border-navy",
    cream: "bg-cream text-ink border-cream",
    white: "bg-white text-ink border-gray-100",
  };

  return (
    <section className={`w-full py-16 md:py-24 border-b ${bgClasses[tone]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

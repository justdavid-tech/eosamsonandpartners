import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="eyebrow mb-5">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
            A firm built on judgment, not just credentials
          </h1>
          <p className="text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
            E-O Samson & Partners delivers practical, strategic, and commercially sound legal solutions across Nigeria.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* STORY */}
      {/* ============================================ */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-24">
          <p className="eyebrow mb-6 text-center">Our Story</p>
          <p className="text-lg leading-[1.8] text-ink first-letter:font-display first-letter:text-6xl first-letter:text-brass first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]">
            E-O Samson & Partners is a forward looking Nigerian law firm founded on the principles of excellence, integrity, professionalism, and client focused legal representation. The firm was established to provide practical, strategic, and commercially sound legal solutions to individuals, businesses, government institutions, and investors.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* MISSION & VISION */}
      {/* ============================================ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24 grid md:grid-cols-2 gap-12">
          <div className="border-l-2 border-brass pl-8">
            <p className="eyebrow mb-4">Our Mission</p>
            <p className="font-display text-2xl text-navy leading-[1.4]">
              To provide exceptional legal services through integrity, innovation, excellence, and unwavering commitment to the protection of our clients&rsquo; rights and interests.
            </p>
          </div>
          <div className="border-l-2 border-brass pl-8">
            <p className="eyebrow mb-4">Our Vision</p>
            <p className="font-display text-2xl text-navy leading-[1.4]">
              To become one of Nigeria&rsquo;s leading full service law firms, recognized for excellence in advocacy, commercial legal practice, real estate transactions, dispute resolution, and trusted legal advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CORE VALUES (8 CARDS) */}
      {/* ============================================ */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <p className="eyebrow mb-2 text-center">What Guides Us</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy text-center mb-14">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "Integrity",
              "Excellence",
              "Professionalism",
              "Accountability",
              "Client Centred Service",
              "Innovation",
              "Confidentiality",
              "Teamwork",
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white border border-navy/10 p-6 text-center hover:border-brass transition-colors duration-300"
              >
                <div className="w-8 h-8 mx-auto mb-4 rounded-full border border-brass/50 flex items-center justify-center">
                  <span className="text-brass text-xs">&#10003;</span>
                </div>
                <p className="font-display text-navy text-sm leading-snug">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOUNDER PROFILE */}
      {/* ============================================ */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <div className="relative">
            <div className="aspect-[4/5] relative">
              {/*
                TODO: replace with real photo, e.g.:
                <img src="/images/founder.jpg" alt="E-O Samson, Esq." className="w-full h-full object-cover" />
              */}
              <div className="absolute inset-0 bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="font-display text-white/[0.08] text-[9rem] leading-none select-none">
                  &sect;
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Founder & Managing Partner</p>
            <h2 className="font-display text-3xl md:text-4xl mb-2">
              E-O Samson, Esq.
            </h2>
            <p className="text-brass text-sm font-semibold mb-8">
              FICMC, AICMC, LL.M, B.L.
            </p>

            <p className="text-white/75 leading-relaxed mb-6">
              E-O Samson is a seasoned legal practitioner with over two decades of post-call experience. He was called to the Nigerian Bar on 5 November 2005 and has developed extensive expertise in litigation, commercial transactions, property law, banking and finance, debt recovery, arbitration, corporate advisory, and alternative dispute resolution.
            </p>
            <p className="text-white/75 leading-relaxed mb-10">
              He has successfully represented individuals, corporations, financial institutions, and government agencies in complex legal matters across Nigeria. Beyond legal practice, he is committed to legal education, mentorship, and public legal awareness through regular publications and legal enlightenment initiatives.
            </p>

            <div className="border-t border-white/10 pt-8">
              <p className="eyebrow mb-5">Credentials & Recognition</p>
              <ul className="space-y-3">
                {[
                  "Over 20 years of successful legal practice",
                  "Fellow, Institute of Chartered Mediators and Conciliators (FICMC)",
                  "Associate, Institute of Chartered Mediators and Conciliators (AICMC)",
                  "Founder and Managing Partner of E-O Samson & Partners",
                  "Recognized for excellence in litigation, real estate practice, commercial law, and dispute resolution",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-white/75 text-sm leading-relaxed">
                    <span className="text-brass shrink-0">&#10003;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TIMELINE — placeholders below, replace with real milestones */}
      {/* ============================================ */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-24">
          <p className="eyebrow mb-2 text-center">Our Journey</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy text-center mb-16">
            Milestones
          </h2>

          <div className="space-y-10">
            {[
              { year: "2014", title: "Founded", text: "E-O Samson & Partners was established in Abuja." },
              { year: "PLACEHOLDER", title: "Expansion", text: "Replace with real expansion milestone, e.g. new office, new practice area, team growth." },
              { year: "PLACEHOLDER", title: "Awards", text: "Replace with a specific award or recognition received." },
              { year: "PLACEHOLDER", title: "Achievements", text: "Replace with a specific notable case or client achievement." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <p className="font-display text-2xl text-brass w-28 shrink-0">
                  {item.year}
                </p>
                <div className="border-l-2 border-navy/10 pl-8 pb-2">
                  <h3 className="font-display text-lg text-navy mb-1">{item.title}</h3>
                  <p className="text-slate leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATISTICS — placeholder numbers, replace once you send real figures */}
      {/* ============================================ */}
      <section className="bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "PLACEHOLDER", label: "Years of Practice" },
              { value: "PLACEHOLDER", label: "Cases Handled" },
              { value: "PLACEHOLDER", label: "Clients Served" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl md:text-5xl text-brass mb-3">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
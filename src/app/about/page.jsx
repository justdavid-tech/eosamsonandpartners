import teamMembers from "@/data/team.json";

export default function AboutPage() {
  return (
    <div>
      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brass/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
          <p className="eyebrow mb-5 text-brass">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
            A firm built on judgment, not just credentials
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            E-O Samson & Partners delivers practical, strategic, and commercially sound legal solutions across Nigeria.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* STORY */}
      {/* ============================================ */}
      <section className="bg-cream border-t border-navy/5">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-24">
          <p className="eyebrow mb-6 text-center text-brass">Our Story</p>
          <p className="text-lg leading-[1.85] text-ink first-letter:font-display first-letter:text-6xl first-letter:text-brass first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8] font-body text-gray-800">
            E-O Samson & Partners is a forward-looking Nigerian law firm founded on the principles of excellence, integrity, professionalism, and client-focused legal representation. The firm was established to provide practical, strategic, and commercially sound legal solutions to individuals, businesses, government institutions, and investors.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* MISSION & VISION */}
      {/* ============================================ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24 grid md:grid-cols-2 gap-12">
          <div className="border-l-2 border-brass pl-8">
            <p className="eyebrow mb-4 text-brass">Our Mission</p>
            <p className="font-display text-2xl text-navy leading-[1.45] tracking-tight">
              To provide exceptional legal services through integrity, innovation, excellence, and unwavering commitment to the protection of our clients&rsquo; rights and interests.
            </p>
          </div>
          <div className="border-l-2 border-brass pl-8">
            <p className="eyebrow mb-4 text-brass">Our Vision</p>
            <p className="font-display text-2xl text-navy leading-[1.45] tracking-tight">
              To become one of Nigeria&rsquo;s leading full-service law firms, recognized for excellence in advocacy, commercial legal practice, real estate transactions, dispute resolution, and trusted legal advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CORE VALUES (8 CARDS) */}
      {/* ============================================ */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <p className="eyebrow mb-2 text-center text-brass">What Guides Us</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy text-center mb-14 tracking-tight">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "Integrity",
              "Excellence",
              "Professionalism",
              "Accountability",
              "Client Centered Service",
              "Innovation",
              "Confidentiality",
              "Teamwork",
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white border border-navy/10 p-6 text-center hover:border-brass transition-colors duration-300 rounded-sm shadow-sm"
              >
                <div className="w-8 h-8 mx-auto mb-4 rounded-full border border-brass/50 flex items-center justify-center bg-cream">
                  <span className="text-brass text-xs">&#10003;</span>
                </div>
                <p className="font-display text-navy text-sm leading-snug font-medium">
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
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brass/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start relative z-10">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm shadow-lg border border-white/10">
              <img
                src="/ceo.jpg"
                alt="E-O Samson, Esq. portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-brass/40 rounded-sm -z-10" />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-brass">Founder & Managing Partner</p>
            <h2 className="font-display text-3xl md:text-4xl mb-2 tracking-tight">
              E-O Samson, Esq.
            </h2>
            <p className="text-brass text-xs md:text-sm font-semibold mb-8 tracking-wider">
              FICMC, AICMC, LL.M, B.L.
            </p>

            <p className="text-white/75 leading-relaxed mb-6 text-base">
              E-O Samson is a seasoned legal practitioner with over two decades of post-call experience. He was called to the Nigerian Bar on 5 November 2005 and has developed extensive expertise in litigation, commercial transactions, property law, banking and finance, debt recovery, arbitration, corporate advisory, and alternative dispute resolution.
            </p>
            <p className="text-white/75 leading-relaxed mb-10 text-base">
              He has successfully represented individuals, corporations, financial institutions, and government agencies in complex legal matters across Nigeria. Beyond legal practice, he is committed to legal education, mentorship, and public legal awareness through regular publications and legal enlightenment initiatives.
            </p>

            <div className="border-t border-white/10 pt-8">
              <p className="eyebrow mb-5 text-brass">Credentials & Recognition</p>
              <ul className="space-y-3">
                {[
                  "Over 20 years of post-call legal experience across Nigeria",
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
      {/* OUR TEAM */}
      {/* ============================================ */}
      <section className="bg-[#fbfbf9]">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <p className="eyebrow mb-2 text-center text-brass">Our Professionals</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy text-center mb-4 tracking-tight">
            Our Team
          </h2>
          <p className="text-slate text-center max-w-lg mx-auto mb-16 text-sm md:text-base">
            Our team of dedicated legal practitioners combines deep domain expertise with strategic vision to deliver exceptional results.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-sm overflow-hidden border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl text-navy mb-1 group-hover:text-brass transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-brass text-sm font-semibold tracking-wide uppercase mb-3">
                      {member.position}
                    </p>
                    {member.description && (
                      <p className="text-slate text-sm leading-relaxed">
                        {member.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TIMELINE */}
      {/* ============================================ */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-24">
          <p className="eyebrow mb-2 text-center text-brass">Our Journey</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy text-center mb-16 tracking-tight">
            Milestones
          </h2>

          <div className="space-y-10">
            {[
              { year: "2005", title: "Called to the Bar", text: "E-O Samson, Esq. was admitted as a Barrister and Solicitor of the Supreme Court of Nigeria, laying the groundwork for his extensive legal career." },
              { year: "2014", title: "Abuja Chambers Established", text: "E-O Samson & Partners opened its primary Garki chambers in the Federal Capital Territory, Abuja, to serve corporate and litigation clients nationwide." },
              { year: "2018", title: "Institute Fellowship Admittance", text: "Managing partner E-O Samson was admitted as a Fellow of the Institute of Chartered Mediators and Conciliators (FICMC), expanding the firm's dispute resolution credentials." },
              { year: "2022", title: "Corporate Practice Expansion", text: "Expanded the firm's commercial portfolio, onboarding specialized advisory associates to serve domestic and foreign direct investment briefs." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <p className="font-display text-2xl text-brass w-24 shrink-0">
                  {item.year}
                </p>
                <div className="border-l-2 border-navy/15 pl-8 pb-2">
                  <h3 className="font-display text-lg text-navy mb-1">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATISTICS */}
      {/* ============================================ */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brass/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "20+", label: "Years of Practice" },
              { value: "150+", label: "Cases Handled" },
              { value: "200+", label: "Clients Served" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl md:text-5xl text-brass mb-3">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-semibold">
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
"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Chidinma Adeleke",
    role: "Managing Director, Landmark Holdings",
    quote:
      "E-O Samson & Partners handled our commercial dispute with precision and clear communication throughout. We always knew where things stood, and their courtroom advocacy was exceptionally robust and strategic.",
    rating: 5,
    tag: "Commercial Litigation",
  },
  {
    name: "Tunde Olowolaju",
    role: "Property Developer",
    quote:
      "The team guided us through a complex land documentation and boundary dispute process. They made what felt overwhelming feel manageable, clear, and ultimately secured a favorable outcome for our development.",
    rating: 5,
    tag: "Property & Finance",
  },
  {
    name: "Amaka Ezenwa",
    role: "Chief Operating Officer, Apex Tech",
    quote:
      "Professional, responsive, and genuinely invested in the outcome of our corporate restructuring. Their advice was practical, clear, and perfectly aligned with our business goals.",
    rating: 5,
    tag: "Corporate Advisory",
  },
  {
    name: "Barr. Ibrahim Musa",
    role: "Co-Founder, Legacy Chambers",
    quote:
      "Having partnered with the firm on several multi-jurisdictional advisory briefs, their attention to detail and analytical depth in regulatory advisory matters remains top-tier in the industry.",
    rating: 5,
    tag: "Regulatory Advisory",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < count ? "text-brass" : "text-navy/10"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="bg-cream border-t border-navy/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Left: Editorial Header & Trust Badges */}
          <div className="max-w-md md:max-w-xl lg:max-w-md md:text-center lg:text-left md:mx-auto lg:mx-0">
            <p className="eyebrow mb-4">Client Feedback</p>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-[1.1] mb-6">
              A reputation built on successful outcomes
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              We measure our success by the success of our clients. Discover how our dedicated legal advice has guided businesses and individuals through critical matters.
            </p>
            
            {/* Stats / Trust Badges */}
            <div className="grid grid-cols-2 gap-6 border-t border-navy/10 pt-8">
              <div>
                <p className="font-display text-4xl text-brass mb-1">4.9<span className="text-lg text-navy">/5.0</span></p>
                <p className="text-xs font-semibold text-navy uppercase tracking-wider">Average Rating</p>
              </div>
              <div>
                <p className="font-display text-4xl text-brass mb-1">98%</p>
                <p className="text-xs font-semibold text-navy uppercase tracking-wider">Client Retention</p>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Testimonial Carousel Card */}
          <div className="relative">
            {/* Background Decorative Graphic */}
            <div className="absolute -top-12 -left-12 font-display text-[15rem] text-navy/[0.03] leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            {/* Testimonial Active Display */}
            <div className="relative bg-white border border-navy/10 p-8 md:p-12 shadow-sm rounded-sm transition-all duration-300 min-h-[350px] flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block text-xs font-semibold text-brass bg-brass/5 px-3 py-1 rounded-sm uppercase tracking-wide">
                    {testimonials[index].tag}
                  </span>
                  <Stars count={testimonials[index].rating} />
                </div>

                <blockquote 
                  className={`font-display text-xl md:text-2xl text-navy leading-relaxed mb-8 transition-opacity duration-300 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                >
                  &ldquo;{testimonials[index].quote}&rdquo;
                </blockquote>
              </div>

              <div 
                className={`flex justify-between items-end border-t border-navy/5 pt-6 transition-opacity duration-300 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div>
                  <h4 className="font-display text-lg text-navy">{testimonials[index].name}</h4>
                  <p className="text-xs text-slate font-medium mt-0.5">{testimonials[index].role}</p>
                </div>

                {/* Manual Navigation Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="w-10 h-10 border border-navy/10 hover:border-brass text-navy hover:text-brass flex items-center justify-center rounded-sm transition-colors cursor-pointer focus:outline-none"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="w-10 h-10 border border-navy/10 hover:border-brass text-navy hover:text-brass flex items-center justify-center rounded-sm transition-colors cursor-pointer focus:outline-none"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer focus:outline-none ${
                    i === index ? "bg-brass" : "bg-navy/15 hover:bg-navy/30"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, MapPin, Clock, Check } from "lucide-react";

const methods = [
  { id: "message", label: "Send a Message", icon: Mail },
  { id: "call", label: "Call Us", icon: Phone },
  { id: "whatsapp", label: "WhatsApp", icon: MessageSquare },
  { id: "visit", label: "Visit Us", icon: MapPin },
];

export default function ContactPage() {
  const [activeMethod, setActiveMethod] = useState("message");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="bg-navy min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
        
        {/* LEFT PANEL: Editorial Details */}
        <div className="relative text-white px-6 md:px-12 py-16 lg:py-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/40 via-navy to-navy pointer-events-none" />
          
          <div className="relative z-10">
            <p className="eyebrow mb-5 text-brass">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
              Let&rsquo;s talk about your legal matter
            </h1>
            <p className="text-white/70 leading-relaxed max-w-md text-base md:text-lg">
              Choose your preferred communication method. Our legal team will review and respond within one business day.
            </p>
          </div>

          <div className="relative z-10 mt-12 md:mt-20 space-y-8">
            <div className="flex gap-4 items-start">
              <MapPin className="text-brass w-6 h-6 shrink-0 mt-1" />
              <div>
                <p className="eyebrow mb-1 text-brass">Head Office</p>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  1, Ondo Street, Garki,<br />FCT, Abuja, Nigeria
                </p>
              </div>
            </div>
            
            <div className="hairline w-full opacity-30" />
            
            <div className="flex gap-4 items-start">
              <Clock className="text-brass w-6 h-6 shrink-0 mt-1" />
              <div>
                <p className="eyebrow mb-1 text-brass">Business Hours</p>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Monday to Friday: 8:30am &ndash; 5:30pm<br />Saturday: By Appointment Only
                </p>
              </div>
            </div>

            <div className="hairline w-full opacity-30" />
            
            <div className="flex gap-4 items-start">
              <Phone className="text-brass w-6 h-6 shrink-0 mt-1" />
              <div>
                <p className="eyebrow mb-1 text-brass">Call Us</p>
                <a href="tel:+2348063553009" className="text-white/80 hover:text-brass transition-colors leading-relaxed text-sm md:text-base block">
                  +2348063553009
                </a>
              </div>
            </div>

            <div className="hairline w-full opacity-30" />
            
            <div className="flex gap-4 items-start">
              <Mail className="text-brass w-6 h-6 shrink-0 mt-1" />
              <div>
                <p className="eyebrow mb-1 text-brass">Email Us</p>
                <a href="mailto:info@eosamsonandpartners.com" className="text-white/80 hover:text-brass transition-colors leading-relaxed text-sm md:text-base block">
                  info@eosamsonandpartners.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Dynamic Switcher & Interactive Form */}
        <div className="bg-cream px-6 md:px-12 py-16 lg:py-24 flex flex-col justify-center">
          
          {/* Method Switcher Header */}
          <div className="flex overflow-x-auto gap-2 mb-10 pb-2 scrollbar-thin scrollbar-thumb-brass/20 scrollbar-track-transparent">
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setActiveMethod(m.id);
                    if (status === "sent" || status === "error") setStatus("idle");
                  }}
                  className={`px-4 md:px-5 py-3 text-xs md:text-sm font-semibold transition-all duration-300 border flex items-center gap-2 shrink-0 rounded-sm cursor-pointer ${
                    activeMethod === m.id
                      ? "bg-navy text-white border-navy shadow-sm"
                      : "bg-white/40 text-navy border-navy/10 hover:border-brass hover:bg-white/80"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC CONTENT SWITCHER */}
          <div className="w-full max-w-xl mx-auto">
            
            {/* METHOD: SEND MESSAGE FORM */}
            {activeMethod === "message" && (
              <div className="animate-fade-in">
                {status === "sent" ? (
                  <div className="py-12 text-center bg-white border border-navy/5 p-8 rounded-sm shadow-sm">
                    <div className="w-16 h-16 bg-brass/10 text-brass rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-brass" />
                    </div>
                    <h3 className="font-display text-2xl text-navy mb-2">Message Sent Successfully</h3>
                    <p className="text-slate mb-6">
                      Thank you for reaching out to E-O Samson & Partners. A representative will contact you shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-sm font-semibold text-brass hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-navy/15 rounded-sm px-4 py-3.5 text-ink bg-white focus:outline-none focus:border-brass transition-all placeholder:text-slate/40 focus:ring-1 focus:ring-brass/20"
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-navy/15 rounded-sm px-4 py-3.5 text-ink bg-white focus:outline-none focus:border-brass transition-all placeholder:text-slate/40 focus:ring-1 focus:ring-brass/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="e.g. +234 803 123 4567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-navy/15 rounded-sm px-4 py-3.5 text-ink bg-white focus:outline-none focus:border-brass transition-all placeholder:text-slate/40 focus:ring-1 focus:ring-brass/20"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                        Describe your legal enquiry
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Please provide a brief overview of your legal matter (e.g., contract draft review, property verification, corporate advisory)..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-navy/15 rounded-sm px-4 py-3.5 text-ink bg-white focus:outline-none focus:border-brass transition-all resize-none placeholder:text-slate/40 focus:ring-1 focus:ring-brass/20 leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-navy hover:bg-navy-light text-white font-semibold px-7 py-4 rounded-sm transition-colors text-sm tracking-wide disabled:opacity-60 cursor-pointer shadow-sm"
                    >
                      {status === "sending" ? "Sending Enquiry..." : "Send Message"}
                    </button>
                    
                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-sm mt-3">
                        Something went wrong during submission. Please try again or reach out directly via Phone/WhatsApp.
                      </div>
                    )}
                  </form>
                )}
              </div>
            )}

            {/* METHOD: CALL DIRECTLY */}
            {activeMethod === "call" && (
              <div className="animate-fade-in bg-white border border-navy/10 p-8 rounded-sm shadow-sm text-center">
                <div className="w-14 h-14 bg-brass/10 text-brass rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-6 h-6 text-brass" />
                </div>
                <p className="eyebrow mb-2">Direct Line</p>
                <a
                  href="tel:+2348063553009"
                  className="font-display text-3xl md:text-4xl text-navy hover:text-brass transition-colors block mb-4 tracking-tight"
                >
                  +234 806 355 3009
                </a>
                <p className="text-slate text-sm leading-relaxed max-w-sm mx-auto">
                  Available for telephone consults during standard office hours, Monday to Friday, 8:30am to 5:30pm.
                </p>
              </div>
            )}

            {/* METHOD: WHATSAPP QUICK CHAT */}
            {activeMethod === "whatsapp" && (
              <div className="animate-fade-in bg-white border border-navy/10 p-8 rounded-sm shadow-sm text-center">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <p className="eyebrow mb-2">WhatsApp Consultation</p>
                <h3 className="font-display text-2xl text-navy mb-4">Chat with our Support Desk</h3>
                <p className="text-slate text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                  Ideal for brief enquiries, scheduling consultations, or forwarding document uploads for pre-screening.
                </p>
                <a
                  href="https://wa.me/2348063553009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brass hover:bg-brass-light text-navy font-semibold px-8 py-4 rounded-sm transition-colors text-sm tracking-wide cursor-pointer shadow-sm"
                >
                  Open WhatsApp Chat
                </a>
              </div>
            )}

            {/* METHOD: VISIT OFFICE MAP */}
            {activeMethod === "visit" && (
              <div className="animate-fade-in space-y-6">
                <div className="bg-white border border-navy/10 p-6 rounded-sm shadow-sm">
                  <p className="eyebrow mb-1 text-brass">Chamber Location</p>
                  <p className="text-navy font-display text-lg leading-relaxed">
                    1, Ondo Street, Garki, FCT, Abuja, Nigeria
                  </p>
                </div>
                <div className="aspect-video w-full border border-navy/10 overflow-hidden rounded-sm shadow-sm bg-navy-light/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.347569766859!2d7.466027975586797!3d9.032024091029442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b648dc317bf%3A0x4d0e9f502cce6e9f!2sOndo%20St%2C%20Garki%2C%20Abuja%20900103%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1786624132860!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Office location map"
                  />
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
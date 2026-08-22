"use client";

import { useState } from "react";

const steps = ["Practice Area", "Date", "Time", "Describe Issue", "Review"];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function BookingFlow({ practiceAreas }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({
    practiceArea: "",
    date: "",
    time: "",
    issue: "",
    name: "",
    email: "",
    phone: "",
  });

  function update(field, value) {
    setData({ ...data, [field]: value });
  }

  function canProceed() {
    if (step === 0) return !!data.practiceArea;
    if (step === 1) return !!data.date;
    if (step === 2) return !!data.time;
    if (step === 3) return data.issue.trim().length > 0;
    if (step === 4) return data.name && data.email && data.phone;
    return true;
  }

  async function handleSubmit() {
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xeajdldy", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-cream px-6 py-12">
        <div className="bg-white border border-navy/5 p-8 md:p-12 text-center max-w-xl shadow-md rounded-sm animate-fade-in">
          <div className="w-20 h-20 bg-brass/10 text-brass rounded-full flex items-center justify-center mx-auto mb-8 border border-brass/20 shadow-inner">
            <span className="text-brass text-4xl font-light select-none animate-pulse">&#10003;</span>
          </div>
          <h1 className="font-display text-3xl text-navy mb-4 tracking-tight">
            Consultation Requested
          </h1>
          <div className="text-slate/85 leading-relaxed mb-10 text-sm md:text-base space-y-4 max-w-md mx-auto">
            <p>
              Thank you, <span className="font-semibold text-navy">{data.name}</span>. Your request for a <span className="font-semibold text-navy">{data.practiceArea}</span> consultation has been logged.
            </p>
            <div className="bg-cream/50 border border-navy/5 p-4 rounded-sm text-sm inline-block w-full">
              <p className="text-navy/80 font-medium">Requested Schedule:</p>
              <p className="text-brass font-semibold mt-0.5">{data.date} at {data.time}</p>
            </div>
            <p className="text-xs text-slate/70">
              Our administrative team will review this slot and contact you within one business day via email or phone to confirm.
            </p>
          </div>
          <a
            href="/"
            className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-sm transition-colors text-sm tracking-wide shadow-sm"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-[80vh]">
      <div className="max-w-2xl mx-auto px-6 py-16 lg:py-20">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between text-xs font-semibold text-slate mb-3">
            <span>Step {step + 1} of {steps.length}</span>
            <span>{steps[step]}</span>
          </div>
          <div className="h-1 bg-navy/10 w-full">
            <div
              className="h-1 bg-brass transition-all duration-500"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white border border-navy/10 p-8 lg:p-10">
          {/* STEP 0: Practice Area */}
          {step === 0 && (
            <div>
              <h2 className="font-display text-2xl text-navy mb-2">
                Choose a Practice Area
              </h2>
              <p className="text-slate mb-8">
                Select the area most relevant to your matter.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                {practiceAreas.map((area, i) => (
                  <button
                    key={i}
                    onClick={() => update("practiceArea", area.title)}
                    className={`text-left px-4 py-3 border text-sm font-medium transition-colors ${
                      data.practiceArea === area.title
                        ? "bg-navy text-white border-navy"
                        : "border-navy/15 text-navy hover:border-brass"
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Date */}
          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl text-navy mb-2">
                Select a Date
              </h2>
              <p className="text-slate mb-8">
                Choose your preferred consultation date.
              </p>
              <input
                type="date"
                value={data.date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => update("date", e.target.value)}
                className="w-full border border-navy/15 px-4 py-3 text-ink focus:outline-none focus:border-brass transition-colors"
              />
            </div>
          )}

          {/* STEP 2: Time */}
          {step === 2 && (
            <div>
              <h2 className="font-display text-2xl text-navy mb-2">
                Select a Time
              </h2>
              <p className="text-slate mb-8">
                Available slots during office hours.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => update("time", slot)}
                    className={`px-3 py-3 border text-sm font-medium transition-colors ${
                      data.time === slot
                        ? "bg-navy text-white border-navy"
                        : "border-navy/15 text-navy hover:border-brass"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Describe Issue */}
          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl text-navy mb-2">
                Describe Your Issue
              </h2>
              <p className="text-slate mb-8">
                Briefly outline your legal matter so we can prepare.
              </p>
              <textarea
                rows={6}
                value={data.issue}
                onChange={(e) => update("issue", e.target.value)}
                placeholder="Tell us about your situation..."
                className="w-full border border-navy/15 px-4 py-3 text-ink focus:outline-none focus:border-brass transition-colors resize-none"
              />
            </div>
          )}

          {/* STEP 4: Review + contact details */}
          {step === 4 && (
            <div>
              <h2 className="font-display text-2xl text-navy mb-2">
                Your Contact Details
              </h2>
              <p className="text-slate mb-8">
                Almost done. Where should we reach you?
              </p>
              <div className="space-y-4 mb-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full border border-navy/15 px-4 py-3 text-ink focus:outline-none focus:border-brass transition-colors"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full border border-navy/15 px-4 py-3 text-ink focus:outline-none focus:border-brass transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={data.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full border border-navy/15 px-4 py-3 text-ink focus:outline-none focus:border-brass transition-colors"
                  />
                </div>
              </div>

              <div className="bg-cream border border-navy/10 p-5 text-sm space-y-1.5">
                <p><span className="text-slate">Practice Area:</span> <span className="text-navy font-medium">{data.practiceArea}</span></p>
                <p><span className="text-slate">Date:</span> <span className="text-navy font-medium">{data.date}</span></p>
                <p><span className="text-slate">Time:</span> <span className="text-navy font-medium">{data.time}</span></p>
              </div>

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 text-sm p-4 rounded-sm mt-5 shadow-sm">
                  <p className="font-semibold mb-0.5">Booking Interrupted</p>
                  <p className="text-red-700/90 leading-relaxed">
                    We could not establish a connection to process your booking. Please try again, or reach us directly at <a href="tel:+2348063553009" className="underline font-semibold hover:text-red-950">+234 806 355 3009</a>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10 pt-6 border-t border-navy/10">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="text-sm font-semibold text-navy disabled:opacity-30 hover:text-brass transition-colors"
            >
              &larr; Back
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="bg-navy text-white font-semibold px-7 py-3 text-sm hover:bg-navy-light transition-colors disabled:opacity-30"
              >
                Continue &rarr;
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || status === "sending"}
                className="bg-brass text-navy font-semibold px-7 py-3 text-sm hover:bg-brass-light transition-colors disabled:opacity-30"
              >
                {status === "sending" ? "Submitting..." : "Submit Request"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
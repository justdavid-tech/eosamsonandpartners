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
      const res = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      <div className="min-h-[70vh] flex items-center justify-center bg-cream px-6">
        <div className="text-center max-w-md">
          <p className="text-brass text-5xl mb-6">&#10003;</p>
          <h1 className="font-display text-3xl text-navy mb-4">
            Consultation Requested
          </h1>
          <p className="text-slate leading-relaxed mb-8">
            Thank you, {data.name}. We have received your request for{" "}
            {data.practiceArea} on {data.date} at {data.time}. Our team will
            contact you within one business day to confirm.
          </p>
          <a
            href="/"
            className="inline-block bg-navy text-white font-semibold px-7 py-3.5 hover:bg-navy-light transition-colors text-sm"
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
                <p className="text-red-600 text-sm mt-4">
                  Something went wrong sending your request. Please try again or contact us by phone.
                </p>
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
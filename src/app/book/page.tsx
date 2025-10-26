"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import {
  WrenchScrewdriverIcon,
  BoltIcon,
  KeyIcon,
  Squares2X2Icon,
  CameraIcon,
  MapPinIcon,
  ClockIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

type ServiceType = "Plumbing" | "Electrical" | "Locksmith" | "Glass Repair" | "Other";

export default function BookPage() {
  const [service, setService] = useState<ServiceType | "">("");
  const [image, setImage] = useState<string | null>(null);
  const [issue, setIssue] = useState("");
  const [postcode, setPostcode] = useState("");
  const [timePref, setTimePref] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Prefill issue field if user came from the home page search
const searchParams = useSearchParams();
const prefilledIssue = (searchParams.get("issue") ?? "").trim();

useEffect(() => {
  if (prefilledIssue && !issue) {
    setIssue(prefilledIssue);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [prefilledIssue]);


  const serviceCards: Array<{
    name: ServiceType;
    icon: JSX.Element;
  }> = [
    { name: "Plumbing", icon: <WrenchScrewdriverIcon className="h-6 w-6" /> },
    { name: "Electrical", icon: <BoltIcon className="h-6 w-6" /> },
    { name: "Locksmith", icon: <KeyIcon className="h-6 w-6" /> },
    { name: "Glass Repair", icon: <Squares2X2Icon className="h-6 w-6" /> },
    { name: "Other", icon: <SparklesIcon className="h-6 w-6" /> },
  ];

  const onSubmit = () => {
    // Simple validation for demo
    if (!service || !issue.trim() || !postcode.trim() || !timePref) {
      alert("Please fill in service, issue, postcode and preferred time.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>

      {/* Top Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-4">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
            <ClockIcon className="h-4 w-4" />
            Book instantly
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Book a MateFix job
          </h1>
          <p className="mt-3 text-slate-600">
            Fast, reliable emergency help — plumbers, electricians, locksmiths, and glass repair.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-16 md:grid-cols-3">
        {/* Left: Form */}
        <div className="md:col-span-2">
          {/* Steps */}
          <ol className="mb-6 grid grid-cols-3 gap-3 text-sm">
            {["Choose Service", "Describe Issue", "Confirm & Get ETA"].map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-600 text-white text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-slate-700">{s}</span>
              </li>
            ))}
          </ol>

          {/* Service cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {serviceCards.map((s) => {
              const active = service === s.name;
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setService(s.name)}
                  className={`group rounded-2xl border px-4 py-4 text-left transition shadow-sm hover:shadow 
                    ${active ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white"}`}
                >
                  <div className={`mb-2 inline-flex items-center justify-center rounded-lg p-2 
                    ${active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                    {s.icon}
                  </div>
                  <div className={`font-semibold ${active ? "text-blue-700" : "text-slate-800"}`}>
                    {s.name}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">Tap to select</div>
                </button>
              );
            })}
          </div>

          {/* Upload */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">Photo (optional)</label>
            <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="mx-auto h-40 w-auto rounded-lg object-contain shadow"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-slate-500">
                  <CameraIcon className="h-6 w-6" />
                  <div>Drag & drop or click to upload</div>
                  <div className="text-xs">Images only (PNG/JPG)</div>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="mt-4"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onloadend = () => setImage(reader.result as string);
                  reader.readAsDataURL(file);
                }}
              />
            </div>
          </div>

          {/* Issue + Location */}
          <div className="mt-6 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">What needs fixing?</label>
              <textarea
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                rows={4}
                placeholder="e.g., Kitchen tap leaking continuously under the sink..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Postcode</label>
                <div className="relative">
                  <MapPinIcon className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <input
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g., 3000"
                    className="w-full rounded-xl border border-slate-300 pl-10 pr-3 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred time</label>
                <select
                  value={timePref}
                  onChange={(e) => setTimePref(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select time</option>
                  <option>ASAP (within ~90 mins)</option>
                  <option>Today (2–4 hrs)</option>
                  <option>Tomorrow</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={onSubmit}
            className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Get ETA & Price Estimate
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <ShieldCheckIcon className="h-4 w-4 text-blue-600" /> Payment held securely until the job is completed
            </span>
          </p>
        </div>

        {/* Right: Info / Result */}
        <aside className="md:col-span-1">
          <div className="sticky top-6 space-y-4">
            {/* Benefits card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Why MateFix?</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" /> Licensed & verified tradies
                </li>
                <li className="flex items-center gap-2">
                  <BanknotesIcon className="h-5 w-5 text-blue-600" /> Escrow-style payments
                </li>
                <li className="flex items-center gap-2">
                  <StarIcon className="h-5 w-5 text-blue-600" /> Customer-rated service
                </li>
              </ul>
            </div>

            {/* Result panel (appears after submit) */}
            {submitted && (
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Estimate & ETA</h3>
                <div className="text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Service</span>
                    <span className="font-medium">{service}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span>Estimated arrival</span>
                    <span className="font-medium">60–90 mins</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span>Price estimate</span>
                    <span className="font-medium">$120–$220</span>
                  </div>
                </div>

                {/* Tradie card */}
                <div className="mt-4 rounded-xl border border-white/60 bg-white p-4 shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-900">Alex T. • Licensed {service || "Tradie"}</div>
                      <div className="text-xs text-slate-500">5km away • 4.9★ (128 jobs)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Live status</div>
                      <div className="text-xs font-semibold text-blue-700">Available now</div>
                    </div>
                  </div>
                  <button
                    className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
                    onClick={() => alert("Job confirmed! (Demo)")}
                  >
                    Confirm & Dispatch
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}

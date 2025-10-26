// app/tradie/page.tsx
"use client";

import { useState } from "react";

// Solid (feature cards)
import {
  ShieldCheckIcon,
  BellAlertIcon,
  BoltIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

// Outline (inside inputs)
import {
  MapPinIcon,
  PhoneIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

export default function TradiePage() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: connect to your API / Formspree / Firebase
    setTimeout(() => {
      setSubmitting(false);
      setOk(true);
    }, 900);
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
          Join the MateFix Network
        </span>
        <h1 className="mx-auto mt-3 max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Instant jobs. Instant payouts. No quoting treadmill.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-7 text-slate-600">
          Set your schedule and radius — we bring you verified nearby work.
          Commission on completed jobs only.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-3">
        {/* Left: Benefits */}
        <div className="space-y-4 md:col-span-1">
          <Benefit
            icon={<BellAlertIcon className="h-5 w-5 text-blue-600" />}
            title="Real jobs in real time"
            desc="No pay-per-lead. You only pay commission when the job’s done."
          />
          <Benefit
            icon={<BanknotesIcon className="h-5 w-5 text-blue-600" />}
            title="Payouts your way"
            desc="Weekly by default. Instant payouts available (+2% fee)."
          />
          <Benefit
            icon={<ShieldCheckIcon className="h-5 w-5 text-blue-600" />}
            title="Safety first"
            desc="License/insurance checks, arrival PIN, photo proof, SOS in-app."
          />
          <Benefit
            icon={<BoltIcon className="h-5 w-5 text-blue-600" />}
            title="Less admin"
            desc="Built-in receipts and materials approvals with photo uploads."
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Earnings example
            </h3>
            <p className="text-sm text-slate-700">
              Plumbing (45 min): Base $150 + 15 min $25 → $175
              <br />
              Commission 15% = $26.25 →{" "}
              <span className="font-semibold">Payout $148.75</span>
            </p>
          </div>
        </div>

        {/* Right: Application Form */}
        <div className="md:col-span-2">
          <form
            onSubmit={onSubmit}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {/* Name + Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full legal name" required>
                <input className="w-full" required placeholder="Alex Taylor" />
              </Field>
              <Field label="Email" required>
                <input
                  className="w-full"
                  required
                  type="email"
                  placeholder="alex@example.com"
                />
              </Field>
            </div>

            {/* Mobile + Category */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Mobile">
                <div className="relative">
                  <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input className="w-full pl-11" placeholder="0412 345 678" />
                </div>
              </Field>
              <Field label="Trade category" required>
                <select className="w-full" required defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Locksmith</option>
                  <option>Glass Repair</option>
                  <option>HVAC</option>
                  <option>Handyman</option>
                  <option>Cleaning</option>
                  <option>Other</option>
                </select>
              </Field>
            </div>

            {/* License + Expiry + Insurance */}
            <div className="grid gap-4 md:grid-cols-3">
              <Field label="License number" required>
                <div className="relative">
                  <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    className="w-full pl-11"
                    required
                    placeholder="e.g., 123456C"
                  />
                </div>
              </Field>
              <Field label="License expiry" required>
                {/* month picker keeps UI tidy; swap to type="date" if you prefer day-level */}
                <input className="w-full" required type="month" />
              </Field>
              <Field label="Insurance (public liability)" required>
                <input
                  className="w-full"
                  required
                  placeholder="Provider & coverage"
                />
              </Field>
            </div>

            {/* ABN + Suburbs */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="ABN / NZBN" required>
                <input
                  className="w-full"
                  required
                  placeholder="11 111 111 111"
                />
              </Field>
              <Field label="Primary suburbs / radius">
                <div className="relative">
                  <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    className="w-full pl-11"
                    placeholder="e.g., Parramatta, 15km"
                  />
                </div>
              </Field>
            </div>

            {/* Banking + Notes */}
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Bank BSB / Account (AU) or Bank & Account (NZ)">
                <input
                  className="w-full"
                  placeholder="e.g., 063-000 / 12345678"
                />
              </Field>
              <Field label="Notes (tools, vehicle, specialties)">
                <input
                  className="w-full"
                  placeholder="e.g., jetter, roof access, hot water systems"
                />
              </Field>
            </div>

            {/* Consent */}
            <label className="mt-2 flex items-center gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                required
                className="h-4 w-4 rounded border-slate-300"
              />
              I confirm the above is accurate and I agree to the{" "}
              <a href="/legal/terms" className="text-blue-600 hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="/legal/privacy" className="text-blue-600 hover:underline">
                Privacy
              </a>
              .
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Apply to Join"}
            </button>

            {/* Success */}
            {ok && (
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-slate-700">
                Thanks! We’ve received your details and will be in touch within
                1–2 business days.
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

/* ---------- helpers ---------- */

function Benefit({
  icon,
  title,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        {icon}
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="text-sm text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-600">*</span>}
      </div>
      {children}
    </label>
  );
}

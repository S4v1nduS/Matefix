// app/support/page.tsx
export const metadata = {
  title: "Support | MateFix",
  description: "Need help? We’re here 24/7 — live chat, email, or emergency line.",
};

const FAQ = [
  ["Do I pay before the job?", "We pre-authorise your card and hold funds in escrow; you pay on completion."],
  ["Will I see the total before I confirm?", "Yes — base fee, ETA and any surcharges are shown upfront."],
  ["What if extra time or parts are needed?", "You approve all extras in-app. No surprises."],
  ["Refunds & cancellations?", "Cancel for free before dispatch. After dispatch, a call-out may apply."],
  ["How do I get my receipt?", "A PDF receipt is emailed instantly and stored in your booking history."],
];

export default function SupportPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          We’re here 24/7
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-7 text-slate-600">
          Live chat (in-app), email support@matefix.com.au, or call our emergency line.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 grid gap-6 md:grid-cols-3">
        <Tile h="Change/cancel a booking" d="Update or cancel your appointment quickly." />
        <Tile h="Payments & receipts" d="Find invoices and see how escrow works." />
        <Tile h="Insurance & damages" d="How we assess and process claims." />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {FAQ.map(([q, a], i) => (
            <details key={i} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
                {q}
                <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <div className="mt-2 text-sm text-slate-600">{a}</div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          Prefer email?{" "}
          <a href="mailto:support@matefix.com.au" className="text-blue-600 hover:underline">
            support@matefix.com.au
          </a>
        </div>
      </section>
    </main>
  );
}

function Tile({ h, d }: { h: string; d: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-base font-semibold text-slate-900">{h}</div>
      <div className="mt-1 text-sm text-slate-600">{d}</div>
    </div>
  );
}

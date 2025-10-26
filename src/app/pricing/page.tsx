// app/pricing/page.tsx
export const metadata = {
  title: "Pricing | MateFix",
  description: "Fair, fast & fully transparent pricing for emergency and scheduled tradie work.",
};

const ROWS = [
  ["Plumbing", "$150", "$25"],
  ["Electrical", "$160", "$30"],
  ["Locksmith", "$130", "$20"],
  ["HVAC", "$160", "$30"],
  ["Roof Leak", "$180", "$30"],
  ["Auto Mechanic", "$120", "$20"],
  ["Cleaning", "$150", "$25"],
  ["Handyman", "$130", "$25"],
  ["Garden Care", "$120", "$20"],
  ["Renovation", "$150", "$30"],
  ["Smart Home", "$160", "$30"],
  ["Commercial", "$200", "$35"],
  ["Inspection", "$140", "$25"],
  ["Other", "$120", "$25"],
];

export default function PricingPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Fair, fast & fully transparent pricing
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-7 text-slate-600">
          Base call-out includes arrival + 30 minutes. Extensions only with your approval.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr className="text-slate-600">
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold text-right">Base (30 min)</th>
                <th className="px-4 py-3 font-semibold text-right">+15 min</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">{r[0]}</td>
                  <td className="px-4 py-3 text-right">{r[1]}</td>
                  <td className="px-4 py-3 text-right">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Info title="Materials & parts" desc="Charged at cost with photo receipts. You approve before purchase." />
          <Info title="Distance & after-hours" desc=">10 km: +$2/km. 9pm–6am: +15%. Surge +10–25% shown upfront." />
          <Info
            title="Membership"
            desc="MateFix Protect — $199/year. 10% off emergencies, priority dispatch, free re-visit within 7 days."
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Check your price →
          </a>
        </div>
      </section>
    </main>
  );
}

function Info({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-base font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

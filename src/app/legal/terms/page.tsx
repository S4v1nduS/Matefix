export const metadata = { title: "Terms of Service | MateFix" };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900">Terms of Service</h1>
      <p className="mt-3 text-slate-600">
        These Terms form a contract between MateFix (“we/us”) and the customer or tradie (“you”).
      </p>

      <ol className="mt-6 space-y-3">
        {ITEMS.map((t,i)=>(
          <li key={i} className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <span className="font-semibold text-slate-900">{t.h}</span>
            <div className="text-sm text-slate-700 mt-1">{t.d}</div>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-xs text-slate-500">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}

const ITEMS = [
  {h:"Platform role.", d:"We facilitate bookings between customers and licensed tradies."},
  {h:"Payments & escrow.", d:"We pre-authorise, hold, and release funds upon completion."},
  {h:"Cancellations.", d:"Cancel before dispatch free; after dispatch, a call-out fee may apply."},
  {h:"Damages & insurance.", d:"Claims must be reported within 48 hours; see Safety & Support."},
  {h:"Ratings & reviews.", d:"We may moderate and remove content breaching guidelines."},
  {h:"Account & conduct.", d:"We may suspend accounts for fraud, abuse, or policy breaches."},
  {h:"Liability.", d:"To the maximum extent permitted by law, our liability is limited."},
  {h:"Jurisdiction.", d:"Governed by applicable AU/NZ laws."},
];

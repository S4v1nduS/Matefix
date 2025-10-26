// app/safety/page.tsx
export const metadata = {
  title: "Safety & Trust | MateFix",
  description: "Verified people, secure payments, SOS on both sides.",
};

export default function SafetyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Safety is our core promise!
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-7 text-slate-600">
          Verified people, secure escrow payments, and an SOS button for both customers and tradies.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 grid gap-6 md:grid-cols-3">
        <Card t="Verification" d="License & insurance checks, background screening, ongoing rating threshold." />
        <Card t="On-site security" d="Arrival PIN, photo proof before & after, no-cash policy." />
        <Card t="Data & payments" d="PCI processors, extra fraud checks, funds held in escrow until completion." />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
        <a
          href="/support"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          Report a concern →
        </a>
      </section>
    </main>
  );
}

function Card({ t, d }: { t: string; d: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-base font-semibold text-slate-900">{t}</div>
      <div className="mt-1 text-sm text-slate-600">{d}</div>
    </div>
  );
}

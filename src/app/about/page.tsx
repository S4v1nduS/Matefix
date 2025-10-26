export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700 shadow-sm fade-up">
          About MateFix
        </span>
        <h1 className="fade-up fade-up-delay-1 mx-auto mt-3 max-w-4xl text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        Your Mate for Every Fix! <br/>
  <span className="text-[#FF7A00]">Fast, Safe and Transparent</span>
        </h1>
        <p className="fade-up fade-up-delay-2 mx-auto mt-4 max-w-3xl text-lg leading-7 text-slate-600">
          MateFix connects customers with <span className="font-semibold">licensed, insured</span> tradies for
          urgent plumbing, electrical, locksmith and glass repairs — target arrival in
          <span className="font-semibold"> under 90 minutes</span>.
        </p>
      </section>

      {/* Two-column story */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-10 md:grid-cols-2">
        <div className="fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Why we started</h2>
          <p className="mt-2 text-slate-600 leading-7">
            When something breaks, time and trust matter. We remove guesswork with instant booking,
            clear pricing, verified pros and live tracking — so help arrives when you need it most.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>✅ Licensed & verified tradies only</li>
            <li>✅ Escrow-style payments (pay when the job’s done)</li>
            <li>✅ Real-time status: on the way → on site → completed</li>
          </ul>
        </div>

        <div className="fade-up fade-up-delay-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">How it works</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-slate-700">
            <li>Tell us the issue (photo + description + postcode)</li>
            <li>Get an ETA and upfront price range instantly</li>
            <li>Track your tradie live and pay securely after completion</li>
          </ol>
          <p className="mt-3 text-sm text-slate-500">
            Launching metro AU/NZ first • Expanding service areas quarterly
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h3 className="fade-up text-xl font-bold text-slate-900">What we value</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Card title="Speed" desc="90-minute target arrival with instant booking & clear ETAs." />
          <Card title="Trust" desc="Licensed, insured pros with verified IDs and ratings." />
          <Card title="Clarity" desc="Upfront pricing, live status, secure escrow payments." />
        </div>
      </section>

      {/* Social proof / stats */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat n="90 min" label="Target arrival window" />
          <Stat n="100%" label="Licensed & verified pros" />
          <Stat n="4.8★" label="Customer-rated service" />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="fade-up rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
          <h4 className="text-lg font-semibold text-slate-900">Need a hand right now?</h4>
          <p className="mt-1 text-slate-600">Book in under 2 minutes — track your tradie live.</p>
          <a
            href="/book"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            Book a Job
          </a>
        </div>
      </section>
    </main>
  );
}

/* --- small presentational helpers --- */
function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-base font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-slate-600">{desc}</div>
    </div>
  );
}
function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="fade-up rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="text-3xl font-extrabold text-slate-900">{n}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

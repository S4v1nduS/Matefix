export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20" style={{ backgroundColor: "#FFF8F0" }}>

      <section className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-lg border border-slate-200">
        <h1 className="text-4xl font-extrabold text-center text-slate-900 mb-4">
          Contact MateFix
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed text-center">
  <span className="font-semibold text-[#FF7A00]">Need urgent help or want to partner with us?</span>  
  <br className="hidden md:block" />
  Reach out anytime. We’re Your Mate for Every Fix!
</p>


        <form className="grid gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us what you need help with..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-sm text-slate-500 mt-8">
          Or email us directly at{" "}
          <a
            href="mailto:support@matefix.com.au"
            className="text-blue-600 font-medium hover:underline"
          >
            support@matefix.com.au
          </a>
        </div>
      </section>
    </main>
  );
}

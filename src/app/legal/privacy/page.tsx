export const metadata = { title: "Privacy Policy | MateFix" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p className="mt-3 text-slate-600">
        We respect your privacy. This policy explains what we collect and why.
      </p>

      <div className="mt-8 space-y-5">
        <Block icon="📥" title="Data we collect">
          Profile info, contact details, photos you upload, dispatch location, and payment tokens.
        </Block>
        <Block icon="🔐" title="How we use it">
          Matching, safety verification, secure payments, receipts, and support.
        </Block>
        <Block icon="🗄️" title="Storage & retention">
          Data stored securely; retention based on legal and operational needs.
        </Block>
        <Block icon="🤝" title="Sharing">
          Payment processors, KYC/verification, and support tools — only as needed.
        </Block>
        <Block icon="🧾" title="Your rights">
          Access, correction, deletion — email <a className="text-blue-600 hover:underline" href="mailto:support@matefix.com.au">support@matefix.com.au</a>.
        </Block>
      </div>

      <p className="mt-8 text-xs text-slate-500">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}

function Block({ icon, title, children }:{ icon:string; title:string; children:React.ReactNode }){
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex items-start gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="text-sm text-slate-700 mt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

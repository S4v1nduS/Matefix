import Link from "next/link";

export default function MatefixFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        {/* Brand blurb */}
        <div>
          <div className="text-lg font-extrabold text-slate-900">MateFix</div>
          <p className="mt-2 text-sm text-slate-600">
            Your mate for every fix — fast, safe and transparent. Emergency tradies in under 90 minutes.
          </p>
          <div className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} MateFix • ABN 00 000 000 000
          </div>
        </div>

        {/* Product */}
        <div>
          <div className="text-sm font-semibold text-slate-900">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><FooterLink href="/book" label="Book a Job" /></li>
            <li><FooterLink href="/pricing" label="Pricing" /></li>
            <li><FooterLink href="/tradie" label="For Tradies" /></li>
            <li><FooterLink href="/safety" label="Safety & Trust" /></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><FooterLink href="/about" label="About" /></li>
            <li>
              <a
                className="text-slate-600 hover:text-blue-600 transition"
                href="mailto:careers@matefix.com.au"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="text-slate-600 hover:text-blue-600 transition"
                href="mailto:press@matefix.com.au"
              >
                Press
              </a>
            </li>
            <li><FooterLink href="/support" label="Support" /></li>
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <div className="text-sm font-semibold text-slate-900">Legal & Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><FooterLink href="/legal/privacy" label="Privacy Policy" /></li>
            <li><FooterLink href="/legal/terms" label="Terms of Service" /></li>
            <li>
              <a
                className="text-slate-600 hover:text-blue-600 transition"
                href="mailto:support@matefix.com.au"
              >
                support@matefix.com.au
              </a>
            </li>
            <li>
              <span className="text-slate-600">1300 MATEFIX</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-slate-500 md:flex-row">
          <div>Made for Australia & New Zealand</div>
          <div className="flex gap-4">
            <Social href="https://www.facebook.com/matefix" label="Facebook" />
            <Social href="https://www.instagram.com/matefix" label="Instagram" />
            <Social href="https://www.linkedin.com/company/matefix" label="LinkedIn" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-slate-600 hover:text-blue-600 transition">
      {label}
    </Link>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-600 transition"
    >
      {label}
    </a>
  );
}

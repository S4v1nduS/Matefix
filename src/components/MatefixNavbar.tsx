"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, BoltIcon } from "@heroicons/react/24/solid";
import BrandWordmark from "./BrandWordmark";
import { label } from "framer-motion/client";

const NAV = [
  { href: "/book", label: "Book a Job" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tradie", label: "For Tradies" },
  { href: "/about", label: "About" },
  { href: "/safety", label: "Safety" },
  { href: "/support", label: "Support" },
  { href: "/contact",label: "Contact"},
];

export default function MatefixNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition-shadow ${
        scrolled ? "shadow-[0_8px_20px_-12px_rgba(0,0,0,0.25)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-[84px] items-center justify-between">
          {/* Brand (like Alibaba: text mark, no raster) */}
          <Link href="/" className="flex items-center gap-3">
            <BrandWordmark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {NAV.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative rounded-lg px-4 py-2 text-[15px] font-medium outline-none transition-colors
                    ${active ? "text-slate-900" : "text-slate-700 hover:text-slate-900"}
                    focus-visible:ring-2 focus-visible:ring-blue-500/30`}
                >
                  {/* underline */}
                  <span
                    className={`pointer-events-none absolute left-4 right-4 -bottom-[3px] h-[2px] rounded-full bg-[var(--brand-amber)] transition-all duration-300
                      ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}`}
                  />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/book?urgent=1" className="btn-brand text-sm">
              <BoltIcon className="h-4 w-4 mr-1" />
              Emergency Fix
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"}`}>
        <div ref={panelRef} className="border-t border-slate-200/80 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-3">
            <nav className="flex flex-col">
              {NAV.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-xl px-3 py-3 text-[15px] font-medium transition
                      ${active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link href="/book?urgent=1" className="mt-2 btn-brand text-sm justify-center">
                <BoltIcon className="h-4 w-4 mr-1" />
                Emergency Fix
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

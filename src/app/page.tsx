"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  TruckIcon,
  PaintBrushIcon,
  SparklesIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function HomePage() {
  const [query, setQuery] = useState("");
const router = useRouter();
const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!query.trim()) return;
  router.push(`/book?issue=${encodeURIComponent(query.trim())}`);
};

  return (
    <main className="bg-[#FFF8F0] text-slate-900">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-tradie.jpg"
          alt="Construction background"
          fill
          priority
          className="object-cover object-center brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF7A00]/60" />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl mx-auto leading-tight drop-shadow"
          >
            Australia’s Most Trusted Tradie Platform
          </motion.h1>

          <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-lg md:text-xl text-gray-100 mt-4 mb-8 max-w-xl mx-auto"
>
  Verified tradies. Instant quotes. Sameday service across AU&nbsp;&amp;&nbsp;NZ
</motion.p>


{/* Search Bar (functional) */}
<motion.form
  onSubmit={onSubmit}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="mx-auto flex flex-col sm:flex-row items-center justify-center bg-white/95 shadow-lg rounded-2xl p-3 gap-3 max-w-2xl"
>
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="What do you need fixed?"
    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 focus:ring-2 focus:ring-orange-400 outline-none"
  />
  <button
    type="submit"
    className="bg-[#FF7A00] hover:bg-[#e66a00] text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition"
  >
    <BoltIcon className="h-5 w-5" />
    Find a Tradie
  </button>
</motion.form>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#1E1E1E] text-white py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm md:text-base">
          <Trust icon={<ShieldCheckIcon className="h-6 w-6 text-[#FF7A00]" />} text="Licensed & Insured" />
          <Trust icon={<ClockIcon className="h-6 w-6 text-[#FF7A00]" />} text="90-Minute ETA" />
          <Trust icon={<TruckIcon className="h-6 w-6 text-[#FF7A00]" />} text="Real-time Tracking" />
          <Trust icon={<SparklesIcon className="h-6 w-6 text-[#FF7A00]" />} text="5★ Rated Tradies" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Choose Your Fix
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <Category icon={<WrenchScrewdriverIcon className="h-8 w-8" />} title="Plumbing" />
          <Category icon={<BoltIcon className="h-8 w-8" />} title="Electrical" />
          <Category icon={<HomeModernIcon className="h-8 w-8" />} title="Carpentry" />
          <Category icon={<PaintBrushIcon className="h-8 w-8" />} title="Painting" />
          <Category icon={<TruckIcon className="h-8 w-8" />} title="Moving" />
          <Category icon={<ShieldCheckIcon className="h-8 w-8" />} title="Security" />
          <Category icon={<SparklesIcon className="h-8 w-8" />} title="Cleaning" />
          <Category icon={<ClockIcon className="h-8 w-8" />} title="Handyman" />
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#FFFAF4] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            How MateFix Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Step
              num="1"
              title="Post Your Job"
              desc="Tell us what you need fixed — plumbing, electrical, or any trade. It takes under a minute."
            />
            <Step
              num="2"
              title="Get Matched"
              desc="We instantly connect you with nearby verified tradies, ready to quote or start."
            />
            <Step
              num="3"
              title="Job Done Right"
              desc="Pay securely after completion. Get receipts, photos, and rate your tradie."
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Trusted by Thousands
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial
            name="Sarah M."
            text="Booked a plumber and he arrived within the hour. Super professional and friendly!"
          />
          <Testimonial
            name="Jake T."
            text="MateFix made it so easy to find a reliable sparky for my reno job. Highly recommend!"
          />
          <Testimonial
            name="Lisa K."
            text="The cleaner I booked through MateFix was fantastic — attention to detail and quick turnaround!"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#FF7A00] text-white py-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h2 className="text-4xl font-bold mb-4">Need a Fix Fast?</h2>
          <p className="text-lg mb-8">
            Join thousands of Aussies who trust MateFix for same-day service.
          </p>
          <Link
            href="/book"
            className="bg-white text-[#FF7A00] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
          >
            Book a Job Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function Trust({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Category({ icon, title }: { icon: JSX.Element; title: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center bg-white rounded-2xl shadow hover:shadow-md transition cursor-pointer py-6"
    >
      <div className="text-[#FF7A00] mb-2">{icon}</div>
      <div className="font-semibold">{title}</div>
    </motion.div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow p-6 border-t-4 border-[#FF7A00]"
    >
      <div className="text-4xl font-extrabold text-[#FF7A00] mb-2">{num}</div>
      <div className="text-xl font-semibold mb-2">{title}</div>
      <p className="text-slate-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-2xl shadow text-left"
    >
      <p className="italic text-slate-700 mb-4">“{text}”</p>
      <p className="font-semibold text-[#FF7A00]">— {name}</p>
    </motion.div>
  );
}

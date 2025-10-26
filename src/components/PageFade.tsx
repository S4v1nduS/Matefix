"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // Ensure first-load animation also runs on hard refresh / direct URL hit
  useEffect(() => setIsClient(true), []);

  // During SSR/hydration, render once hidden to avoid flash and allow first animation
  if (!isClient) return <div className="opacity-0">{children}</div>;

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={pathname}                      // re-animates on every route change
        initial={{ opacity: 0, y: 24 }}     // first-load + nav-in
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

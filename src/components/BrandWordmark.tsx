"use client";

import clsx from "clsx";

export default function BrandWordmark({ className }: { className?: string }) {
  return (
    <div className={clsx("select-none", className)} aria-label="MateFix">
      {/* Wordmark row */}
      <div className="group relative flex items-end leading-none">
        <span className="text-[22px] md:text-2xl font-extrabold tracking-tight text-[#00A8FF]">
          Mate
        </span>

        <span className="ml-1 text-[22px] md:text-2xl font-extrabold tracking-tight text-[#FF7A00]">
          F
        </span>

        {/* screwdriver (raised, animated shine) */}
        <div className="relative mx-[3px] -translate-y-[2px]">
          <ScrewdriverSVG className="h-[1.45em] w-auto text-[#FF7A00] transition-transform duration-200 group-hover:rotate-[6deg]" />

          {/* shiny sweep effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent translate-x-[-100%] group-hover:animate-shine" />
          </div>
        </div>

        <span className="text-[22px] md:text-2xl font-extrabold tracking-tight text-[#FF7A00]">
          x
        </span>
      </div>

      {/* Slogan */}
      <div className="mt-0.5 text-[11px] md:text-xs font-medium text-slate-600">
        Your Mate for Every Fix.
      </div>
    </div>
  );
}

function ScrewdriverSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 72"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 0h4l2 12-2 8v28h6v8c0 6-5 10-10 10S2 62 2 56v-8h6V20l-2-8L8 0h4z"
      />
      <rect x="7.5" y="54" width="3" height="10" rx="1.5" fill="white" fillOpacity="0.85" />
      <rect x="12.5" y="54" width="3" height="10" rx="1.5" fill="white" fillOpacity="0.85" />
      <rect x="17.5" y="54" width="3" height="10" rx="1.5" fill="white" fillOpacity="0.85" />
    </svg>
  );
}

/* --- extra animation --- */
const style = document.createElement("style");
style.innerHTML = `
@keyframes shineMove {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}
.group:hover .shine {
  animation: shineMove 1.2s ease-in-out;
}
`;
document.head.appendChild(style);

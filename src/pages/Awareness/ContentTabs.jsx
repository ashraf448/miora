import { motion } from "framer-motion";

export default function ContentTabs({ tabs, value, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="نوع المحتوى"
      className="mx-auto grid max-w-4xl grid-cols-3 gap-1 rounded-full border border-(--color-border) bg-(--color-surface) p-1.5 shadow-(--shadow-card)"
    >
      {tabs.map((tab) => {
        const isActive = value === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className="relative min-w-0 rounded-full px-2 py-3 text-sm font-bold leading-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary) sm:px-3 sm:text-base md:py-3.5 md:text-lg"
          >
            {isActive && (
              <motion.span
                layoutId="content-type-pill"
                className="absolute inset-0 rounded-full bg-(--color-primary)"
                transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
              />
            )}
            <span className={`relative z-10 transition-colors ${isActive ? "text-white" : "text-(--color-ink) hover:text-(--color-primary)"}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

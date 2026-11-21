import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { faq, hotlines } from "../../data/faq";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Reveal, Stagger, StaggerItem } from "../../common/Motion/Reveal";

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface)">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-lg font-bold transition hover:text-(--color-primary)"
        >
          {q}
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-xl text-(--color-primary)">
            <FiChevronDown />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <p className="px-5 pb-5 leading-8 text-(--color-muted)">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Help() {
  useDocumentTitle("المساعدة والأسئلة");
  return (
    <main className="mx-auto w-full container px-6 pb-24 pt-16">
      <header className="text-center">
        <p className="animate-fade-up text-lg font-bold text-(--color-primary)">المساعدة</p>
        <h1 className="animate-fade-up mt-4 text-4xl font-bold md:text-5xl" style={{ "--delay": "70ms" }}>
          إحنا هنا عشان نساعدك
        </h1>
      </header>

      <section className="mt-12" aria-labelledby="hotlines">
        <h2 id="hotlines" className="text-2xl font-bold">أرقام الدعم في مصر</h2>
        <Stagger className="mt-5 grid gap-4 md:grid-cols-3">
          {hotlines.map((h) => (
            <StaggerItem key={h.number} className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
              <a href={`tel:${h.number}`} className="inline-flex items-center gap-2 text-3xl font-extrabold text-(--color-primary)">
                <FaPhone className="text-lg" aria-hidden="true" />
                <span dir="ltr">{h.number}</span>
              </a>
              <p className="mt-3 font-bold leading-7">{h.name}</p>
              <p className="mt-1 text-sm text-(--color-muted)">{h.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mt-14" aria-labelledby="faq">
        <h2 id="faq" className="text-2xl font-bold">أسئلة شائعة</h2>
        <div className="mt-5 space-y-3">
          {faq.map((item) => (
            <Reveal key={item.q} y={12}>
              <Item {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" id="contact" className="mt-14 scroll-mt-28 rounded-3xl bg-(--color-primary-soft) p-8">
        <h2 className="text-2xl font-bold">تواصل معنا</h2>
        <p className="mt-3 leading-8 text-(--color-muted)">
          ميورا حاليًا نموذج أولي ولا يوفّر قناة تواصل مباشرة. في حالات الدعم النفسي أو الإدمان استخدم الأرقام أعلاه، فهي
          الأسرع والأكثر أمانًا.
        </p>
      </Reveal>
    </main>
  );
}

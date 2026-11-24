import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlay, FaPause, FaRotateLeft, FaCheck } from "react-icons/fa6";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Reveal } from "../../common/Motion/Reveal";

const techniques = [
  {
    id: "calm",
    name: "التنفس الهادئ",
    desc: "شهيق أقصر من الزفير — مناسب للتوتر والقلق.",
    phases: [
      { key: "in", label: "شهيق", seconds: 4 },
      { key: "out", label: "زفير", seconds: 6 },
    ],
  },
  {
    id: "box",
    name: "التنفس المربّع",
    desc: "4 ثواني لكل مرحلة — بيساعد على التركيز والثبات.",
    phases: [
      { key: "in", label: "شهيق", seconds: 4 },
      { key: "hold", label: "احبس", seconds: 4 },
      { key: "out", label: "زفير", seconds: 4 },
      { key: "hold2", label: "ثبّت", seconds: 4 },
    ],
  },
  {
    id: "478",
    name: "تنفس 4-7-8",
    desc: "زفير طويل يهدّي الجسم — مناسب قبل النوم.",
    phases: [
      { key: "in", label: "شهيق", seconds: 4 },
      { key: "hold", label: "احبس", seconds: 7 },
      { key: "out", label: "زفير", seconds: 8 },
    ],
  },
];

const scaleFor = (key) => (key === "in" || key === "hold" ? 1.5 : 1);

function Breathing() {
  const [techId, setTechId] = useState("calm");
  const [running, setRunning] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [remaining, setRemaining] = useState(techniques[0].phases[0].seconds);
  const [cycles, setCycles] = useState(0);

  const tech = techniques.find((t) => t.id === techId);
  const phase = tech.phases[phaseIndex];

  const reset = (id = techId) => {
    const t = techniques.find((x) => x.id === id);
    setRunning(false);
    setPhaseIndex(0);
    setRemaining(t.phases[0].seconds);
    setCycles(0);
  };

  // مؤقّت: كل ثانية ننقص العدّاد وننتقل للمرحلة التالية عند الصفر
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r > 1) return r - 1;
        setPhaseIndex((i) => {
          const next = (i + 1) % tech.phases.length;
          if (next === 0) setCycles((c) => c + 1);
          setRemaining(tech.phases[next].seconds);
          return next;
        });
        return 0;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, tech]);

  const idle = !running && cycles === 0 && phaseIndex === 0 && remaining === tech.phases[0].seconds;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <h2 className="text-2xl font-bold">اختار طريقة التنفس</h2>
        <div className="mt-5 space-y-3" role="radiogroup" aria-label="طريقة التنفس">
          {techniques.map((t) => {
            const active = t.id === techId;
            return (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => {
                  setTechId(t.id);
                  reset(t.id);
                }}
                className={`w-full rounded-2xl border p-4 text-start transition ${
                  active
                    ? "border-(--color-primary) bg-(--color-primary-soft)"
                    : "border-(--color-border) bg-(--color-surface) hover:border-(--color-primary)"
                }`}
              >
                <span className={`block text-lg font-bold ${active ? "text-(--color-primary)" : ""}`}>{t.name}</span>
                <span className="mt-1 block text-[15px] leading-7 text-(--color-muted)">{t.desc}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-5 text-sm leading-7 text-(--color-muted)">
          لو حسّيت بدوخة، ارجع لتنفسك الطبيعي. التمرين ده مش بديل عن العلاج الطبي.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative grid h-80 w-80 max-w-full place-items-center">
          <motion.div
            aria-hidden="true"
            className="absolute h-44 w-44 rounded-full bg-(--color-primary-soft)"
            animate={{ scale: running ? scaleFor(phase.key) * 1.25 : 1.1, opacity: running ? 0.7 : 0.5 }}
            transition={{ duration: running ? phase.seconds : 0.6, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute h-44 w-44 rounded-full bg-(--color-primary)"
            animate={{ scale: running ? scaleFor(phase.key) : 1 }}
            transition={{ duration: running ? phase.seconds : 0.6, ease: "easeInOut" }}
          />
          <div className="relative text-center text-white" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={idle ? "idle" : phase.key + phaseIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-bold"
              >
                {idle ? "جاهز؟" : phase.label}
              </motion.p>
            </AnimatePresence>
            {!idle && <p className="mt-1 text-4xl font-extrabold tabular-nums">{remaining}</p>}
          </div>
        </div>

        <p className="mt-2 text-(--color-muted)">
          الدورات المكتملة: <b className="text-(--color-ink)">{cycles}</b>
        </p>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-7 py-3 text-lg font-bold text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
          >
            {running ? <FaPause /> : <FaPlay />}
            {running ? "إيقاف مؤقت" : cycles || !idle ? "كمّل" : "ابدأ"}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            aria-label="إعادة"
            className="grid h-13 w-13 place-items-center rounded-xl border border-(--color-border) bg-(--color-surface) transition hover:border-(--color-primary) hover:text-(--color-primary)"
          >
            <FaRotateLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

const groundingSteps = [
  { n: 5, text: "اذكر 5 حاجات بتشوفها حواليك" },
  { n: 4, text: "المس 4 حاجات وحس بملمسها" },
  { n: 3, text: "اسمع 3 أصوات مختلفة" },
  { n: 2, text: "اشمّ حاجتين" },
  { n: 1, text: "تذوّق حاجة واحدة أو خد رشفة مياه ببطء" },
];

function Grounding() {
  const [done, setDone] = useState([]);
  const toggle = (n) => setDone((d) => (d.includes(n) ? d.filter((x) => x !== n) : [...d, n]));
  const finished = done.length === groundingSteps.length;

  return (
    <div className="mx-auto container">
      <h2 className="text-2xl font-bold">تمرين التأريض 5-4-3-2-1</h2>
      <p className="mt-3 leading-8 text-(--color-muted)">
        بيرجّعك للحظة الحالية لما الأفكار تسرح أو القلق يزيد. خد وقتك في كل خطوة وعلّم عليها.
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-(--color-primary-soft)" role="progressbar" aria-valuenow={done.length} aria-valuemin={0} aria-valuemax={5}>
        <motion.div className="h-full bg-(--color-primary)" animate={{ width: `${(done.length / 5) * 100}%` }} />
      </div>

      <ul className="mt-6 space-y-3">
        {groundingSteps.map((s) => {
          const checked = done.includes(s.n);
          return (
            <li key={s.n}>
              <button
                type="button"
                aria-pressed={checked}
                onClick={() => toggle(s.n)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-start transition ${
                  checked ? "border-(--color-primary) bg-(--color-primary-soft)" : "border-(--color-border) bg-(--color-surface) hover:border-(--color-primary)"
                }`}
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg font-bold ${checked ? "bg-(--color-primary) text-white" : "bg-(--color-background) text-(--color-primary)"}`}>
                  {checked ? <FaCheck /> : s.n}
                </span>
                <span className={`text-lg ${checked ? "text-(--color-primary)" : ""}`}>{s.text}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {finished && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 rounded-2xl bg-(--color-accent-green) p-5 text-center"
          >
            <p className="text-lg font-bold">أحسنت 🌿</p>
            <p className="mt-1 text-(--color-muted)">خد نفس عميق وكمّل يومك بهدوء. ممكن تعيد التمرين وقت ما تحتاج.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button type="button" onClick={() => setDone([])} className="mt-5 text-sm font-medium text-(--color-primary) hover:underline">
        إعادة التمرين
      </button>
    </div>
  );
}

export default function Relax() {
  useDocumentTitle("تمارين الاسترخاء");
  const [tab, setTab] = useState("breathing");
  const tabs = [
    { id: "breathing", label: "تمرين التنفس" },
    { id: "grounding", label: "تمرين التأريض" },
  ];

  return (
    <main>
      <section className="px-6 pb-10 pt-16 text-center">
        <p className="animate-fade-up text-xl font-bold text-(--color-primary)">تمارين الاسترخاء</p>
        <h1 className="animate-fade-up mt-4 text-4xl font-bold leading-tight md:text-6xl" style={{ "--delay": "70ms" }}>
          دقيقتين تهدّي فيهم نفسك
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--color-muted) md:text-xl" style={{ "--delay": "140ms" }}>
          تمارين قصيرة تقدر تعملها في أي مكان، من غير أي أدوات.
        </p>
      </section>

      <section className="mx-auto w-full container px-6 pb-24">
        <div className="mx-auto mb-10 flex w-fit gap-2 rounded-full border border-(--color-border) bg-(--color-surface) p-1.5 shadow-(--shadow-card)" role="tablist">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className="relative rounded-full px-6 py-2.5 font-medium"
              >
                {active && (
                  <motion.span layoutId="relax-pill" className="absolute inset-0 rounded-full bg-(--color-primary)" transition={{ type: "spring", bounce: 0.2, duration: 0.45 }} />
                )}
                <span className={`relative z-10 ${active ? "font-bold text-white" : "text-(--color-muted)"}`}>{t.label}</span>
              </button>
            );
          })}
        </div>

        <Reveal>
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              {tab === "breathing" ? <Breathing /> : <Grounding />}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </section>
    </main>
  );
}

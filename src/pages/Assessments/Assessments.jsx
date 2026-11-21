import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRightLong, FaArrowLeftLong, FaPhone } from "react-icons/fa6";
import { assessments, evaluate, getAssessment, scale } from "../../data/assessments";
import useLocalStorage from "../../hooks/useLocalStorage";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Reveal, Stagger, StaggerItem } from "../../common/Motion/Reveal";

// كلاسات كاملة (Tailwind لازم يشوفها حرفيًا)
const accentBg = {
  "accent-blue": "bg-(--color-accent-blue)",
  "accent-green": "bg-(--color-accent-green)",
  "accent-purple": "bg-(--color-accent-purple)",
  "accent-orange": "bg-(--color-accent-orange)",
};

const levelStyle = {
  هادئ: "bg-(--color-accent-green) text-emerald-700",
  متوسط: "bg-(--color-accent-orange) text-orange-600",
  مرتفع: "bg-red-50 text-red-600",
};

const nextAction = {
  journal: { to: "/journal", label: "اكتب في مذكراتك" },
  relax: { to: "/relax", label: "جرّب تمرين استرخاء" },
  addiction: { to: "/addiction", label: "اقرأ عن الإدمان بأنواعه" },
  support: { to: "/help", label: "أرقام الدعم والمساعدة" },
};

const fmt = (iso) => new Date(iso).toLocaleDateString("ar-EG", { day: "numeric", month: "long" });

function Runner({ assessment, onExit, onFinish }) {
  const [answers, setAnswers] = useState(() => Array(assessment.questions.length).fill(null));
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  const total = assessment.questions.length;
  const current = answers[step];

  const choose = (value) => {
    setAnswers((a) => a.map((v, i) => (i === step ? value : v)));
  };

  const next = () => {
    if (step < total - 1) return setStep(step + 1);
    const r = evaluate(assessment, answers);
    setResult(r);
    onFinish(assessment.id, r);
  };

  if (result) {
    const { result: res, percent } = result;
    const action = nextAction[res.next];
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto container">
        <div className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-8 shadow-(--shadow-card)">
          <span className={`inline-block rounded-full px-4 py-1.5 text-sm font-bold ${levelStyle[res.level]}`}>
            المستوى: {res.level}
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">{res.title}</h2>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-(--color-primary-soft)">
            <motion.div initial={{ width: 0 }} animate={{ width: `${percent}%` }} transition={{ duration: 0.9, ease: "easeOut" }} className="h-full bg-(--color-primary)" />
          </div>

          <p className="mt-5 text-lg leading-8 text-(--color-muted)">{res.message}</p>

          <h3 className="mt-6 font-bold">خطوات مقترحة</h3>
          <ul className="mt-3 space-y-2 leading-7 text-(--color-muted)">
            {res.tips.map((t) => (
              <li key={t} className="flex gap-2">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to={action.to} className="rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:bg-(--color-primary-dark)">
              {action.label}
            </Link>
            {res.level === "مرتفع" && (
              <a href="tel:16023" className="inline-flex items-center gap-2 rounded-xl border border-(--color-primary) px-6 py-3 font-bold text-(--color-primary) transition hover:bg-(--color-primary-soft)">
                <FaPhone className="text-sm" /> 16023
              </a>
            )}
            <button type="button" onClick={onExit} className="rounded-xl border border-(--color-border) px-6 py-3 font-bold transition hover:border-(--color-primary)">
              تقييم آخر
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-xs leading-6 text-(--color-muted)">
          هذا التقييم أداة تأملية وليس تشخيصًا طبيًا، ولا يغني عن استشارة مختص.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto container">
      <button type="button" onClick={onExit} className="inline-flex items-center gap-2 font-bold text-(--color-primary)">
        <FaArrowRightLong aria-hidden="true" /> كل التقييمات
      </button>

      <div className="mt-5 flex items-center justify-between text-sm text-(--color-muted)">
        <span>{assessment.title}</span>
        <span>سؤال {step + 1} من {total}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-(--color-primary-soft)" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={total}>
        <motion.div className="h-full bg-(--color-primary)" animate={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>

      {step === 0 && <p className="mt-5 leading-7 text-(--color-muted)">{assessment.intro}</p>}

      <AnimatePresence mode="wait">
        <motion.fieldset
          key={step}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.25 }}
          className="mt-6"
        >
          <legend className="text-xl font-bold leading-9 md:text-2xl">خلال الفترة الماضية: {assessment.questions[step]}</legend>
          <div className="mt-6 grid gap-3">
            {scale.map((o) => {
              const active = current === o.value;
              return (
                <label
                  key={o.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-lg transition has-focus-visible:outline-3 has-focus-visible:outline-(--color-primary) ${
                    active ? "border-(--color-primary) bg-(--color-primary-soft) font-bold text-(--color-primary)" : "border-(--color-border) bg-(--color-surface) hover:border-(--color-primary)"
                  }`}
                >
                  <input type="radio" name={`q-${step}`} checked={active} onChange={() => choose(o.value)} className="sr-only" />
                  <span className={`grid h-5 w-5 place-items-center rounded-full border-2 ${active ? "border-(--color-primary)" : "border-(--color-border)"}`}>
                    {active && <span className="h-2.5 w-2.5 rounded-full bg-(--color-primary)" />}
                  </span>
                  {o.label}
                </label>
              );
            })}
          </div>
        </motion.fieldset>
      </AnimatePresence>

      <div className="mt-8 flex justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-xl border border-(--color-border) px-5 py-3 font-bold transition hover:border-(--color-primary) disabled:pointer-events-none disabled:opacity-40"
        >
          <FaArrowRightLong aria-hidden="true" /> السابق
        </button>
        <button
          type="button"
          onClick={next}
          disabled={current === null}
          className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark) disabled:pointer-events-none disabled:opacity-40"
        >
          {step === total - 1 ? "عرض النتيجة" : "التالي"}
          <FaArrowLeftLong aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function Assessments() {
  const [params, setParams] = useSearchParams();
  const [history, setHistory] = useLocalStorage("miora-assessments", {});
  const active = getAssessment(params.get("tool"));

  useDocumentTitle(active ? active.title : "التقييمات الذاتية");

  const onFinish = (id, r) =>
    setHistory((h) => ({ ...h, [id]: { percent: r.percent, level: r.result.level, at: new Date().toISOString() } }));

  return (
    <main className="mx-auto w-full container px-6 pb-24 pt-14">
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Runner key={active.id} assessment={active} onExit={() => setParams({})} onFinish={onFinish} />
          </motion.div>
        ) : (
          <motion.div key="hub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="text-center">
              <p className="animate-fade-up text-lg font-bold text-(--color-primary)">التقييمات الذاتية</p>
              <h1 className="animate-fade-up mt-4 text-4xl font-bold leading-tight md:text-6xl" style={{ "--delay": "70ms" }}>
                اكتشف نفسك بشكل أفضل
              </h1>
              <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--color-muted)" style={{ "--delay": "140ms" }}>
                أسئلة قصيرة تساعدك تلاحظ مشاعرك وعاداتك. مفيش إجابة صح أو غلط، ونتيجتك بتتحفظ في متصفحك بس.
              </p>
            </div>

            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
              {assessments.map((a) => {
                const last = history[a.id];
                return (
                  <StaggerItem key={a.id}>
                    <button
                      type="button"
                      onClick={() => setParams({ tool: a.id })}
                      className="hover-lift flex h-full w-full flex-col rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 text-start shadow-(--shadow-card)"
                    >
                      <span className={`grid h-12 w-12 place-items-center rounded-xl text-2xl ${accentBg[a.accent]}`}>{a.emoji}</span>
                      <p className="mt-4 text-sm text-(--color-muted)">
                        أداة تأملية • {a.minutes} دقائق • {a.questions.length} أسئلة
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">{a.title}</h2>
                      {last ? (
                        <p className="mt-3 text-sm text-(--color-muted)">
                          آخر نتيجة: <b className="text-(--color-ink)">{last.level}</b> · {fmt(last.at)}
                        </p>
                      ) : (
                        <p className="mt-3 text-sm text-(--color-muted)">لم تبدأ هذا التقييم بعد</p>
                      )}
                      <span className="mt-5 font-bold text-(--color-primary)">{last ? "أعد التقييم" : "ابدأ التقييم"} ←</span>
                    </button>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal className="mx-auto mt-10 max-w-2xl rounded-2xl bg-(--color-primary-soft) p-5 text-center text-sm leading-7 text-(--color-muted)">
              هذه التقييمات للتأمل الذاتي فقط وليست تشخيصًا طبيًا. لو حاسس بخطر على نفسك اتصل بالإسعاف 123، وللدعم:
              16023 أو 16328.
            </Reveal>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaRotateLeft } from "react-icons/fa6";
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

const thoughtExamples = ["أنا فاشل", "أنا ضعيف قدام الرغبة", "مش هعرف أتغيّر", "محدش فاهمني"];

const challengeSteps = [
  {
    key: "thought",
    type: "text",
    title: "إيه الفكرة اللي مضايقاك؟",
    hint: "اكتبها زي ما جاتلك، أو اختار من الأمثلة تحت.",
    placeholder: "اكتب الفكرة هنا...",
  },
  {
    key: "evidence",
    type: "choice",
    title: "فيه دليل إن الفكرة دي صح؟",
    hint: "فكّر في الوقائع الفعلية، مش في الإحساس.",
    options: [
      "أيوه، فيه وقائع واضحة بتثبتها",
      "فيه شوية، بس مش كل الصورة",
      "لا، هي إحساس أكتر منها حقيقة",
      "مش متأكد",
    ],
  },
  {
    key: "friend",
    type: "choice",
    title: "لو صاحبك مكانك، كنت هتقوله إيه؟",
    hint: "غالبًا بنكون أرحم مع اللي بنحبهم من نفسنا.",
    options: [
      "إنه بيحاول، وده كفاية دلوقتي",
      "إن غلطة واحدة ما بتحددش قيمته",
      "إنه يستاهل يكون لطيف مع نفسه",
      "إن اللي بيحصله بيحصل مع ناس كتير",
    ],
  },
  {
    key: "alternative",
    type: "choice",
    title: "فيه تفسير تاني ممكن؟",
    hint: "اختار الأقرب لموقفك.",
    options: [
      "الظروف كانت صعبة، مش أنا المشكلة",
      "كنت تعبان أو مضغوط وقتها",
      "لسه بتعلّم، وده طبيعي",
      "الموضوع أصغر مما شايفه دلوقتي",
    ],
  },
  {
    key: "reframe",
    type: "choice",
    title: "اختار جملة أهدى بدل الفكرة",
    hint: "اختار اللي تقدر تصدّقها، أو اكتب جملتك بنفسك.",
    options: [
      "أنا بتعلّم، والتعثّر جزء من الطريق",
      "اللي حصل موقف، مش حكم عليّا",
      "أقدر أتعامل مع ده خطوة خطوة",
      "أنا أستاهل نفس اللطف اللي بديه للناس",
    ],
    placeholder: "أو اكتب جملتك هنا...",
  },
];

const emptyAnswers = Object.fromEntries(challengeSteps.map((s) => [s.key, ""]));
const recapSteps = challengeSteps.filter((s) => s.key === "evidence" || s.key === "friend" || s.key === "alternative");

function ThoughtChallenge() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState(emptyAnswers);

  const finished = index === challengeSteps.length;
  const step = challengeSteps[index];
  const value = step ? answers[step.key] : "";
  const isLast = index === challengeSteps.length - 1;
  const setAnswer = (key, text) => setAnswers((a) => ({ ...a, [key]: text }));

  const restart = () => {
    setAnswers(emptyAnswers);
    setIndex(0);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold">تحدّي الفكرة</h2>
      <p className="mt-3 leading-8 text-(--color-muted)">
        تمرين من العلاج المعرفي السلوكي: بتفحص الفكرة المضايقاك بدل ما تصدّقها على طول، وتوصل لجملة أهدى. اللي بتختاره وبتكتبه بيفضل في الصفحة دي بس ومش بيتحفظ.
      </p>

      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-(--color-primary-soft)"
        role="progressbar"
        aria-valuenow={index}
        aria-valuemin={0}
        aria-valuemax={challengeSteps.length}
      >
        <motion.div className="h-full bg-(--color-primary)" animate={{ width: `${(index / challengeSteps.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        {finished ? (
          <motion.div
            key="result"
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 space-y-4"
          >
            <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5">
              <p className="text-sm font-bold text-(--color-muted)">الفكرة اللي كانت مضايقاك</p>
              <p className="mt-2 text-lg leading-8">{answers.thought}</p>
              <ul className="mt-4 space-y-3 border-t border-(--color-border) pt-4">
                {recapSteps.map((s) => (
                  <li key={s.key}>
                    <p className="text-sm text-(--color-muted)">{s.title}</p>
                    <p className="mt-1 leading-7">{answers[s.key]}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-(--color-accent-green) p-5">
              <p className="text-sm font-bold text-(--color-muted)">الجملة الأهدى</p>
              <p className="mt-2 text-xl font-bold leading-8">{answers.reframe}</p>
            </div>
            <p className="text-center text-(--color-muted)">أحسنت 🌿 ارجع للجملة دي كل ما الفكرة القديمة تيجي تاني.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/journal" className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:bg-(--color-primary-dark)">
                اكتبها في مذكراتك
              </Link>
              <button type="button" onClick={restart} className="text-sm font-medium text-(--color-primary) hover:underline">
                ابدأ فكرة جديدة
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={step.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
          >
            <p className="text-sm text-(--color-muted)">
              {index + 1} من {challengeSteps.length}
            </p>
            <h3 id="challenge-title" className="mt-2 text-xl font-bold leading-8">
              {step.title}
            </h3>
            <p className="mt-2 leading-7 text-(--color-muted)">{step.hint}</p>

            {index > 0 && !isLast && (
              <p className="mt-4 rounded-xl bg-(--color-primary-soft) px-4 py-3 text-(--color-primary-dark)">
                الفكرة: «{answers.thought}»
              </p>
            )}

            {step.type === "choice" && (
              <div className="mt-4 space-y-3" role="radiogroup" aria-labelledby="challenge-title">
                {step.options.map((option) => {
                  const selected = value === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setAnswer(step.key, option)}
                      className={`w-full rounded-2xl border p-4 text-start text-lg transition ${
                        selected
                          ? "border-(--color-primary) bg-(--color-primary-soft) font-bold text-(--color-primary)"
                          : "border-(--color-border) bg-(--color-surface) hover:border-(--color-primary)"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}

            {(step.type === "text" || step.placeholder) && (
              <>
                {step.key === "thought" && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {thoughtExamples.map((example) => (
                      <button
                        key={example}
                        type="button"
                        onClick={() => setAnswer("thought", example)}
                        className="rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-1.5 text-sm transition hover:border-(--color-primary) hover:text-(--color-primary)"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                )}
                <textarea
                  aria-label={step.title}
                  value={step.type === "text" || !step.options.includes(value) ? value : ""}
                  onChange={(e) => setAnswer(step.key, e.target.value)}
                  placeholder={step.placeholder}
                  rows={step.type === "text" ? 3 : 2}
                  maxLength={300}
                  className="mt-4 w-full resize-y rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 text-lg leading-8 outline-none transition focus:border-(--color-primary)"
                />
              </>
            )}

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIndex((i) => i - 1)}
                disabled={index === 0}
                className="text-sm font-medium text-(--color-primary) hover:underline disabled:invisible"
              >
                السابق
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => i + 1)}
                disabled={value.trim().length === 0}
                className="rounded-full bg-(--color-primary) px-7 py-3 font-bold text-white transition hover:bg-(--color-primary-dark) disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLast ? "تم" : "التالي"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Relax() {
  useDocumentTitle("تمارين الاسترخاء");
  const [tab, setTab] = useState("breathing");
  const tabs = [
    { id: "breathing", label: "تمرين التنفس" },
    { id: "challenge", label: "تحدّي الفكرة" },
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
              {tab === "breathing" ? <Breathing /> : <ThoughtChallenge />}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </section>
    </main>
  );
}

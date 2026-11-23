
// import { useMemo } from "react";
import { useMemo, useState, useCallback } from "react";
import ExploreModal from "../../common/ExploreModal/ExploreModal";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaWind, FaArrowLeftLong } from "react-icons/fa6";
import { PiChatBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuLeaf } from "react-icons/lu";

import hero from "../../assets/images/hero.jpg";
// import { articles } from "../../data/articles";
import { moods, getMood, needsCalm, todayKey } from "../../data/moods";
import useLocalStorage from "../../hooks/useLocalStorage";
import useDocumentTitle from "../../hooks/useDocumentTitle";
// import ArticleCover from "../../common/ArticleCover";في حل افضل 
import { Reveal, SectionHeading, Stagger, StaggerItem, scaleIn } from "../../common/Motion/Reveal";

const tools = [
  { id: "mood", title: "فهم حالتك المزاجية", text: "خد لحظة للتأمل في مشاعرك الحالية وفهم ما قد تحتاج إليه.", icon: FaRegHeart, tone: "bg-(--color-accent-blue) text-(--color-primary)" },
  { id: "stress", title: "مستوى التوتر اليومي", text: "راجع مصادر الضغط في حياتك واكتشف خطوات بسيطة للتعامل معها.", icon: FaWind, tone: "bg-(--color-accent-green) text-emerald-600" },
  { id: "sleep", title: "عادات النوم والراحة", text: "تأمل في عاداتك اليومية المرتبطة بالنوم والراحة.", icon: MdOutlineDarkMode, tone: "bg-(--color-accent-purple) text-violet-600" },
  { id: "habits", title: "العادات والسلوكيات", text: "استكشف العادات التي ترغب في فهمها أو تغييرها تدريجيًا.", icon: LuLeaf, tone: "bg-(--color-accent-orange) text-orange-500" },
];

// const destinations = [
//   { to: "/addiction", title: "فهم الإدمان", text: "أنواعه وعلاماته وخطوات عملية للبداية.", icon: LuBrain },
//   { to: "/relax", title: "تمارين الاسترخاء", text: "تنفّس واعٍ وتأريض في دقائق.", icon: FaWind },
//   { to: "/ai", title: "المساعد الذكي", text: "مساحة للحوار وتنظيم الأفكار.", icon: PiChatBold },
//   { to: "/journal", title: "مذكراتي", text: "اكتب لنفسك بدون أحكام.", icon: LuBookOpen },
// ];

const weekDays = () =>
  Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return { key: todayKey(d), label: d.toLocaleDateString("ar-EG", { weekday: "short" }) };
  });

export default function Home() {
  useDocumentTitle("الرئيسية");

  const [moodLog, setMoodLog] = useLocalStorage("miora-mood-log", {});
  const today = todayKey();
  const selectedMood = moodLog[today] ?? null;
  const selectedMoodData = getMood(selectedMood);
  const week = useMemo(() => weekDays(), []);
  const loggedDays = week.filter((d) => moodLog[d.key]).length;
  const [exploreOpen, setExploreOpen] = useState(false);

const closeExplore = useCallback(() => {
  setExploreOpen(false);
}, []);
  // const featured = articles.slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid w-full container items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-2 md:pt-16">
        <div className="relative mx-auto w-full max-w-md md:order-2">
          <div className="hero-arch animate-arch-in aspect-3/4 overflow-hidden bg-(--color-primary-soft) shadow-(--shadow-card)">
            <img src={hero} alt="" width="800" height="1066" fetchPriority="high" className="h-full w-full object-cover" />
          </div>

          <div className="animate-float absolute -inset-s-4 top-4 grid h-24 w-24 place-items-center rounded-full bg-(--color-primary-soft) p-2 text-center text-sm font-bold text-(--color-primary) shadow-(--shadow-card)">
            خد نفس هادي
          </div>

          <div
            className="animate-float absolute -inset-e-4 bottom-20 rounded-xl bg-white/95 px-4 py-3 shadow-(--shadow-card)"
            style={{ "--delay": "900ms" }}
          >
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className="animate-pulse-dot h-2.5 w-2.5 rounded-full bg-green-500" />
              لحظة لنفسك
            </div>
            <p className="mt-1 text-sm text-(--color-muted)">ابدأ بما تشعر به الآن</p>
          </div>

          <Link
            to="/ai"
            className="absolute -inset-s-3 bottom-6 inline-flex items-center gap-2 rounded-full bg-(--color-primary) px-5 py-2.5 text-base font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
          >
            <PiChatBold />
            تحدث معنا
          </Link>
        </div>

        <div className="text-start md:order-1">
          <p className="animate-fade-up mb-4 text-lg font-bold text-(--color-primary)">مساحة هادئة، خطوة حقيقية.</p>
          <h1 className="animate-fade-up text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={{ "--delay": "80ms" }}>
            مساحة آمنة تبدأ منها رحلة فهم نفسك
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-8 text-(--color-muted) md:text-xl" style={{ "--delay": "160ms" }}>
            افهم مشاعرك، اكتشف طرقًا صحية للتعامل مع الضغوط، وخد خطوات صغيرة نحو حياة أكثر توازنًا.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3" style={{ "--delay": "240ms" }}>
            <button
              type="button"
              onClick={() => setExploreOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-6 py-3 text-lg font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
            >
              استكشف المنصة
              <FaArrowLeftLong />
            </button>
          </div>
        </div>
      </section>

      <section id="checkin" className="bg-(--color-surface) py-20">
        <div className="mx-auto w-full container px-6">
          <SectionHeading
            eyebrow="تسجيل شعورك"
            title="حاسس بإيه النهارده؟"
            text="اختار الأقرب لك، من غير ما تحتاج تبرر أو تغير شعورك."
          />

          <Stagger as="ul" stagger={0.05} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8" role="radiogroup" aria-label="اختر شعورك الحالي">
            {moods.map((mood) => {
              const active = selectedMood === mood.id;
              return (
                <StaggerItem as="li" key={mood.id} variants={scaleIn}>
                  <input
                    type="radio"
                    id={`mood-${mood.id}`}
                    name="mood"
                    value={mood.id}
                    checked={active}
                    onChange={() => setMoodLog((prev) => ({ ...prev, [today]: mood.id }))}
                    className="peer sr-only"
                  />
                  <motion.label
                    htmlFor={`mood-${mood.id}`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex w-full cursor-pointer flex-col items-center gap-3 rounded-2xl border px-3 py-5 text-lg font-medium transition-colors duration-300 peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-(--color-primary) ${active
                        ? "border-(--color-primary) bg-(--color-primary-soft) text-(--color-primary)"
                        : "border-(--color-border) bg-(--color-background) hover:border-(--color-primary)"
                      }`}
                  >
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute inset-e-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-(--color-primary) text-[10px] text-white"
                        >
                          <FaCheck />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-2xl">{mood.emoji}</span>
                    {mood.label}
                  </motion.label>
                </StaggerItem>
              );
            })}
          </Stagger>

          <AnimatePresence mode="wait">
            {selectedMoodData && (
              <motion.div
                key={selectedMoodData.id}
                role="status"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mt-8 flex flex-col gap-5 rounded-2xl bg-[color-mix(in_srgb,var(--color-primary)_60%,white)] p-6 text-white md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-3">
                  <FaRegHeart className="mt-1.5 shrink-0" />
                  <div>
                    <p className="text-lg font-bold">شكرًا لأنك لاحظت شعورك.</p>
                    <p className="mt-2 text-lg leading-8">
                      كونك <strong className="font-bold">{selectedMoodData.label}</strong> الآن هو جزء من يومك، وليس
                      تعريفًا لك. {selectedMoodData.tip}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  <Link
                    to={`/journal?mood=${selectedMoodData.id}`}
                    className="rounded-xl bg-white px-5 py-3 text-center text-base font-bold text-(--color-ink) shadow transition hover:bg-(--color-primary-soft)"
                  >
                    اكتب في مذكراتك
                  </Link>
                  {needsCalm(selectedMoodData.id) && (
                    <Link
                      to="/relax"
                      className="rounded-xl border border-white/60 px-5 py-3 text-center text-base font-bold transition hover:bg-white/15"
                    >
                      جرّب تمرين تنفس
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Reveal className="mt-8 rounded-2xl border border-(--color-border) bg-(--color-background) p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-bold">آخر 7 أيام</h3>
              <p className="text-sm text-(--color-muted)">سجّلت شعورك {loggedDays} من 7 أيام</p>
            </div>
            <ul className="mt-4 grid grid-cols-7 gap-2 text-center">
              {week.map((d) => {
                const m = getMood(moodLog[d.key]);
                return (
                  <li key={d.key} className="flex flex-col items-center gap-1.5">
                    <span
                      title={m?.label ?? "لم يُسجّل"}
                      className={`grid h-11 w-11 place-items-center rounded-full text-xl ${m ? "bg-white shadow-(--shadow-card)" : "border border-dashed border-(--color-border) text-(--color-muted)"
                        } ${d.key === today ? "ring-2 ring-(--color-primary)" : ""}`}
                    >
                      {m ? m.emoji : "·"}
                    </span>
                    <span className="text-xs text-(--color-muted)">{d.label}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-xs text-(--color-muted)">محفوظ في متصفحك فقط ولا يتم إرساله لأي مكان.</p>
          </Reveal>
        </div>
      </section>

      {/* ───────── Where to start ───────── */}
      <section className="mx-auto w-full container px-6 py-16">
        <Reveal className="relative overflow-hidden rounded-3xl bg-(--color-primary) px-8 py-16 text-white md:px-14">
          <div className="pointer-events-none absolute -bottom-36 -inset-s-16 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -inset-e-10 -top-16 h-52 w-52 rounded-full bg-white/5" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div className="text-start">
              <p className="text-base text-white/70">أدوات تناسب لحظتك</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">مش عارف تبدأ منين؟</h2>
              <p className="mt-4 text-xl leading-8 text-white/80">
                تعرّف على كل مساحة داخل ميورا، واقرأ ما تقدمه قبل الانتقال إليها.
              </p>
            </div>

            <ol className="flex items-start justify-between gap-4 text-center text-base">
              {["اختار الوجهة", "اعرف ما نقدمه", "ابدأ بخطواتك"].map((step, i, arr) => (
                <li key={step} className="contents">
                  <span className="flex flex-col items-center gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-base font-semibold">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                  {i < arr.length - 1 && <span aria-hidden="true" className="mt-5 h-px flex-1 bg-white/25" />}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
 
      </section>

      <section className="mx-auto w-full container px-6 py-16">
        <SectionHeading
          title="اكتشف نفسك بشكل أفضل"
          text="أسئلة بسيطة تساعدك على فهم مشاعرك وعاداتك بشكل أوضح، وتمنحك مساحة للتأمل واكتشاف خطوات مناسبة لك."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(({ id, title, text, icon: Icon, tone }) => (
            <StaggerItem
              as="article"
              key={id}
              className="hover-lift flex flex-col rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)"
            >
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${tone}`}>
                <Icon />
              </span>
              <p className="mt-4 text-[15px] text-(--color-muted)">أداة تأملية • ٣–٥ دقائق</p>
              <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
              <p className="mt-2 flex-1 text-[17px] leading-7 text-(--color-muted)">{text}</p>
              <Link
                to={`/assessments?tool=${id}`}
                className="mt-5 inline-flex items-center justify-center rounded-lg border border-(--color-border) px-4 py-2 text-lg font-bold transition hover:border-(--color-primary) hover:text-(--color-primary)"
              >
                ابدأ التقييم
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ExploreModal open={exploreOpen} onClose={closeExplore} />
    </main>
  );
}

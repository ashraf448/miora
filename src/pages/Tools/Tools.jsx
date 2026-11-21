import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart, FaWind } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuLeaf } from "react-icons/lu";
import { tools } from "../../data/tools";

const icons = {
  mood: FaRegHeart,
  stress: FaWind,
  sleep: MdOutlineDarkMode,
  habits: LuLeaf,
};

const options = [
  { value: 0, label: "قليلًا" },
  { value: 1, label: "إلى حد ما" },
  { value: 2, label: "كثيرًا" },
];

function Breathing() {
  const [running, setRunning] = useState(false);

  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center" dir="rtl">
      <p className="animate-fade-up font-bold text-(--color-primary)">تمرين استرخاء</p>
      <h1 className="animate-fade-up mt-4 text-4xl font-bold">التنفس الواعي</h1>
      <p className="animate-fade-up mx-auto mt-4 max-w-lg leading-8 text-(--color-muted)">
        دقيقة واحدة. شهيق هادئ، ثم زفير أطول قليلًا. توقف متى شئت.
      </p>
      <div className="mt-12 grid place-items-center">
        <div
          className={`grid h-44 w-44 place-items-center rounded-full bg-(--color-primary-soft) text-(--color-primary) shadow-(--shadow-card) ${
            running ? "animate-breathe" : ""
          }`}
        >
          <span className="text-xl font-bold">{running ? "تنفس" : "جاهز"}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setRunning((v) => !v)}
        className="mt-10 rounded-xl bg-(--color-primary) px-7 py-3 font-bold text-white transition hover:bg-(--color-primary-dark)"
      >
        {running ? "إيقاف" : "ابدأ التمرين"}
      </button>
      <p className="mt-6 text-sm text-(--color-muted)">
        إن شعرت بعدم ارتياح، توقف وعد لتنفسك الطبيعي.
      </p>
    </section>
  );
}

function Quiz({ tool }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const Icon = icons[tool.slug] || LuLeaf;
  const done = step >= tool.questions.length;
  const score = answers.reduce((sum, n) => sum + n, 0);
  const resultIndex = score <= 2 ? 0 : score <= 4 ? 1 : 2;

  const choose = (value) => {
    setAnswers((prev) => [...prev, value]);
    setStep((prev) => prev + 1);
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-16" dir="rtl">
      <Link to="/tools" className="font-bold text-(--color-primary)">
        → كل الأدوات
      </Link>
      <div className="mt-8 flex items-center gap-3">
        <span className={`grid h-12 w-12 place-items-center rounded-xl ${tool.accent}`}>
          <Icon className="text-xl text-(--color-primary)" />
        </span>
        <div>
          <p className="text-sm text-(--color-muted)">{tool.duration}</p>
          <h1 className="text-3xl font-bold">{tool.title}</h1>
        </div>
      </div>
      <p className="mt-4 leading-8 text-(--color-muted)">{tool.description}</p>

      {!done ? (
        <div className="mt-10 rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card) animate-slide-in">
          <p className="text-sm font-bold text-(--color-primary)">
            سؤال {step + 1} من {tool.questions.length}
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-relaxed">
            {tool.questions[step]}
          </h2>
          <div className="mt-8 grid gap-3">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => choose(option.value)}
                className="rounded-xl border border-(--color-border) px-5 py-3 text-lg transition hover:border-(--color-primary) hover:bg-(--color-primary-soft)"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 rounded-3xl bg-(--color-primary-soft) p-7 animate-slide-in">
          <h2 className="text-2xl font-bold text-(--color-primary)">ملاحظة لطيفة</h2>
          <p className="mt-4 text-lg leading-8">{tool.results[resultIndex]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/journal"
              className="rounded-xl bg-(--color-primary) px-5 py-3 font-bold text-white"
            >
              اكتب في مذكراتك
            </Link>
            <Link
              to="/tools/breathing"
              className="rounded-xl border border-(--color-primary) px-5 py-3 font-bold text-(--color-primary)"
            >
              تمرين تنفس
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Tools() {
  const { slug } = useParams();
  const tool = useMemo(() => tools.find((item) => item.slug === slug), [slug]);

  if (slug === "breathing") return <Breathing />;
  if (slug && tool) return <Quiz tool={tool} />;
  if (slug && !tool) {
    return (
      <main className="px-6 py-24 text-center" dir="rtl">
        <h1 className="text-2xl font-bold">الأداة غير موجودة</h1>
        <Link to="/tools" className="mt-6 inline-flex font-bold text-(--color-primary)">
          العودة للأدوات
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16" dir="rtl">
      <p className="animate-fade-up font-bold text-(--color-primary)">أدوات تناسب لحظتك</p>
      <h1 className="animate-fade-up mt-4 text-4xl font-bold md:text-5xl">
        تقييمات قصيرة وتمارين هادئة
      </h1>
      <p className="animate-fade-up mt-4 max-w-2xl text-lg leading-8 text-(--color-muted)">
        ليست تشخيصًا طبيًا. هي مساحة لتلاحظ نفسك وتختار خطوة صغيرة.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {tools.map((item, index) => {
          const Icon = icons[item.slug];
          return (
            <article
              key={item.slug}
              className="hover-lift rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)"
              style={{ "--delay": `${index * 80}ms` }}
            >
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${item.accent}`}>
                <Icon className="text-(--color-primary)" />
              </span>
              <p className="mt-4 text-sm text-(--color-muted)">{item.duration}</p>
              <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2 leading-7 text-(--color-muted)">{item.description}</p>
              <Link
                to={`/tools/${item.slug}`}
                className="mt-5 inline-flex rounded-lg border border-(--color-border) px-4 py-2 font-bold transition hover:border-(--color-primary) hover:text-(--color-primary)"
              >
                ابدأ التقييم
              </Link>
            </article>
          );
        })}
        <article className="hover-lift rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card) sm:col-span-2">
          <h2 className="text-2xl font-semibold">التنفس الواعي في ثلاث دقائق</h2>
          <p className="mt-2 leading-7 text-(--color-muted)">
            تمرين بسيط يمكنك استخدامه عندما تحتاج إلى لحظة توقف.
          </p>
          <Link
            to="/tools/breathing"
            className="mt-5 inline-flex rounded-lg bg-(--color-primary) px-4 py-2 font-bold text-white"
          >
            ابدأ التمرين
          </Link>
        </article>
      </div>
    </main>
  );
}

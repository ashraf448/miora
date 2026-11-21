import { legal } from "../../data/legal";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Reveal } from "../../common/Motion/Reveal";

export default function Legal({ type = "privacy" }) {
  const doc = legal[type] ?? legal.privacy;
  useDocumentTitle(doc.title);
  return (
    <main className="mx-auto w-full container px-6 pb-24 pt-16">
      <p className="animate-fade-up text-sm text-(--color-muted)">{doc.updated}</p>
      <h1 className="animate-fade-up mt-2 text-4xl font-bold md:text-5xl" style={{ "--delay": "70ms" }}>{doc.title}</h1>
      <p className="animate-fade-up mt-5 text-lg leading-8 text-(--color-muted)" style={{ "--delay": "140ms" }}>{doc.intro}</p>

      <div className="mt-10 space-y-6">
        {doc.sections.map((s) => (
          <Reveal as="section" key={s.h} className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
            <h2 className="text-xl font-bold text-(--color-primary)">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p} className="mt-3 leading-8 text-(--color-muted)">{p}</p>
            ))}
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-(--color-muted)">هذا النص مؤقت للنموذج الأولي ويحتاج مراجعة قانونية قبل الإطلاق.</p>
    </main>
  );
}

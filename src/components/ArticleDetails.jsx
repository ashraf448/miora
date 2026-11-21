
// import { Link, useParams } from "react-router-dom";
// import { articles } from "../data/articles";

// export default function ArticleDetails() {
//   const { id } = useParams();

//   const article = articles.find((item) => item.id === id);

//   if (!article) {
//     return (
//       <main dir="rtl" className="container mx-auto px-6 py-24 text-center">
//         <h1 className="text-3xl font-bold text-(--color-ink)">
//           المقال غير موجود
//         </h1>

//         <p className="mt-4 text-(--color-muted)">
//           ربما تم حذف المقال أو أن الرابط غير صحيح.
//         </p>

//         <Link
//           to="/awareness"
//           className="mt-6 inline-block rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white"
//         >
//           العودة للمحتوى التوعوي
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main dir="rtl" className="container mx-auto px-6 py-12">
//       {/* Back */}
//       <Link
//         to="/awareness"
//         className="inline-flex items-center gap-2 font-bold text-(--color-primary)"
//       >
//         <span>→</span>
//         العودة إلى المقالات
//       </Link>

//       {/* Article Header */}
//       <header className="mx-auto mt-10 max-w-4xl text-center">
//         <span className="inline-block rounded-full bg-(--color-primary-soft) px-5 py-2 text-sm font-bold text-(--color-primary)">
//           {article.category}
//         </span>

//         <h1 className="mt-6 text-3xl font-bold leading-relaxed text-(--color-ink) md:text-5xl">
//           {article.title}
//         </h1>

//         <p className="mt-5 text-lg leading-8 text-(--color-muted)">
//           {article.description}
//         </p>

//         <p className="mt-5 text-sm text-(--color-muted)">
//           ◷ {article.readTime} دقائق قراءة
//         </p>
//       </header>

//       {/* Article Image */}
//       {article.image && (
//         <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl">
//           <img
//             src={article.image}
//             alt={article.title}
//             className="max-h-120 w-full object-cover"
//           />
//         </div>
//       )}

//       {/* Article Content */}
//       <article className="mx-auto mt-12 max-w-3xl">
//         {article.content.map((section, index) => (
//           <section key={index} className="mb-10">
//             <h2 className="mb-5 text-2xl font-bold text-(--color-primary)">
//               {section.heading}
//             </h2>

//             {section.paragraphs.map((paragraph, paragraphIndex) => (
//               <p
//                 key={paragraphIndex}
//                 className="mb-4 text-lg leading-9 text-(--color-ink)"
//               >
//                 {paragraph}
//               </p>
//             ))}
//           </section>
//         ))}
//       </article>

//       {/* Footer */}
//       <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-(--color-primary-soft) p-7 text-center">
//         <h3 className="text-xl font-bold text-(--color-primary)">
//           خذ وقتك، وابدأ بالخطوة المناسبة لك
//         </h3>

//         <p className="mt-3 leading-7 text-(--color-muted)">
//           المعرفة بداية جيدة، ولا تحتاج إلى تغيير كل شيء دفعة واحدة.
//         </p>

//         <Link
//           to="/awareness"
//           className="mt-5 inline-block rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:opacity-90"
//         >
//           اكتشف المزيد من المقالات
//         </Link>
//       </div>

//       <section className="mx-auto mt-16 max-w-4xl">
//         <h2 className="mb-6 text-xl font-bold">مقالات قريبة</h2>
//         <div className="grid gap-4 sm:grid-cols-2">
//           {articles
//             .filter((item) => item.id !== article.id)
//             .slice(0, 2)
//             .map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/awareness/${item.id}`}
//                 className="hover-lift rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)"
//               >
//                 <p className="text-sm text-(--color-primary)">{item.category}</p>
//                 <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
//                 <p className="mt-2 line-clamp-2 text-(--color-muted)">{item.description}</p>
//               </Link>
//             ))}
//         </div>
//       </section>
//     </main>
//   );
// }



import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import toast from "react-hot-toast";
import { FaBookmark, FaRegBookmark, FaArrowRightLong, FaArrowLeftLong, FaLink } from "react-icons/fa6";
import { articles } from "../data/articles";
import useLocalStorage from "../hooks/useLocalStorage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ArticleCover from "../common/ArticleCover";
import { Reveal } from "../common/Motion/Reveal";

export default function ArticleDetails() {
  const { id } = useParams();
  const index = articles.findIndex((item) => item.id === id);
  const article = articles[index];

  useDocumentTitle(article?.title ?? "المقال غير موجود");

  const [bookmarks, setBookmarks] = useLocalStorage("miora-bookmarks", []);
  const saved = article ? bookmarks.includes(article.id) : false;

  // شريط تقدّم القراءة
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  const related = useMemo(() => {
    if (!article) return [];
    const same = articles.filter((a) => a.id !== article.id && a.category === article.category);
    const rest = articles.filter((a) => a.id !== article.id && a.category !== article.category);
    return [...same, ...rest].slice(0, 3);
  }, [article]);

  const prev = articles[index - 1];
  const next = articles[index + 1];

  const toggleBookmark = () => {
    setBookmarks((p) => (p.includes(article.id) ? p.filter((x) => x !== article.id) : [...p, article.id]));
    toast.success(saved ? "تمت الإزالة من المحفوظات" : "تم حفظ المقال");
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, text: article.description, url });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("تم نسخ الرابط");
      }
    } catch (e) {
      if (e?.name !== "AbortError") toast.error("تعذّر نسخ الرابط");
    }
  };

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">المقال غير موجود</h1>
        <p className="mt-4 text-(--color-muted)">ربما تم حذف المقال أو أن الرابط غير صحيح.</p>
        <Link
          to="/awareness"
          className="mt-6 inline-block rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white"
        >
          العودة للمحتوى التوعوي
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress, transformOrigin: "right" }}
        className="fixed inset-x-0 top-0 z-100 h-1 bg-(--color-primary)"
      />

      <Link
        to="/awareness"
        className="inline-flex items-center gap-2 font-bold text-(--color-primary) transition-all hover:gap-3"
      >
        <FaArrowRightLong aria-hidden="true" />
        العودة إلى المقالات
      </Link>

      <header className="mx-auto mt-10 max-w-4xl text-center">
        <span className="animate-fade-up inline-block rounded-full bg-(--color-primary-soft) px-5 py-2 text-sm font-bold text-(--color-primary)">
          {article.category}
        </span>
        <h1 className="animate-fade-up mt-6 text-3xl font-bold leading-relaxed md:text-5xl" style={{ "--delay": "70ms" }}>
          {article.title}
        </h1>
        <p className="animate-fade-up mt-5 text-lg leading-8 text-(--color-muted)" style={{ "--delay": "140ms" }}>
          {article.description}
        </p>

        <div className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-3" style={{ "--delay": "210ms" }}>
          <span className="text-sm text-(--color-muted)">◷ {article.readTime} دقائق قراءة</span>
          <span aria-hidden="true" className="text-(--color-border)">|</span>
          <button
            type="button"
            onClick={toggleBookmark}
            aria-pressed={saved}
            className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-1.5 text-sm font-medium transition hover:border-(--color-primary) hover:text-(--color-primary)"
          >
            {saved ? <FaBookmark /> : <FaRegBookmark />}
            {saved ? "محفوظ" : "حفظ"}
          </button>
          <button
            type="button"
            onClick={share}
            className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-1.5 text-sm font-medium transition hover:border-(--color-primary) hover:text-(--color-primary)"
          >
            <FaLink />
            مشاركة
          </button>
        </div>
      </header>

      <Reveal className="mx-auto mt-10 aspect-video max-h-120 max-w-4xl overflow-hidden rounded-3xl">
        <ArticleCover article={article} index={index} />
      </Reveal>

      <article className="mx-auto mt-12 max-w-3xl">
        {article.content.map((section, i) => (
          <Reveal as="section" key={section.heading} className="mb-10" delay={i === 0 ? 0 : 0.05}>
            <h2 className="mb-5 text-2xl font-bold text-(--color-primary)">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="mb-4 text-lg leading-9">
                {p}
              </p>
            ))}
          </Reveal>
        ))}
      </article>

      <Reveal className="mx-auto mt-14 max-w-3xl rounded-2xl bg-(--color-primary-soft) p-7 text-center">
        <h3 className="text-xl font-bold text-(--color-primary)">خذ وقتك، وابدأ بالخطوة المناسبة لك</h3>
        <p className="mt-3 leading-7 text-(--color-muted)">المعرفة بداية جيدة، ولا تحتاج إلى تغيير كل شيء دفعة واحدة.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            to="/journal"
            className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:bg-(--color-primary-dark)"
          >
            اكتب في مذكراتك
          </Link>
          <Link
            to="/relax"
            className="rounded-full border border-(--color-primary) px-6 py-3 font-bold text-(--color-primary) transition hover:bg-white"
          >
            جرّب تمرين تنفس
          </Link>
        </div>
      </Reveal>

      {(prev || next) && (
        <nav aria-label="التنقل بين المقالات" className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/awareness/${prev.id}`}
              className="hover-lift rounded-2xl border border-(--color-border) bg-(--color-surface) p-5"
            >
              <span className="flex items-center gap-2 text-sm text-(--color-muted)">
                <FaArrowRightLong aria-hidden="true" /> المقال السابق
              </span>
              <span className="mt-2 block font-bold leading-snug">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/awareness/${next.id}`}
              className="hover-lift rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 sm:text-end"
            >
              <span className="flex items-center gap-2 text-sm text-(--color-muted) sm:justify-end">
                المقال التالي <FaArrowLeftLong aria-hidden="true" />
              </span>
              <span className="mt-2 block font-bold leading-snug">{next.title}</span>
            </Link>
          )}
        </nav>
      )}

      <section className="mt-16" aria-labelledby="related-title">
        <h2 id="related-title" className="text-2xl font-bold">
          مقالات قد تهمك
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((a) => (
            <Link
              key={a.id}
              to={`/awareness/${a.id}`}
              className="hover-zoom group overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card) transition hover:shadow-(--shadow-lift)"
            >
              <div className="aspect-video overflow-hidden">
                <ArticleCover article={a} index={articles.indexOf(a)} />
              </div>
              <div className="p-5">
                <p className="text-sm text-(--color-primary)">{a.category}</p>
                <h3 className="mt-1 text-lg font-bold leading-snug">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import { LuLeaf } from "react-icons/lu";
import useDocumentTitle from "../../hooks/useDocumentTitle";

/** يُستخدم كـ errorElement وكصفحة 404 */
export default function ErrorPage({ notFound = false }) {
  const error = useRouteError();
  const is404 = notFound || (isRouteErrorResponse(error) && error.status === 404);
  // أخطاء تحميل الـ chunks (مثلاً بعد نشر نسخة جديدة)
  const isChunkError = /dynamically imported module|Importing a module script failed|Loading chunk/i.test(
    String(error?.message ?? "")
  );

  useDocumentTitle(is404 ? "الصفحة غير موجودة" : "حدث خطأ");

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="grid h-20 w-20 place-items-center rounded-3xl bg-(--color-primary-soft) text-4xl text-(--color-primary)"
      >
        <LuLeaf />
      </motion.span>

      <h1 className="mt-8 text-3xl font-bold md:text-4xl">
        {is404 ? "الصفحة دي مش موجودة" : "حصلت مشكلة غير متوقعة"}
      </h1>
      <p className="mt-4 text-lg leading-8 text-(--color-muted)">
        {is404
          ? "ممكن يكون الرابط اتغير أو اتكتب غلط. تعالى نرجعك لمكان آمن."
          : isChunkError
            ? "في نسخة جديدة من الموقع. حدّث الصفحة وهتشتغل تمام."
            : "متقلقش، ده مش بسببك. جرّب تحدّث الصفحة أو ارجع للرئيسية."}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
        >
          العودة للرئيسية
        </Link>
        {!is404 && (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-xl border border-(--color-border) bg-(--color-surface) px-6 py-3 font-bold transition hover:border-(--color-primary) hover:text-(--color-primary)"
          >
            تحديث الصفحة
          </button>
        )}
      </div>
    </main>
  );
}

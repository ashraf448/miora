/** Fallback بتاع Suspense — هيكل عظمي بدل شاشة بيضا */
export default function PageSkeleton() {
  return (
    <div role="status" aria-live="polite" aria-label="جاري تحميل الصفحة">
      <div className="fixed inset-x-0 top-0 z-100 h-1 bg-transparent">
        <div className="top-loader h-full bg-(--color-primary)" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          <div className="skeleton h-4 w-32" />
          <div className="skeleton h-12 w-full max-w-lg" />
          <div className="skeleton h-12 w-3/4" />
          <div className="skeleton mt-2 h-5 w-full max-w-md" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)"
            >
              <div className="skeleton aspect-video w-full" />
              <div className="skeleton mt-5 h-4 w-24" />
              <div className="skeleton mt-3 h-6 w-4/5" />
              <div className="skeleton mt-3 h-4 w-full" />
              <div className="skeleton mt-2 h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">جاري التحميل...</span>
    </div>
  );
}

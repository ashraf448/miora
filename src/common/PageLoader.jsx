export default function PageLoader({ compact = false }) {
  return (
    <div
      className={compact ? "page-loader page-loader--compact" : "page-loader"}
      role="status"
      aria-live="polite"
      aria-label="جاري تحميل الصفحة"
      dir="rtl"
    >
      <div className="page-loader__content">
        <div className="page-loader__logo" aria-hidden="true">
          <span>🌿</span>
        </div>
        <div className="page-loader__spinner" />
        <h2>ميورا</h2>
        <p>بنجهّز مساحتك في ميورا...</p>
      </div>
    </div>
  );
}

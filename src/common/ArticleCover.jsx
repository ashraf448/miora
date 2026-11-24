import { useState } from "react";

const fallbackStyle = [
  { bg: "bg-(--color-accent-blue)", emoji: "🌿" },
  { bg: "bg-(--color-accent-green)", emoji: "🍃" },
  { bg: "bg-(--color-accent-purple)", emoji: "🌙" },
  { bg: "bg-(--color-accent-orange)", emoji: "☀️" },
];

const categoryEmoji = {
  "فهم المشاعر": "💙",
  "التوتر والضغط النفسي": "🌬️",
  "مهارات التعامل": "🧘",
  "النوم والراحة": "🌙",
  "التأمل الذاتي": "✍️",
  "العادات الصحية": "🌱",
  "الوعي بالإدمان": "🤝",
  "العلاقات": "🫶",
  "طلب المساعدة": "📞",
  "تغيير العادات": "🔄",
};

/** صورة المقال، ولو مش موجودة أو فشلت في التحميل بنعرض غلاف بديل بألوان المشروع */
export default function ArticleCover({ article, index = 0, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);
  const f = fallbackStyle[index % fallbackStyle.length];

  if (!article.image || failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center ${f.bg} ${className}`} aria-hidden="true">
        <span className="text-5xl">{categoryEmoji[article.category] ?? f.emoji}</span>
      </div>
    );
  }

  return (
    <img
      src={article.image}
      alt={article.imageAlt ?? article.title}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  );
}

import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { Reveal } from "../Motion/Reveal";

const columns = [
  {
    title: "استكشف",
    items: [
      { to: "/addiction", label: "فهم الإدمان" },
      { to: "/awareness", label: "المحتوى التوعوي" },
      { to: "/relax", label: "تمارين الاسترخاء" },
      { to: "/assessments", label: "التقييمات الذاتية" },
    ],
  },
  {
    title: "عن ميورا",
    items: [
      { to: "/about", label: "عن المنصة" },
      { to: "/help", label: "المساعدة والأسئلة" },
      { to: "/contact", label: "تواصل معنا" },
    ],
  },
  {
    title: "الخصوصية",
    items: [
      { to: "/privacy", label: "سياسة الخصوصية" },
      { to: "/terms", label: "شروط الاستخدام" },
    ],
  },
];

const linkClass = "transition-colors duration-200 hover:text-white";

export default function Footer() {
  return (
    <footer className="mt-auto bg-(--color-footer) text-white">
      <div className="mx-auto w-full max-w-5xl px-6 pt-10">
        <Reveal className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-white/5 p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lg">
              <FaPhoneVolume />
            </span>
            <p className="text-[15px] leading-7 text-white/80">
              محتاج مساعدة دلوقتي؟ الخط الساخن لعلاج الإدمان <b className="text-white">16023</b> — مجاني وسري، وللدعم
              النفسي <b className="text-white">16328</b>.
            </p>
          </div>
          <a
            href="tel:16023"
            className="shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-(--color-primary) transition hover:bg-(--color-primary-soft)"
          >
            اتصل بـ 16023
          </a>
        </Reveal>
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 lg:flex lg:justify-between">
        <div>
          <h3 className="mb-3 text-lg font-bold">ميورا</h3>
          <p className="max-w-xs text-sm leading-7 text-white/60">
            مساحة تعليمية داعمة تساعدك على فهم مشاعرك وبناء عادات أكثر توازنًا، خطوة بخطوة.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h4 className="mb-3 text-base font-bold">{col.title}</h4>
            <ul className="space-y-2 text-[15px] text-white/60">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10 p-4 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} ميورا. جميع الحقوق محفوظة. المحتوى للتوعية فقط ولا يغني عن استشارة مختص.</p>
      </div>
    </footer>
  );
}

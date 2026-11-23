import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaChevronLeft } from "react-icons/fa6";
import {
  LuHouse,
  LuBookOpen,
  LuNotebookPen,
  LuWind,
  LuMessageCircle,
  LuClipboardCheck,
  LuLifeBuoy,
  LuHeart,
} from "react-icons/lu";

import Modal from "../Modal/Modal";
import { preloadRoute } from "../../routes/lazyPages";

const destinations = [
  { to: "/",            title: "الرئيسية",         text: "مساحتك الهادئة للتعرّف على أدوات ميورا والبدء بخطوة بسيطة.", icon: LuHouse },
  { to: "/awareness",   title: "المحتوى التوعوي",   text: "مقالات ومحتوى مبسّط يساعدك على فهم نفسك ومشاعرك.",           icon: LuBookOpen },
  { to: "/journal",     title: "مذكراتي",           text: "اكتب لنفسك بدون أحكام، وتابع مشاعرك يومًا بيوم.",            icon: LuNotebookPen },
  { to: "/relax",       title: "تمارين الاسترخاء",   text: "تنفّس واعٍ وتأريض في دقائق لتهدئة التوتر.",                  icon: LuWind },
  { to: "/ai",          title: "المساعد الذكي",     text: "مساحة للحوار وتنظيم الأفكار في أي وقت.",                     icon: LuMessageCircle },
  { to: "/assessments", title: "التقييمات الذاتية",  text: "أسئلة بسيطة تساعدك على فهم عاداتك ومشاعرك بشكل أوضح.",        icon: LuClipboardCheck },
  { to: "/help",        title: "المساعدة والدعم",   text: "أرقام وجهات دعم وإجابات للأسئلة الشائعة.",                   icon: LuLifeBuoy },
  { to: "/about",       title: "عن ميورا",          text: "تعرّف على الفكرة والرسالة وراء المنصة.",                     icon: LuHeart },
];

export default function ExploreModal({ open, onClose }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(destinations[0]);
  const SelectedIcon = selected.icon;

  const go = () => {
    onClose();
    navigate(selected.to);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      maxWidth="max-w-5xl"
      title={
        <>
          <span className="mb-1 block text-sm font-medium text-(--color-primary)">دليلك داخل ميورا</span>
          استكشف المنصة
        </>
      }
    >
      <div dir="rtl" className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        {/* القائمة (يمين) */}
        <ul className="grid gap-3 sm:grid-cols-2">
          {destinations.map((d) => {
            const Icon = d.icon;
            const active = selected.to === d.to;
            return (
              <li key={d.to}>
                <button
                  type="button"
                  onClick={() => setSelected(d)}
                  onMouseEnter={() => preloadRoute(d.to)}
                  aria-pressed={active}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-start transition ${
                    active
                      ? "border-(--color-primary) bg-(--color-primary-soft) text-(--color-primary)"
                      : "border-(--color-border) bg-(--color-background) hover:border-(--color-primary)"
                  }`}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-xl text-(--color-primary) shadow-(--shadow-card)">
                    <Icon />
                  </span>
                  <span className="flex-1 font-medium">{d.title}</span>
                  <FaChevronLeft className="text-xs opacity-60" />
                </button>
              </li>
            );
          })}
        </ul>

        {/* كارت الوجهة المختارة (شمال) */}
        <div className="flex flex-col justify-end rounded-3xl bg-(--color-primary) p-6 text-white">
          <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-3xl">
            <SelectedIcon />
          </span>
          <p className="text-sm text-white/70">الوجهة المختارة</p>
          <h3 className="mt-1 text-3xl font-bold">{selected.title}</h3>
          <p className="mt-3 flex-1 leading-7 text-white/85">{selected.text}</p>
          <button
            type="button"
            onClick={go}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-(--color-primary) transition hover:bg-(--color-primary-soft)"
          >
            افتح الصفحة
            <FaArrowLeftLong />
          </button>
        </div>
      </div>
    </Modal>
  );
}
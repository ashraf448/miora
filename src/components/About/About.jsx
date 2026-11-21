// import "./About.css";
// import { RiShieldCheckLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

// export default function About() {
//   return (
//     <main className="mx-auto max-w-6xl px-6 pt-20 pb-24" dir="rtl">
//       <section className="relative mx-auto mb-16 max-w-3xl text-center">
//         <p className="animate-fade-up mb-4 text-base font-semibold text-(--color-primary)">
//           عن ميورا
//         </p>
//         <h1 className="animate-fade-up mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-6xl">
//           لأن فهم نفسك يستحق مساحة آمنة
//         </h1>
//         <p className="animate-fade-up mx-auto max-w-2xl text-lg leading-8 text-(--color-muted)">
//           مشروع تعليمي للعافية النفسية يقدّم معرفة مبسطة وأدوات للتأمل وبناء عادات واقعية بلغة محترمة وغير وصمية.
//         </p>
//       </section>

//       <section className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
//         <article className="hover-lift rounded-2xl border border-(--color-border) bg-white p-8 text-end shadow-(--shadow-card)">
//           <h3 className="mb-4 text-2xl font-bold">ما الذي نقدّمه؟</h3>
//           <p className="leading-8 text-(--color-muted)">
//             مقالات قصيرة، تقييمات تأملية، مذكرة خاصة، ومساعد للحوار الهادئ. الهدف أن تبدأ بخطوة تناسب يومك، لا أن تغيّر كل شيء دفعة واحدة.
//           </p>
//         </article>
//         <article className="hover-lift rounded-2xl border border-(--color-border) bg-white p-8 text-end shadow-(--shadow-card)">
//           <h3 className="mb-4 text-2xl font-bold">التزامنا</h3>
//           <p className="leading-8 text-(--color-muted)">
//             نستخدم لغة داعمة ونبتعد عن الوصم والادعاءات الطبية غير الموثقة. المحتوى للتوعية، ولا يغني عن استشارة مختص.
//           </p>
//         </article>
//       </section>

//       <section className="mx-auto mt-12 max-w-3xl">
//         <div className="rounded-2xl border border-(--color-border) bg-white p-6 shadow-(--shadow-card)">
//           <div className="flex items-start gap-4 text-end">
//             <RiShieldCheckLine className="shrink-0 text-4xl text-(--color-primary)" />
//             <p className="leading-8 text-(--color-ink)">
//               هذا المحتوى مخصّص للنموذج الأولي، ويحتاج إلى مراجعة متخصصة وقانونية قبل الاستخدام العام.
//             </p>
//           </div>
//         </div>
//         <div className="mt-8 flex flex-wrap justify-center gap-3">
//           <Link to="/awareness" className="rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white">
//             اقرأ المحتوى
//           </Link>
//           <Link to="/tools" className="rounded-xl border border-(--color-primary) px-6 py-3 font-bold text-(--color-primary)">
//             جرّب أداة
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


import { Link } from "react-router-dom";
import { RiShieldCheckLine } from "react-icons/ri";
import { LuBookOpen, LuHeartHandshake, LuLock, LuSparkles } from "react-icons/lu";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "../../common/Motion/Reveal";

const values = [
  { icon: LuBookOpen, title: "ما الذي نقدّمه؟", text: "مشروع تعليمي للعافية النفسية يقدّم معرفة مبسطة وأدوات للتأمل وبناء عادات واقعية بلغة محترمة وغير وصمية." },
  { icon: LuHeartHandshake, title: "التزامنا", text: "نستخدم لغة داعمة ونبتعد عن الوصم والادعاءات الطبية غير الموثقة. نوضح دائمًا حدود النموذج والميزات التي تحتاج إلى خدمة خلفية قبل الإطلاق." },
  { icon: LuLock, title: "خصوصيتك أولًا", text: "المذكرات وسجل المزاج والتقييمات بتتحفظ في متصفحك فقط، ومش بنطلب معلومات حساسة لاستخدام الأدوات." },
  { icon: LuSparkles, title: "خطوات صغيرة", text: "مش مطلوب تغيّر كل حاجة مرة واحدة. بنقدّم أدوات قصيرة تناسب لحظتك: تنفّس، كتابة، قراءة، أو تقييم سريع." },
];

export default function About() {
  useDocumentTitle("عن المنصة");
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <section className="mx-auto mb-14 max-w-3xl text-center">
        <p className="animate-fade-up mb-4 text-base font-semibold text-(--color-primary)">عن ميورا</p>
        <h1 className="animate-fade-up mb-6 text-4xl font-bold leading-tight md:text-6xl" style={{ "--delay": "70ms" }}>
          لأن فهم نفسك يستحق مساحة آمنة
        </h1>
        <p className="animate-fade-up mx-auto max-w-2xl text-lg leading-8 text-(--color-muted)" style={{ "--delay": "140ms" }}>
          مشروع تعليمي للعافية النفسية يقدّم معرفة مبسطة وأدوات للتأمل وبناء عادات واقعية بلغة محترمة وغير وصمية.
        </p>
      </section>

      <Stagger className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, text }) => (
          <StaggerItem
            as="article"
            key={title}
            className="hover-lift rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-7 shadow-(--shadow-card)"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-(--color-primary-soft) text-xl text-(--color-primary)">
              <Icon />
            </span>
            <h2 className="mt-4 text-xl font-bold">{title}</h2>
            <p className="mt-2 text-[17px] leading-8 text-(--color-muted)">{text}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal as="section" className="mx-auto mt-10 max-w-4xl" aria-labelledby="notice-title">
        <div className="flex items-start gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
          <RiShieldCheckLine className="shrink-0 text-4xl text-(--color-primary)" aria-hidden="true" />
          <div>
            <h2 id="notice-title" className="font-bold">تنبيه مهم</h2>
            <p className="mt-1 leading-8 text-(--color-muted)">
              هذا المحتوى مؤقت ومخصّص للنموذج الأولي، ويحتاج إلى مراجعة متخصصة وقانونية قبل الاستخدام العام.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10 text-center">
        <Link to="/help" className="font-bold text-(--color-primary) hover:underline">
          محتاج مساعدة أو عندك سؤال؟ ←
        </Link>
      </Reveal>
    </main>
  );
}

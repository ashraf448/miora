// import './Addiction.css'
// import { Link } from 'react-router-dom'

// export default function Addiction() {
//   return (
//     <main dir="rtl">

//     <section className="mx-auto max-w-6xl px-6 pb-8 pt-16">
//       <p className="animate-fade-up mb-4 text-xs font-medium text-(--color-primary)">مساحة آمنة بدون أحكام.</p>
//       <h1 className="animate-fade-up max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
//         افهم الإدمان بأنواعه، وابدأ بخطوة صغيرة
//       </h1>
//       <p className="animate-fade-up mt-5 max-w-xl leading-8 text-(--color-muted)">
//         الإدمان مش ضعف إرادة، هو حالة بتأثر على المخ والسلوك ومعاها بيتحسن الوضع بالدعم والعلاج. اختار النوع اللي عايز تفهمه وشوف أمثلة وعلامات وطرق التعامل.
//       </p>

//       <nav aria-label="أنواع الإدمان" className="animate-fade-up mt-8 flex gap-3 overflow-x-auto pb-2">
//         <a href="#drugs" className="shrink-0 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2 text-sm font-medium text-(--color-muted) transition hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white">المخدرات والمواد المؤثرة</a>
//         <a href="#nicotine" className="shrink-0 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2 text-sm font-medium text-(--color-muted) transition hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white">التدخين والنيكوتين</a>
//         <a href="#internet" className="shrink-0 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2 text-sm font-medium text-(--color-muted) transition hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white">الإنترنت والسوشيال ميديا</a>
//         <a href="#gaming" className="shrink-0 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2 text-sm font-medium text-(--color-muted) transition hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white">الألعاب الإلكترونية والمراهنات</a>
//         <a href="#medicine" className="shrink-0 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2 text-sm font-medium text-(--color-muted) transition hover:border-(--color-primary) hover:bg-(--color-primary) hover:text-white">الأدوية والمنبهات</a>
//       </nav>
//     </section>

//     <section className="mx-auto max-w-6xl px-6 py-8">
//       <div className="grid gap-4 md:grid-cols-3">
//         <div className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
//           <h3 className="font-semibold">إيه هو الإدمان؟</h3>
//           <p className="mt-2 text-sm leading-7 text-(--color-muted)">استمرار في سلوك أو مادة رغم الضرر الواضح، مع فقدان القدرة على التحكم أو التوقف.</p>
//         </div>
//         <div className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
//           <h3 className="font-semibold">ليه بيحصل؟</h3>
//           <p className="mt-2 text-sm leading-7 text-(--color-muted)">غالبًا بيبدأ كهروب من ضغط أو ملل أو ألم، ومع التكرار المخ بيتعوّد ويطلب المزيد.</p>
//         </div>
//         <div className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
//           <h3 className="font-semibold">هل في أمل؟</h3>
//           <p className="mt-2 text-sm leading-7 text-(--color-muted)">أكيد. ناس كتير بتتعافى بالعلاج والدعم النفسي والأسرة، والتعافي رحلة مش خطوة واحدة.</p>
//         </div>
//       </div>
//     </section>

//     <section id="drugs" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
//       <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
//         <div>
//           <span className="grid h-14 w-14 place-items-center rounded-2xl text-violet-600"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/></svg></span>
//           <h2 className="mt-5 text-2xl font-bold md:text-3xl">المخدرات والمواد المؤثرة</h2>
//           <p className="mt-3 text-sm leading-8 text-(--color-muted)">تعاطي مواد بتأثر على المخ والمزاج والسلوك، ومع الوقت الجسم بيتعوّد عليها ويحتاج جرعة أكبر عشان يحس بنفس التأثير.</p>

//           <p className="mt-6 text-sm font-semibold">علامات تستاهل الانتباه</p>
//           <ul className="mt-3 space-y-2 text-sm leading-7 text-(--color-muted)">
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>احتياج متزايد للمادة عشان تحس بنفس التأثير</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>أعراض انسحاب (قلق، رعشة، أرق) عند التوقف</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>إهمال الدراسة أو الشغل أو العلاقات</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>محاولات فاشلة متكررة للتوقف</span></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold">أمثلة شائعة</p>
//           <div className="mt-3 grid gap-4 sm:grid-cols-2">
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-violet-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">الحشيش والماريجوانا</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">بيأثر على التركيز والذاكرة والدافعية، وممكن يزوّد القلق عند الاستخدام المستمر.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-violet-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">الترامادول والمسكنات القوية</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">بتبدأ غالبًا لتخفيف ألم أو إرهاق، وبتتحول لاعتماد جسدي ونفسي بسرعة.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-violet-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">المنشطات والمواد المصنّعة</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">زي الاستروكس والشابو، وتأثيرها خطير وغير متوقع على القلب والعقل.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-violet-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">الكحول</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">استخدام متكرر بيأثر على الكبد والمزاج والنوم، وبيصعّب التوقف فجأة بدون متابعة.</p>
//               </div>
//             </article>
//           </div>
//           <div className="mt-5 rounded-(--radius-card) bg-(--color-primary-soft) p-5 text-sm leading-7">
//             <span className="font-semibold text-(--color-primary)">خطوة عملية: </span>لو حد بيحاول يبطّل بعد استخدام طويل، متوقفش فجأة لوحدك، لأن أعراض الانسحاب ممكن تبقى خطيرة. ابدأ بمتخصص.
//           </div>
//         </div>
//       </div>
//     </section>
//     <section id="nicotine" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
//       <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
//         <div>
//           <span className="grid h-14 w-14 place-items-center rounded-2xl text-orange-500"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3 0 1.4 1 2.5 2.5 2.5z"/></svg></span>
//           <h2 className="mt-5 text-2xl font-bold md:text-3xl">التدخين والنيكوتين</h2>
//           <p className="mt-3 text-sm leading-8 text-(--color-muted)">النيكوتين مادة بتسبب اعتماد قوي، وده بيخلي كتير من الناس يكملوا تدخين رغم رغبتهم في التوقف.</p>

//           <p className="mt-6 text-sm font-semibold">علامات تستاهل الانتباه</p>
//           <ul className="mt-3 space-y-2 text-sm leading-7 text-(--color-muted)">
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>أول سيجارة أو شيشة بعد الاستيقاظ مباشرة</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>توتر وعصبية لما تعدي وقت طويل بدون تدخين</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>التدخين كرد فعل تلقائي للضغط أو الملل</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>ضيق نفس أو كحة مستمرة مع الاستمرار</span></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold">أمثلة شائعة</p>
//           <div className="mt-3 grid gap-4 sm:grid-cols-2">
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3 0 1.4 1 2.5 2.5 2.5z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">السجائر</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">أشهر أشكال الاعتماد على النيكوتين، وبتتربط بعادات يومية زي القهوة والمواصلات.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3 0 1.4 1 2.5 2.5 2.5z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">الشيشة</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">كتير بيشوفوها أخف، لكن جلسة واحدة بتعرّض الجسم لكمية كبيرة من الدخان والنيكوتين.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3 0 1.4 1 2.5 2.5 2.5z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">السجائر الإلكترونية (الفيب)</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">بتوصّل النيكوتين بسرعة وبنكهات جذابة، وبتخلي الاعتماد يبدأ بسهولة عند الشباب.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3 0 1.4 1 2.5 2.5 2.5z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">أكياس النيكوتين</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">بديل بدون دخان، لكن لسه بتحافظ على الاعتماد على النيكوتين.</p>
//               </div>
//             </article>
//           </div>
//           <div className="mt-5 rounded-(--radius-card) bg-(--color-primary-soft) p-5 text-sm leading-7">
//             <span className="font-semibold text-(--color-primary)">خطوة عملية: </span>حدد يوم بداية قريب، واكتب المواقف اللي بتدخن فيها، وجهّز بدائل بسيطة لكل موقف (مشي، مياه، تنفّس عميق).
//           </div>
//         </div>
//       </div>
//     </section>
//     <section id="internet" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
//       <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
//         <div>
//           <span className="grid h-14 w-14 place-items-center rounded-2xl text-sky-600"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></span>
//           <h2 className="mt-5 text-2xl font-bold md:text-3xl">الإنترنت والسوشيال ميديا</h2>
//           <p className="mt-3 text-sm leading-8 text-(--color-muted)">استخدام مفرط للموبايل والمنصات بيخلي الواحد يفقد الإحساس بالوقت، وبيأثر على النوم والتركيز والمزاج.</p>

//           <p className="mt-6 text-sm font-semibold">علامات تستاهل الانتباه</p>
//           <ul className="mt-3 space-y-2 text-sm leading-7 text-(--color-muted)">
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>فتح الموبايل تلقائيًا من غير هدف واضح</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>قلق أو ضيق لما الإنترنت أو الموبايل مش متاح</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>السهر المتكرر بسبب التصفح</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>مقارنة النفس بالآخرين وشعور بالنقص بعد التصفح</span></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold">أمثلة شائعة</p>
//           <div className="mt-3 grid gap-4 sm:grid-cols-2">
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sky-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">التمرير اللانهائي</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">فيديوهات قصيرة ورا بعض بتخليك تقول «كمان واحد بس» وتضيع ساعات.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sky-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">الإدمان على الإشعارات</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">فحص الموبايل كل دقيقتين خوفًا من تفويت رسالة أو تعليق.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sky-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">المتابعة القهرية للأخبار</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">قراءة أخبار سلبية بشكل مستمر بترفع التوتر ومش بتفيد بحاجة.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sky-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">المحتوى الإباحي</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">استهلاكه المتكرر بيأثر على الصورة الذاتية والعلاقات، وممكن يتحول لعادة قهرية.</p>
//               </div>
//             </article>
//           </div>
//           <div className="mt-5 rounded-(--radius-card) bg-(--color-primary-soft) p-5 text-sm leading-7">
//             <span className="font-semibold text-(--color-primary)">خطوة عملية: </span>جرّب تقفل الإشعارات غير المهمة، وتحط الموبايل بعيد عن السرير، وتحدد أوقات بدون شاشة في اليوم.
//           </div>
//         </div>
//       </div>
//     </section>
//     <section id="gaming" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
//       <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
//         <div>
//           <span className="grid h-14 w-14 place-items-center rounded-2xl text-emerald-600"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg></span>
//           <h2 className="mt-5 text-2xl font-bold md:text-3xl">الألعاب الإلكترونية والمراهنات</h2>
//           <p className="mt-3 text-sm leading-8 text-(--color-muted)">لما اللعب أو الرهان يبقى هو أولوية الحياة، ويفضل الشخص مستمر رغم الخسائر في الوقت أو الفلوس أو العلاقات.</p>

//           <p className="mt-6 text-sm font-semibold">علامات تستاهل الانتباه</p>
//           <ul className="mt-3 space-y-2 text-sm leading-7 text-(--color-muted)">
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>اللعب لساعات أطول من اللي كنت ناويه</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>الكدب على الأهل بخصوص وقت أو فلوس اللعب</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>ملاحقة الخسارة بمراهنات أكبر</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>الانسحاب من الأصدقاء والأنشطة الأخرى</span></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold">أمثلة شائعة</p>
//           <div className="mt-3 grid gap-4 sm:grid-cols-2">
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-emerald-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">الألعاب الجماعية الأونلاين</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">زي ببجي وفري فاير، التحديات المستمرة والمكافآت بتخلي التوقف صعب.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-emerald-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">الشراء داخل اللعبة</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">صرف فلوس متكرر على شخصيات أو مكافآت بدون حساب.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-emerald-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">المراهنات الرياضية</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">الإحساس بإن «الفوزة الجاية قريبة» بيخلي الواحد يكمل رغم الخسارة.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-emerald-600"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">ألعاب الحظ والكازينو الإلكتروني</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">سهولة الوصول من الموبايل بتسرّع تراكم الخسائر والديون.</p>
//               </div>
//             </article>
//           </div>
//           <div className="mt-5 rounded-(--radius-card) bg-(--color-primary-soft) p-5 text-sm leading-7">
//             <span className="font-semibold text-(--color-primary)">خطوة عملية: </span>حدد ميزانية ووقت ثابتين قبل ما تبدأ، ولو اتخطيتهم أكتر من مرة، ده مؤشر إنك محتاج دعم.
//           </div>
//         </div>
//       </div>
//     </section>
//     <section id="medicine" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-12">
//       <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
//         <div>
//           <span className="grid h-14 w-14 place-items-center rounded-2xl text-orange-500"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
//           <h2 className="mt-5 text-2xl font-bold md:text-3xl">الأدوية والمنبهات</h2>
//           <p className="mt-3 text-sm leading-8 text-(--color-muted)">اعتماد على أدوية أو منبهات بجرعات أو بطريقة مش مقصودة، غالبًا بيبدأ عشان نوم أو تركيز أو طاقة أو ألم.</p>

//           <p className="mt-6 text-sm font-semibold">علامات تستاهل الانتباه</p>
//           <ul className="mt-3 space-y-2 text-sm leading-7 text-(--color-muted)">
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>زيادة الجرعة من نفسك بدون استشارة الطبيب</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>الاعتماد على الدواء أو المنبه عشان تعدي اليوم</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>الصداع أو القلق أو الأرق عند التقليل</span></li>
//               <li className="flex items-start gap-2"><svg className="h-4 w-4 shrink-0 text-(--color-primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg><span>استخدام الدواء لأسباب غير اللي اتوصف عشانها</span></li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-sm font-semibold">أمثلة شائعة</p>
//           <div className="mt-3 grid gap-4 sm:grid-cols-2">
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">المهدئات ومنومات النوم</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">استخدامها بدون إشراف طبي بيسبب تعوّد وصعوبة في النوم بدونها.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">مسكنات الألم</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">استخدامها لفترات طويلة ممكن يحوّل علاج الألم لاعتماد.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">مشروبات الطاقة والكافيين</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">كميات كبيرة يوميًا بتأثر على النوم والقلب وبتسبب اعتماد.</p>
//               </div>
//             </article>
//             <article className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)">
//               <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-orange-500"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg></span>
//               <div>
//                 <h4 className="font-semibold">منبهات المذاكرة</h4>
//                 <p className="mt-1 text-sm leading-7 text-(--color-muted)">استخدامها للسهر والتركيز بتدّي طاقة مؤقتة وبتتعب الجسم والمزاج بعدها.</p>
//               </div>
//             </article>
//           </div>
//           <div className="mt-5 rounded-(--radius-card) bg-(--color-primary-soft) p-5 text-sm leading-7">
//             <span className="font-semibold text-(--color-primary)">خطوة عملية: </span>أي دواء بيأثر على النوم أو المزاج لازم يتاخد بوصفة وإشراف طبيب، وتغيير الجرعة يكون بقرار منه.
//           </div>
//         </div>
//       </div>
//     </section>

//     <section id="help" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-24 pt-8">
//       <div className="grid items-center gap-6 rounded-3xl bg-(--color-primary) p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
//         <div>
//           <h2 className="text-2xl font-bold md:text-3xl">محتاج مساعدة دلوقتي؟</h2>
//           <p className="mt-3 text-sm leading-8 text-white/85">
//             خط صندوق مكافحة وعلاج الإدمان والتعاطي في مصر متاح على مدار الساعة، والخدمة مجانية وسرية. تقدر تتصل لنفسك أو لحد من أسرتك.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <a href="tel:16023" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-(--color-primary) transition hover:bg-(--color-primary-soft)">
//               <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
//               اتصل بـ 16023
//             </a>
//             <Link to="/ai" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-medium transition hover:bg-white/10">اتكلم مع المساعد الذكي</Link>
//           </div>
//         </div>
//         <ul className="space-y-3 text-sm">
//           <li><Link to="/tools" className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20">قيّم عاداتك بنفسك <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></Link></li>
//           <li><Link to="/tools/breathing" className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20">تمارين الاسترخاء <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></Link></li>
//           <li><Link to="/awareness" className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20">مقالات توعوية <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></Link></li>
//         </ul>
//       </div>
//       <p className="mt-4 text-center text-[11px] text-(--color-muted)">المحتوى هنا للتوعية فقط ولا يغني عن استشارة طبيب أو معالج نفسي.</p>
//     </section>

//   </main>
//   )
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaArrowLeftLong } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { addictionFaq, addictionIntro, addictionTypes } from "../../data/addiction";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Reveal, Stagger, StaggerItem } from "../../common/Motion/Reveal";

const iconPaths = {
  pill: (
    <>
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z" />
      <path d="m8.5 8.5 7 7" />
    </>
  ),
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3 0 1.4 1 2.5 2.5 2.5z" />,
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  gamepad: (
    <>
      <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01" />
      <rect x="2" y="6" width="20" height="12" rx="4" />
    </>
  ),
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

function Check() {
  return (
    <svg
      className="mt-1.5 h-4 w-4 shrink-0 text-(--color-primary)"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function TypeSection({ type }) {
  return (
    <section id={type.id} className="mx-auto w-full container scroll-mt-28 px-6 py-12" aria-labelledby={`${type.id}-title`}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <span className={`grid h-14 w-14 place-items-center rounded-2xl ${type.accent} ${type.color}`}>
            <Icon name={type.icon} className="h-7 w-7" />
          </span>
          <h2 id={`${type.id}-title`} className="mt-5 text-2xl font-bold md:text-3xl">
            {type.title}
          </h2>
          <p className="mt-3 leading-8 text-(--color-muted)">{type.description}</p>

          <p className="mt-6 font-bold">علامات تستاهل الانتباه</p>
          <ul className="mt-3 space-y-2 leading-7 text-(--color-muted)">
            {type.signs.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <Check />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div>
          <p className="font-bold">أمثلة شائعة</p>
          <Stagger className="mt-3 grid gap-4 sm:grid-cols-2" stagger={0.07}>
            {type.examples.map((ex) => (
              <StaggerItem
                as="article"
                key={ex.title}
                className="hover-lift flex gap-4 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card)"
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${type.accent} ${type.color}`}>
                  <Icon name={type.icon} />
                </span>
                <div>
                  <h3 className="font-bold">{ex.title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-(--color-muted)">{ex.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-5 rounded-(--radius-card) bg-(--color-primary-soft) p-5 leading-7">
            <span className="font-bold text-(--color-primary)">خطوة عملية: </span>
            {type.step}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface)">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-lg font-bold transition hover:text-(--color-primary)"
        >
          {q}
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-xl text-(--color-primary)">
            <FiChevronDown />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 leading-8 text-(--color-muted)">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Addiction() {
  useDocumentTitle("فهم الإدمان");

  return (
    <main>
      <section className="mx-auto w-full container px-6 pb-4 pt-14 text-center">
        <p className="animate-fade-up text-xl font-bold text-(--color-primary)">مساحة آمنة بدون أحكام.</p>
        <h1 className="animate-fade-up mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl" style={{ "--delay": "70ms" }}>
         فهمٌ بلا لوم، ودعمٌ متاح
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--color-muted) md:text-xl" style={{ "--delay": "140ms" }}>
         معلومات بسيطة عن الإدمان على المواد أو السلوكيات، وكيف تبدأ أنت أو من تحب طريق المساعدة. بلا أحكام، وبسرية.
        </p>
      </section>

      <section className="mx-auto w-full container px-6 py-8">
        <Stagger className="grid gap-4 md:grid-cols-3">
          {addictionIntro.map((c) => (
            <StaggerItem
              key={c.title}
              className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)"
            >
              <h2 className="text-lg font-bold">{c.title}</h2>
              <p className="mt-2 leading-7 text-(--color-muted)">{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {addictionTypes.map((type) => (
        <TypeSection key={type.id} type={type} />
      ))}

      {/* أسئلة شائعة */}
      <section className="mx-auto w-full container px-6 py-12" aria-labelledby="faq-title">
        <Reveal>
          <h2 id="faq-title" className="text-2xl font-bold md:text-3xl">
            أسئلة شائعة
          </h2>
        </Reveal>
        <div className="mt-6 space-y-3">
          {addictionFaq.map((item) => (
            <Reveal key={item.q} y={14}>
              <FaqItem {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="help" className="mx-auto w-full container scroll-mt-28 px-6 pb-24 pt-8">
        <Reveal className="grid items-center gap-6 rounded-3xl bg-(--color-primary) p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">محتاج مساعدة دلوقتي؟</h2>
            <p className="mt-3 leading-8 text-white/85">
              خط صندوق مكافحة وعلاج الإدمان والتعاطي في مصر متاح على مدار الساعة، والخدمة مجانية وسرية. تقدر تتصل لنفسك أو
              لحد من أسرتك.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:16023"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-(--color-primary) transition hover:bg-(--color-primary-soft)"
              >
                <FaPhone className="text-sm" />
                اتصل بـ 16023
              </a>
              <Link
                to="/ai"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-medium transition hover:bg-white/10"
              >
                اتكلم مع المساعد الذكي
              </Link>
            </div>
          </div>
          <ul className="space-y-3">
            {[
              { to: "/assessments?tool=habits", label: "قيّم عاداتك بنفسك" },
              { to: "/relax", label: "تمارين الاسترخاء" },
              { to: "/awareness", label: "مقالات توعوية" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
                >
                  {l.label}
                  <FaArrowLeftLong className="text-sm" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="mt-4 text-center text-xs text-(--color-muted)">
          المحتوى هنا للتوعية فقط ولا يغني عن استشارة طبيب أو معالج نفسي.
        </p>
      </section>
    </main>
  );
}

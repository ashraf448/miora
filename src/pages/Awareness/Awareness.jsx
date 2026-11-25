// // import './Awareness.css'
// // import { IoSearch } from "react-icons/io5";
// // export default function Awareness() {
// //   return (
// //     <main>
// //     <section className="mx-auto container px-6 pb-10 pt-16 text-center">
// //       <p className="text-2xl font-bold text-(--color-primary)">المحتوى التوعوي</p>
// //       <h1 className="mt-5 text-6xl font-bold leading-tight">معرفة بسيطة، أثرها يمتد</h1>
// //       <p className="mx-auto mt-5 text-2xl leading-8 text-(--color-muted)">اقرأ في وقتك، وخذ من كل موضوع ما يناسب لحظتك دون ضغط.</p>

// //       <div className="mx-auto w-[50%] mt-10">
// //         <label className="flex items-center gap-3 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-3.5 shadow-(--shadow-card)">
// //           <IoSearch />
// //           <input type="search" placeholder="ابحث عن موضوع أو كلمة..." className="w-full bg-transparent text-lg outline-none placeholder:text-(--color-muted)" />
// //         </label>
// //       </div>

// //     </section>

// //     <section className="mx-auto container grid grid-cols-6 gap-6 px-6 pb-24" aria-label="المحتوى حسب التصنيف">
// //       <input className="peer/all sr-only" type="radio" name="content-category" id="content-filter-all" checked />
// //       <input className="peer/reflection sr-only" type="radio" name="content-category" id="content-filter-reflection" />
// //       <input className="peer/sleep sr-only" type="radio" name="content-category" id="content-filter-sleep" />
// //       <input className="peer/coping sr-only" type="radio" name="content-category" id="content-filter-coping" />
// //       <input className="peer/stress sr-only" type="radio" name="content-category" id="content-filter-stress" />
// //       <input className="peer/emotions sr-only" type="radio" name="content-category" id="content-filter-emotions" />

// //       <label for="content-filter-emotions" className="col-span-3 mt-6 justify-self-center cursor-pointer rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-2 text-center text-lg text-(--color-primary-dark) transition hover:border-(--color-primary) peer-checked/emotions:border-transparent peer-checked/emotions:bg-(--color-primary) peer-checked/emotions:text-white peer-focus-visible/emotions:ring-2 peer-focus-visible/emotions:ring-(--color-primary) sm:col-span-2 lg:col-span-1">فهم المشاعر</label>
// //       <label for="content-filter-stress" className="col-span-3 mt-6 justify-self-center cursor-pointer rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-2 text-center text-lg text-(--color-primary-dark) transition hover:border-(--color-primary) peer-checked/stress:border-transparent peer-checked/stress:bg-(--color-primary) peer-checked/stress:text-white peer-focus-visible/stress:ring-2 peer-focus-visible/stress:ring-(--color-primary) sm:col-span-2 lg:col-span-1">التوتر والضغط النفسي</label>
// //       <label for="content-filter-coping" className="col-span-3 mt-6 justify-self-center cursor-pointer rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-2 text-center text-lg text-(--color-primary-dark) transition hover:border-(--color-primary) peer-checked/coping:border-transparent peer-checked/coping:bg-(--color-primary) peer-checked/coping:text-white peer-focus-visible/coping:ring-2 peer-focus-visible/coping:ring-(--color-primary) sm:col-span-2 lg:col-span-1">مهارات التعامل</label>
// //       <label for="content-filter-sleep" className="col-span-3 mt-6 justify-self-center cursor-pointer rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-2 text-center text-lg text-(--color-primary-dark) transition hover:border-(--color-primary) peer-checked/sleep:border-transparent peer-checked/sleep:bg-(--color-primary) peer-checked/sleep:text-white peer-focus-visible/sleep:ring-2 peer-focus-visible/sleep:ring-(--color-primary) sm:col-span-2 lg:col-span-1">النوم والراحة</label>
// //       <label for="content-filter-reflection" className="col-span-3 mt-6 justify-self-center cursor-pointer rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-2 text-center text-lg text-(--color-primary-dark) transition hover:border-(--color-primary) peer-checked/reflection:border-transparent peer-checked/reflection:bg-(--color-primary) peer-checked/reflection:text-white peer-focus-visible/reflection:ring-2 peer-focus-visible/reflection:ring-(--color-primary) sm:col-span-2 lg:col-span-1">التأمل الذاتي</label>
// //       <label for="content-filter-all" className="col-span-3 mt-6 justify-self-center cursor-pointer rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-2 text-center text-lg text-(--color-primary-dark) transition hover:border-(--color-primary) peer-checked/all:border-transparent peer-checked/all:bg-(--color-primary) peer-checked/all:text-white peer-focus-visible/all:ring-2 peer-focus-visible/all:ring-(--color-primary) sm:col-span-2 lg:col-span-1">الكل</label>

// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="" alt="تسمية المشاعر: خطوة أولى لفهم نفسك" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">فهم المشاعر</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>4 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">تسمية المشاعر: خطوة أولى لفهم نفسك</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">حين نعطي شعورنا اسمًا، يصبح التعامل معه أوضح وأقل إرباكًا.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/مساحة هادئة وسط ضغط اليوم.jpg" alt="مساحة هادئة وسط ضغط اليوم" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">التوتر والضغط النفسي</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>5 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">مساحة هادئة وسط ضغط اليوم</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">خطوات عملية قصيرة تساعدك على تهدئة إيقاع يوم مزدحم.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/التنفس الواعي في ثلاث دقائق.jpg" alt="التنفس الواعي في ثلاث دقائق" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">مهارات التعامل</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>6 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">التنفس الواعي في ثلاث دقائق</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">تمرين بسيط يمكنك استخدامه عندما تحتاج إلى لحظة توقف.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/روتين مسائي يدعم راحتك.jpg" alt="روتين مسائي يدعم راحتك" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">النوم والراحة</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>7 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">روتين مسائي يدعم راحتك</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">تغييرات واقعية تهيّئ جسمك وذهنك للراحة دون مثالية.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/لماذا تساعدنا الكتابة على التأمل؟.jpg" alt="لماذا تساعدنا الكتابة على التأمل؟" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">التأمل الذاتي</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>4 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">لماذا تساعدنا الكتابة على التأمل؟</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">استخدم الورق لترتيب أفكارك بلا حكم أو ضغط.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/عادات صغيرة يمكن الاستمرار عليها.jpg" alt="عادات صغيرة يمكن الاستمرار عليها" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">العادات الصحية</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>5 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">عادات صغيرة يمكن الاستمرار عليها</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">ابدأ بخطوة تناسب يومك بدل مطاردة تغيير كبير ومفاجئ.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/فهم الرغبة الملحة دون مقاومتها بعنف.jpg" alt="فهم الرغبة الملحة دون مقاومتها بعنف" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">الوعي بالإدمان</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>6 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">فهم الرغبة الملحة دون مقاومتها بعنف</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">تعلّم ملاحظة الرغبة وعبورها بخطوات آمنة وغير وصمية.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/الوعي بالإدمان يبدأ بالتعاطف.jpg" alt="الوعي بالإدمان يبدأ بالتعاطف" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">الوعي بالإدمان</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>7 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">الوعي بالإدمان يبدأ بالتعاطف</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">لغة محترمة ومعلومات هادئة تساعد على الوقاية وطلب الدعم.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/كيف تؤثر الضغوط في عاداتنا؟.jpg" alt="كيف تؤثر الضغوط في عاداتنا؟" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">التوتر والضغط النفسي</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>4 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">كيف تؤثر الضغوط في عاداتنا؟</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">لاحظ الرابط بين المواقف الصعبة والسلوك المتكرر بهدوء.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/الحدود الصحية ليست أنانية.jpg" alt="الحدود الصحية ليست أنانية" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">العلاقات</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>5 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">الحدود الصحية ليست أنانية</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">طرق واضحة ومحترمة للتعبير عن احتياجاتك في العلاقات.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/كيف تطلب الدعم عندما تحتاجه؟.jpg" alt="كيف تطلب الدعم عندما تحتاجه؟" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">طلب المساعدة</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>6 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">كيف تطلب الدعم عندما تحتاجه؟</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">خطوات صغيرة لبدء حديث صادق مع شخص تثق به.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //         <article className="col-span-6 sm:col-span-3 lg:col-span-2 peer-checked/reflection:hidden peer-checked/sleep:hidden peer-checked/coping:hidden peer-checked/stress:hidden peer-checked/emotions:hidden hover-lift overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card)">
// //           <div className="relative aspect-video overflow-hidden">
// //             <img src="img/التعثّر لا يلغي التقدّم.jpg" alt="التعثّر لا يلغي التقدّم" className="hover-zoom h-full w-full object-cover" loading="lazy" />
// //             <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-base font-bold text-(--color-primary-dark)">تغيير العادات</span>
// //           </div>
// //           <div className="p-5">
// //             <p className="flex items-center gap-1.5 text-2xl text-(--color-muted)"><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>7 دقائق قراءة</p>
// //             <h3 className="mt-3 text-2xl font-bold leading-snug">التعثّر لا يلغي التقدّم</h3>
// //             <p className="mt-2 text-lg leading-7 text-(--color-muted)">نظرة واقعية للانتكاسات وكيفية العودة بخطة أكثر لطفًا.</p>
// //             <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-lg font-bold text-(--color-primary)">اقرأ المقال <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></a>
// //           </div>
// //         </article>
// //     </section>
// //   </main> 
// //   )
// // }



// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { IoSearch } from "react-icons/io5";
// import { articles } from "../../data/articles";

// const categories = [
//   "الكل",
//   ...new Set(articles.map((article) => article.category)),
// ];

// export default function Awareness() {
//   const [search, setSearch] = useState("");
//   const [activeCategory, setActiveCategory] = useState("الكل");

//   const filteredArticles = useMemo(() => {
//     const searchValue = search.trim().toLowerCase();

//     return articles.filter((article) => {
//       const matchesCategory =
//         activeCategory === "الكل" ||
//         article.category === activeCategory;

//       const searchableText = [
//         article.title,
//         article.description,
//         article.category,
//       ]
//         .join(" ")
//         .toLowerCase();

//       const matchesSearch = searchableText.includes(searchValue);

//       return matchesCategory && matchesSearch;
//     });
//   }, [search, activeCategory]);

//   return (
//     <main dir="rtl">
//       {/* Hero */}
//       <section className="container mx-auto px-6 pb-10 pt-16 text-center">
//         <p className="animate-fade-up text-2xl font-bold text-(--color-primary)">
//           المحتوى التوعوي
//         </p>

//         <h1 className="animate-fade-up mt-5 text-4xl font-bold leading-tight md:text-6xl">
//           معرفة بسيطة، أثرها يمتد
//         </h1>

//         <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--color-muted) md:text-2xl">
//           اقرأ في وقتك، وخذ من كل موضوع ما يناسب لحظتك دون ضغط.
//         </p>

//         {/* Search */}
//         <div className="mx-auto mt-10 w-full max-w-2xl">
//           <label className="flex items-center gap-3 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-3.5 shadow-(--shadow-card)">
//             <IoSearch className="shrink-0 text-xl text-(--color-muted)" />

//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="ابحث عن موضوع أو كلمة..."
//               className="w-full bg-transparent text-xl outline-none placeholder:text-(--color-muted)"
//             />

//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 className="text-base text-(--color-muted) transition hover:text-(--color-primary)"
//               >
//                 مسح
//               </button>
//             )}
//           </label>
//         </div>
//       </section>

//       <section className="container mx-auto px-6 pb-24">
//         <div className="mb-10 flex flex-wrap justify-center gap-3">
//           {categories.map((category) => (
//             <button
//               key={category}
//               type="button"
//               onClick={() => setActiveCategory(category)}
//               className={`rounded-full border px-5 py-2.5 text-lg transition ${
//                 activeCategory === category
//                   ? "border-transparent bg-(--color-primary) text-white"
//                   : "border-(--color-border) bg-(--color-surface) text-(--color-primary-dark) hover:border-(--color-primary)"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Results count */}
//         <div className="mb-6 flex items-center justify-between">
//           <h2 className="text-xl font-bold text-(--color-ink)">
//             المقالات التوعوية
//           </h2>

//           <p className="text-sm text-(--color-muted)">
//             {filteredArticles.length} مقال
//           </p>
//         </div>

//         {filteredArticles.length > 0 ? (
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredArticles.map((article) => (
//               <article
//                 key={article.id}
//                 className="group overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card) transition duration-300 hover:-translate-y-1 hover:shadow-(--shadow-lift)"
//               >
//                 {/* Image */}
//                 <div className="relative aspect-video overflow-hidden bg-(--color-primary-soft)">
//                   {article.image ? (
//                     <img
//                       src={article.image}
//                       alt={article.title}
//                       loading="lazy"
//                       className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                     />
//                   ) : (
//                     <div className="flex h-full items-center justify-center text-(--color-primary)">
//                       <span className="text-5xl">🌿</span>
//                     </div>
//                   )}

//                   <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-lg font-bold text-(--color-primary-dark)">
//                     {article.category}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <p className="text-base text-(--color-muted)">
//                     ◷ {article.readTime} دقائق قراءة
//                   </p>

//                   <h3 className="mt-3 text-2xl font-bold leading-snug text-(--color-ink)">
//                     {article.title}
//                   </h3>

//                   <p className="mt-2 line-clamp-2 text-lg leading-7 text-(--color-muted)">
//                     {article.description}
//                   </p>

//                   <Link
//                     to={`/awareness/${article.id}`}
//                     className="mt-5 inline-flex items-center gap-2 font-bold text-(--color-primary) transition hover:gap-3"
//                   >
//                     اقرأ المقال
//                     <span aria-hidden="true">←</span>
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) px-5 py-16 text-center">
//             <div className="mb-4 text-5xl">🔎</div>

//             <h3 className="text-xl font-bold text-(--color-ink)">
//               لم نعثر على مقالات
//             </h3>

//             <p className="mt-3 text-(--color-muted)">
//               جرّب كلمة بحث مختلفة أو اختر تصنيفًا آخر.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 setSearch("");
//                 setActiveCategory("الكل");
//               }}
//               className="mt-6 rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:opacity-90"
//             >
//               عرض كل المقالات
//             </button>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }



import { useDeferredValue, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { FaBookmark, FaRegBookmark, FaArrowLeftLong } from "react-icons/fa6";
import { articles } from "../../data/articles";
import { videos } from "../../data/videos";
import { addictionVideos } from "../../data/addictionVideos";
import useLocalStorage from "../../hooks/useLocalStorage";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ArticleCover from "../../common/ArticleCover";
import { Reveal } from "../../common/Motion/Reveal";
import { normalizeArabic } from "../../utils/arabicSearch";
import ContentTabs from "./ContentTabs";
import MediaGrid from "./MediaGrid";
import { contentTabs, countText } from "./tabsConfig";

const ALL = "الكل";
const SAVED = "المحفوظة";
const mediaByType = { videos, addiction: addictionVideos };
const topicsOf = (items) => [...new Set(items.map((item) => item.topic))];
const articleCategories = [...new Set(articles.map((a) => a.category))];
const matches = (text, needle) => !needle || normalizeArabic(text).includes(needle);

export default function Awareness() {
  useDocumentTitle("المحتوى التوعوي");

  const [params, setParams] = useSearchParams();
  const tab = contentTabs.find((t) => t.id === params.get("type")) ?? contentTabs[0];
  const type = tab.id;
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [bookmarks, setBookmarks] = useLocalStorage("miora-bookmarks", []);

  const toggleBookmark = (id) =>
    setBookmarks((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const changeType = (id) => {
    setParams(id === "articles" ? {} : { type: id }, { replace: true });
    setActiveCategory(ALL);
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory(ALL);
  };

  const needle = normalizeArabic(deferredSearch);

  const filtered = useMemo(
    () =>
      articles.filter((a) => {
        const matchesCategory =
          activeCategory === ALL || (activeCategory === SAVED ? bookmarks.includes(a.id) : a.category === activeCategory);
        return matchesCategory && matches(`${a.title} ${a.description} ${a.category}`, needle);
      }),
    [needle, activeCategory, bookmarks]
  );

  const filteredMedia = (mediaByType[type] ?? []).filter(
    (item) =>
      (activeCategory === ALL || item.topic === activeCategory) &&
      matches(`${item.title} ${item.description} ${item.source} ${item.topic}`, needle)
  );

  const total = type === "articles" ? filtered.length : filteredMedia.length;
  const noMedia = type !== "articles" && mediaByType[type].length === 0;
  const categoryChips =
    type === "articles" ? [ALL, ...articleCategories, SAVED] : [ALL, ...topicsOf(mediaByType[type])];

  return (
    <main>
      <section className="mx-auto w-full container px-6 pb-10 pt-14 text-center">
        <p className="animate-fade-up text-xl font-bold text-(--color-primary)">المحتوى التوعوي</p>
        <h1 className="animate-fade-up mt-4 text-4xl font-bold leading-tight md:text-6xl" style={{ "--delay": "70ms" }}>
          معرفة بسيطة، أثرها يمتد
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--color-muted) md:text-xl" style={{ "--delay": "140ms" }}>
          اقرأ أو شاهد أو استمع في وقتك، وخذ من كل موضوع ما يناسب لحظتك دون ضغط.
        </p>

        <div className="animate-fade-up mt-10" style={{ "--delay": "210ms" }}>
          <ContentTabs tabs={contentTabs} value={type} onChange={changeType} />
        </div>

        <div className="animate-fade-up mx-auto mt-4 w-full max-w-2xl" style={{ "--delay": "280ms" }}>
          <label className="flex items-center gap-3 rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-3.5 shadow-(--shadow-card) transition focus-within:border-(--color-primary)">
            <span className="sr-only">{tab.searchLabel}</span>
            <IoSearch className="shrink-0 text-xl text-(--color-muted)" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن موضوع أو كلمة..."
              className="w-full bg-transparent text-lg outline-none placeholder:text-(--color-muted)"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-base text-(--color-muted) transition hover:text-(--color-primary)"
              >
                مسح
              </button>
            )}
          </label>
        </div>
      </section>

      <section className="mx-auto w-full container px-6 pb-24">
        <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="التصنيفات">
          {categoryChips.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className="relative rounded-full border border-(--color-border) px-5 py-2.5 text-base transition-colors hover:border-(--color-primary)"
              >
                {isActive && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute -inset-px rounded-full bg-(--color-primary)"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "font-bold text-white" : "text-(--color-primary-dark)"}`}>
                  {category === SAVED ? `${SAVED} (${bookmarks.length})` : category}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">{tab.heading}</h2>
          <p className="text-sm text-(--color-muted)" aria-live="polite">
            {noMedia ? "" : total === 0 ? tab.none : countText(total, tab.nouns)}
          </p>
        </div>

        {tab.note && <p className="mb-6 max-w-2xl text-base leading-7 text-(--color-muted)">{tab.note}</p>}

        {type !== "articles" ? (
          <MediaGrid items={filteredMedia} tab={tab} isEmpty={noMedia} onReset={resetFilters} />
        ) : filtered.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((article, i) => {
                const saved = bookmarks.includes(article.id);
                return (
                  <motion.article
                    layout
                    key={article.id}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.04 }}
                    className="group overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card) transition-shadow duration-300 hover:shadow-(--shadow-lift)"
                  >
                    <div className="relative aspect-video overflow-hidden bg-(--color-primary-soft)">
                      <ArticleCover
                        article={article}
                        index={articles.indexOf(article)}
                        imgClassName="transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-e-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-(--color-primary-dark)">
                        {article.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleBookmark(article.id)}
                        aria-pressed={saved}
                        aria-label={saved ? "إزالة من المحفوظات" : "حفظ المقال"}
                        className="absolute inset-s-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-(--color-primary) shadow transition hover:scale-110"
                      >
                        {saved ? <FaBookmark /> : <FaRegBookmark />}
                      </button>
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-(--color-muted)">◷ {article.readTime} دقائق قراءة</p>
                      <h3 className="mt-3 text-2xl font-bold leading-snug text-(--color-ink)">{article.title}</h3>
                      <p className="mt-2 line-clamp-2 text-lg leading-7 text-(--color-muted)">{article.description}</p>
                      <Link
                        to={`/awareness/${article.id}`}
                        className="mt-5 inline-flex items-center gap-2 font-bold text-(--color-primary) transition-all hover:gap-3"
                      >
                        اقرأ المقال
                        <FaArrowLeftLong aria-hidden="true" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <Reveal className="rounded-2xl border border-(--color-border) bg-(--color-surface) px-5 py-16 text-center">
            <div className="mb-4 text-5xl">{activeCategory === SAVED ? "🔖" : "🔎"}</div>
            <h3 className="text-xl font-bold">
              {activeCategory === SAVED && !search ? "لسه ماحفظتش أي مقال" : "لم نعثر على مقالات"}
            </h3>
            <p className="mt-3 text-(--color-muted)">
              {activeCategory === SAVED && !search
                ? "اضغط على أيقونة الحفظ في أي مقال عشان ترجعله بسهولة."
                : "جرّب كلمة بحث مختلفة أو اختر تصنيفًا آخر."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory(ALL);
              }}
              className="mt-6 rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:opacity-90"
            >
              عرض كل المقالات
            </button>
          </Reveal>
        )}
      </section>
    </main>
  );
}

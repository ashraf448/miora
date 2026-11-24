// // import './Journal.css'
// // import { MdOutlineChat } from "react-icons/md";
// // import { BiCheckShield } from "react-icons/bi";
// // import { TbPencilMinus } from "react-icons/tb";

// // export default function Journal() {
// //   return (
// //      <main className='Journal '>

// //     <section className="bg-[radial-gradient(ellipse_at_top,var(--color-primary-soft),transparent_65%)] px-6 pb-20 pt-20 text-center">
// //       <p className="animate-fade-up text-lg font-medium text-(--color-primary)">مذكراتي</p>
// //       <h1 className="animate-fade-up mt-5 text-7xl font-bold leading-tight " >اكتب لنفسك، بدون أحكام</h1>
// //       <p className="animate-fade-up mx-auto mt-6 text-lg leading-8 text-(--color-muted) ">
// //         مساحة شخصية لترتيب أفكارك وملاحظة ما يهمك في هذه اللحظة.
// //       </p>
// //     </section>

// //     <section className="mx-auto grid container gap-8 px-6 pb-24 lg:grid-cols-3">
// //       <aside className="self-start  text-end rounded-(--radius-card) bg-(--color-accent-blue) p-6 lg:mt-24">
// //         <h3 dir="rtl" className="flex items-center justify-start  gap-2 text-xl font-bold text-(--color-primary)">
// //           <BiCheckShield />
// //           خصوصيتك بوضوح
// //         </h3>
// //         <p className="mt-3 text-lg leading-7 text-(--color-muted)">
// //           في هذا النموذج، تُحفظ الملاحظات محليًا في متصفحك فقط. لا توجد مزامنة سحابية أو حساب محمي.
// //         </p>
// //       </aside>
// //       <div className="lg:col-span-2">
// //         <div className="flex flex-wrap items-start justify-between gap-4">
          

// //           <label for="note-open" className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-2.5 text-xl font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)">
// //             <TbPencilMinus />
// //             ملاحظة جديدة
// //           </label>
// //           <div className='text-end'>
// //             <h2 className="text-4xl font-bold">ملاحظاتك</h2>
// //             <p className="mt-1 text-lg text-(--color-muted)">تظهر العناوين والتواريخ هنا فقط.</p>
// //           </div>
// //         </div>

// //         <div className="mt-6 flex flex-col items-center rounded-(--radius-card) border border-[color.:var(--color-border)] bg-(--color-surface) px-6 py-16 text-center">
// //           <span className="grid h-12 w-12 place-items-center rounded-xl bg-(--color-primary-soft) text-(--color-primary)">
// //          <MdOutlineChat className='text-3xl text-(--color-muted)' />
// //           </span>
// //           <h3 className="mt-5 text-xl font-bold">مساحتك جاهزة لأول ملاحظة</h3>
// //           <p className="mt-4  text-lg leading-7 text-(--color-muted)">
// //             اكتب ما يشغلك، أو شيئًا تريد تذكّره، أو حتى كلمة واحدة تصف يومك.
// //           </p>
// //           <label for="note-open" className="mt-6 cursor-pointer rounded-xl bg-(--color-primary) px-6 py-2.5 text-xl font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)">ابدأ الآن</label>
// //         </div>
// //       </div>

      

// //     </section>

// //   </main>
// //   )
// // }


// import { useEffect, useState } from "react";
// import "./Journal.css";

// import {
//   MdOutlineChat,
//   MdOutlineDelete,
//   MdOutlineEdit,
//   MdClose,
//   MdSave,
// } from "react-icons/md";

// import { BiCheckShield } from "react-icons/bi";
// import { TbPencilMinus } from "react-icons/tb";

// const STORAGE_KEY = "miora-journal-notes";

// export default function Journal() {
//   // قراءة الملاحظات المحفوظة
//   const [notes, setNotes] = useState(() => {
//     try {
//       const savedNotes = localStorage.getItem(STORAGE_KEY);
//       return savedNotes ? JSON.parse(savedNotes) : [];
//     } catch {
//       return [];
//     }
//   });

//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [selectedNote, setSelectedNote] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//   });

//   const [editingId, setEditingId] = useState(null);

//   // حفظ الملاحظات عند أي تغيير
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
//   }, [notes]);

//   // فتح نموذج إضافة ملاحظة
//   const openNewNote = () => {
//     setFormData({ title: "", content: "" });
//     setEditingId(null);
//     setIsFormOpen(true);
//     setSelectedNote(null);
//   };

//   // فتح نموذج تعديل ملاحظة
//   const openEditNote = (note) => {
//     setFormData({
//       title: note.title,
//       content: note.content,
//     });

//     setEditingId(note.id);
//     setIsFormOpen(true);
//     setSelectedNote(null);
//   };

//   // تحديث حقول النموذج
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // إضافة أو تعديل ملاحظة
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.title.trim() || !formData.content.trim()) {
//       return;
//     }

//     if (editingId) {
//       setNotes((prev) =>
//         prev.map((note) =>
//           note.id === editingId
//             ? {
//                 ...note,
//                 title: formData.title.trim(),
//                 content: formData.content.trim(),
//                 updatedAt: new Date().toISOString(),
//               }
//             : note
//         )
//       );
//     } else {
//       const newNote = {
//         id: crypto.randomUUID(),
//         title: formData.title.trim(),
//         content: formData.content.trim(),
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       };

//       setNotes((prev) => [newNote, ...prev]);
//     }

//     setIsFormOpen(false);
//     setFormData({ title: "", content: "" });
//     setEditingId(null);
//   };

//   // حذف ملاحظة
//   const handleDelete = (id) => {
//     const confirmed = window.confirm(
//       "هل أنت متأكد من حذف هذه الملاحظة؟"
//     );

//     if (!confirmed) return;

//     setNotes((prev) => prev.filter((note) => note.id !== id));
//     setSelectedNote(null);
//   };

//   // تنسيق التاريخ
//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString("ar-EG", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <main className="Journal" dir="rtl">
//       {/* Hero */}
//       <section className="bg-[radial-gradient(ellipse_at_top,var(--color-primary-soft),transparent_65%)] px-6 pb-20 pt-20 text-center">
//         <p className="animate-fade-up text-lg font-medium text-(--color-primary)">
//           مذكراتي
//         </p>

//         <h1 className="animate-fade-up mt-5 text-4xl font-bold leading-tight md:text-7xl">
//           اكتب لنفسك، بدون أحكام
//         </h1>

//         <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-8 text-(--color-muted)">
//           مساحة شخصية لترتيب أفكارك وملاحظة ما يهمك في هذه اللحظة.
//         </p>
//       </section>

//       {/* Journal Content */}
//       <section className="container mx-auto grid gap-8 px-6 pb-24 lg:grid-cols-3">

//         {/* Privacy Aside */}
//         <aside className="flex min-h-70 flex-col rounded-(--radius-card) bg-(--color-accent-blue) p-6 text-end lg:mt-24">
//           <h3 className="flex items-center justify-start gap-2 text-xl font-bold text-(--color-primary)">
//             <BiCheckShield />
//             خصوصيتك بوضوح
//           </h3>

//           <p className="mt-3 text-lg leading-7 text-(--color-muted)">
//             تُحفظ ملاحظاتك محليًا في متصفحك فقط. لا توجد مزامنة سحابية أو
//             حساب محمي في هذه المرحلة.
//           </p>

//           <div className="mt-auto pt-8 text-sm leading-6 text-(--color-muted)">
//             تذكّر: حذف بيانات المتصفح أو استخدام جهاز آخر قد يؤدي إلى فقدان
//             ملاحظاتك.
//           </div>
//         </aside>

//         {/* Notes Area */}
//         <div className="lg:col-span-2">

//           {/* Header */}
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <button
//               type="button"
//               onClick={openNewNote}
//               className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-3 text-lg font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
//             >
//               <TbPencilMinus className="text-xl" />
//               ملاحظة جديدة
//             </button>

//             <div className="text-end">
//               <h2 className="text-3xl font-bold md:text-4xl">
//                 ملاحظاتك
//               </h2>

//               <p className="mt-1 text-base text-(--color-muted)">
//                 لديك {notes.length} ملاحظة محفوظة
//               </p>
//             </div>
//           </div>

//           {/* Notes List */}
//           {notes.length > 0 ? (
//             <div className="mt-7 grid gap-4 sm:grid-cols-2">

//               {notes.map((note) => (
//                 <article
//                   key={note.id}
//                   className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card) transition hover:-translate-y-1 hover:shadow-(--shadow-lift)"
//                 >
//                   <div className="flex items-start justify-between gap-3">
//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate text-xl font-bold text-(--color-ink)">
//                         {note.title}
//                       </h3>

//                       <p className="mt-2 text-sm text-(--color-muted)">
//                         آخر تعديل: {formatDate(note.updatedAt)}
//                       </p>
//                     </div>

//                     <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--color-primary-soft) text-(--color-primary)">
//                       <MdOutlineChat className="text-xl" />
//                     </span>
//                   </div>

//                   <p className="mt-4 line-clamp-3 min-h-20 whitespace-pre-wrap text-base leading-7 text-(--color-muted)">
//                     {note.content}
//                   </p>

//                   <div className="mt-5 flex items-center justify-between border-t border-(--color-border) pt-4">
//                     <button
//                       type="button"
//                       onClick={() => setSelectedNote(note)}
//                       className="font-bold text-(--color-primary) transition hover:opacity-70"
//                     >
//                       قراءة الملاحظة
//                     </button>

//                     <div className="flex items-center gap-2">
//                       <button
//                         type="button"
//                         onClick={() => openEditNote(note)}
//                         aria-label="تعديل الملاحظة"
//                         title="تعديل"
//                         className="grid h-9 w-9 place-items-center rounded-lg bg-(--color-primary-soft) text-(--color-primary) transition hover:opacity-70"
//                       >
//                         <MdOutlineEdit className="text-xl" />
//                       </button>

//                       <button
//                         type="button"
//                         onClick={() => handleDelete(note.id)}
//                         aria-label="حذف الملاحظة"
//                         title="حذف"
//                         className="grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100"
//                       >
//                         <MdOutlineDelete className="text-xl" />
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               ))}

//             </div>
//           ) : (
//             /* Empty State */
//             <div className="mt-7 flex flex-col items-center rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) px-6 py-16 text-center">
//               <span className="grid h-14 w-14 place-items-center rounded-xl bg-(--color-primary-soft) text-(--color-primary)">
//                 <MdOutlineChat className="text-3xl" />
//               </span>

//               <h3 className="mt-5 text-xl font-bold">
//                 مساحتك جاهزة لأول ملاحظة
//               </h3>

//               <p className="mt-4 text-base leading-7 text-(--color-muted)">
//                 اكتب ما يشغلك، أو شيئًا تريد تذكّره، أو حتى كلمة واحدة تصف يومك.
//               </p>

//               <button
//                 type="button"
//                 onClick={openNewNote}
//                 className="mt-6 rounded-xl bg-(--color-primary) px-6 py-3 text-lg font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
//               >
//                 ابدأ الآن
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Add / Edit Modal */}
//       {isFormOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm"
//           onMouseDown={(e) => {
//             if (e.target === e.currentTarget) {
//               setIsFormOpen(false);
//             }
//           }}
//         >
//           <div className="w-full max-w-2xl rounded-3xl bg-(--color-surface) p-6 shadow-2xl md:p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <button
//                 type="button"
//                 onClick={() => setIsFormOpen(false)}
//                 aria-label="إغلاق"
//                 className="text-2xl text-(--color-muted) transition hover:text-(--color-primary)"
//               >
//                 <MdClose />
//               </button>

//               <h2 className="text-2xl font-bold text-(--color-ink)">
//                 {editingId ? "تعديل الملاحظة" : "ملاحظة جديدة"}
//               </h2>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <label className="mb-2 block font-bold text-(--color-ink)">
//                 عنوان الملاحظة
//               </label>

//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="اكتب عنوانًا لملاحظتك..."
//                 maxLength={100}
//                 required
//                 className="mb-5 w-full rounded-xl border border-(--color-border) bg-transparent px-4 py-3 outline-none transition focus:border-(--color-primary)"
//               />

//               <label className="mb-2 block font-bold text-(--color-ink)">
//                 ماذا تريد أن تكتب؟
//               </label>

//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 placeholder="ابدأ الكتابة هنا... هذه المساحة لك."
//                 rows={8}
//                 required
//                 className="w-full resize-y rounded-xl border border-(--color-border) bg-transparent px-4 py-3 leading-8 outline-none transition focus:border-(--color-primary)"
//               />

//               <div className="mt-6 flex flex-wrap justify-start gap-3">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:bg-(--color-primary-dark)"
//                 >
//                   <MdSave className="text-xl" />
//                   {editingId ? "حفظ التعديلات" : "حفظ الملاحظة"}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setIsFormOpen(false)}
//                   className="rounded-xl border border-(--color-border) px-6 py-3 font-bold text-(--color-muted) transition hover:bg-(--color-primary-soft)"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Read Note Modal */}
//       {selectedNote && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm"
//           onMouseDown={(e) => {
//             if (e.target === e.currentTarget) {
//               setSelectedNote(null);
//             }
//           }}
//         >
//           <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-(--color-surface) p-6 shadow-2xl md:p-8">
//             <div className="flex items-center justify-between">
//               <button
//                 type="button"
//                 onClick={() => setSelectedNote(null)}
//                 aria-label="إغلاق"
//                 className="text-2xl text-(--color-muted) hover:text-(--color-primary)"
//               >
//                 <MdClose />
//               </button>

//               <span className="text-sm text-(--color-muted)">
//                 {formatDate(selectedNote.updatedAt)}
//               </span>
//             </div>

//             <h2 className="mt-8 text-2xl font-bold leading-relaxed text-(--color-ink)">
//               {selectedNote.title}
//             </h2>

//             <div className="mt-6 whitespace-pre-wrap wrap-break-word text-lg leading-9 text-(--color-muted)">
//               {selectedNote.content}
//             </div>

//             <div className="mt-8 flex flex-wrap gap-3 border-t border-(--color-border) pt-6">
//               <button
//                 type="button"
//                 onClick={() => openEditNote(selectedNote)}
//                 className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-3 font-bold text-white transition hover:bg-(--color-primary-dark)"
//               >
//                 <MdOutlineEdit />
//                 تعديل
//               </button>

//               <button
//                 type="button"
//                 onClick={() => handleDelete(selectedNote.id)}
//                 className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-bold text-red-500 transition hover:bg-red-100"
//               >
//                 <MdOutlineDelete />
//                 حذف
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { MdOutlineChat, MdOutlineDelete, MdOutlineEdit, MdSave, MdOutlineFileDownload } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import { TbPencilMinus } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

import Modal from "../../common/Modal/Modal";
import { Reveal } from "../../common/Motion/Reveal";
import { getMood, moods } from "../../data/moods";
import useLocalStorage from "../../hooks/useLocalStorage";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const STORAGE_KEY = "miora-journal-notes";
const MAX_CONTENT = 5000;

// crypto.randomUUID مش متاح في السياقات غير الآمنة (http) — نوفّر بديل
const makeId = () =>
  globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

const emptyForm = { title: "", content: "", mood: "" };

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });

export default function Journal() {
  useDocumentTitle("مذكراتي");

  const [notes, setNotes] = useLocalStorage(STORAGE_KEY, []);
  const [params, setParams] = useSearchParams();

  // جاي من الصفحة الرئيسية بعد تسجيل الشعور: /journal?mood=calm
  const [initialMood] = useState(() => (getMood(params.get("mood")) ? params.get("mood") : ""));
  const [formOpen, setFormOpen] = useState(Boolean(initialMood));
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(() =>
    initialMood ? { ...emptyForm, mood: initialMood, title: `أشعر بـ${getMood(initialMood).label} اليوم` } : emptyForm
  );
  const [selectedId, setSelectedId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");

  const selectedNote = notes.find((n) => n.id === selectedId) ?? null;
  const noteToDelete = notes.find((n) => n.id === deleteId) ?? null;

  const openNew = useCallback((mood = "") => {
    const m = getMood(mood);
    setForm({ ...emptyForm, mood, title: m ? `أشعر بـ${m.label} اليوم` : "" });
    setEditingId(null);
    setSelectedId(null);
    setFormOpen(true);
  }, []);

  // ننضّف الـ query بعد ما استخدمناها
  useEffect(() => {
    if (params.has("mood")) setParams({}, { replace: true });
  }, [params, setParams]);

  const openEdit = (note) => {
    setForm({ title: note.title, content: note.content, mood: note.mood ?? "" });
    setEditingId(note.id);
    setSelectedId(null);
    setFormOpen(true);
  };

  const closeForm = () => setFormOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = form.title.trim();
    const content = form.content.trim();
    if (!title || !content) return;
    const now = new Date().toISOString();

    if (editingId) {
      setNotes((prev) =>
        prev.map((n) => (n.id === editingId ? { ...n, title, content, mood: form.mood, updatedAt: now } : n))
      );
      toast.success("تم حفظ التعديلات");
    } else {
      setNotes((prev) => [{ id: makeId(), title, content, mood: form.mood, createdAt: now, updatedAt: now }, ...prev]);
      toast.success("تم حفظ الملاحظة");
    }
    setFormOpen(false);
    setEditingId(null);
  };

  const confirmDelete = () => {
    setNotes((prev) => prev.filter((n) => n.id !== deleteId));
    setDeleteId(null);
    setSelectedId(null);
    toast.success("تم حذف الملاحظة");
  };

  const exportNotes = () => {
    const text = notes
      .map((n) => `${n.title}\n${formatDate(n.createdAt)}${n.mood ? ` — ${getMood(n.mood)?.label}` : ""}\n\n${n.content}`)
      .join("\n\n──────────\n\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "miora-journal.txt" });
    a.click();
    URL.revokeObjectURL(url);
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q ? notes.filter((n) => `${n.title} ${n.content}`.toLowerCase().includes(q)) : notes;
    return [...list].sort((a, b) =>
      sort === "newest"
        ? new Date(b.updatedAt) - new Date(a.updatedAt)
        : new Date(a.updatedAt) - new Date(b.updatedAt)
    );
  }, [notes, query, sort]);

  const canSave = form.title.trim() && form.content.trim();

  return (
    <main>
      {/* Hero */}
      <section className="px-6 pb-16 pt-16 text-center">
        <p className="animate-fade-up text-xl font-bold text-(--color-primary)">مذكراتي</p>
        <h1 className="animate-fade-up mt-4 text-4xl font-bold leading-tight md:text-6xl" style={{ "--delay": "70ms" }}>
          اكتب لنفسك، بدون أحكام
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg leading-8 text-(--color-muted) md:text-xl" style={{ "--delay": "140ms" }}>
          مساحة شخصية لترتيب أفكارك وملاحظة ما يهمك في هذه اللحظة.
        </p>
      </section>

      <section className="mx-auto grid w-full container gap-8 px-6 pb-24 lg:grid-cols-3">
        {/* الخصوصية */}
        <Reveal as="aside" className="flex min-h-70 flex-col rounded-(--radius-card) bg-(--color-accent-blue) p-6 lg:mt-24">
          <h2 className="flex items-center gap-2 text-xl font-bold text-(--color-primary)">
            <BiCheckShield />
            خصوصيتك بوضوح
          </h2>
          <p className="mt-3 text-lg leading-8 text-(--color-muted)">
            تُحفظ ملاحظاتك محليًا في متصفحك فقط. لا توجد مزامنة سحابية أو حساب محمي في هذه المرحلة.
          </p>
          <div className="mt-auto pt-8 text-sm leading-6 text-(--color-muted)">
            تذكّر: حذف بيانات المتصفح أو استخدام جهاز آخر قد يؤدي إلى فقدان ملاحظاتك. يمكنك تصدير نسخة احتياطية في أي وقت.
          </div>
        </Reveal>

        {/* الملاحظات */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">ملاحظاتك</h2>
              <p className="mt-1 text-base text-(--color-muted)">لديك {notes.length} ملاحظة محفوظة</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {notes.length > 0 && (
                <button
                  type="button"
                  onClick={exportNotes}
                  className="inline-flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 font-medium transition hover:border-(--color-primary) hover:text-(--color-primary)"
                >
                  <MdOutlineFileDownload className="text-xl" />
                  تصدير
                </button>
              )}
              <button
                type="button"
                onClick={() => openNew()}
                className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-3 text-lg font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
              >
                <TbPencilMinus className="text-xl" />
                ملاحظة جديدة
              </button>
            </div>
          </div>

          {notes.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-3">
              <label className="flex min-w-52 flex-1 items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-2.5 focus-within:border-(--color-primary)">
                <span className="sr-only">بحث في الملاحظات</span>
                <IoSearch className="text-(--color-muted)" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ابحث في ملاحظاتك..."
                  className="w-full bg-transparent outline-none placeholder:text-(--color-muted)"
                />
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="الترتيب"
                className="rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-2.5 outline-none focus:border-(--color-primary)"
              >
                <option value="newest">الأحدث أولًا</option>
                <option value="oldest">الأقدم أولًا</option>
              </select>
            </div>
          )}

          {visible.length > 0 ? (
            <motion.div layout className="mt-7 grid gap-4 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visible.map((note) => {
                  const mood = getMood(note.mood);
                  return (
                    <motion.article
                      layout
                      key={note.id}
                      initial={{ opacity: 0, y: 18, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -4 }}
                      className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5 shadow-(--shadow-card) transition-shadow hover:shadow-(--shadow-lift)"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-xl font-bold">{note.title}</h3>
                          <p className="mt-2 text-sm text-(--color-muted)">آخر تعديل: {formatDate(note.updatedAt)}</p>
                        </div>
                        <span
                          title={mood?.label}
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--color-primary-soft) text-xl text-(--color-primary)"
                        >
                          {mood ? mood.emoji : <MdOutlineChat />}
                        </span>
                      </div>

                      <p className="mt-4 line-clamp-3 min-h-20 whitespace-pre-wrap text-base leading-7 text-(--color-muted)">
                        {note.content}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-(--color-border) pt-4">
                        <button
                          type="button"
                          onClick={() => setSelectedId(note.id)}
                          className="font-bold text-(--color-primary) transition hover:opacity-70"
                        >
                          قراءة الملاحظة
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => openEdit(note)}
                            aria-label={`تعديل: ${note.title}`}
                            title="تعديل"
                            className="grid h-9 w-9 place-items-center rounded-lg bg-(--color-primary-soft) text-(--color-primary) transition hover:opacity-70"
                          >
                            <MdOutlineEdit className="text-xl" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteId(note.id)}
                            aria-label={`حذف: ${note.title}`}
                            title="حذف"
                            className="grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100"
                          >
                            <MdOutlineDelete className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <Reveal className="mt-7 flex flex-col items-center rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) px-6 py-16 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-(--color-primary-soft) text-(--color-primary)">
                <MdOutlineChat className="text-3xl" />
              </span>
              {notes.length === 0 ? (
                <>
                  <h3 className="mt-5 text-xl font-bold">مساحتك جاهزة لأول ملاحظة</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-(--color-muted)">
                    اكتب ما يشغلك، أو شيئًا تريد تذكّره، أو حتى كلمة واحدة تصف يومك.
                  </p>
                  <button
                    type="button"
                    onClick={() => openNew()}
                    className="mt-6 rounded-xl bg-(--color-primary) px-6 py-3 text-lg font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
                  >
                    ابدأ الآن
                  </button>
                </>
              ) : (
                <>
                  <h3 className="mt-5 text-xl font-bold">لا توجد نتائج</h3>
                  <p className="mt-3 text-(--color-muted)">جرّب كلمة بحث مختلفة.</p>
                </>
              )}
            </Reveal>
          )}
        </div>
      </section>

      {/* إضافة / تعديل */}
      <Modal open={formOpen} onClose={closeForm} title={editingId ? "تعديل الملاحظة" : "ملاحظة جديدة"} labelledBy="note-form-title">
        <form onSubmit={handleSubmit}>
          <label htmlFor="note-title" className="mb-2 block font-bold">
            عنوان الملاحظة
          </label>
          <input
            id="note-title"
            type="text"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="اكتب عنوانًا لملاحظتك..."
            maxLength={100}
            required
            className="mb-5 w-full rounded-xl border border-(--color-border) bg-transparent px-4 py-3 outline-none transition focus:border-(--color-primary)"
          />

          <fieldset className="mb-5">
            <legend className="mb-2 font-bold">شعورك (اختياري)</legend>
            <div className="flex flex-wrap gap-2">
              {moods.map((m) => {
                const active = form.mood === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setForm((f) => ({ ...f, mood: active ? "" : m.id }))}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${
                      active
                        ? "border-(--color-primary) bg-(--color-primary-soft) font-bold text-(--color-primary)"
                        : "border-(--color-border) hover:border-(--color-primary)"
                    }`}
                  >
                    {m.emoji} {m.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label htmlFor="note-content" className="mb-2 block font-bold">
            ماذا تريد أن تكتب؟
          </label>
          <textarea
            id="note-content"
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            placeholder="ابدأ الكتابة هنا... هذه المساحة لك."
            rows={8}
            maxLength={MAX_CONTENT}
            required
            className="w-full resize-y rounded-xl border border-(--color-border) bg-transparent px-4 py-3 leading-8 outline-none transition focus:border-(--color-primary)"
          />
          <p className="mt-1 text-end text-xs text-(--color-muted)" aria-live="polite">
            {form.content.length} / {MAX_CONTENT}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={!canSave}
              className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:bg-(--color-primary-dark) disabled:pointer-events-none disabled:opacity-40"
            >
              <MdSave className="text-xl" />
              {editingId ? "حفظ التعديلات" : "حفظ الملاحظة"}
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="rounded-xl border border-(--color-border) px-6 py-3 font-bold text-(--color-muted) transition hover:bg-(--color-primary-soft)"
            >
              إلغاء
            </button>
          </div>
        </form>
      </Modal>

      {/* قراءة */}
      <Modal open={!!selectedNote} onClose={() => setSelectedId(null)} title={selectedNote?.title ?? ""} labelledBy="note-read-title">
        {selectedNote && (
          <>
            <p className="-mt-3 mb-5 text-sm text-(--color-muted)">
              {formatDate(selectedNote.updatedAt)}
              {getMood(selectedNote.mood) && ` · ${getMood(selectedNote.mood).emoji} ${getMood(selectedNote.mood).label}`}
            </p>
            <div className="whitespace-pre-wrap wrap-break-word text-lg leading-9 text-(--color-muted)">{selectedNote.content}</div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-(--color-border) pt-6">
              <button
                type="button"
                onClick={() => openEdit(selectedNote)}
                className="inline-flex items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-3 font-bold text-white transition hover:bg-(--color-primary-dark)"
              >
                <MdOutlineEdit />
                تعديل
              </button>
              <button
                type="button"
                onClick={() => {
                  setDeleteId(selectedNote.id);
                  setSelectedId(null);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-bold text-red-500 transition hover:bg-red-100"
              >
                <MdOutlineDelete />
                حذف
              </button>
            </div>
          </>
        )}
      </Modal>

      {/* تأكيد الحذف */}
      <Modal open={!!noteToDelete} onClose={() => setDeleteId(null)} title="حذف الملاحظة؟" maxWidth="max-w-md" labelledBy="note-delete-title">
        <p className="leading-8 text-(--color-muted)">
          هتتحذف «{noteToDelete?.title}» نهائيًا ومش هتقدر ترجّعها.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={confirmDelete}
            className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
          >
            نعم، احذف
          </button>
          <button
            type="button"
            onClick={() => setDeleteId(null)}
            className="rounded-xl border border-(--color-border) px-6 py-3 font-bold text-(--color-muted) transition hover:bg-(--color-primary-soft)"
          >
            إلغاء
          </button>
        </div>
      </Modal>
    </main>
  );
}

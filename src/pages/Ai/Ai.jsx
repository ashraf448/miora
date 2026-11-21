// import { useEffect, useRef, useState } from "react";
// import "./Ai.css";
// import { LuLeaf } from "react-icons/lu";
// import { FaArrowLeftLong } from "react-icons/fa6";

// const starters = [
//   "إزاي أتعامل مع التوتر؟",
//   "عايز أفهم مشاعري بشكل أفضل.",
//   "إيه العادات اللي ممكن تساعدني أنام بشكل أفضل؟",
//   "إزاي أطلب الدعم لما أحتاجه؟",
// ];

// function replyTo(text) {
//   const value = text.toLowerCase();

//   if (value.includes("توتر") || value.includes("قلق") || value.includes("ضغط")) {
//     return "التوتر إشارة إن جسمك يطلب تهدئة، مش دليل فشل. جرّب دقيقة تنفس، واختر مهمة واحدة صغيرة. لو حابب نكمّل، احكي إيه أقرب مصدر ضغط دلوقتي.";
//   }
//   if (value.includes("نوم") || value.includes("أرق") || value.includes("سهر")) {
//     return "النوم يتحسن بعادات صغيرة: خفّف الإضاءة، وابتعد عن الشاشة قبل النوم إن قدرت. مفيش ليلة مثالية. تقدر تبدأ بعادة واحدة الليلة.";
//   }
//   if (value.includes("دعم") || value.includes("مساعدة") || value.includes("وحد")) {
//     return "طلب الدعم شجاعة. ابدأ بجملة بسيطة مع شخص تثق به: «أمر بفترة صعبة وأحتاج من يسمعني». ولو الأمر أثقل من كده، المختص خيار مناسب.";
//   }
//   if (value.includes("مشاعر") || value.includes("حزين") || value.includes("زعلان")) {
//     return "تسمية الشعور خطوة أولى. اسأل نفسك بهدوء: إيه أقرب كلمة لما أحسّه الآن؟ ممكن تكتبها في المذكرة من غير ما تحاول تغيّرها فورًا.";
//   }
//   if (value.includes("إدمان") || value.includes("عادة") || value.includes("سيجارة") || value.includes("موبايل")) {
//     return "فهم العادة أهم من محاربتها بعنف. لاحظ إيه اللي بيسبق الرغبة: ملل، ضغط، وحدة. ولو الموضوع متعلق بمواد أو انسحاب، خط 16023 متاح وسرّي.";
//   }

//   return "أنا هنا لأسمعك. احكِ بجملة واحدة عما يشغلك الآن، أو اختَر سؤالًا من الاقتراحات. المساحة دي للتأمل والدعم العام، ومش بديل عن مختص.";
// }

// export default function Ai() {
//   const [draft, setDraft] = useState("");
//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       text: "أهلًا، أنا هنا لأسمعك. تقدر تبدأ بما يشغلك، أو تختار سؤالًا جاهزًا.",
//     },
//   ]);
//   const listRef = useRef(null);

//   useEffect(() => {
//     listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
//   }, [messages]);

//   const send = (text) => {
//     const content = text.trim();
//     if (!content) return;

//     setMessages((prev) => [
//       ...prev,
//       { role: "user", text: content },
//       { role: "assistant", text: replyTo(content) },
//     ]);
//     setDraft("");
//   };

//   const handleSend = (e) => {
//     e.preventDefault();
//     send(draft);
//   };

//   return (
//     <main className="Ai container mx-auto px-4 py-8">
//       <section
//         className="grid overflow-hidden rounded-3xl bg-(--color-surface) shadow-(--shadow-card) md:grid-cols-[minmax(0,1fr)_260px]"
//         aria-label="المساعد الذكي"
//       >
//         <div className="flex min-h-[70vh] flex-col">
//           <div className="flex items-center justify-between border-b border-(--color-border) px-6 py-4 text-sm">
//             <h2 className="font-bold">مساحة للحوار</h2>
//             <a href="tel:16023" className="font-medium text-(--color-primary) hover:underline">
//               الدعم: 16023
//             </a>
//           </div>

//           <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-6 py-8">
//             {messages.length <= 1 && (
//               <div className="mb-6 text-center">
//                 <LuLeaf className="mx-auto text-3xl text-(--color-primary)" />
//                 <h3 className="mt-5 text-3xl font-bold md:text-5xl">أهلًا، أنا هنا لأسمعك</h3>
//                 <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-(--color-muted)">
//                   واجهة داعمة لترتيب الأفكار واستكشاف خطوات عامة. ليست تشخيصًا طبيًا.
//                 </p>
//               </div>
//             )}

//             {messages.map((message, index) => (
//               <div
//                 key={`${message.role}-${index}`}
//                 className={`max-w-[85%] rounded-2xl px-4 py-3 leading-7 animate-slide-in ${
//                   message.role === "user"
//                     ? "ms-auto bg-(--color-primary) text-white"
//                     : "bg-(--color-background) text-(--color-ink)"
//                 }`}
//               >
//                 {message.text}
//               </div>
//             ))}

//             {messages.length <= 1 && (
//               <ul className="mt-4 grid gap-3 sm:grid-cols-2">
//                 {starters.map((question) => (
//                   <li key={question}>
//                     <button
//                       type="button"
//                       onClick={() => send(question)}
//                       className="hover-lift flex w-full items-center justify-between gap-3 rounded-xl border border-(--color-border) bg-(--color-background) px-4 py-4 text-end text-base transition hover:border-(--color-primary) hover:text-(--color-primary)"
//                     >
//                       <FaArrowLeftLong className="shrink-0" />
//                       <span>{question}</span>
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <form
//             onSubmit={handleSend}
//             className="flex items-end gap-4 border-t border-(--color-border) px-6 py-5"
//           >
//             <div className="flex-1">
//               <label htmlFor="chat-message" className="block text-base text-(--color-muted)">
//                 اكتب ما يدور في بالك
//               </label>
//               <textarea
//                 id="chat-message"
//                 rows={2}
//                 value={draft}
//                 onChange={(e) => setDraft(e.target.value)}
//                 placeholder="اكتب رسالتك هنا..."
//                 className="mt-2 w-full resize-none rounded-lg bg-(--color-background) p-3 text-base outline-none placeholder:text-(--color-muted) focus:ring-1 focus:ring-(--color-primary)"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={!draft.trim()}
//               className="flex shrink-0 items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-3 text-base font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark) disabled:pointer-events-none disabled:opacity-40"
//             >
//               إرسال
//               <FaArrowLeftLong />
//             </button>
//           </form>
//         </div>

//         <aside className="bg-(--color-sidebar) p-6 text-white">
//           <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
//             <LuLeaf />
//           </span>
//           <h1 className="mt-6 text-lg font-bold">مساعد ميورا</h1>
//           <p className="mt-3 text-base leading-6 text-white/70">
//             مساحة تجريبية لترتيب الأفكار. للمواد والإدمان يمكن الاتصال بخط 16023 مجانًا وبسرية.
//           </p>
//           <button
//             type="button"
//             onClick={() => {
//               setMessages([
//                 {
//                   role: "assistant",
//                   text: "بدأت محادثة جديدة. أنا هنا لما تحتاج.",
//                 },
//               ]);
//               setDraft("");
//             }}
//             className="mt-5 flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-base font-medium transition hover:bg-white/20"
//           >
//             محادثة جديدة
//           </button>
//         </aside>
//       </section>
//     </main>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LuLeaf } from "react-icons/lu";
import { FaArrowLeftLong, FaPhone } from "react-icons/fa6";
import { getAssistantReply, starterQuestions } from "../../data/assistant";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const makeId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-1" role="status" aria-label="المساعد يكتب">
      {[0, 150, 300].map((d) => (
        <span
          key={d}
          className="animate-typing-dot h-2 w-2 rounded-full bg-(--color-primary)"
          style={{ "--delay": `${d}ms` }}
        />
      ))}
    </div>
  );
}

function Message({ m }) {
  const isUser = m.role === "user";
  return (
    <motion.li
      layout="position"
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-base leading-8 sm:max-w-[75%] ${
          isUser
            ? "rounded-ss-md bg-(--color-primary) text-white"
            : m.crisis
              ? "rounded-se-md border border-red-200 bg-red-50 text-(--color-ink)"
              : "rounded-se-md bg-(--color-background) text-(--color-ink)"
        }`}
      >
        <p className="whitespace-pre-wrap">{m.text}</p>

        {m.tips?.length > 0 && (
          <ul className="mt-3 space-y-2 text-[15px] leading-7">
            {m.tips.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        )}

        {m.crisis && (
          <a
            href="tel:123"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-bold text-white"
          >
            <FaPhone /> اتصل بالإسعاف 123
          </a>
        )}

        {m.links?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {m.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full border border-(--color-border) bg-white px-3 py-1.5 text-sm font-medium text-(--color-primary) transition hover:border-(--color-primary)"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function Ai() {
  useDocumentTitle("المساعد الذكي");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const timerRef = useRef(null);
  const textareaRef = useRef(null);

  // تمرير تلقائي لآخر رسالة
  useEffect(() => {
    const el = scrollRef.current;
    el?.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  // تنظيف المؤقّت عند مغادرة الصفحة
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const send = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;

    setMessages((prev) => [...prev, { id: makeId(), role: "user", text }]);
    setMessage("");
    setTyping(true);

    const reply = getAssistantReply(text);
    timerRef.current = setTimeout(
      () => {
        setMessages((prev) => [...prev, { id: makeId(), role: "assistant", ...reply }]);
        setTyping(false);
      },
      reply.crisis ? 500 : 900 + Math.min(text.length * 8, 900)
    );
  };

  const handleSend = (e) => {
    e.preventDefault();
    send(message);
  };

  const reset = () => {
    clearTimeout(timerRef.current);
    setMessages([]);
    setMessage("");
    setTyping(false);
    textareaRef.current?.focus();
  };

  const started = messages.length > 0;

  return (
    <main className="mx-auto w-full container px-4 py-8">
      <section
        className="grid overflow-hidden rounded-3xl bg-(--color-surface) shadow-(--shadow-card) md:grid-cols-[260px_minmax(0,1fr)]"
        aria-label="المساعد الذكي"
      >
        <aside className="bg-(--color-sidebar) p-6 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
            <LuLeaf />
          </span>
          <h1 className="mt-6 text-lg font-bold">مساعد ميورا</h1>
          <p className="mt-3 text-base leading-7 text-white/70">واجهة تجريبية لتنظيم الأفكار واستكشاف خطوات عامة.</p>

          <button
            type="button"
            onClick={reset}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-base font-medium transition hover:bg-white/20"
          >
            محادثة جديدة
          </button>

          <p className="mt-6 rounded-xl bg-white/10 p-4 text-sm leading-7 text-white/80">
            المساعد لا يقدّم تشخيصًا ولا يغني عن مختص. في الطوارئ اتصل بالإسعاف <b>123</b>، وللدعم: <b>16023</b> أو{" "}
            <b>16328</b>.
          </p>
        </aside>

        <div className="flex h-[min(40rem,82vh)] min-h-112 flex-col">
          <div className="flex items-center justify-between border-b border-(--color-border) px-6 py-4 text-sm">
            <h2 className="font-bold">مساحة للحوار</h2>
            <Link to="/help" className="font-medium text-(--color-primary) hover:underline">
              المساعدة والدعم
            </Link>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 sm:px-6" aria-live="polite">
            <AnimatePresence mode="wait">
              {!started ? (
                <motion.div
                  key="welcome"
                  exit={{ opacity: 0, y: -12 }}
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.45 }}
                    className="grid h-16 w-16 place-items-center rounded-2xl bg-(--color-primary-soft) text-3xl text-(--color-primary)"
                  >
                    <LuLeaf />
                  </motion.span>
                  <h3 className="mt-5 text-3xl font-bold md:text-4xl">أهلًا، أنا هنا لأسمعك</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-(--color-muted)">
                    أنا هنا لمساعدتك على فهم مشاعرك واستكشاف خطوات صحية للتعامل معها. يمكنك البدء بالحديث عمّا يشغلك.
                  </p>

                  <ul className="mt-8 grid w-full gap-3 sm:grid-cols-2">
                    {starterQuestions.map((q, i) => (
                      <motion.li
                        key={q}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.07 }}
                      >
                        <button
                          type="button"
                          onClick={() => send(q)}
                          className="hover-lift flex w-full items-center justify-between gap-3 rounded-xl border border-(--color-border) bg-(--color-background) px-4 py-4 text-start text-base hover:text-(--color-primary)"
                        >
                          <span>{q}</span>
                          <FaArrowLeftLong className="shrink-0" aria-hidden="true" />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.ul key="chat" className="space-y-4" initial={false}>
                  {messages.map((m) => (
                    <Message key={m.id} m={m} />
                  ))}
                  {typing && (
                    <li className="flex justify-end">
                      <div className="rounded-2xl rounded-se-md bg-(--color-background) px-4 py-3">
                        <TypingDots />
                      </div>
                    </li>
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <form onSubmit={handleSend} className="flex items-end gap-3 border-t border-(--color-border) px-4 py-4 sm:px-6">
            <div className="flex-1">
              <label htmlFor="chat-message" className="block text-sm text-(--color-muted)">
                اكتب ما يدور في بالك
              </label>
              <textarea
                id="chat-message"
                ref={textareaRef}
                rows={2}
                value={message}
                maxLength={800}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  // Enter للإرسال، Shift+Enter لسطر جديد
                  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    send(message);
                  }
                }}
                placeholder="اكتب رسالتك هنا..."
                className="mt-2 w-full resize-none rounded-lg bg-(--color-background) p-3 text-base outline-none placeholder:text-(--color-muted) focus:ring-1 focus:ring-(--color-primary)"
              />
            </div>

            <button
              type="submit"
              disabled={!message.trim() || typing}
              className="flex shrink-0 items-center gap-2 rounded-xl bg-(--color-primary) px-5 py-3 text-base font-medium text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark) disabled:pointer-events-none disabled:opacity-40"
            >
              إرسال
              <FaArrowLeftLong aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

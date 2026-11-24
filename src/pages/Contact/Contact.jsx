import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { LuCircleCheck, LuMail, LuPhoneCall, LuShieldCheck } from "react-icons/lu";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Reveal } from "../../common/Motion/Reveal";

// لو حبّيت الرسالة تتبعت فعلًا بالبريد: ضع VITE_CONTACT_EMAIL في ملف .env
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
const MAX_MESSAGE = 1000;

const schema = z.object({
  name: z.string().trim().min(2, { message: "الاسم مطلوب (حرفين على الأقل)" }),
  email: z.string().trim().min(1, { message: "البريد الإلكتروني مطلوب" }).email({ message: "بريد إلكتروني غير صالح" }),
  subject: z.string().trim().min(3, { message: "الموضوع مطلوب (3 أحرف على الأقل)" }).max(120, { message: "الموضوع طويل (120 حرف كحد أقصى)" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "الرسالة قصيرة، اكتب 10 أحرف على الأقل" })
    .max(MAX_MESSAGE, { message: `الرسالة طويلة (${MAX_MESSAGE} حرف كحد أقصى)` }),
});

const inputClass = (error) =>
  `w-full rounded-xl border bg-(--color-background) px-4 py-3 outline-none transition placeholder:text-(--color-muted)/70 focus:border-(--color-primary) focus:bg-white ${
    error ? "border-red-400" : "border-(--color-border)"
  }`;

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-bold">
        {label}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  useDocumentTitle("تواصل معنا");
  const [sent, setSent] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onTouched", defaultValues: { name: "", email: "", subject: "", message: "" } });

  const messageLength = useWatch({ control, name: "message" })?.length ?? 0;

  const onSubmit = (data) => {
    // الواجهة تجريبية: بنتحقق من البيانات فقط ولا نرسلها لأي خادم
    setSent(data);
    toast.success("تم التحقق من النموذج بنجاح");
  };

  const mailto = (d) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`)}`;

  return (
    <main>
      <section className="mx-auto w-full container px-6 pb-8 pt-14 text-center">
        <p className="animate-fade-up text-sm font-bold text-(--color-primary)">تواصل معنا</p>
        <h1 className="animate-fade-up mt-3 text-4xl font-medium leading-tight md:text-6xl" style={{ "--delay": "70ms" }}>
          رأيك يساعدنا على التحسّن
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-xl text-lg leading-8 text-(--color-muted)" style={{ "--delay": "140ms" }}>
          نموذج التواصل الحالي واجهة تجريبية ولا يرسل رسائل إلى بريد أو نظام خارجي.
        </p>
      </section>

      <section className="mx-auto grid w-full container gap-8 px-6 pb-24 pt-6 lg:grid-cols-[1fr_300px]">
        <Reveal className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card) sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div
                key="done"
                role="status"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-(--color-accent-green) text-3xl text-emerald-600"
                >
                  <LuCircleCheck />
                </motion.span>
                <h2 className="mt-5 text-2xl font-bold">تم التحقق من بياناتك</h2>
                <p className="mx-auto mt-3 max-w-md leading-8 text-(--color-muted)">
                  شكرًا يا {sent.name}. لأن النموذج تجريبي، رسالتك «{sent.subject}» لم تُرسل إلى أي جهة.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {CONTACT_EMAIL && (
                    <a
                      href={mailto(sent)}
                      className="rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark)"
                    >
                      إرسالها عبر البريد
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSent(null)}
                    className="rounded-xl border border-(--color-border) px-6 py-3 font-bold transition hover:border-(--color-primary) hover:text-(--color-primary)"
                  >
                    تعديل الرسالة
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setSent(null);
                    }}
                    className="rounded-xl border border-(--color-border) px-6 py-3 font-bold transition hover:border-(--color-primary) hover:text-(--color-primary)"
                  >
                    رسالة جديدة
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="contact-name" label="الاسم" error={errors.name?.message}>
                    <input id="contact-name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} className={inputClass(errors.name)} {...register("name")} />
                  </Field>
                  <Field id="contact-email" label="البريد الإلكتروني" error={errors.email?.message}>
                    <input id="contact-email" type="email" dir="ltr" autoComplete="email" placeholder="name@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} className={`${inputClass(errors.email)} text-left`} {...register("email")} />
                  </Field>
                </div>

                <Field id="contact-subject" label="الموضوع" error={errors.subject?.message}>
                  <input id="contact-subject" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "contact-subject-error" : undefined} className={inputClass(errors.subject)} {...register("subject")} />
                </Field>

                <Field id="contact-message" label="الرسالة" error={errors.message?.message}>
                  <textarea id="contact-message" rows={6} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} className={`${inputClass(errors.message)} resize-y leading-8`} {...register("message")} />
                  <p className={`mt-1 text-end text-xs ${messageLength > MAX_MESSAGE ? "text-red-500" : "text-(--color-muted)"}`} aria-live="polite">
                    {messageLength} / {MAX_MESSAGE}
                  </p>
                </Field>

                <button
                  type="submit"
                  className="rounded-xl bg-(--color-primary) px-8 py-3 text-lg font-bold text-white shadow-(--shadow-lift) transition hover:bg-(--color-primary-dark) active:scale-[0.98]"
                >
                  تحقق من النموذج
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>

        <aside className="space-y-4">
          <Reveal delay={0.1} className="rounded-(--radius-card) bg-(--color-primary-soft) p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xl text-(--color-primary)">
              <LuPhoneCall />
            </span>
            <h2 className="mt-3 font-bold">محتاج دعم عاجل؟</h2>
            <p className="mt-1 text-[15px] leading-7 text-(--color-muted)">
              النموذج مش للطوارئ. اتصل بـ <b className="text-(--color-ink)">16023</b> لعلاج الإدمان أو <b className="text-(--color-ink)">16328</b> للدعم النفسي.
            </p>
            <Link to="/help" className="mt-3 inline-block text-sm font-bold text-(--color-primary) hover:underline">
              كل أرقام الدعم ←
            </Link>
          </Reveal>

          <Reveal delay={0.18} className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-(--color-accent-blue) text-xl text-(--color-primary)">
              <LuShieldCheck />
            </span>
            <h2 className="mt-3 font-bold">خصوصيتك محفوظة</h2>
            <p className="mt-1 text-[15px] leading-7 text-(--color-muted)">
              بياناتك بتفضل في المتصفح ومبتتبعتش لأي جهة. اقرأ <Link to="/privacy" className="font-bold text-(--color-primary) hover:underline">سياسة الخصوصية</Link>.
            </p>
          </Reveal>

          {CONTACT_EMAIL && (
            <Reveal delay={0.26} className="flex items-center gap-3 rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-5">
              <LuMail className="shrink-0 text-xl text-(--color-primary)" aria-hidden="true" />
              <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className="truncate text-sm font-bold text-(--color-primary) hover:underline">
                {CONTACT_EMAIL}
              </a>
            </Reveal>
          )}
        </aside>
      </section>
    </main>
  );
}

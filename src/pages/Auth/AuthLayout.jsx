import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LuShieldCheck, LuLeaf, LuCheck } from "react-icons/lu";
import MuiRtlProvider from "./MuiRtlProvider";

const tips = ["لا تشارك رمز التحقق مع أي شخص", "اختر كلمة مرور لا تستخدمها في مكان آخر"];

/** اللوحة الزرقاء الجانبية — ثابتة في كل صفحات الدخول */
function SidePanel() {
  return (
    <aside className="relative hidden overflow-hidden bg-linear-to-b from-(--color-sidebar) to-(--color-primary) p-10 text-white md:flex md:flex-col md:justify-center">
      <span aria-hidden="true" className="pointer-events-none absolute -inset-e-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 -inset-s-14 h-60 w-60 rounded-full border border-white/10" />

      <div className="relative text-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
          className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/12 text-2xl"
        >
          <LuShieldCheck />
        </motion.span>
        <h2 className="mt-8 text-3xl font-medium">مساحتك تبقى آمنة</h2>
        <p className="mx-auto mt-3 max-w-xs text-[15px] leading-7 text-white/70">
          نستخدم رمز تحقق لمرة واحدة للتأكد من هويتك قبل تغيير كلمة المرور.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-white/85">
          {tips.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="flex items-center justify-center gap-2"
            >
              <LuCheck className="shrink-0 text-white/70" aria-hidden="true" />
              {t}
            </motion.li>
          ))}
        </ul>
      </div>

      <span className="absolute bottom-6 inset-e-6 grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-2xl text-white/80" aria-hidden="true">
        <LuLeaf />
      </span>
    </aside>
  );
}

/** تخطيط صفحات الدخول والتسجيل واستعادة الحساب: كارت مقسوم (جوّه الـ Layout بالـ Navbar والـ Footer) */
export default function AuthLayout() {
  const { pathname } = useLocation();

  return (
    <MuiRtlProvider>
      <div className="flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,var(--color-primary-soft),transparent_55%)] px-4 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-(--color-surface) shadow-(--shadow-lift) md:grid-cols-2"
        >
          <section className="p-6 sm:p-10">
            <Suspense fallback={<div className="skeleton h-96" />}>
              <motion.div
                key={pathname}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Outlet />
              </motion.div>
            </Suspense>
          </section>
          <SidePanel />
        </motion.div>
      </div>
    </MuiRtlProvider>
  );
}

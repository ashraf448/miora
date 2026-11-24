import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LuShieldCheck, LuLeaf, LuCheck } from "react-icons/lu";
import MuiRtlProvider from "./MuiRtlProvider";

const tips = ["لا تشارك رمز التحقق مع أي شخص", "اختر كلمة مرور لا تستخدمها في مكان آخر"];

/** اللوحة الزرقاء الجانبية — ثابتة في كل صفحات الدخول */
function SidePanel() {
  return (
    <aside className="relative hidden overflow-hidden bg-[linear-gradient(119deg,var(--color-sidebar)_6%,var(--color-primary)_94%)] px-9 py-12 text-white md:flex md:flex-col md:justify-center">
      <span aria-hidden="true" className="pointer-events-none absolute -inset-e-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 -inset-s-14 h-45 w-45 rounded-full border border-white/12" />

      <div className="relative">
        <div className="flex items-center gap-4">
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
            className="grid h-15.5 w-15.5 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 text-3xl"
          >
            <LuShieldCheck />
          </motion.span>
          <h2 className="text-[28px] font-medium leading-tight">مساحتك تبقى آمنة</h2>
        </div>
        <p className="mt-6 text-sm leading-7 text-[#d0d8f3]">
          نستخدم رمز تحقق لمرة واحدة للتأكد من هويتك قبل تغيير كلمة المرور.
        </p>

        <ul className="mt-5 space-y-2 text-[13px] text-[#e0e5f8]">
          {tips.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <LuCheck className="shrink-0 text-white/70" aria-hidden="true" />
              {t}
            </motion.li>
          ))}
        </ul>
      </div>

      <span className="absolute bottom-6 inset-e-6 grid h-19.5 w-19.5 place-items-center rounded-full bg-white/7 text-[42px] text-white/80" aria-hidden="true">
        <LuLeaf />
      </span>
    </aside>
  );
}

/** تخطيط صفحات الدخول والتسجيل واستعادة الحساب: كارت مقسوم (جوّه الـ Layout بالـ Navbar والـ Footer) */
export default function AuthLayout() {
  const { pathname } = useLocation();
  const isRegister = pathname === "/register";

  return (
    <MuiRtlProvider>
      <div
        className={`flex items-center justify-center bg-[linear-gradient(to_bottom,var(--color-background),transparent_8rem),radial-gradient(ellipse_at_top_right,var(--color-primary-soft),transparent_55%)] px-4 py-10 md:py-14 ${
          isRegister ? "md:px-[7.75%]" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`grid w-full overflow-hidden rounded-3xl bg-(--color-surface) shadow-(--shadow-lift) ${
            isRegister ? "max-w-[1600px] md:grid-cols-[2.5fr_1fr]" : "max-w-4xl md:grid-cols-2"
          }`}
        >
          <section className="p-6 sm:px-12 sm:py-10">
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

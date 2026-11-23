import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import logo from "../../assets/images/miora.png";
import useAuth from "../../zustand/AuthSlice";
import { preloadRoute } from "../../routes/lazyPages";

const links = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/addiction", label: "فهم الإدمان" },
  { to: "/awareness", label: "المحتوى التوعوي" },
  { to: "/relax", label: "الاسترخاء" },
  { to: "/ai", label: "المساعد الذكي" },
  { to: "/journal", label: "مذكراتي" },
];

function DesktopLink({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      onMouseEnter={() => preloadRoute(to)}
      onFocus={() => preloadRoute(to)}
      className="relative rounded-full px-3.5 py-2 text-[15px] font-medium"
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 rounded-full bg-(--color-primary)"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span
            className={`relative z-10 transition-colors duration-200 ${
              isActive ? "font-bold text-white" : "text-(--color-muted) hover:text-(--color-primary)"
            }`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  // المنيو "مفتوحة" فقط لو اتفتحت على نفس الصفحة الحالية، فبتتقفل تلقائيًا عند التنقل
  const { pathname } = useLocation();
  const [menuPath, setMenuPath] = useState(null);
  const menuOpen = menuPath === pathname;
  const setMenuOpen = (open) => setMenuPath(open ? pathname : null);
  const [scrolled, setScrolled] = useState(false);

  const currentUser = useAuth((s) => s.currentUser);
  const logout = useAuth((s) => s.logoutHandler);
  const firstName = currentUser?.userName?.trim().split(" ")[0];

  // ظل أقوى لما المستخدم ينزل بالصفحة
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc + قفل التمرير أثناء فتح المنيو
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuPath(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-[88rem] px-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="التنقل الرئيسي"
        className={`flex items-center justify-between gap-3 rounded-full border border-white/40 px-4 py-2.5 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 md:px-6 ${
  scrolled ? "bg-white/40 shadow-(--shadow-header)" : "bg-white/25 shadow-(--shadow-card)"
}`}
      >
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="ميورا — الصفحة الرئيسية">
          <img src={logo} alt="" width="48" height="48" className="h-10 w-10 md:h-11 md:w-11" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <DesktopLink {...l} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-full bg-(--color-primary) text-base font-bold text-white"
              >
                {firstName?.[0] ?? "م"}
              </span>
              <span className="hidden text-[15px] font-medium text-(--color-ink) xl:block">
                أهلًا، {firstName}
              </span>
              <button
                type="button"
                onClick={logout}
                aria-label="تسجيل الخروج"
                title="تسجيل الخروج"
                className="grid h-9 w-9 place-items-center rounded-full text-xl text-(--color-muted) transition hover:bg-(--color-primary-soft) hover:text-(--color-primary)"
              >
                <MdLogout />
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-1 sm:flex">
              <Link
                to="/login"
                onMouseEnter={() => preloadRoute("/login")}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-(--color-muted) transition hover:text-(--color-primary)"
              >
                دخول
              </Link>
              <Link
                to="/register"
                onMouseEnter={() => preloadRoute("/register")}
                className="rounded-full bg-(--color-primary) px-5 py-2 text-[15px] font-bold text-white shadow-(--shadow-card) transition hover:bg-(--color-primary-dark)"
              >
                حساب جديد
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-full text-xl transition hover:bg-(--color-primary-soft) lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-100 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
              <motion.aside
                role="dialog"
                aria-modal="true"
                aria-label="القائمة"
                className="absolute inset-y-0 inset-s-0 flex w-[82%] max-w-sm flex-col bg-(--color-surface) p-6 shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 320 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-(--color-primary)">القائمة</span>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="إغلاق القائمة"
                    className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-(--color-primary-soft)"
                  >
                    <FaTimes />
                  </button>
                </div>

                <ul className="flex flex-col gap-1">
                  {links.map((l, i) => (
                    <motion.li
                      key={l.to}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.05 }}
                    >
                      <NavLink
                        to={l.to}
                        end={l.end}
                        className={({ isActive }) =>
                          `block rounded-xl px-4 py-3 text-lg transition ${
                            isActive
                              ? "bg-(--color-primary) font-bold text-white"
                              : "text-(--color-ink) hover:bg-(--color-primary-soft)"
                          }`
                        }
                      >
                        {l.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-6">
                  {currentUser ? (
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="rounded-xl border border-(--color-border) px-5 py-3 font-bold transition hover:border-(--color-primary) hover:text-(--color-primary)"
                    >
                      تسجيل الخروج
                    </button>
                  ) : (
                    <>
                      <Link
                        to="/register"
                        className="rounded-xl bg-(--color-primary) px-5 py-3 text-center font-bold text-white"
                      >
                        حساب جديد
                      </Link>
                      <Link
                        to="/login"
                        className="rounded-xl border border-(--color-border) px-5 py-3 text-center font-bold"
                      >
                        تسجيل الدخول
                      </Link>
                    </>
                  )}
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}

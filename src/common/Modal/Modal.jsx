import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";


export default function Modal({ open, onClose, title, children, maxWidth = "max-w-2xl", labelledBy = "modal-title" }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingInlineEnd = `${scrollbar}px`;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingInlineEnd = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            className={`max-h-[88vh] w-full ${maxWidth} overflow-y-auto rounded-3xl bg-(--color-surface) p-6 shadow-2xl outline-none md:p-8`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.18 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h2 id={labelledBy} className="text-2xl font-bold leading-snug text-(--color-ink)">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="إغلاق"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-2xl text-(--color-muted) transition hover:bg-(--color-primary-soft) hover:text-(--color-primary)"
              >
                <MdClose />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

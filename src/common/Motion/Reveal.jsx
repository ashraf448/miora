import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

const container = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const viewport = { once: true, margin: "-60px" };

export function Reveal({ as = "div", delay = 0, y = 24, className, children, ...rest }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function Stagger({ as = "div", stagger = 0.08, delay = 0, className, children, ...rest }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ as = "div", variants = fadeUp, className, children, ...rest }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp className={className} variants={variants} {...rest}>
      {children}
    </Comp>
  );
}

/** عنوان قسم موحّد */
export function SectionHeading({ eyebrow, title, text, center = false, className = "" }) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : "text-start"} max-w-2xl ${className}`}>
      {eyebrow && <p className="mb-3 text-base font-bold text-(--color-primary)">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-lg leading-8 text-(--color-muted)">{text}</p>}
    </Reveal>
  );
}

import { Reveal } from "../../common/Motion/Reveal";

export default function NoResults({ title, text = "جرّب كلمة بحث مختلفة، أو اعرض كل المحتوى.", icon = "🔎", resetLabel, onReset }) {
  return (
    <Reveal className="rounded-2xl border border-(--color-border) bg-(--color-surface) px-5 py-16 text-center">
      <div className="mb-4 text-5xl">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      {text && <p className="mt-3 text-(--color-muted)">{text}</p>}
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white transition hover:opacity-90"
        >
          {resetLabel}
        </button>
      )}
    </Reveal>
  );
}

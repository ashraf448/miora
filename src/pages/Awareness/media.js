export const kindLabel = { video: "فيديو", podcast: "بودكاست" };

export const mediaPath = (item) => `/awareness/${item.kind}/${item.id}`;

export function excerpt(text, max = 150) {
  const first = text.split(/\n\s*\n/)[0].replace(/\s+/g, " ").trim();
  if (first.length <= max) return first;
  const cut = first.slice(0, max);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), max * 0.6))}…`;
}

import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaHeadphones, FaVideo } from "react-icons/fa6";
import { excerpt, kindLabel, mediaPath } from "./media";

const kindIcon = { video: FaVideo, podcast: FaHeadphones };

export default function MediaCard({ item, headingLevel: Heading = "h3" }) {
  const Icon = kindIcon[item.kind];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card) transition-shadow duration-300 hover:shadow-(--shadow-lift)">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-(--color-primary-soft) text-xl text-(--color-primary)">
          <Icon aria-hidden="true" />
        </span>
        <span className="rounded-full bg-(--color-background) px-3 py-1 text-xs font-bold">{kindLabel[item.kind]}</span>
        <span className="min-w-0 truncate text-sm text-(--color-muted)">{item.topic}</span>
      </div>
      <Heading className="mt-4 line-clamp-2 text-xl font-bold leading-snug text-(--color-ink)">{item.title}</Heading>
      <p className="mt-1 truncate text-sm text-(--color-muted)">{item.source}</p>
      <p className="mt-3 line-clamp-3 text-lg leading-7 text-(--color-muted)">{excerpt(item.details ?? item.description)}</p>
      <Link
        to={mediaPath(item)}
        className="mt-auto inline-flex items-center gap-2 pt-5 font-bold text-(--color-primary) transition-all hover:gap-3"
      >
        {item.kind === "video" ? "شاهد الحلقة" : "استمع للحلقة"}
        <span className="sr-only">: {item.title}</span>
        <FaArrowLeftLong aria-hidden="true" />
      </Link>
    </article>
  );
}

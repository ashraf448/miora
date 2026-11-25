import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaPlay, FaVideo } from "react-icons/fa6";
import { excerpt, mediaPath, playPath } from "./media";

export default function MediaCard({ item, headingLevel: Heading = "h3" }) {
  const [failed, setFailed] = useState(false);
  const hasImage = item.image && !failed;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-(--shadow-card) transition-shadow duration-300 hover:shadow-(--shadow-lift)">
      <Link
        to={playPath(item)}
        aria-hidden="true"
        tabIndex={-1}
        className="relative block aspect-video shrink-0 overflow-hidden bg-(--color-primary-soft)"
      >
        {hasImage ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-5xl text-(--color-primary)" aria-hidden="true">
            <FaVideo />
          </div>
        )}
        <span className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white text-xl text-(--color-primary) shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-250 group-hover:scale-[1.08]">
          <FaPlay className="translate-x-0.5" aria-hidden="true" />
        </span>
        <span className="absolute inset-e-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-(--color-primary-dark)">
          {item.topic}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-(--color-muted)">{item.source}</p>
        <Heading className="mt-3 line-clamp-2 text-2xl font-bold leading-snug text-(--color-ink)">{item.title}</Heading>
        <p className="mt-2 line-clamp-2 text-lg leading-7 text-(--color-muted)">{excerpt(item.details ?? item.description)}</p>
        <Link
          to={mediaPath(item)}
          className="mt-auto inline-flex items-center gap-2 pt-5 font-bold text-(--color-primary) transition-all hover:gap-3"
        >
          شاهد الفيديو
          <span className="sr-only">: {item.title}</span>
          <FaArrowLeftLong aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

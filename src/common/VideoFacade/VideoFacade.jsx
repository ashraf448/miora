import { useState } from "react";
import { preconnect } from "react-dom";
import { FaPlay } from "react-icons/fa6";

const EMBED_ORIGIN = "https://www.youtube-nocookie.com";
const CARD =
  "relative block aspect-video w-full overflow-hidden rounded-3xl bg-[linear-gradient(135deg,var(--color-sidebar),var(--color-primary))] shadow-(--shadow-lift)";

export default function VideoFacade({ videoId, title, badge, hint }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={CARD}>
        <iframe
          src={`${EMBED_ORIGIN}/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  const warmUp = () => preconnect(EMBED_ORIGIN);

  const content = (
    <>
      {videoId && (
        <>
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            width="480"
            height="360"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-(--color-sidebar)/30" />
        </>
      )}
      <span aria-hidden="true" className="absolute -bottom-35 -inset-s-20 h-80 w-80 rounded-full bg-white/6" />
      <span aria-hidden="true" className="absolute -top-22.5 -inset-e-15 h-60 w-60 rounded-full bg-white/6" />
      <span className="absolute inset-s-5 top-5 rounded-full border border-white/20 bg-white/14 px-3.5 py-1.5 text-[13px] text-white backdrop-blur-[6px]">
        {badge}
      </span>
      <span className="absolute inset-0 m-auto grid h-17 w-17 place-items-center rounded-full bg-white text-[26px] text-(--color-primary) shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-250 group-hover:scale-[1.08] sm:h-23 sm:w-23 sm:text-[34px]">
        <FaPlay className="translate-x-0.5" aria-hidden="true" />
      </span>
      <span className="absolute inset-x-7 bottom-6 text-start text-white">
        <b className="block text-base font-bold sm:text-[22px]">{title}</b>
        <span className="text-sm opacity-80">{hint}</span>
      </span>
    </>
  );

  if (!videoId) return <div className={`group ${CARD}`}>{content}</div>;

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      onPointerEnter={warmUp}
      onFocus={warmUp}
      aria-label={`تشغيل: ${title}`}
      className={`group cursor-pointer ${CARD}`}
    >
      {content}
    </button>
  );
}

import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import VideoFacade from "../../common/VideoFacade/VideoFacade";

const APPLE_SANDBOX = "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation";

function PodcastPlayer({ item }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={item.embed}
        title={`بودكاست: ${item.title}`}
        allow="autoplay *; encrypted-media *; clipboard-write"
        sandbox={APPLE_SANDBOX}
        className="h-44 w-full rounded-2xl border-0"
      />
    );
  }

  return (
    <div className="grid place-items-center rounded-3xl bg-[linear-gradient(135deg,var(--color-sidebar),var(--color-primary))] px-6 py-14 shadow-(--shadow-lift)">
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-lg font-bold text-(--color-primary) transition hover:scale-105"
      >
        <FaPlay aria-hidden="true" />
        استمع هنا
        <span className="sr-only">: {item.title}</span>
      </button>
    </div>
  );
}

export default function MediaPlayer({ item }) {
  if (item.kind === "video") {
    return <VideoFacade videoId={item.videoId} title={item.title} badge="فيديو" hint="اضغط للتشغيل" />;
  }
  return <PodcastPlayer item={item} />;
}

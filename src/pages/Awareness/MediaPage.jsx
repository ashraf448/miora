import { Link, useParams, useSearchParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { videos } from "../../data/videos";
import { addictionVideos } from "../../data/addictionVideos";
import VideoFacade from "../../common/VideoFacade/VideoFacade";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ErrorPage from "../../common/ErrorPage/ErrorPage";
import DisclaimerNote from "./DisclaimerNote";
import MediaCard from "./MediaCard";

const catalog = [...videos, ...addictionVideos];

export default function MediaPage() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const item = catalog.find((entry) => entry.id === id);
  useDocumentTitle(item?.title ?? "المحتوى التوعوي");

  if (!item) return <ErrorPage notFound />;

  const paragraphs = (item.details ?? item.description).split(/\n\s*\n/);
  const more = catalog.filter((entry) => entry.library === item.library && entry.id !== item.id).slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-10">
      <Link to={`/awareness?type=${item.library}`} className="inline-flex items-center gap-2 font-bold text-(--color-primary) hover:underline">
        <FaArrowRightLong aria-hidden="true" />
        العودة إلى المكتبة
      </Link>

      <header className="mx-auto max-w-3xl pt-8 text-center">
        <p className="text-sm font-bold text-(--color-primary)">
          فيديو · {item.topic}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{item.title}</h1>
        <p className="mt-4 text-lg leading-8 text-(--color-muted) md:text-xl">{item.description}</p>
        <p className="mt-2 text-sm text-(--color-muted)">{item.source}</p>
      </header>

      <div className="mx-auto mt-10 max-w-3xl">
        <VideoFacade
          key={item.id}
          videoId={item.videoId}
          title={item.title}
          badge="فيديو"
          hint="اضغط للتشغيل"
          autoPlay={params.get("play") === "1"}
        />
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <section aria-labelledby="about-episode">
          <h2 id="about-episode" className="text-2xl font-bold md:text-3xl">
            عن هذا الفيديو
          </h2>
          {paragraphs.map((text) => (
            <p key={text} className="mt-3 text-lg leading-9">
              {text}
            </p>
          ))}
          <p className="mt-4 text-(--color-muted)">المصدر: {item.source}.</p>
        </section>
        <DisclaimerNote>هذا الفيديو يعبّر عن رأي أصحابها وتُعرض هنا للتوعية، ولا تغني عن التشخيص أو العلاج المتخصص.</DisclaimerNote>
      </div>

      {more.length > 0 && (
        <section aria-labelledby="more-episodes" className="mt-20">
          <h2 id="more-episodes" className="text-2xl font-bold md:text-3xl">
            فيديوهات أخرى
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((entry) => (
              <li key={entry.id}>
                <MediaCard item={entry} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

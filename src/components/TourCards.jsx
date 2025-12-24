export default function TourCards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className=" mb-12 text-center text-3xl sm:text-4xl font-(--font-heading) text-slate-900">
          Popular Tours
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden transition hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img
                src="/winter-tour.jpg"
                alt="Winter Expedition"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-(--font-heading) text-slate-900">
                Winter Expedition
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-slate-600 font-(--font-body)">
                A frozen journey across Lake Baikal’s crystal-clear ice, guided
                by local experts.
              </p>

              <span className="text-sm font-medium text-slate-900">
                From $480
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden transition hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img
                src="/summer-tour.jpg"
                alt="Summer Trek"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-(--font-heading) text-slate-900">
                Summer Trek
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-slate-600 font-(--font-body)">
                Explore forest trails and mountain viewpoints during Baikal’s
                vibrant summer season.
              </p>

              <span className="text-sm font-medium text-slate-900">
                From $320
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden transition hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img
                src="/cultural-tour.jpg"
                alt="Cultural Journey"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-(--font-heading) text-slate-900">
                Cultural Journey
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-slate-600 font-(--font-body)]">
                Experience local traditions, villages, and stories around Lake
                Baikal.
              </p>

              <span className="text-sm font-medium text-slate-900">
                From $260
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

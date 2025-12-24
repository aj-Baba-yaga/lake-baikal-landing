export default function Tour() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className=" mb-6 text-3xl sm:text-4xl font-(--font-heading) text-slate-900">
            Tours & Experiences
          </h2>

          <p className=" max-w-md text-lg leading-relaxed text-slate-600 font-(--font-body)">
            Discover guided tours across Lake Baikal, designed for explorers who
            want depth, beauty, and meaning. Each journey blends nature,
            culture, and silence.
          </p>
        </div>

        <div className="relative h-80 sm:h-100 rounded-2xl overflow-hidden">
          <img
            src="/lake-baikal-map.jpg"
            alt="Lake Baikal Map"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

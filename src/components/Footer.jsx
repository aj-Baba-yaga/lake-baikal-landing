export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-6 text-center">
        <h3 className="text-xl font-(--font-heading) text-white">
          Baikal Expeditions
        </h3>

        <p className="max-w-md text-sm text-white/60 font-(--font-body)">
          Curated journeys across the world’s deepest and most mysterious
          freshwater lake. Designed for explorers who value depth and silence.
        </p>

        <div className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Tours
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <p className="mt-6 text-xs text-white/40">
          © 2025 Baikal Expeditions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

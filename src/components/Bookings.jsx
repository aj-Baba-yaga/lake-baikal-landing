export default function Bookings() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-3xl sm:text-4xl font-(--font-heading) text-white">
          Book Your Journey
        </h2>

        <p className="mb-12 text-lg text-white/70 font-(--font-body)">
          Reserve your place on a guided experience across Lake Baikal.
        </p>

        <form>
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-left">
            <div className="grid gap-6">
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Select Tour
                </label>
                <select className="w-full rounded-lg bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-white/40">
                  <option>Winter Expedition</option>
                  <option>Summer Trek</option>
                  <option>Cultural Journey</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-full bg-white py-3 text-sm font-medium text-slate-900 transition hover:bg-white/90"
              >
                Request Booking
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

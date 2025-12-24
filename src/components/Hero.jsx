import { motion } from "framer-motion";

import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <Navbar />
      <img
        src="/lake-baikal.jpg"
        alt="Lake Baikal"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className=" text-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-14 py-12">
          <h1 className="  mb-4 text-[64px] tracking-[0.4em] text-white font-(--font-heading)">
            BAIKAL
          </h1>
          <p className="text-lg text-white/80 font-(--font-body)">
            Explore the deepest lake on Earth
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-14 py-12"
          >
            <button className=" rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/70 hover:cursor-pointer">
              Watch Documentary
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

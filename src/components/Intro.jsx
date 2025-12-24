import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="bg-white py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className=" mb-6 text-3xl sm:text-4xl font-(--font-heading) text-slate-900">
          About Lake Baikal
        </h2>

        <p className=" text-lg leading-relaxed text-slate-600 font-(--font-body)">
          Lake Baikal is the world's deepest and oldest freshwater lake, holding
          nearly 20% of the planet's unfrozen fresh water. Surrounded by
          mountains and forests, it is one of Earth's most pristine and
          mysterious natural wonders.
        </p>
      </motion.div>
    </section>
  );
}

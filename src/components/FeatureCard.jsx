import { motion } from "framer-motion";

export default function FeatureCard({ title, desc, image, tag }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative h-[230px] rounded-2xl overflow-hidden
                 shadow-md hover:shadow-2xl transition-all duration-500"
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover
                   group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t
                      from-black/80 via-black/55 to-black/25" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                      transition duration-500
                      bg-gradient-to-br from-orange-500/20 to-transparent" />

            <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">

                <span className="w-fit text-xs font-medium px-3 py-1 rounded-full
                         bg-white/20 backdrop-blur-md
                         border border-white/20">
                    {tag}
                </span>

                <div>
                    <h3 className="text-xl font-semibold mb-2 leading-snug">
                        {title}
                    </h3>

                    <p className="text-sm text-white/80 mb-4">
                        {desc}
                    </p>

                    <span className="inline-flex items-center gap-1 text-sm font-medium
                           text-orange-400 group-hover:gap-2 transition-all">
                        View Details →
                    </span>
                </div>

            </div>
        </motion.div>
    );
}

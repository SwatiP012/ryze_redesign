import team1 from "../assets/case-studies/case1.jpg";
import team2 from "../assets/case-studies/case2.jpg";
import team3 from "../assets/case-studies/case3.jpg";

export default function CaseStudies() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-28">

            <div className="text-center mb-20">
                <p className="text-lg text-orange-600 font-medium mb-3">
                    Case Studies
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Real results from teams using Ryze
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    See how companies scale ads, reduce wasted spend, and improve ROI with AI.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">

                {[
                    {
                        image: team1,
                        title: "Motif used Ryze audits to win new retainers",
                        desc: "Turned audits into a repeatable sales asset with clearer proof and faster delivery."
                    },
                    {
                        image: team2,
                        title: "SaaS company increased Google Search ROAS to 4.3x in 8 weeks",
                        desc: "Built predictable growth without adding headcount or slowing product velocity."
                    },
                    {
                        image: team3,
                        title: "E-commerce brand scaled Google + Meta on autopilot",
                        desc: "Automated optimization cycles across Search, Shopping, and Meta ads."
                    }
                ].map((item, i) => (
                    <div
                        key={i}
                        className="group relative rounded-2xl overflow-hidden bg-white
                       shadow-lg hover:shadow-2xl transition-all duration-500"
                    >

                        <div className="relative h-[260px] overflow-hidden">
                            <img
                                src={item.image}
                                alt="case study"
                                className="w-full h-full object-cover
                           group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t
                              from-black/70 via-black/30 to-transparent
                              opacity-80 group-hover:opacity-90 transition" />
                        </div>

                        <div className="absolute bottom-0 p-6 translate-y-6
                            group-hover:translate-y-0 transition-all duration-500">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-200 opacity-0
                            group-hover:opacity-100 transition-opacity duration-500">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-20">
                <h3 className="text-2xl font-semibold mb-6">
                    Ready to achieve similar results?
                </h3>
                <button className="px-8 py-3 rounded-full bg-black text-white font-medium
                           hover:scale-105 hover:shadow-xl transition">
                    Book a Demo
                </button>
            </div>

        </section>
    );
}


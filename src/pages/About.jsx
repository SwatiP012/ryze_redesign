export default function About() {
    return (
        <section className="relative overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.12),transparent_55%)] -z-10" />

            <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
                <p className="text-sm font-semibold text-orange-600 mb-3">
                    About Ryze
                </p>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Helping teams scale ads <br />
                    <span className="text-orange-600 relative inline-block">
                        with confidence
                        <span className="absolute left-0 -bottom-2 w-full h-1 bg-orange-200 rounded-full" />
                    </span>
                </h1>

                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Ryze removes guesswork from paid advertising. We use AI to help teams
                    optimize faster, reduce wasted spend, and scale what actually works.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12 items-center">

                <div className="bg-orange-50 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Marketing teams waste time and budget on underperforming ads,
                        unclear data, and manual optimization.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Ryze automates those decisions using AI — so teams can focus on
                        strategy, creativity, and growth instead of spreadsheets.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-10 border shadow-sm hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-6">Why teams choose Ryze</h3>

                    <ul className="space-y-4">
                        {[
                            "AI-driven decisions, not guesswork",
                            "Works across Google, Meta & more",
                            "Built for marketers, not data scientists",
                            "Transparent insights & real results",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                                <span className="w-3 h-3 mt-2 rounded-full bg-orange-500 group-hover:scale-125 transition" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-28">
                <h2 className="text-3xl font-extrabold text-center mb-12">
                    Our Values
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Clarity",
                            desc: "Clear insights over confusing dashboards.",
                        },
                        {
                            title: "Speed",
                            desc: "Automate optimization and move faster.",
                        },
                        {
                            title: "Impact",
                            desc: "Focus on metrics that drive revenue.",
                        },
                        {
                            title: "Trust",
                            desc: "Transparent data. Measurable results.",
                        },
                    ].map((v, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-white border hover:-translate-y-2 transition-all hover:shadow-xl"
                        >
                            <div className="w-12 h-12 mb-4 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                                <div className="w-5 h-5 bg-orange-500 rounded-full group-hover:bg-white transition" />
                            </div>

                            <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                            <p className="text-gray-600">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="relative bg-black rounded-3xl py-20 px-10 text-center overflow-hidden">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.25),transparent_60%)]" />

                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Ready to scale smarter?
                    </h2>

                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Join teams using Ryze to optimize ads, reduce waste,
                        and improve ROI with AI-powered automation.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
                            Get Started Free
                        </button>
                        <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}

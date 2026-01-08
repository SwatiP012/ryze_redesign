import GoogleAds from "../assets/logos/google-ads.svg";
import Meta from "../assets/logos/meta.svg";
import OpenAI from "../assets/logos/openai.svg";
import Perplexity from "../assets/logos/perplexity.svg";
import LinkedIn from "../assets/logos/linkedin.svg";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-12">

            <div
                className="absolute top-[-140px] left-1/2 -translate-x-1/2
        w-[720px] h-[720px] bg-orange-500/10 blur-[160px]
        rounded-full animate-pulse -z-10"
            />

            <div className="absolute inset-0 -z-20
  bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.18),transparent_55%)]" />


            <div className="max-w-[1200px] mx-auto px-6 text-center">

                <p className="text-lg font-medium text-orange-600 mb-4 fade-up delay-1">
                    AI-Powered Ad Optimization Platform
                </p>

                <h1 className="text-[56px] md:text-[72px] font-extrabold leading-tight tracking-tight mb-6 fade-up delay-2">
                    Smarter Ads.{" "}
                    <span className="text-orange-600 relative">
                        Better ROI.
                        <span className="absolute inset-0 bg-orange-500/30 blur-xl -z-10"></span>
                    </span>
                    <br />
                    Powered by AI.
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 fade-up delay-3">
                    Ryze analyzes, generates, and optimizes ad campaigns across platforms
                    so marketing teams save time and maximize performance.
                </p>

                <div className="flex justify-center items-center gap-4 mb-6 fade-up delay-4">
                    <button
                        className="px-7 py-3 rounded-full bg-black text-white font-medium
            hover:scale-[1.05] hover:-translate-y-[1px]
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            transition-all duration-300"
                    >
                        Get Started Free
                    </button>

                    <button
                        className="px-7 py-3 rounded-full border border-black font-medium
            hover:bg-black hover:text-white transition"
                    >
                        Book a Demo
                    </button>
                </div>

                <p className="text-sm text-gray-500 mb-6 fade-up delay-4">
                    No credit card required · Works with Google & Meta ads
                </p>

                <div className="mt-6 fade-up delay-4">

                    <div className="flex justify-center mb-4">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <span className="h-px w-12 bg-gray-300"></span>
                            Trusted by teams running ads on
                            <span className="h-px w-12 bg-gray-300"></span>
                        </div>
                    </div>

                    <div
                        className="flex justify-center gap-10 flex-wrap
            bg-white/60 backdrop-blur-sm rounded-xl py-4 px-6
            max-w-[900px] mx-auto"
                    >
                        {[GoogleAds, Meta, OpenAI, Perplexity, LinkedIn].map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                className="h-7 opacity-70 grayscale
                hover:opacity-100 hover:grayscale-0
                transition-all duration-300"
                                alt="brand"
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

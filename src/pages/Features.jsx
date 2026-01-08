import FeatureCard from "../components/FeatureCard";

import keyword from "../assets/features/keyword.jpg";
import creative from "../assets/features/creative.jpg";
import audit from "../assets/features/audit.jpg";
import budget from "../assets/features/budget.png";
import tracking from "../assets/features/con_tracking.jpg";
import monitoring from "../assets/features/monitoring.jpg";
import ai from "../assets/features/ai.jpg";
import multi from "../assets/features/multi.jpg";
import competitive from "../assets/features/competitive.jpg";

export default function Features() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-24">

            <div className="absolute -top-32 left-1/2 -translate-x-1/2
                      w-[700px] h-[700px]
                      bg-orange-500/10 blur-[160px]
                      rounded-full -z-10" />

            <div className="text-center mb-14">
                <p className="text-lg font-medium text-orange-600 mb-3">
                    How Ryze Works
                </p>

                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Powerful features to{" "}
                    <span className="text-orange-600">scale ads</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Everything you need to analyze, optimize, and grow ad performance with AI.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                    title="AI Keyword Optimization"
                    desc="Automatically find high-intent keywords and remove wasted spend."
                    image={keyword}
                    tag="Optimization"
                />

                <FeatureCard
                    title="Creative Generation"
                    desc="Generate and test ad creatives using AI."
                    image={creative}
                    tag="Creatives"
                />

                <FeatureCard
                    title="Performance Audits"
                    desc="Instantly detect issues across ads and tracking."
                    image={audit}
                    tag="Insights"
                />

                <FeatureCard
                    title="Smart Budget Reallocation"
                    desc="Shift budget to campaigns that deliver ROI."
                    image={budget}
                    tag="ROI"
                />

                <FeatureCard
                    title="Conversion Tracking"
                    desc="Track every click, conversion, and revenue source accurately."
                    image={tracking}
                    tag="Tracking"
                />

                <FeatureCard
                    title="Real-time Monitoring"
                    desc="Get alerts on performance drops and anomalies."
                    image={monitoring}
                    tag="Monitoring"
                />

                <FeatureCard
                    title="AI-Powered Insights"
                    desc="Leverage AI to uncover hidden growth opportunities."
                    image={ai}
                    tag="AI"
                />

                <FeatureCard
                    title="Multi-Channel Support"
                    desc="Manage ads across Google, Facebook, Instagram, and more."
                    image={multi}
                    tag="Integration"
                />

                <FeatureCard
                    title="Competitive Analysis"
                    desc="Spy on competitors’ ad strategies and performance."
                    image={competitive}
                    tag="Analysis"
                />
            </div>
        </section>
    );
}

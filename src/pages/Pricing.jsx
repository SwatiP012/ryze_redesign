import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section className="relative overflow-hidden py-28">

            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[160px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-sm font-semibold text-orange-600 mb-3 uppercase tracking-wide">
                        Pricing
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Simple pricing that <span className="text-orange-600">scales with you</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Start free, upgrade when you’re ready. No hidden fees. Cancel anytime.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10 items-stretch">

                    <motion.div
                        whileHover={{ y: -6 }}
                        className="rounded-2xl border bg-white p-8 hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold mb-1">Starter</h3>
                        <p className="text-gray-500 mb-6">For small teams getting started</p>

                        <div className="text-4xl font-extrabold mb-6">
                            $0<span className="text-lg text-gray-400 font-medium">/mo</span>
                        </div>

                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>✓ Keyword Optimization</li>
                            <li>✓ Performance Audits</li>
                            <li>✓ Basic Insights</li>
                            <li>✓ 1 Ad Account</li>
                        </ul>

                        <button className="w-full py-3 rounded-full border font-medium
                            hover:bg-black hover:text-white transition">
                            Get Started Free
                        </button>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="relative rounded-2xl p-8 bg-gradient-to-br
                            from-orange-500 to-orange-600 text-white shadow-2xl"
                    >
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2
                            bg-black text-white text-xs px-4 py-1 rounded-full">
                            Most Popular
                        </span>

                        <h3 className="text-xl font-semibold mb-1">Pro</h3>
                        <p className="text-orange-100 mb-6">For scaling teams & agencies</p>

                        <div className="text-4xl font-extrabold mb-6">
                            $99<span className="text-lg text-orange-100 font-medium">/mo</span>
                        </div>

                        <ul className="space-y-3 text-orange-50 mb-8">
                            <li>✓ Everything in Starter</li>
                            <li>✓ Creative Generation</li>
                            <li>✓ Smart Budget Reallocation</li>
                            <li>✓ Conversion Tracking</li>
                            <li>✓ 5 Ad Accounts</li>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-white text-black
                            font-semibold hover:scale-105 transition">
                            Start Free Trial
                        </button>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -6 }}
                        className="rounded-2xl border bg-white p-8 hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
                        <p className="text-gray-500 mb-6">For large teams & custom needs</p>

                        <div className="text-4xl font-extrabold mb-6">
                            Custom
                        </div>

                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>✓ Unlimited Ad Accounts</li>
                            <li>✓ Real-time Monitoring</li>
                            <li>✓ Competitive Analysis</li>
                            <li>✓ Dedicated Support</li>
                            <li>✓ Custom Integrations</li>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-black text-white
                            hover:scale-105 transition">
                            Book a Demo
                        </button>
                    </motion.div>

                </div>

                <p className="text-center text-sm text-gray-500 mt-16">
                    No credit card required · Cancel anytime · Secure payments
                </p>

            </div>
        </section>
    );
}

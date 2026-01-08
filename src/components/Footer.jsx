import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-orange-600 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid gap-10 md:grid-cols-4 mb-12">

                    <div>
                        <h3 className="text-xl font-extrabold mb-3">Ryze</h3>
                        <p className="text-sm text-white leading-relaxed">
                            AI-powered ad optimization platform helping teams
                            scale campaigns, reduce wasted spend, and improve ROI.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                            Product
                        </h4>
                        <ul className="space-y-2 text-sm text-white">
                            <li>
                                <Link to="/features" className="hover:text-black transition">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="hover:text-black transition">
                                    Pricing
                                </Link>
                            </li>
                            <li className="text-white cursor-not-allowed">
                                Product
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-white">
                            <li>
                                <Link to="/about" className="hover:text-black transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/case-studies" className="hover:text-black transition">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-black transition">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                            Get Started
                        </h4>
                        <p className="text-sm text-white mb-4">
                            Ready to scale smarter with AI?
                        </p>

                        <div className="flex flex-col gap-3">
                            <Link
                                to="/features"
                                className="inline-flex justify-center px-4 py-2.5
                  rounded-md bg-black text-white text-sm font-medium
                  hover:scale-[1.03] transition"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/case-studies"
                                className="inline-flex justify-center px-4 py-2.5
                  rounded-md border border-gray-300 text-sm font-medium
                  hover:bg-gray-100 transition"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="pt-6 border-t border-gray-200
          flex flex-col md:flex-row items-center justify-between gap-4
          text-sm text-white">

                    <p>© 2026 Ryze. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-black transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-black transition">
                            Terms of Service
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

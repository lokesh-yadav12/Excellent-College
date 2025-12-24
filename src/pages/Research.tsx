import React, { useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BeakerIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const Research: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const section = searchParams.get('section') || 'curriculum';

    const sectionRefs = {
        curriculum: useRef<HTMLDivElement>(null),
        teaching: useRef<HTMLDivElement>(null),
        achievements: useRef<HTMLDivElement>(null),
        calendar: useRef<HTMLDivElement>(null),
        research: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const targetRef = sectionRefs[section as keyof typeof sectionRefs];
        if (targetRef?.current) {
            setTimeout(() => {
                targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [section]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-gradient-to-r from-[#690B22] to-[#8B1538] text-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-white hover:text-primary-100 mb-8 transition-colors duration-200"
                    >
                        <ArrowLeftIcon className="h-5 w-5 mr-2" />
                        Back to Home
                    </button>
                    <div className="flex items-center gap-4 mb-6">
                        <BeakerIcon className="h-16 w-16" />
                        <h1 className="text-5xl font-bold">Research</h1>
                    </div>
                    <p className="text-xl text-gray-100 max-w-3xl">
                        Advancing knowledge through innovative research and scholarly excellence
                    </p>
                </div>
            </motion.div>

            {/* Research Council Section */}
            <section ref={sectionRefs.curriculum} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Research Council</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                The Research Council oversees and coordinates all research activities, ensuring quality,
                                ethics, and alignment with institutional goals.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Council Responsibilities</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Research policy development</li>
                                        <li>• Grant proposal review</li>
                                        <li>• Ethics approval and oversight</li>
                                        <li>• Research funding allocation</li>
                                        <li>• Quality assurance</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Council Members</h3>
                                    <p className="text-gray-700">
                                        Our council comprises distinguished faculty members, research directors,
                                        and external advisors who bring diverse expertise to guide our research initiatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Research Profile Section */}
            <section ref={sectionRefs.teaching} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Research Profile</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                Our institution has a strong research profile with significant contributions across multiple disciplines.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <div className="text-4xl font-bold text-[#690B22] mb-2">150+</div>
                                    <p className="text-gray-700">Active Research Projects</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <div className="text-4xl font-bold text-[#690B22] mb-2">500+</div>
                                    <p className="text-gray-700">Publications Annually</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <div className="text-4xl font-bold text-[#690B22] mb-2">$50M+</div>
                                    <p className="text-gray-700">Research Funding</p>
                                </div>
                            </div>
                            <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold text-[#690B22] mb-4">Research Excellence</h3>
                                <p className="text-gray-700">
                                    Our researchers are recognized globally for their contributions to science, technology,
                                    humanities, and social sciences. We maintain strong partnerships with leading institutions
                                    and industry partners worldwide.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Research Opportunities Section */}
            <section ref={sectionRefs.achievements} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Research Opportunities</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                We offer diverse research opportunities for undergraduate, graduate students, and postdoctoral fellows.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-gradient-to-br from-[#690B22] to-[#8B1538] text-white p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">For Students</h3>
                                    <ul className="space-y-2">
                                        <li>• Undergraduate research programs</li>
                                        <li>• Graduate research assistantships</li>
                                        <li>• Summer research internships</li>
                                        <li>• Thesis and dissertation support</li>
                                        <li>• Research scholarships</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-[#690B22] to-[#8B1538] text-white p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">For Faculty</h3>
                                    <ul className="space-y-2">
                                        <li>• Research grants and funding</li>
                                        <li>• Collaborative research projects</li>
                                        <li>• Sabbatical opportunities</li>
                                        <li>• Conference support</li>
                                        <li>• Research facilities access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industry Engagement Section */}
            <section ref={sectionRefs.calendar} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Industry Engagement</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                We foster strong partnerships with industry leaders to translate research into real-world applications.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Partnership Benefits</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Collaborative research projects</li>
                                        <li>• Technology transfer opportunities</li>
                                        <li>• Internship and placement programs</li>
                                        <li>• Consulting services</li>
                                        <li>• Innovation workshops</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Industry Partners</h3>
                                    <p className="text-gray-700">
                                        We collaborate with leading companies across technology, healthcare, manufacturing,
                                        and service sectors to drive innovation and create impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Major Areas of Research Section */}
            <section ref={sectionRefs.research} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Major Areas of Research</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                Our research spans multiple disciplines with focus on emerging challenges and opportunities.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-[#690B22] mb-3">Artificial Intelligence</h3>
                                    <p className="text-gray-700 text-sm">
                                        Machine learning, deep learning, and AI applications in various domains
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-[#690B22] mb-3">Biotechnology</h3>
                                    <p className="text-gray-700 text-sm">
                                        Genetic engineering, drug development, and biomedical research
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-[#690B22] mb-3">Sustainable Energy</h3>
                                    <p className="text-gray-700 text-sm">
                                        Renewable energy systems, energy storage, and environmental sustainability
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-[#690B22] mb-3">Data Science</h3>
                                    <p className="text-gray-700 text-sm">
                                        Big data analytics, predictive modeling, and business intelligence
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-[#690B22] mb-3">Healthcare Innovation</h3>
                                    <p className="text-gray-700 text-sm">
                                        Medical technology, public health, and healthcare delivery systems
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-[#690B22] mb-3">Social Sciences</h3>
                                    <p className="text-gray-700 text-sm">
                                        Human behavior, policy research, and societal development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Research;

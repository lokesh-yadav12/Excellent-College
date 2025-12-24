import React, { useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserGroupIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const Administration: React.FC = () => {
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
                        <UserGroupIcon className="h-16 w-16" />
                        <h1 className="text-5xl font-bold">Administration</h1>
                    </div>
                    <p className="text-xl text-gray-100 max-w-3xl">
                        Meet our dedicated administrative team committed to excellence in education management
                    </p>
                </div>
            </motion.div>

            {/* Registrar Section */}
            <section ref={sectionRefs.curriculum} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Registrar</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                The Registrar's Office is responsible for maintaining academic records, managing student enrollment,
                                and ensuring compliance with academic policies.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Key Responsibilities</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Student registration and enrollment</li>
                                        <li>• Academic records management</li>
                                        <li>• Transcript processing</li>
                                        <li>• Examination coordination</li>
                                        <li>• Degree certification</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Contact Information</h3>
                                    <p className="text-gray-700">
                                        <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM<br />
                                        <strong>Email:</strong> registrar@university.edu<br />
                                        <strong>Phone:</strong> +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Finance Officer Section */}
            <section ref={sectionRefs.teaching} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Finance Officer</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                The Finance Office manages all financial operations, including tuition payments, scholarships,
                                and budget administration.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Services Offered</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Tuition fee processing</li>
                                        <li>• Scholarship administration</li>
                                        <li>• Financial aid counseling</li>
                                        <li>• Payment plan arrangements</li>
                                        <li>• Budget management</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Payment Options</h3>
                                    <p className="text-gray-700">
                                        We accept various payment methods including online payments, bank transfers,
                                        and installment plans to make education accessible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dean of College Section */}
            <section ref={sectionRefs.achievements} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Dean of College</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                The Dean provides academic leadership and oversees the overall educational mission of the college.
                            </p>
                            <div className="bg-gradient-to-r from-[#690B22] to-[#8B1538] text-white p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4">Leadership Vision</h3>
                                <p className="text-lg mb-4">
                                    Our Dean is committed to fostering academic excellence, innovation in teaching,
                                    and creating an inclusive learning environment for all students.
                                </p>
                                <ul className="space-y-2">
                                    <li>• Strategic academic planning</li>
                                    <li>• Faculty development and support</li>
                                    <li>• Student success initiatives</li>
                                    <li>• Community engagement</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Public Relations Officer Section */}
            <section ref={sectionRefs.calendar} className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Public Relations Officer</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                The PR Office manages communications, media relations, and promotes the university's
                                achievements and events.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-3">Media Relations</h3>
                                    <p className="text-gray-700">Managing press releases and media coverage</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-3">Event Promotion</h3>
                                    <p className="text-gray-700">Organizing and promoting university events</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-3">Brand Management</h3>
                                    <p className="text-gray-700">Maintaining university image and reputation</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Librarian Section */}
            <section ref={sectionRefs.research} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#690B22] mb-8">Librarian</h2>
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-700 mb-6">
                                The Library Services team provides access to extensive academic resources and research support.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Library Resources</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Digital and physical collections</li>
                                        <li>• Research databases access</li>
                                        <li>• Study spaces and facilities</li>
                                        <li>• Inter-library loan services</li>
                                        <li>• Information literacy programs</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-[#690B22] mb-4">Library Hours</h3>
                                    <p className="text-gray-700">
                                        <strong>Monday - Friday:</strong> 8:00 AM - 10:00 PM<br />
                                        <strong>Saturday:</strong> 10:00 AM - 6:00 PM<br />
                                        <strong>Sunday:</strong> 12:00 PM - 8:00 PM<br />
                                        <strong>Email:</strong> library@university.edu
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

export default Administration;

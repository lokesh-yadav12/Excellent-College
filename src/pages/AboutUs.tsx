// import React, { useState, useEffect } from 'react';
// import { motion, easeOut } from 'framer-motion';
// import img from '@/assets/images/college2.png';
// import img1 from '@/assets/images/ol2.jpg';
// import img2 from '@/assets/images/ol1.jpg';
// //import prideBg from '../assets/images/pride.jpg';
// // Global animations
// const fadeUp = {
// 	hidden: { opacity: 0, y: 40 },
// 	show: {
// 		opacity: 1,
// 		y: 0,
// 		transition: { duration: 0.8, ease: easeOut },
// 	},
// };

// const slideLeft = {
// 	hidden: { opacity: 0, x: -60 },
// 	show: {
// 		opacity: 1,
// 		x: 0,
// 		transition: { duration: 0.8, ease: easeOut },
// 	},
// };

// const slideRight = {
// 	hidden: { opacity: 0, x: 60 },
// 	show: {
// 		opacity: 1,
// 		x: 0,
// 		transition: { duration: 0.8, ease: easeOut },
// 	},
// };

// const zoomInSoft = {
// 	hidden: { opacity: 0, scale: 0.9 },
// 	show: {
// 		opacity: 1,
// 		scale: 1,
// 		transition: { duration: 1, ease: easeOut },
// 	},
// };

// const floatAnimation = {
// 	initial: { y: 0 },
// 	animate: {
// 		y: [-6, 6, -6],
// 		transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
// 	},
// };

// const imageReveal = {
// 	hidden: { opacity: 0, scale: 1.1 },
// 	show: {
// 		opacity: 1,
// 		scale: 1,
// 		transition: { duration: 1.2, ease: easeOut },
// 	},
// };

// const cardVariants = {
// 	hidden: { opacity: 0, y: 30 },
// 	visible: (i: number) => ({
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			delay: i * 0.15,
// 			duration: 0.6,
// 			ease: easeOut,
// 		},
// 	}),
// };

// const AboutUs: React.FC = () => {
// 	const [showScrollIndicator, setShowScrollIndicator] = useState(true);

// 	useEffect(() => {
// 		const handleScroll = () => setShowScrollIndicator(window.scrollY <= 100);
// 		window.addEventListener('scroll', handleScroll);
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, []);

// 	const scrollToContent = () => {
// 		window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
// 	};

// 	const values = [
// 		{
// 			icon: '🎓',
// 			title: 'Academic Rigor',
// 			text: 'A challenging curriculum that prepares students for leadership in industry and research.',
// 			bg: 'bg-[#FFF8E1]',
// 		},
// 		{
// 			icon: '💡',
// 			title: 'Innovation',
// 			text: 'Hands-on learning, incubators and research collaborations that turn ideas into impact.',
// 			bg: 'bg-[#E3F2FD]',
// 		},
// 		{
// 			icon: '🤝',
// 			title: 'Integrity',
// 			text: 'Ethical practice and civic responsibility at the core of everything we do.',
// 			bg: 'bg-[#FCE4EC]',
// 		},
// 		{
// 			icon: '🌍',
// 			title: 'Global Outlook',
// 			text: 'International partnerships and exchange programs that broaden perspectives.',
// 			bg: 'bg-[#F3E5F5]',
// 		},
// 		{
// 			icon: '🔬',
// 			title: 'Research & Scholarship',
// 			text: 'Supporting faculty and student research with modern labs and funding.',
// 			bg: 'bg-[#E8F5E9]',
// 		},
// 		{
// 			icon: '👥',
// 			title: 'Student Success',
// 			text: 'Career services, internships and industry links focused on employability.',
// 			bg: 'bg-[#FFF3E0]',
// 		},
// 	];

// 	return (
// 		<div className="relative">
// 			{/* HERO IMAGE */}
// 			<motion.div
// 				className="fixed top-0 left-0 w-full h-screen z-0"
// 				initial="hidden"
// 				animate="show"
// 				variants={zoomInSoft}
// 			>
// 				<img src={img} className="w-full h-full object-cover object-top" />
// 				<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex flex-col items-center justify-center text-center px-4">
// 					<motion.h2
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 1 }}
// 						className="text-5xl md:text-6xl font-bold text-white"
// 					>
// 						Welcome to Excellent Oxford University
// 					</motion.h2>

// 					<motion.p
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						transition={{ delay: 0.6, duration: 1 }}
// 						className="mt-4 text-lg text-white/90 max-w-2xl"
// 					>
// 						Established in 2006 — A premier institution for undergraduate and postgraduate education, research excellence, and innovation.
// 					</motion.p>
// 				</div>
// 			</motion.div>

// 			<div className="h-screen"></div>

// 			{/* SCROLL INDICATOR */}
// 			<motion.div
// 				animate={showScrollIndicator ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
// 				className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30"
// 			>
// 				<button onClick={scrollToContent} className="group flex flex-col items-center space-y-2 text-white">
// 					<motion.div
// 						animate={{ y: [0, 10, 0] }}
// 						transition={{ duration: 1.5, repeat: Infinity }}
// 						className="w-6 h-10 border-2 border-current rounded-full relative"
// 					>
// 						<div className="w-1 h-3 bg-current rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
// 					</motion.div>
// 					<span className="text-sm tracking-wide">Scroll Down to See More</span>
// 				</button>
// 			</motion.div>

// 			{/* MAIN CONTENT */}
// 			<div className="relative z-20 bg-white py-16">
// 				<div className="container mx-auto px-4">
// 					{/* ABOUT US TITLE */}
// 					<motion.h1
// 						variants={fadeUp}
// 						initial="hidden"
// 						whileInView="show"
// 						className="text-4xl font-bold text-center text-[#800000] mb-12"
// 					>
// 						About Us
// 					</motion.h1>

// 					{/* HISTORY */}
// 					<section className="mb-16">
// 						<div className="grid md:grid-cols-2 gap-8 items-center">
// 							<motion.div
// 								variants={slideLeft}
// 								initial="hidden"
// 								whileInView="show"
// 								viewport={{ once: true }}
// 							>
// 								<h2 className="text-3xl font-semibold mb-6 text-red-900">Our Journey</h2>
// 								<p className="text-gray-800 mb-4">
// 									Founded in 2006, <strong>Excellent Oxford University</strong> has grown into a leading
// 									institution offering a comprehensive range of undergraduate and postgraduate programs across
// 									engineering, sciences, business administration, and humanities.
// 								</p>
// 								<p className="text-gray-800 mb-4">
// 									Over the years, we have invested significantly in state-of-the-art research facilities,
// 									modern laboratories, and strategic industry partnerships to ensure our graduates are
// 									well-prepared for the challenges of a rapidly evolving global landscape.
// 								</p>
// 								<p className="text-gray-800">
// 									Our mission is to blend rigorous academic excellence with hands-on experiential learning —
// 									cultivating ethical, innovative, and socially responsible leaders who contribute meaningfully
// 									to society and drive positive change in their communities.
// 								</p>
// 							</motion.div>

// 							<motion.div
// 								variants={imageReveal}
// 								initial="hidden"
// 								whileInView="show"
// 								viewport={{ once: true }}
// 								className="rounded-lg overflow-hidden shadow-lg"
// 							>
// 								<img src={img2} alt="School Building" className="w-full h-[400px] object-cover" />
// 							</motion.div>
// 						</div>
// 					</section>

// 					{/* LEARNING ENVIRONMENT */}
// 					<section className="mb-16">
// 						<div className="grid md:grid-cols-2 gap-8 items-center">
// 							<motion.div variants={imageReveal} initial="hidden" whileInView="show">
// 								<img src={img1} className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
// 							</motion.div>

// 							<motion.div
// 								variants={slideRight}
// 								initial="hidden"
// 								whileInView="show"
// 								viewport={{ once: true }}
// 							>
// 								<h2 className="text-3xl font-semibold mb-6 text-red-900">
// 									Campus & Learning Environment
// 								</h2>
// 								<p className="text-gray-800 mb-4">
// 									Excellent Oxford University is situated on a sprawling, technology-enabled campus featuring
// 									advanced teaching facilities, specialized research laboratories, smart classrooms, and
// 									collaborative learning spaces designed to foster innovation and project-based education.
// 								</p>
// 								<p className="text-gray-800 mb-4">
// 									Students benefit from cutting-edge research labs, an innovation and entrepreneurship incubator,
// 									industry-grade workshops, a comprehensive library with digital resources, and a strong network
// 									of corporate and academic partners that provide valuable internships, mentorship, and real-world
// 									project opportunities.
// 								</p>
// 								<p className="text-gray-800">
// 									With modern hostel facilities, transportation services, health and wellness centers, sports
// 									complexes, counseling support, and a vibrant campus life with numerous clubs and activities,
// 									we ensure students have all the resources and support they need to thrive both academically
// 									and personally.
// 								</p>
// 							</motion.div>
// 						</div>
// 					</section>

// 					{/* CORE VALUES */}
// 					<section className="mb-20 text-center">
// 						<h2 className="text-3xl font-bold text-[#800000] mb-12">Our Core Values</h2>

// 						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// 							{values.map((value, i) => (
// 								<motion.div
// 									key={i}
// 									variants={cardVariants}
// 									initial="hidden"
// 									whileInView="visible"
// 									custom={i}
// 									whileHover={{ scale: 1.07 }}
// 									className={`${value.bg} rounded-xl shadow-md p-6`}
// 								>
// 									<motion.div
// 										// variants={floatAnimation}
// 										initial="initial"
// 										animate="animate"
// 										className="text-4xl mb-3"
// 									>
// 										{value.icon}
// 									</motion.div>

// 									<h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
// 									<p className="text-gray-700">{value.text}</p>
// 								</motion.div>
// 							))}
// 						</div>
// 					</section>

// 					{/* ALUMNI & ACHIEVEMENTS */}
// 					<section className="mb-16">
// 						<motion.h2
// 							variants={fadeUp}
// 							initial="hidden"
// 							whileInView="show"
// 							className="text-3xl font-semibold text-center text-[#800000] mb-8"
// 						>
// 							Our Alumni & Achievements
// 						</motion.h2>

// 						<div className="grid md:grid-cols-3 gap-6 text-center">
// 							{[
// 								{ name: 'Dr. Priya Menon', role: 'Research Scientist, AI Lab' },
// 								{ name: 'Arjun Patel', role: 'Product Lead, TechCorp' },
// 								{ name: 'Nisha Rao', role: 'Founder, GreenStart' },
// 							].map((alum, i) => (
// 								<motion.div
// 									key={i}
// 									variants={zoomInSoft}
// 									initial="hidden"
// 									whileInView="show"
// 									whileHover={{ scale: 1.03 }}
// 									className="p-6 bg-[#F5DEB3]/40 rounded-lg shadow"
// 								>
// 									<img
// 										src={`https://placehold.co/128x128?text=${encodeURIComponent(alum.name.split(' ')[0])}`}
// 										className="w-24 h-24 mx-auto rounded-full mb-4"
// 									/>
// 									<h4 className="text-xl font-semibold text-[#800000]">{alum.name}</h4>
// 									<p className="text-gray-700">{alum.role}</p>
// 								</motion.div>
// 							))}
// 						</div>
// 					</section>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AboutUs;

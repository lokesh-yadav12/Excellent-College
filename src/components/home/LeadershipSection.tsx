import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import EnquiryFormModal from '../layout/EnquiryFormModal';
import director1 from '../../assets/images/director1.jpeg';
import director2 from '../../assets/images/director2.jpeg';
//import mimg1 from "../../assets/images/mangalbranch.jpeg";
import mimg2 from '../../assets/images/mangalbranch1.jpeg';
// import mimg3 from "../../assets/images/mangalbranch2.jpeg";
import simg1 from '../../assets/images/s1.jpeg';
import simg2 from '../../assets/images/s2.jpeg';
import simg3 from '../../assets/images/s3.jpeg';
import simg4 from '../../assets/images/s4.jpeg';
import simg5 from '../../assets/images/s5.jpeg';
import simg6 from '../../assets/images/s6.jpeg';
import simg7 from '../../assets/images/s7.jpeg';
//import inimg1 from "../../assets/images/in1.jpeg";
import inimg2 from '../../assets/images/in2.jpeg';
import inimg3 from '../../assets/images/in3.jpeg';
import inimg4 from '../../assets/images/in4.jpeg';
import inimg5 from '../../assets/images/in5.jpeg';
import m1 from '../../assets/images/m1.jpg';
import m2 from '../../assets/images/m2.jpg';
import m3 from '../../assets/images/m3.jpg';
import m4 from '../../assets/images/m4.jpg';
import m5 from '../../assets/images/m5.jpg';

// -------------------- Animation Variants --------------------
const fadeUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.9,
			ease: 'easeOut',
		},
	},
};

const staggerParent: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

// const branches = [
//   {
//     title: "Stanford International Play School - Main Branch",
//     location: "Gram Mindia, Indore Road, Ujjain.",
//     images: [m1, m2, m3, m4, m5],
//   },
//   {
//     title: "Stanford International Play School - Mangal Colony",
//     location: "159 mangal colony behind saharsh hospital ujjain.",
//         images: [ mimg2,simg3,simg7],
//   },
//   {
//     title: "Stanford International Play School - Indira Nagar",
//     location: "Indira Nagar, Ujjain.",
//     images: [ inimg2, inimg3, inimg4, inimg5],
//   },
//   {
//     title: "Stanford International Play School - Sanwer Branch",
//     location: "Near Moti Talkies Chauraha, Indore Road, Sanwer.",
//     images: [simg1, simg2, simg3, simg4, simg5, simg6, simg7],
//   },
// ];

const branches = [
	{
		title: 'Stanford International Play School - Main Branch',
		location: 'Gram Mindia, Indore Road, Ujjain.',
		contact: '',
		images: [m1, m2, m3, m4, m5],
	},
	{
		title: 'Stanford International Play School - Mangal Colony',
		location: '159 Mangal Colony, behind Saharsh Hospital, Ujjain.',
		contact: '9039021056',
		images: [mimg2, simg3, simg7],
	},
	{
		title: 'Stanford International Play School - Indira Nagar',
		location: 'Indira Nagar, Ujjain.',
		contact: '9039021057',
		images: [inimg2, inimg3, inimg4, inimg5],
	},
	{
		title: 'Stanford International Play School - Sanwer Branch',
		location: 'Near Moti Talkies Chauraha, Indore Road, Sanwer.',
		contact: '9039021058',
		images: [simg1, simg2, simg3, simg4, simg5, simg6, simg7],
	},
];

const LeadershipSection = () => {
	const [currentImage, setCurrentImage] = useState<number[]>(branches.map(() => 0));
	const [openForm, setOpenForm] = useState(false);

	// Auto slideshow per branch
	useEffect(() => {
		const timers = branches.map((_, index) =>
			setInterval(() => {
				setCurrentImage((prev) => {
					const next = [...prev];
					next[index] = (next[index] + 1) % branches[index].images.length;
					return next;
				});
			}, 4000),
		);
		return () => timers.forEach(clearInterval);
	}, []);

	return (
		<div className="bg-[#f5f3f2] py-16 md:py-24">
			{/* ---------------- TITLE ---------------- */}
			<motion.div
				className="max-w-7xl mx-auto px-6 mb-20"
				variants={fadeUp}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-[#690B22] mb-14">Our Campuses</h2>

				{/* ---------------- Branches Grid ---------------- */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12"
					variants={staggerParent}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{branches.map((branch, index) => (
						<motion.div
							key={index}
							variants={fadeUp}
							whileHover={{
								scale: 1.05,
								rotateX: 5,
								rotateY: -5,
								transition: { duration: 0.4 },
							}}
							className="text-center flex flex-col h-full"
						>
							{/* Branch Image */}
							<div className="relative w-full h-64 overflow-hidden rounded-md">
								{branch.images.map((img, i) => (
									<img
										key={i}
										src={img}
										alt={branch.title}
										className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
											i === currentImage[index] ? 'opacity-100' : 'opacity-0'
										}`}
									/>
								))}
							</div>

							<h3 className="text-xl sm:text-2xl font-bold text-[#690B22] mt-6">{branch.title}</h3>

							<div className="w-20 h-[3px] bg-[#690B22] mx-auto my-3"></div>

							<p className="text-[#4B2E2B] text-base leading-relaxed max-w-sm mx-auto mb-4 flex-grow">
								{branch.location}
							</p>

							{index !== 0 && branch.contact && (
								<p className="text-[#690B22] font-semibold text-sm mb-4">
									Contact :{' '}
									<a href={`tel:${branch.contact.replace(/\s+/g, '')}`} className="hover:underline">
										{branch.contact}
									</a>
								</p>
							)}

							<motion.button
								onClick={() => setOpenForm(true)}
								whileTap={{ scale: 0.92 }}
								className="bg-[#690B22] text-white py-2.5 px-5 rounded-md text-sm font-semibold transition-all duration-300 mt-auto"
							>
								Enquire Now
							</motion.button>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{/* ---------------- Leadership ---------------- */}
			<motion.div
				className="text-center mb-16 px-6"
				variants={fadeUp}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#690B22] mb-4">Leadership</h1>
				<p className="text-[#4B2E2B] text-lg md:text-xl max-w-2xl mx-auto px-4">
					Visionary minds guiding the path of academic and holistic excellence.
				</p>
			</motion.div>

			<motion.div
				className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 px-6"
				variants={staggerParent}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				{/* Director 1 */}
				<motion.div
					variants={fadeUp}
					whileHover={{
						scale: 1.04,
						rotateY: 8,
						transition: { duration: 0.5 },
					}}
					className="relative w-full md:w-1/2 h-[540px] rounded-3xl overflow-hidden shadow-xl bg-white"
				>
					<div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-[#C1886F] z-30 rounded-tr-xl"></div>

					<img src={director1} alt="Mr. Katyan Mishra" className="w-full h-full object-cover" />

					<div className="absolute bottom-0 left-0 right-0 bg-[#690B22]/95 text-white p-8 text-center">
						<h2 className="text-2xl sm:text-3xl font-semibold">DR. Katyan Mishra</h2>
						<p className="text-[#C1886F] text-lg sm:text-xl font-medium">Director</p>
					</div>
				</motion.div>

				{/* Director 2 */}
				<motion.div
					variants={fadeUp}
					whileHover={{
						scale: 1.04,
						rotateY: -8,
						transition: { duration: 0.5 },
					}}
					className="relative w-full md:w-1/2 h-[540px] rounded-3xl overflow-hidden shadow-xl bg-white"
				>
					<div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-[#C1886F] z-20 rounded-tr-xl"></div>

					<img src={director2} alt="Ms. Jaya Mishra" className="w-full h-full object-cover" />

					<div className="absolute bottom-0 left-0 right-0 bg-[#690B22]/95 text-white p-8 text-center">
						<h2 className="text-2xl sm:text-3xl font-semibold">DR. Jaya Mishra</h2>
						<p className="text-[#C1886F] text-lg sm:text-xl font-medium">Director</p>
					</div>
				</motion.div>
			</motion.div>

			{/* Enquiry Form */}
			<EnquiryFormModal isOpen={openForm} onClose={() => setOpenForm(false)} />
		</div>
	);
};

export default LeadershipSection;

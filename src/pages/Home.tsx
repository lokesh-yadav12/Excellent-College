import { useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import CampusNews from '../components/home/CampusNews';
import AcademicsSection from '@/components/home/AcademicsSection';
import ResearchSection from '@/components/home/ResearchSection';
import CampusLife from '@/components/home/CampusLife';
import Upcomingevents from './Upcomingevents';
// import Healthcare from './Healthcare';
// import AthleteSection from './AthleteSection';
//import AdmissionsSection from './AdmissionsSection';
import InfoSection from '@/components/InfoSection';

import Administrative from './Administrative';
import Exploredepartment from './Exploredepartment';


// Animation variants
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.2, when: 'beforeChildren' },
	},
} as const;

const sectionVariants = {
	hidden: {
		opacity: 0,
		y: 40,
		transition: { type: 'spring', damping: 15, stiffness: 100 },
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', damping: 15, stiffness: 100, duration: 0.8 },
	},
} as const;

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', damping: 12, stiffness: 100, duration: 0.8 },
	},
} as const;

const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'show' : 'hidden'}
			variants={sectionVariants}
			transition={{ delay }}
		>
			{children}
		</motion.div>
	);
};

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AnimatePresence mode="wait">
			<motion.div className="overflow-hidden" initial="hidden" animate="show" variants={container}>
				{/* Hero Section */}
				<motion.div variants={fadeIn}>
					<HeroSection />
				</motion.div>

				{/* About Section */}
				<SectionWrapper>
					<AboutSection />
				</SectionWrapper>

				{/* all info page */}
				<SectionWrapper>
					<InfoSection />
				</SectionWrapper>

				{/* explore */}
				<SectionWrapper>
					<Exploredepartment />
				</SectionWrapper>

				{/* Administrative Section */}
				<SectionWrapper>
				<Administrative/>
				</SectionWrapper>

				{/* Campus News Section */}
				<SectionWrapper>
					<CampusNews />
				</SectionWrapper>
				
				{/* Research Section */}

				<SectionWrapper>
					<ResearchSection />
				</SectionWrapper>

				{/* upcoming events */}
				<SectionWrapper>
					<Upcomingevents />
				</SectionWrapper>

				{/*Academics section  */}
				<SectionWrapper>
					<AcademicsSection />
				</SectionWrapper>

				{/* campuslife */}
				<SectionWrapper>
					<CampusLife />
				</SectionWrapper>

				

				{/* <SectionWrapper>
					<Healthcare />
				</SectionWrapper>

				<SectionWrapper>
					<AthleteSection />
				</SectionWrapper>  */}

				{/* <SectionWrapper>
					<AdmissionsSection />
				</SectionWrapper>  */}


			</motion.div>
		</AnimatePresence>
	);
};

export default Home;

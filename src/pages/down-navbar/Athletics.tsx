import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// HERO SLIDER IMAGES
import img1 from '../../assets/images/college.png';
import img2 from '../../assets/images/college2.png';
import img3 from '../../assets/images/college.png';

// NEWS IMAGES
import news1 from '../../assets/images/college.png';
import news2 from '../../assets/images/college.png';
import news3 from '../../assets/images/college.png';
import news4 from '../../assets/images/college.png';
import news5 from '../../assets/images/college.png';

// VIDEO FALLBACK IMAGE
import videoFallback from '../../assets/images/college.png';

const heroSlides = [
	{
		image: img1,
		category: "WOMEN'S BASKETBALL · DECEMBER 21, 2025",
		title: 'EXCELLENT CLOSES OUT OREGON AT CHASE',
		desc: 'Cardinal beat Ducks 64–53 behind another strong fourth quarter.',
	},
	{
		image: img2,
		category: 'FOOTBALL · JANUARY 10, 2026',
		title: 'CARDINAL FINISH SEASON STRONG',
		desc: 'Excellent dominates late to secure an impressive victory.',
	},
	{
		image: img3,
		category: "MEN'S BASKETBALL · FEBRUARY 02, 2026",
		title: 'DEFENSE POWERS EXCELLENT WIN',
		desc: 'Relentless defense and clutch shooting seal the game.',
	},
];

const newsData = [
	{
		img: news1,
		category: 'WRESTLING · DECEMBER 18, 2025',
		title: 'JOURNEYMEN COLLEGIATE DUALS NEXT',
		desc: 'Card to face North Dakota State, No. 1 Penn State',
	},
	{
		img: news2,
		category: "WOMEN'S BASKETBALL · DECEMBER 18, 2025",
		title: 'HUSKIES AT HOME',
		desc: 'Cardinal hosts Washington on Friday night',
	},
	{
		img: news3,
		category: "MEN'S BASKETBALL · DECEMBER 18, 2025",
		title: 'CARDINAL TAKES ON COLORADO',
		desc: 'Excellent faces former Pac-12 foe',
	},
	{
		img: news4,
		category: "MEN'S SOCCER · DECEMBER 18, 2025",
		title: 'TWO CARDINAL SELECTIONS IN MLS DRAFT',
		desc: 'Cleary to Charlotte FC, Palmer to LA Galaxy',
	},
	{
		img: news5,
		category: 'TRACK & FIELD · DECEMBER 18, 2025',
		title: 'CARDINAL DOMINATE INVITATIONAL',
		desc: 'Excellent shines across multiple events',
	},
];

const videoData = [
	{
		thumb: '/images/video1.jpg',
		src: '/videos/video1.mp4',
		title: "MEN'S BASKETBALL VS COLORADO",
		date: 'DECEMBER 20, 2025',
	},
	{
		thumb: '/images/video2.jpg',
		src: '/videos/video2.mp4',
		title: "WOMEN'S BASKETBALL PRESS",
		date: 'DECEMBER 19, 2025',
	},
	{ thumb: '/images/video3.jpg', src: '/videos/video3.mp4', title: "WOMEN'S HIGHLIGHTS", date: 'DECEMBER 19, 2025' },
	{
		thumb: '/images/video4.jpg',
		src: '/videos/video4.mp4',
		title: "MIC'D UP | SHAY JUWONYE",
		date: 'DECEMBER 18, 2025',
	},
	{
		thumb: '/images/video5.jpg',
		src: '/videos/video5.mp4',
		title: 'TRACK & FIELD FINALS',
		date: 'DECEMBER 17, 2025',
	},
	{ thumb: '/images/video6.jpg', src: '/videos/video6.mp4', title: 'SOCCER MATCH RECAP', date: 'DECEMBER 16, 2025' },
];

const Athletics = () => {
	const [heroIndex, setHeroIndex] = useState(0);
	const [newsIndex, setNewsIndex] = useState(0);
	const [activeVideo, setActiveVideo] = useState<string | null>(null);

	const videoScrollRef = useRef(null);

	// HERO AUTO SLIDE
	useEffect(() => {
		const interval = setInterval(() => {
			setHeroIndex((prev) => (prev + 1) % heroSlides.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	// NEWS AUTO SLIDE
	useEffect(() => {
		const interval = setInterval(() => {
			const maxIndex = newsData.length - 3;
			setNewsIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
		}, 3000);
		return () => clearInterval(interval);
	}, []);
	const containerRef = useRef<HTMLDivElement | null>(null);


	// VIDEO AUTO SCROLL (NO USER SCROLL)
	useEffect(() => {
		const container = containerRef.current;
if (!container) return;

		let animationId: number;

		const speed = 0.6;

		const autoScroll = () => {
			container.scrollLeft += speed;
			if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
				container.scrollLeft = 0;
			}
			animationId = requestAnimationFrame(autoScroll);
		};

		animationId = requestAnimationFrame(autoScroll);

		const preventScroll = (e: Event) => e.preventDefault();

		container.addEventListener('wheel', preventScroll, { passive: false });
		container.addEventListener('touchmove', preventScroll, { passive: false });

		return () => {
			cancelAnimationFrame(animationId);
			container.removeEventListener('wheel', preventScroll);
			container.removeEventListener('touchmove', preventScroll);
		};
	}, []);

	return (
		<div className="w-full pt-36 px-4">
			{/* ================= HERO SLIDER ================= */}
			<section className="relative h-[75vh] overflow-hidden">
				{heroSlides.map((slide, i) => (
					<div
						key={i}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							heroIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
						}`}
					>
						<img src={slide.image} alt="" className="w-full h-full object-cover" />
						<div className="absolute inset-0 bg-black/50" />
						<div className="absolute bottom-16 left-6 max-w-4xl text-white">
							<p className="text-sm mb-2">{slide.category}</p>
							<h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
							<p className="mb-6">{slide.desc}</p>
							<button className="bg-red-700 px-6 py-3 font-semibold">Read Article →</button>
						</div>
					</div>
				))}
			</section>

			{/* ================= LATEST NEWS ================= */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-8">LATEST NEWS</h2>

					<div className="overflow-hidden">
						<div
							className="flex gap-6 transition-transform duration-700"
							style={{ transform: `translateX(-${newsIndex * 33.3333}%)` }}
						>
							{newsData.map((news, i) => (
								<div key={i} className="min-w-[33.3333%]">
									<img src={news.img} alt="" className="h-48 w-full object-cover rounded-lg mb-4" />
									<p className="text-xs text-red-700 font-semibold mb-2">{news.category}</p>
									<h3 className="font-bold text-lg mb-2">{news.title}</h3>
									<p className="text-sm text-gray-600">{news.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ================= VIDEO HIGHLIGHTS ================= */}
			<section className="py-16 bg-gray-100">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-8">VIDEO HIGHLIGHTS</h2>

					<div ref={videoScrollRef} className="flex gap-6 overflow-hidden select-none">
						{videoData.map((video, index) => (
							<motion.div
								key={index}
								className="min-w-[300px] cursor-pointer"
								whileHover={{ scale: 1.08 }}
								onClick={() => setActiveVideo(video.src)}
							>
								<div className="relative h-48 rounded-xl overflow-hidden">
									<img
										src={video.thumb || videoFallback}
										alt=""
										className="w-full h-full object-cover"
										onError={(e) => {
											const target = e.target as HTMLVideoElement;
											target.onerror = null;
											target.src = videoFallback;
										}}
									/>
									<div className="absolute inset-0 flex items-center justify-center bg-black/30">
										<div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center text-white text-xl">
											▶
										</div>
									</div>
								</div>
								<p className="text-xs text-red-700 font-semibold mt-4">{video.date}</p>
								<h3 className="font-bold text-sm mt-2">{video.title}</h3>
							</motion.div>
						))}
					</div>
				</div>

				{/* VIDEO MODAL */}
				<AnimatePresence>
					{activeVideo && (
						<motion.div
							className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
							onClick={() => setActiveVideo(null)}
						>
							<motion.div
								className="bg-black rounded-lg overflow-hidden max-w-4xl w-full"
								onClick={(e) => e.stopPropagation()}
							>
								<video src={activeVideo} controls autoPlay className="w-full" />
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
		</div>
	);
};

export default Athletics;

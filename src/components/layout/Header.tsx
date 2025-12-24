import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// ---------------------- TYPES ----------------------
interface DropdownItem {
	name: string;
	path: string;
}

interface NavItem {
	name: string;
	path: string;
	dropdown: DropdownItem[];
}

// ---------------------------------------------------

const Header = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
	const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	// const [searchOpen, setSearchOpen] = useState(false);
	const dropdownRefs = useRef<Record<number, HTMLElement | null>>({});

	const navigationStructure: NavItem[] = [
		{ name: 'Academics', path: '/academics', dropdown: [] },
		{ name: 'Research', path: '/research', dropdown: [] },
		{ name: 'Health Care', path: '/healthcare', dropdown: [] },
		{ name: 'Campus Life', path: '/campuslife', dropdown: [] },
		{ name: 'Athletics', path: '/athletics', dropdown: [] },
		{ name: 'Admission', path: '/admission', dropdown: [] },
		{ name: 'About', path: '/about', dropdown: [] },
		{ name: 'News', path: '/news', dropdown: [] },
		{ name: 'Events', path: '/events', dropdown: [] },
	];

	const infoLinks: { name: string; path: string }[] = [
		{ name: 'Students', path: '/students' },
		{ name: 'Faculty', path: '/faculty' },
		{ name: 'Families', path: '/families' },
		{ name: 'Visitors', path: '/visitors' },
		{ name: 'Alumni', path: '/alumni' },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node | null;

			const isClickInside = Object.values(dropdownRefs.current).some(
				(ref) => ref && target && ref.contains(target),
			);

			if (!isClickInside) setActiveDropdown(null);
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={`fixed top-0 left-0 w-full z-50 transition-all py-1 duration-500
  ${
		isHomePage
			? isScrolled
				? 'bg-white shadow-lg' // Home + Scrolled
				: 'bg-transparent/50' // Home + Not scrolled
			: isScrolled
				? 'bg-white shadow-lg' // Not Home + Scrolled
				: 'bg-gray-900/90' // Not Home + Not scrolled
  }
`}
		>
			{/* Top Bar - Info Links */}
			<div
				className={`border-b transition-colors duration-500
  ${
		isHomePage
			? isScrolled
				? 'bg-white' // Home + Scrolled
				: 'bg-transparent/50' // Home + Not scrolled
			: isScrolled
				? 'bg-white' // Not Home + Scrolled
				: 'bg-gray-900/90' // Not Home + Not scrolled
  }
`}
			>
				<div className="max-w-[1400px] mx-auto px-4 sm:px-6  lg:px-8">
					<div className="flex items-center justify-between py-2 text-base">
						<Link to="/">
							<span
								className={`font-bold text-2xl md:text-3xl transition-colors duration-500 cursor-pointer ${
									isScrolled ? 'text-black' : 'text-white'
								}`}
							>
								Excellent University
							</span>
						</Link>

						<div className="hidden md:flex items-center gap-10 text-xl">
							{infoLinks.map((link) => (
								<Link 
  key={link.name} 
  to={link.path} 
  className={`transition-colors duration-300 text-sm font-medium ${
    isScrolled ? 'text-black hover:text-rose-700' : 'text-white hover:text-white'
  }`}
>
  {link.name}
</Link>
							))}
							{/* <button
								onClick={() => setSearchOpen(!searchOpen)}
								className={`flex items-center gap-1 transition-colors duration-300 text-sm font-medium ${
									isScrolled ? 'text-white/70 hover:text-rose-700' : 'text-white/80 hover:text-white'
								}`}
							>
								<MagnifyingGlassIcon className="w-4 h-4" />
								Search
							</button> */}
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between sm:py-2 py-1">
					{/* Empty space for alignment */}
					<div className="flex-1"></div>

					{/* Desktop Navigation - Centered */}
					<nav className="hidden lg:flex items-center gap-3 text-lg">
						{navigationStructure.map((navItem, index) => (
							<div
								key={navItem.name}
								className="relative"
								ref={(el) => {
									dropdownRefs.current[index] = el;
								}}
								onMouseEnter={() => navItem.dropdown.length > 0 && setActiveDropdown(index)}
								onMouseLeave={() => navItem.dropdown.length > 0 && setActiveDropdown(null)}
							>
								{navItem.dropdown.length === 0 ? (
									<Link
										to={navItem.path}
										className={`font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg whitespace-nowrap text-sm xl:text-base ${
											isScrolled
												? 'text-black hover:text-rose-700 hover:bg-gray-100'
												: 'text-white hover:text-white hover:bg-white'
										}`}
									>
										{navItem.name}
									</Link>
								) : (
									<>
										<button
											className={`font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg whitespace-nowrap flex items-center gap-1 text-sm xl:text-base ${
												isScrolled
													? 'bg-red-200/95 backdrop-blur-md shadow-lg'
													: 'bg-gradient-to-b from- via-black/50 to-transparent'
											}`}
										>
											{navItem.name}
											<ChevronDownIcon
												className={`h-4 w-4 transition-transform duration-300 ${
													activeDropdown === index ? 'rotate-180' : ''
												}`}
											/>
										</button>

										{/* Dropdown */}
										<AnimatePresence>
											{activeDropdown === index && (
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -10 }}
													transition={{ duration: 0.2 }}
													className="absolute top-full left-0 mt-2 w-56 bg-black shadow-xl rounded-lg border border-gray-200 overflow-hidden"
												>
													{navItem.dropdown.map((item: DropdownItem) => (
														<Link
															key={item.name}
															to={item.path}
															className="block px-4 py-3 text-sm font-medium text-black hover:bg-rose-50 hover:text-rose-700 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
														>
															{item.name}
														</Link>
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</>
								)}
							</div>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<div className="flex-1 flex justify-end lg:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className={`p-2 rounded-lg transition-colors ${
								isScrolled ? 'text-red-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
							}`}
						>
							{mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto"
					>
						<div className="px-4 py-4 space-y-2">
							{navigationStructure.map((navItem, index) => (
								<div key={navItem.name}>
									{navItem.dropdown.length === 0 ? (
										<Link
  to={navItem.path}
  className={`font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg whitespace-nowrap text-sm xl:text-base ${
    isScrolled
      ? 'text-black hover:text-rose-700 hover:bg-gray-100'
      : 'text-white hover:text-white hover:bg-white'
  }`}
>
  {navItem.name}
</Link>
									) : (
										<>
											<button
												onClick={() =>
													setActiveMobileDropdown(
														activeMobileDropdown === index ? null : index,
													)
												}
												className="w-full flex items-center justify-between px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
											>
												{navItem.name}
												<ChevronDownIcon
													className={`h-4 w-4 transition-transform ${
														activeMobileDropdown === index ? 'rotate-180' : ''
													}`}
												/>
											</button>
											<AnimatePresence>
												{activeMobileDropdown === index && (
													<motion.div
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: 'auto' }}
														exit={{ opacity: 0, height: 0 }}
														className="ml-4 mt-2 space-y-1"
													>
														{navItem.dropdown.map((item: DropdownItem) => (
															<Link
																key={item.name}
																to={item.path}
																className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
															>
																{item.name}
															</Link>
														))}
													</motion.div>
												)}
											</AnimatePresence>
										</>
									)}
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;

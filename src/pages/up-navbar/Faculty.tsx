import React from 'react';
import { Mail, Settings, LifeBuoy, Cloud, FolderOpen } from 'lucide-react';

const Faculty = () => {
	const services = [
		{
			icon: <Mail className="w-12 h-12 mb-4" />,
			title: 'Email & Calendar',
			description: 'Launch webmail',
			link: '#',
		},
		{
			icon: <Settings className="w-12 h-12 mb-4" />,
			title: 'Axess',
			description: 'Timecard, payroll, and more',
			link: '#',
		},
		{
			icon: <LifeBuoy className="w-12 h-12 mb-4" />,
			title: 'Services & Support',
			description: 'Submit a help request',
			link: '#',
		},
		{
			icon: <Cloud className="w-12 h-12 mb-4" />,
			title: 'Tools Launchpad',
			description: 'Google Drive, Slack, Zoom',
			link: '#',
		},
		{
			icon: <FolderOpen className="w-12 h-12 mb-4" />,
			title: 'Red Folder',
			description: 'Supporting student well-being',
			link: '#',
		},
	];

	return (
		<div className="w-full sm:px-20px py-2">
			{/* ================= HERO SECTION ================= */}
			<div className="relative min-h-screen overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop')",
					}}
				>
					<div className="absolute inset-0 bg-black/40" />
				</div>

				<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-20 py-20 pt-32 ">
					<div className="text-center pt-32 mb-4">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Gateway for Faculty & Staff</h1>
						<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
							Resources, offices, and services for Excellent faculty and staff
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl w-full">
						{services.map((service, index) => (
							<a
								key={index}
								href={service.link}
								className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-lg p-3 flex flex-col items-center text-center text-white hover:scale-105 border border-white/20"
							>
								{service.icon}
								<h3 className="text-xl font-bold mb-2">{service.title}</h3>
								<p className="text-sm opacity-90">{service.description}</p>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* ================= WORKING AT STANFORD ================= */}
			<section className="bg-[#f7f5f2] py-8 px-20">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* LEFT CONTENT */}
					<div className="lg:col-span-2 space-y-16">
						{/* WORKING AT STANFORD */}
						<div>
							<h2 className="text-red-900 font-bold uppercase mb-8">Working at Excellent</h2>

							<div className="grid md:grid-cols-2 gap-10">
								{[
									[
										'Cardinal at Work',
										'Employee-related information from University Human Resources',
									],
									['Benefits & Rewards', 'Manage health, retirement, and other benefits'],
									['University Holidays', 'Paid holiday schedule and policies'],
									['Excellent Careers', 'Explore job openings, sign up for alerts'],
									['New Staff Welcome Center', 'Onboarding resources for new employees'],
									['Manager Resources', 'Tools and training for Excellent managers'],
								].map(([title, desc], i) => (
									<div key={i}>
										<a href="#" className="text-blue-700 font-semibold hover:underline">
											{title}
										</a>
										<p className="text-sm text-gray-700 mt-1">{desc}</p>
									</div>
								))}
							</div>
						</div>

						<hr className="border-gray-300" />

						{/* FACULTY RESOURCES */}
						<div>
							<h2 className="text-red-900 font-bold uppercase mb-8">Faculty Resources</h2>

							<div className="grid md:grid-cols-2 gap-10">
								{[
									['Faculty Affairs', 'Appointments, policies, handbook, updates'],
									['Faculty Senate', 'Meeting schedule, notes, announcements'],
									['Faculty Housing', 'Housing programs for eligible faculty'],
									['Faculty Development & Engagement', 'Professional development and inclusion'],
									['Faculty Financial Activities', 'Fingate hub for accounts and payroll'],
								].map(([title, desc], i) => (
									<div key={i}>
										<a href="#" className="text-blue-700 font-semibold hover:underline">
											{title}
										</a>
										<p className="text-sm text-gray-700 mt-1">{desc}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* RIGHT SIDEBAR */}
					<aside>
						<div className="bg-white border-t-4 border-red-800 p-4 shadow-sm">
							<h3 className="font-bold text-lg mb-4">Excellent Report</h3>

							<div className="space-y-5">
								{[
									'What Team USA’s style signals about America',
									'Fidgeting boosts creativity in students',
									'Study uncovers immune switch for cancer',
									'Excellent AI experts predict 2026',
								].map((item, i) => (
									<div key={i} className="flex gap-4">
										<div className="w-16 h-16 bg-gray-200" />
										<div>
											<p className="text-xs text-red-800 font-semibold">December 15, 2025</p>
											<p className="text-sm font-semibold">{item}</p>
										</div>
									</div>
								))}
							</div>

							{/* <a href="#" className="text-blue-700 text-sm mt-6 inline-block">
                More →
              </a> */}
						</div>
					</aside>
				</div>
			</section>
			<hr className="border-gray-300" />

			{/* ================= ON CAMPUS ================= */}
			<section className="bg-[#f7f5f2] py-8 border-t border-gray-300 px-20">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2">
						<h2 className="text-red-900 font-bold uppercase mb-8">On Campus</h2>

						<div className="grid md:grid-cols-2 gap-10">
							{[
								['Places to Eat', 'Restaurants and cafes on campus'],
								['Meal Plans', 'Plans and account management'],
								['Faculty Club', 'Dining, catering, and guest rooms'],
								['Staff Groups', 'Groups and events'],
								['Excellent Guest House', 'Lodging for Excellent business'],
								['Conference Services', 'Meeting planning services'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700 mt-1">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<hr className="border-gray-300" />

			{/* ================= CAMPUS RESOURCES ================= */}
			<section className="bg-[#f7f5f2] py-8 border-t border-gray-300 px-20">
				<div className="max-w-7xl mx-auto px-6 space-y-16">
					{/* SAFETY & SUPPORT */}
					<div>
						<h3 className="text-red-900 font-bold uppercase mb-6">Safety & Support</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								['Public Safety', 'Contact, alerts, and resources'],
								['University Ombuds', 'Confidential assistance with conflict resolution'],
								['Diversity & Access', 'Resources to ensure equal opportunity and access'],
								[
									'SHARE Title IX and Title VI Office',
									'Sexual harassment/assault response & education',
								],
								['Ethics & Compliance Helpline', 'Report an issue of concern'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700">{desc}</p>
								</div>
							))}
						</div>
					</div>
					<hr className="border-gray-300" />

					{/* HEALTH & WELLNESS */}
					<div className="">
						<h3 className="text-red-900 font-bold uppercase mb-6">Health & Wellness</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								['Excellent BeWell', 'Program details, perks, events'],
								['Excellent Healthy Living', 'Search and register for classes'],
								['Recreation & Wellness', 'Fitness facilities, programs, classes'],
								['Faculty/Staff Help Center', 'Confidential counseling and support services'],
								['WorkLife Office', 'Programs to promote work / life balance'],
								['Windhover', 'Mindfulness and meditation center'],
								['Mental Health Resources for Students', 'Referrals and consultation'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700">{desc}</p>
								</div>
							))}
						</div>
					</div>
					<hr className="border-gray-300" />

					{/* GETTING TO WORK */}
					<div>
						<h3 className="text-red-900 font-bold uppercase mb-2">Getting to Work</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								['Locations', 'Info about our many workplaces'],
								['Commute Information', 'Plan your commute'],
								['Marguerite Shuttle', 'Stanford’s free bus service'],
								['Parking', 'Parking permits and prices'],
								['Remote Worker Resources', 'Community of practice'],
								['Campus Map', 'Getting around campus'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700">{desc}</p>
								</div>
							))}
						</div>
					</div>
					<hr className="border-gray-300" />

					{/* ONLINE TECHNOLOGY */}
					<div>
						<h3 className="text-red-900 font-bold uppercase mb-2">Online Technology</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								['University IT', 'Campus IT news and services'],
								['Services & Support', 'Submit a help ticket'],
								['Getting Started', 'Technology tools and resources'],
								['Video Conferencing', 'Zoom, WebEx, others'],
								['Information Security', 'Protect your information'],
								['IT Perks', 'Free and discounted IT services'],
								['Essential Stanford Software', 'Office software'],
								['Stanford Web Services', 'Web planning and development'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700">{desc}</p>
								</div>
							))}
						</div>
					</div>
					<hr className="border-gray-300" />
					{/* ACADEMICS */}
					<div>
						<h3 className="text-red-900 font-bold uppercase mb-2">Academics</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								['Academic Calendar', 'Important dates and deadlines'],
								['Stanford Libraries', 'Catalogs, collections, services'],
								['Stanford Bulletin', 'Guide to academic journey'],
								['Inside Student Services', 'Resources for student systems'],
								['Teaching & Learning Support', 'Advance teaching and learning'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700">{desc}</p>
								</div>
							))}
						</div>
					</div>
					<hr className="border-gray-300" />
					{/* RESEARCH */}
					<div>
						<h3 className="text-red-900 font-bold uppercase mb-2">Research</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								['Research & Scholarship', 'Scholarly inquiry and administration'],
								['Research Training', 'Compliance training courses'],
								['Institutes, Labs & Centers', 'Independent laboratories and centers'],
								['Other Research Centers', 'Additional research units'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700">{desc}</p>
								</div>
							))}
						</div>
					</div>
					<hr className="border-gray-300" />
					{/* FINANCE */}
					<div>
						<h3 className="text-red-900 font-bold uppercase mb-2">Finance</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								['Oracle Financials', 'Core financial accounting system'],
								['Faculty Financial Activities', 'Payroll, expenses, accounts'],
								['Staff Financial Activities', 'Travel, purchasing, payroll'],
								['Financial Activities Training', 'Courses and materials'],
							].map(([title, desc], i) => (
								<div key={i}>
									<a href="#" className="text-blue-700 font-semibold hover:underline">
										{title}
									</a>
									<p className="text-sm text-gray-700">{desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Faculty;

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-6 gap-10">

        {/* ===== COLUMN 1 ===== */}
        <div>
          <h3 className="text-red-800 font-bold mb-4 uppercase text-sm">
            Schools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Business</li>
            <li>Education</li>
            <li>Engineering</li>
            <li>Humanities & Sciences</li>
            <li>Law</li>
            <li>Medicine</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* ===== COLUMN 2 ===== */}
        <div>
          <h3 className="text-red-800 font-bold mb-4 uppercase text-sm">
            Academics
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Undergraduate Majors</li>
            <li>Graduate Programs</li>
          </ul>

          <h3 className="text-red-800 font-bold mt-6 mb-4 uppercase text-sm">
            Research
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Research Centers A–Z</li>
            <li>Libraries</li>
          </ul>
        </div>

        {/* ===== COLUMN 3 ===== */}
        <div>
          <h3 className="text-red-800 font-bold mb-4 uppercase text-sm">
            Health Care
          </h3>
          <ul className="space-y-2 text-sm">
            <li>University Health Care</li>
            <li>Children's Health</li>
          </ul>

          <h3 className="text-red-800 font-bold mt-6 mb-4 uppercase text-sm">
            Online Learning
          </h3>
          <ul className="space-y-2 text-sm">
            <li>University Online</li>
          </ul>
        </div>

        {/* ===== COLUMN 4 ===== */}
        <div>
          <h3 className="text-red-800 font-bold mb-4 uppercase text-sm">
            About University
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Facts</li>
            <li>History</li>
            <li>Accreditation</li>
          </ul>

          <h3 className="text-red-800 font-bold mt-6 mb-4 uppercase text-sm">
            Admission
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Undergraduate</li>
            <li>Graduate</li>
            
          </ul>
        </div>

        {/* ===== COLUMN 5 ===== */}
        <div>
          <h3 className="text-red-800 font-bold mb-4 uppercase text-sm">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Campus Map</li>
            <li>Community Engagement</li>
            <li>Directory</li>
            <li>University Profiles</li>
          </ul>
        </div>

        {/* ===== COLUMN 6 (BUTTONS) ===== */}
        <div className="flex flex-col space-y-4">
          {[
            "Applying",
            "Visiting",
           
            "Careers",
            "Faculty Positions",
            "Contact",
          ].map((item) => (
            <button
              key={item}
              className="border border-gray-500 px-4 py-2 text-sm hover:bg-gray-100 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left */}
          <div>
            <h2 className="font-bold text-lg">Excellent University</h2>
            <p className="text-xs mt-1">
              © Excellent University. All rights reserved.
            </p>
          </div>
		  

<div className="pb-4 text-center text-gray-400 mt-5">
						<p className="text-sm md:text-lg flex items-center justify-center">
						Built with ❤️ by{' '}
 							<a
								href="https://elite8digital.in"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center ml-1"
							>
								Elite8 Digital
								<img
									src="/elite8digital-nav.png"
									alt="Elite8 Digital Logo"
									className="h-10 md:h-12 ml-2"
								/>
							</a>
						</p>
					</div>



          {/* Center Links */}
          <div className="flex flex-wrap gap-4 text-s">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="hover:underline cursor-pointer">Maps & Directions</span>
            <span className="hover:underline cursor-pointer">Search</span>
            {/* <span className="hover:underline cursor-pointer">Emergency Info</span> */}
            <span className="hover:underline cursor-pointer">Privacy</span>
            {/* <span className="hover:underline cursor-pointer">Accessibility</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





// import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
// // import img1 from '../../assets/images/logo.jpeg';
// import { Link } from 'react-router-dom';
// import React from 'react';

// type ContactItem =
// 	| {
// 			icon: React.ReactNode;
// 			type: 'email';
// 			text: string[];
// 	  }
// 	| {
// 			icon: React.ReactNode;
// 			type: 'map' | 'phone' | 'whatsapp';
// 			text: string;
// 			link: string;
// 	  };

// const Footer = () => {
// 	const currentYear = new Date().getFullYear();

// 	const quickLinks = [
// 		{ name: 'Home', path: '/' },
// 		{ name: 'About Us', path: '/about' },
// 		{ name: 'Academics', path: '/academics' },
// 		{ name: 'Administration', path: '/administration' },
// 		{ name: 'Admissions', path: '/admissions' },
	
// 		{ name: 'Contact Us', path: '/contact' },
// 	];

// 	const contactInfo: ContactItem[] = [
// 		{
// 			icon: <FaMapMarkerAlt className="text-[#F5DEB3]" />,
// 			text: '112 shanti market, Near Bus stand , Delhi, India',
// 			link: 'https://maps.google.com/?q=Gram+Mindia,+Indore+Road,+Ujjain+456006,+Madhya+Pradesh,+India',
// 			type: 'map',
// 		},
// 		{
// 			icon: <FaPhone className="text-[#F5DEB3]" />,
// 			text: 'Phone: 9166353078',
// 			link: 'tel:9166353078',
// 			type: 'phone',
// 		},
// 		{
// 			icon: <FaWhatsapp className="text-[#F5DEB3]" />,
// 			text: 'Admission Queries: 9166353078',
// 			link: 'https://wa.me/9166353078',
// 			type: 'whatsapp',
// 		},
// 		{
// 			icon: <FaEnvelope className="text-[#F5DEB3]" />,
// 			text: ['principal@stanfordujjain.com', 'admissions@stanfordujjain.com', 'career@stanfordujjain.com'],
// 			type: 'email',
// 		},
// 	];

// 	const socialLinks = [
// 		{
// 			icon: <FaInstagram />,
// 			url: 'https://instagram.com/',
// 			name: 'Instagram',
// 		},
// 		{
// 			icon: <FaFacebook />,
// 			url: 'https://facebook.com/',
// 			name: 'Facebook',
// 		},
// 	];

// 	return (
// 		<footer className="bg-black/90 text-white pt-8 sm:pt-12 pb-6 z-50 backdrop-blur-sm">
// 			<div className="container mx-auto px-4 sm:px-6">
// 				{/* --- Main Grid --- */}
// 				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
// 					{/* --- Logo & About --- */}
// 					<div className="sm:col-span-2 lg:col-span-1">
// 						<h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 sm:gap-3">
// 							{/* <img src={img1} alt="logo" className="h-20 w-32" /> */}
// 							<span className="leading-tight">Excellence University</span>
// 						</h3>

// 						<p className="text-white/90 mb-4 leading-relaxed text-sm sm:text-base">
// 							Founded in <span className="font-semibold">2006</span>, Excellence University is
// 							dedicated to shaping responsible, confident, and compassionate learners through holistic
// 							education.
// 						</p>

// 						{/* --- Social Links --- */}
// 						<div className="flex space-x-4 mt-4">
// 							{socialLinks.map((social, index) => (
// 								<a
// 									key={index}
// 									href={social.url}
// 									className="text-white/90 hover:text-[#F5DEB3] text-xl sm:text-2xl transition-colors"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									aria-label={social.name}
// 								>
// 									{social.icon}
// 								</a>
// 							))}
// 						</div>
// 					</div>

// 					{/* --- Quick Links --- */}
// 					<div>
// 						<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 pb-2 border-b border-[#F5DEB3]/40">
// 							Quick Links
// 						</h3>
// 						<ul className="space-y-2">
// 							{quickLinks.map((link) => (
// 								<li key={link.name}>
// 									<Link
// 										to={link.path}
// 										className="text-white/90 hover:text-[#F5DEB3] transition-colors text-sm sm:text-base"
// 									>
// 										{link.name}
// 									</Link>
// 								</li>
// 							))}
// 						</ul>
// 					</div>

// 					{/* --- Contact Info --- */}
// 					<ul className="space-y-3">
// 						{contactInfo.map((item, index) => (
// 							<li key={index} className="flex items-start">
// 								<span className="mt-1 mr-2 sm:mr-3 flex-shrink-0">{item.icon}</span>

// 								{item.type === 'email' ? (
// 									<span className="text-sm sm:text-base break-words">
// 										{item.text.map((email, idx) => (
// 											<div key={idx}>
// 												<a
// 													href={`mailto:${email}`}
// 													className="text-white/90 hover:text-[#F5DEB3] transition-colors cursor-pointer"
// 													target="_blank"
// 													rel="noopener noreferrer"
// 												>
// 													{email}
// 												</a>
// 											</div>
// 										))}
// 									</span>
// 								) : (
// 									<a
// 										href={item.link}
// 										className="text-white/90 hover:text-[#F5DEB3] transition-colors text-sm sm:text-base break-words cursor-pointer"
// 										target="_blank"
// 										rel="noopener noreferrer"
// 									>
// 										{item.text}
// 									</a>
// 								)}
// 							</li>
// 						))}
// 					</ul>

// 					{/* --- Admission Enquiry --- */}
// 					<div>
// 						<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 pb-2 border-[#F5DEB3]/40">
// 							Admission Enquiries
// 						</h3>
// 						<p className="text-white/90 mb-3 text-sm sm:text-base">
// 							Contact us for Admission related queries on –
// 						</p>
// 						<p className="text-white/90 mb-2 text-sm sm:text-base">
// 							📞 Call / WhatsApp:{' '}
// 							<a
// 								href="https://wa.me/918989697401"
// 								className="font-semibold text-[#F5DEB3] hover:text-[#FFE4B5] transition-colors cursor-pointer"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 							>
// 								8989697401
// 							</a>
// 						</p>
// 						<p className="text-white/90 text-sm sm:text-base">
// 							✉️ Write to us:{' '}
// 							<a
// 								href="mailto:admissions@stanfordujjain.com"
// 								className="text-[#F5DEB3] underline hover:text-[#FFE4B5] break-words transition-colors"
// 							>
// 								admissions@stanfordujjain.com
// 							</a>
// 						</p>
// 					</div>
// 				</div>

// 				{/* --- Footer Bottom --- */}
// 				<div className="pt-6 mt-8 sm:mt-10 flex flex-col justify-center items-center">
// 					{/* Mobile/Tablet Layout */}
// 					<div className="flex flex-col gap-4 text-center lg:hidden">
// 						{/* Copyright */}
// 						<p className="text-white/70 text-xs sm:text-sm">
// 							&copy; {currentYear} Excellence University. All Rights Reserved.
// 						</p>
// 					</div>

// 					{/* Desktop Layout */}
// 					<div className="hidden lg:flex justify-between items-center">
// 						<p className="text-white/70 text-sm">
// 							&copy; {currentYear} Excellence University. All Rights Reserved.
// 						</p>
// 					</div>
// 					<div className="pb-4 text-center text-gray-400 mt-5">
// 						<p className="text-sm md:text-lg flex items-center justify-center">
// 							Built with ❤️ by{' '}
// 							<a
// 								href="https://elite8digital.in"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center ml-1"
// 							>
// 								Elite8 Digital
// 								<img
// 									src="/elite8digital-nav.png"
// 									alt="Elite8 Digital Logo"
// 									className="h-10 md:h-12 ml-2"
// 								/>
// 							</a>
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

import React, { useState } from "react";

const Administrative = () => {
 const [hoveredButton, setHoveredButton] = useState<number | null>(null);
const [hoveredCard, setHoveredCard] = useState<number | null>(null);


  const topButtons = [
    { id: 1, label: "Organization Tree", link: "/organization-tree" },
    { id: 2, label: "Board of Governors", link: "/board-governors" },
    { id: 3, label: "Directorate", link: "/directorate" },
    { id: 4, label: "Key Administrators", link: "/administrators" },
    { id: 5, label: "Registrar Office", link: "/registrar" }
  ];

  const bottomButtons = [
    { id: 6, label: "Acts", link: "/acts" },
    { id: 7, label: "Statutes", link: "/statutes" },
    { id: 8, label: "Ordinances", link: "/ordinances" },
    { id: 9, label: "Annual Reports", link: "/reports" },
    { id: 10, label: "Office Orders", link: "/orders" }
  ];

  const cards = [
    {
      id: 1,
      title: "Right to Information Act",
      description: "Right to Information means the right to inspection of work, documents, records taking notes, extracts or, certified copies of documents.",
      gradient: "from-orange-400 to-orange-500",
      link: "/about"
    },
    {
      id: 2,
      title: "International Relations",
      description: "Fostering global partnerships and collaborations to enhance academic excellence and research opportunities across international institutions.",
      gradient: "from-yellow-600  to-yellow-400",
      link: "/news"
    },
    {
      id: 3,
      title: "Plan Your Visit",
      description: "Explore our campus and facilities. Schedule your visit to experience the vibrant academic environment and state-of-the-art infrastructure.",
      gradient: "from-orange-600  to-orange-500",
      link: "/visit"
    },
    {
      id: 4,
      title: "Internal Complaints Committee",
      description: "A dedicated platform for addressing grievances and ensuring a safe, respectful environment for all members of our community.",
      gradient: "from-yellow-500  to-yellow-400",
      link: "/"
    },
    {
      id: 5,
      title: "Institute Counselling Service",
      description: "Professional support and guidance for mental health and well-being. Confidential counseling services available for students and staff.",
      gradient: "from-orange-700  to-orange-600",
      link: "/counselling"
    }
  ];

 const handleCardClick = (link: string) => {

    window.open(link, '_blank');
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 opacity-0 text-center animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Excellent <span className="text-red-700">Administration</span>
          </h2>
          <p className="text-md sm:text-lg text-gray-700 max-w-4xl mx-auto">
            Excellent is governed by a board comprising of eminent educationists and administrators.
          </p>
        </div>

        {/* Top Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {topButtons.map((button, idx) => (
            <a
              key={button.id}
              href='/about'
              onMouseEnter={() => setHoveredButton(button.id)}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative sm:px-6 sm:py-4  py-2 text-center text-gray-800 font-medium border-2 border-gray-800 rounded-full overflow-hidden transition-all duration-500 hover:text-white hover:scale-105 hover:shadow-xl opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <span className="relative z-10">{button.label}</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform origin-left transition-transform duration-500 ${hoveredButton === button.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </a>
          ))}
        </div>

        {/* Bottom Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {bottomButtons.map((button, idx) => (
            <a
              key={button.id}
              href={button.link}
              onMouseEnter={() => setHoveredButton(button.id)}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative sm:px-6 px-2 sm:py-4 py-2 text-center text-gray-800 font-medium border-2 border-gray-800 rounded-full overflow-hidden transition-all duration-500 hover:text-white hover:scale-105 hover:shadow-xl opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
            >
              <span className="relative z-10">{button.label}</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform origin-left transition-transform duration-500 ${hoveredButton === button.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </a>
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.link)}
              className="relative h-80 rounded-lg overflow-hidden cursor-pointer group opacity-0 animate-[fadeSlideUp_0.7s_ease-out_forwards]"
              style={{ animationDelay: `${1.3 + idx * 0.15}s` }}
            >
              {/* Base gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-all duration-700`} />
              
              {/* Black overlay that sweeps in on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 transform transition-all duration-700 ${hoveredCard === card.id ? 'translate-x-0 opacity-95' : '-translate-x-full opacity-0'}`}
              />
              
              {/* Red/Orange accent sweep */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-red-600/30 via-orange-600/30 to-red-600/30 transform transition-transform duration-1000 ${hoveredCard === card.id ? 'translate-x-full' : '-translate-x-full'}`}
                style={{ mixBlendMode: 'overlay' }}
              />
              
              {/* Shimmer effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-transform duration-1000 ${hoveredCard === card.id ? 'translate-x-full' : '-translate-x-full'}`} />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Title - always visible */}
                <h3 className={`text-2xl font-bold transition-all duration-500 ${hoveredCard === card.id ? 'translate-y-[-8px]' : ''}`}>
                  {card.title}
                </h3>

                {/* Description text - appears on hover */}
                <div className={`flex-1 flex items-center transition-all duration-500 ${hoveredCard === card.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <p className="text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="flex items-center justify-end">
                  <div className="relative">
                    {/* Learn More Text */}
                    <span
                      className={`absolute whitespace-nowrap text-white text-sm font-semibold right-16 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                        hoveredCard === card.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-8"
                      }`}
                    >
                      Learn More
                    </span>

                    {/* Circle with Arrow */}
                    <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white/20 group-hover:scale-110">
                      <svg
                        className="w-6 h-6 text-white transition-transform duration-500 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 shadow-2xl transition-opacity duration-500 pointer-events-none ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`} style={{boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.15)'}} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Administrative;
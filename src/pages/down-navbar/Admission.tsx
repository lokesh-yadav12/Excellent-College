import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const CampusNews = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const navigate = useNavigate();


  const newsData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      category: "Research",
      title: "Why research matters",
      link: "/news/research-matters"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8",
      category: "Health & Medicine",
      title: "Genetic changes tied to human brain evolution",
      link: "/news/brain-evolution"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      category: "Community",
      title: "The year in focus",
      link: "/news/year-focus"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      category: "Education",
      title: "Fidgeting boosts creativity",
      link: "/news/creativity"
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
      category: "Health",
      title: "5 tips to manage holiday stress",
      link: "/news/holiday-stress"
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      category: "Innovation",
      title: "Most intriguing innovations of 2025",
      link: "/news/innovations"
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
      category: "Science",
      title: "Breakthrough in quantum computing",
      link: "/news/quantum"
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      category: "Technology",
      title: "AI transforming education",
      link: "/news/ai-education"
    }
  ];

  // Duplicate arrays for seamless loop
  const row1Data = [...newsData, ...newsData];
  const row2Data = [...newsData.slice().reverse(), ...newsData.slice().reverse()];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setScrollPosition1((prev) => {
        const newPos = prev + 4;
        const resetPoint = (newsData.length * 293); // card width (288) + gap (5)
        return newPos >= resetPoint ? 0 : newPos;
      });
    }, 16);

    const interval2 = setInterval(() => {
      setScrollPosition2((prev) => {
        const newPos = prev + 4;
        const resetPoint = (newsData.length * 293);
        return newPos >= resetPoint ? 0 : newPos;
      });
    }, 16);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [newsData.length]);

 const handleCardClick = (link: string) => {

    window.open(link, '_blank');
  };

interface NewsItem {
  id: number;
  img: string;
  category: string;
  title: string;
  link: string;
  description?: string; // optional
  image?: string;      // optional (for safety)
}


interface NewsCardProps {
  item: NewsItem;
  index: number;
  isHovered: boolean;
}

  

  const NewsCard = ({ item, index, isHovered }: NewsCardProps) => (

    <div
      className="relative flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleCardClick(item.link)}
      style={{
        transform: isHovered ? 'scale(1.08) translateY(-12px) rotateY(2deg)' : 'scale(1)',
        zIndex: isHovered ? 10 : 1,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
          style={{
            transform: isHovered ? 'scale(1.15) rotate(2deg)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
        
        {/* Animated gradient overlay on hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-red-600/50 via-orange-500/30 to-transparent"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease'
          }}
        />
        
        {/* Shine effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.8s ease',
            mixBlendMode: 'overlay'
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6"
        style={{
          transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <span 
          className="text-xs uppercase text-white/90 font-bold tracking-wider inline-block mb-2 px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm"
          style={{
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          {item.category}
        </span>
        <h3 
          className="font-bold text-white text-xl leading-tight mb-3"
          style={{
            letterSpacing: isHovered ? '0.05em' : '0',
            transition: 'letter-spacing 0.3s ease'
          }}
        >
          {item.title}
        </h3>
        
        {/* Read More - appears on hover */}
        <div 
          className="flex items-center text-white text-sm font-bold"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.9)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <span className="mr-2 bg-red-600 px-3 py-1 rounded-full">Read More</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{
              animation: isHovered ? 'bounceArrow 0.6s ease-in-out infinite' : 'none'
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: '0 0 60px rgba(239, 68, 68, 0.6), 0 0 100px rgba(239, 68, 68, 0.3)',
          transition: 'opacity 0.4s ease'
        }}
      />
      
      {/* Border glow */}
      <div 
        className="absolute inset-0 rounded-xl border-2"
        style={{
          borderColor: isHovered ? 'rgba(239, 68, 68, 0.8)' : 'transparent',
          transition: 'border-color 0.4s ease'
        }}
      />
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-32 sm:py-32 px-4 sm:px-10 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Campus<span className="text-red-700"> News</span></h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Stories about people, research, and innovation across the Farm
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Row 1 - Scrolling Right */}
        <div className="mb-1 overflow-hidden">
          <div 
            className="flex gap-1 transition-transform"
            style={{
              transform: `translateX(-${scrollPosition1}px)`,
              transition: 'none'
            }}
          >
            {row1Data.map((item, idx) => (
              <NewsCard 
                key={`row1-${idx}`} 
                item={item} 
              index={idx}

                isHovered={hoveredCard === idx}

              />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Left */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-1 transition-transform"
            style={{
              transform: `translateX(-${scrollPosition2}px)`,
              transition: 'none'
            }}
          >
            {row2Data.map((item, idx) => (
              <NewsCard 
                key={`row2-${idx}`} 
                item={item} 
                index={idx}

               isHovered={hoveredCard === idx}

              />
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
       <div className="flex justify-center mt-12">
  <button
    onClick={() => navigate("/events")}
    className="
      relative overflow-hidden
      bg-red-900 text-white
      px-12 py-4 text-lg font-semibold
      group
    "
  >
    {/* Sliding gradient */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-red-500 via-orange-700 to-red-500
        translate-x-[-100%]
        group-hover:translate-x-0
        transition-transform duration-300 ease-out
      "
    />

    {/* Text */}
    <span className="relative z-10">
      More Campus News
    </span>
  </button>
</div>


      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceArrow {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default CampusNews;
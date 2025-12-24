import React, { useState, useEffect, useRef } from "react";

const AcademicsSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: "ug",
      title: "Undergraduate Education",
      desc:
        "A broad liberal arts foundation combined with deep subject expertise",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      path: "/academics/undergraduate",
      direction: "left",
    },
    {
      id: "pg",
      title: "Graduate Education",
      desc:
        "Advanced study and research opportunities shaping future leaders",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      path: "/academics",
      direction: "bottom",
    },
    {
      id: "ll",
      title: "Lifelong Learning",
      desc:
        "Continuing education programs for professionals and learners of all ages",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      path: "/academics/lifelong-learning",
      direction: "right",
    },
  ];

  const getInitialTransform = (direction: string) => {
    switch (direction) {
      case "left":
        return "translateX(-100px)";
      case "right":
        return "translateX(100px)";
      case "bottom":
        return "translateY(80px)";
      default:
        return "translateY(40px)";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="sm:py-4 py-10 px-4 sm:px-6 bg-white overflow-hidden"
    >
      {/* Header */}
      <div
        className="max-w-4xl mx-auto text-center mb-5"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0) scale(1)"
            : "translateY(-40px) scale(0.95)",
          filter: isVisible ? "blur(0px)" : "blur(4px)",
          transition: "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          Academics
        </h2>
        <p className="text-lg text-gray-600">
          Preparing students to make meaningful contributions to society
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => {
          const isActive = activeCard === card.id;

          return (
            <div
              key={card.id}
              className="group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0) translateY(0) rotateY(0deg)"
                  : getInitialTransform(card.direction),
                filter: isVisible ? "blur(0px)" : "blur(3px)",
                transition: `all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                  index * 0.2
                }s`,
              }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(card.id)}
              onClick={() => (window.location.href = card.path)}
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-200 aspect-[4/3] rounded-sm shadow-lg">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: isActive
                      ? "scale(1.12) rotate(1deg)"
                      : "scale(1)",
                    filter: isActive
                      ? "brightness(0.85) contrast(1.1)"
                      : "brightness(1)",
                    transition:
                      "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent/20 to-transparent"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.6s ease",
                  }}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
                  style={{
                    transform: isActive
                      ? "translateX(100%) translateY(-100%)"
                      : "translateX(-100%) translateY(100%)",
                    transition:
                      "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    mixBlendMode: "overlay",
                  }}
                />

                <div
                  className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "scale(1) translate(0, 0)"
                      : "scale(0) translate(-20px, -20px)",
                    transformOrigin: "top left",
                    transition:
                      "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-sm pointer-events-none"
                  style={{
                    boxShadow: isActive
                      ? "0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)"
                      : "none",
                    opacity: isActive ? 1 : 0,
                    transition: "all 0.5s ease",
                  }}
                />
              </div>

              {/* Content */}
              <div
                className="pt-6 space-y-3"
                style={{
                  transform: isActive ? "translateY(4px)" : "translateY(0)",
                  transition:
                    "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <h3
                  className="text-2xl font-bold text-gray-900"
                  style={{
                    transform: isActive
                      ? "translateX(3px)"
                      : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    transform: isActive
                      ? "translateX(2px)"
                      : "translateX(0)",
                    transition: "transform 0.3s ease 0.05s",
                  }}
                >
                  {card.desc}
                </p>

                <div className="flex items-center gap-2 text-[#b1040e] font-semibold pt-2">
                  <span
                    style={{
                      transform: isActive
                        ? "translateX(2px)"
                        : "translateX(0)",
                      transition: "transform 0.3s ease 0.1s",
                    }}
                  >
                    Learn more
                  </span>
                  <svg
                    className="w-5 h-5 arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      transform: isActive
                        ? "translateX(8px) scale(1.1)"
                        : "translateX(0) scale(1)",
                      opacity: isActive ? 1 : 0.7,
                      transition:
                        "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div
                  className="h-0.5 bg-[#b1040e]"
                  style={{
                    width: isActive ? "80px" : "0px",
                    transition:
                      "width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => (window.location.href = "/academics")}
          className="relative overflow-hidden bg-[#b1040e] text-white px-14 py-4 text-lg font-semibold group shadow-lg"
          onMouseEnter={(e) => {
            const bg = e.currentTarget.querySelector(
              ".hover-bg"
            ) as HTMLElement | null;
            const arrow = e.currentTarget.querySelector(
              ".arrow-icon"
            ) as HTMLElement | null;

            if (bg) bg.style.transform = "scaleX(1)";
            if (arrow) arrow.style.transform = "translateX(6px)";
          }}
          onMouseLeave={(e) => {
            const bg = e.currentTarget.querySelector(
              ".hover-bg"
            ) as HTMLElement | null;
            const arrow = e.currentTarget.querySelector(
              ".arrow-icon"
            ) as HTMLElement | null;

            if (bg) bg.style.transform = "scaleX(0)";
            if (arrow) arrow.style.transform = "translateX(0)";
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            More about Academics
            <svg
              className="w-5 h-5 arrow-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                transform: "translateX(0)",
                transition:
                  "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <div
            className="absolute inset-0 bg-[#8c030b] hover-bg"
            style={{
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition:
                "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
        </button>
      </div>

      <div
        className="max-w-6xl mx-auto border-t border-gray-300 mt-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          transition: "all 0.8s ease 1s",
        }}
      />
    </section>
  );
};

export default AcademicsSection;

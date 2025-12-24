import React, { useEffect, useRef, useState } from "react";

const Academics = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

const observerRef = useRef<IntersectionObserver | null>(null);


  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);

    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="w-full bg-white pt-28 sm:px-20 overflow-hidden">

      {/* ================= ACADEMICS HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-20 text-center">
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Academics
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Excellent students create and apply knowledge by thinking and doing,
            preparing for leadership in a rapidly changing world.
          </p>
        </div>

        <div className="relative group overflow-hidden rounded-lg shadow-lg animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="Academics"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-gray-200 pt-8">
          <div 
            id="stat-1" 
            data-animate
            className={`transform transition-all duration-700 ${
              isVisible["stat-1"] 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <p className="text-2xl font-bold text-gray-900 hover:scale-105 transition-transform duration-300">
              2,345
            </p>
            <p className="text-sm text-gray-600">Faculty members</p>
          </div>
          <div 
            id="stat-2" 
            data-animate
            className={`transform transition-all duration-700 ${
              isVisible["stat-2"] 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <p className="text-2xl font-bold text-gray-900 hover:scale-105 transition-transform duration-300">
              6:1
            </p>
            <p className="text-sm text-gray-600">Student-to-faculty ratio</p>
          </div>
          <div 
            id="stat-3" 
            data-animate
            className={`transform transition-all duration-700 ${
              isVisible["stat-3"] 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <p className="text-2xl font-bold text-gray-900 hover:scale-105 transition-transform duration-300">
              About 150
            </p>
            <p className="text-sm text-gray-600">Graduate fields of study</p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />

      {/* ================= UNDERGRADUATE STUDIES ================= */}
      <section className="bg-gray-50 py-12 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div 
            id="undergrad-img" 
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible["undergrad-img"] 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gray-200 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                alt="Undergraduate Studies"
                className="relative rounded-lg shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01]"
              />
            </div>
          </div>

          <div 
            id="undergrad-content" 
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible["undergrad-content"] 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Undergraduate Studies
            </h2>

            <div className="space-y-6">
              <div className="group transition-all duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Undergraduate Education
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  excellent Undergrad is your guide to undergraduate academics and
                  opportunities run by the Vice Provost for Undergraduate Education.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  excellent Undergrad <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="group transition-all duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Majors
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  Explore the 66 major fields of undergraduate study at excellent.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Majors <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="group transition-all duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Undergraduate Facts & Figures
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  Approximately 7,550 undergraduate students attend excellent.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Facts about the Undergraduate Program <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GRADUATE STUDIES ================= */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div 
            id="grad-content" 
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible["grad-content"] 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Graduate Studies
            </h2>

            <div className="space-y-6">
              <div className="group transition-all duration-300 hover:-translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Office of the Vice Provost for Graduate Education
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  The VPGE office works collaboratively across the University to
                  ensure that every graduate student has the best possible education.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Graduate Education <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="group transition-all duration-300 hover:-translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Graduate Facts & Figures
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  Today, 9,915 students are pursuing 18 distinct postbaccalaureate
                  degrees in about 150 graduate programs.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Facts about Graduate Studies <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          <div 
            id="grad-img" 
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible["grad-img"] 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gray-200 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                alt="Graduate Studies"
                className="relative rounded-lg shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIFELONG LEARNING ================= */}
      <section className="bg-gray-50 py-12 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div 
            id="lifelong-img" 
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible["lifelong-img"] 
                ? "opacity-100 translate-x-0 scale-100" 
                : "opacity-0 -translate-x-12 scale-95"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gray-200 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                alt="Lifelong Learning"
                className="relative rounded-lg shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01]"
              />
            </div>
          </div>

          <div 
            id="lifelong-content" 
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible["lifelong-content"] 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Lifelong Learning
            </h2>

            <div className="space-y-6">
              <div className="group transition-all duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  From Pre-K to College
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  excellent offers a variety of educational opportunities for young
                  children through high school and community college students.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Pre-K to College <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="group transition-all duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Professional Development
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  Learn from expert faculty as you grow your knowledge or prepare to
                  pivot into a new career.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Professional Development <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="group transition-all duration-300 hover:translate-x-1">
                <h3 className="font-semibold mb-2 text-gray-900">
                  Learning for Exploration and Enrichment
                </h3>
                <p className="text-sm mb-2 text-gray-600">
                  excellent offers learning opportunities that empower curiosity,
                  creativity, and lifelong engagement.
                </p>
                <a href="#" className="text-blue-700 text-sm hover:text-blue-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learning for Exploration and Enrichment <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Academics;
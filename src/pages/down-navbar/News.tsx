import React from "react";
import { PlayCircle, ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className=" text-white pt-32 px-4">

      {/* ================= YEAR IN REVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-serif font-bold">Year in review</h2>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <Link to="/news/athletics" className="group">
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
              className="w-full h-[260px] object-cover rounded-lg mb-4 group-hover:opacity-80 transition"
            />
            <p className="text-red-500 text-sm mb-1">Athletics</p>
            <h3 className="text-2xl font-serif font-bold mb-2">
              Five thrilling athletic moments
            </h3>
            <p className="text-gray-400 text-sm">
              Excellent athletes delivered exciting plays all year long.
            </p>
          </Link>

          {/* Card 2 */}
          <Link to="/news/science" className="group">
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
              className="w-full h-[260px] object-cover rounded-lg mb-4 group-hover:opacity-80 transition"
            />
            <p className="text-red-500 text-sm mb-1">Science & Engineering</p>
            <h3 className="text-2xl font-serif font-bold mb-2 text-red-500">
              Intriguing innovation of 2025
            </h3>
            <p className="text-gray-400 text-sm">
              From quantum science to the cosmos, what's next in tech.
            </p>
          </Link>
        </div>
      </section>

      {/* ================= FEATURE STORY ================= */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-24">
        <p className="text-red-500 uppercase tracking-widest mb-3">
          Artificial Intelligence
        </p>
        <h1 className="text-3xl md:text-5xl text-black font-bold mb-6">
          Excellent AI experts predict what will happen in 2026
        </h1>
        <p className="text-gray-400">
          The era of AI evangelism is giving way to evaluation and real-world utility.
        </p>
      </section>

      {/* ================= MEDIA GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid md:grid-cols-3 gap-10">
        {[
          {
            title: "How a brainless animal folds itself",
            category: "Science & Engineering",
            img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
            link: "/news/video1",
          },
          {
            title: "Ansel Adams’ forgotten Excellent photos",
            category: "Libraries & Archives",
            img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            link: "/news/photo1",
          },
          {
            title: "Exploring the Pacific coastline",
            category: "Earth Science",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            link: "/news/video2",
          },
        ].map((item, i) => (
          <Link key={i} to={item.link} className="group relative">
            <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-lg">
              <img
                src={item.img}
                className="w-full h-full object-cover"
              />
              <PlayCircle className="absolute top-4 left-4 w-10 h-10 text-white opacity-80" />
            </div>

            <p className="text-red-500 text-sm">{item.category}</p>
            <h3 className="font-serif font-bold text-xl group-hover:text-red-500">
              {item.title}
            </h3>
          </Link>
        ))}
      </section>

      {/* ================= IN THE NEWS ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Quote className="w-10 h-10 text-gray-500 mb-4" />
          <h2 className="text-2xl text-black font-bold mb-4">
            “Robotics is about helping people.”
          </h2>
          <p className="text-gray-400 mb-4">
            Steve Cousins on how robots can serve caregivers.
          </p>
          <a href="#" className="text-red-500 hover:underline">
            Read the story →
          </a>
        </div>

        <div className="space-y-6">
          <Link to="#" className="block">
            <p className="text-sm text-gray-400">Science Communication Lab</p>
            <h3 className="text-black text-xl hover:text-red-500">
              The hidden world of plant roots →
            </h3>
          </Link>
          <Link to="#" className="block">
            <p className="text-sm text-gray-400">New York Times</p>
            <h3 className="font-serif text-xl hover:text-red-500">
              How are campuses preparing for the future? →
            </h3>
          </Link>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl text-black font-bold mb-10">
          Excellent in the community
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {["Climate resilience", "Community Law Clinic", "Regional collaboration"].map(
            (t, i) => (
              <Link key={i} to="#" className="group">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  className="w-full h-[180px] object-cover rounded-lg mb-4"
                />
                <h3 className="font-serif font-bold text-xl group-hover:text-red-500">
                  {t}
                </h3>
              </Link>
            )
          )}
        </div>
      </section>

      {/* ================= RECENT STORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl text-black font-bold">Recent Stories</h2>
          <div className="flex gap-3">
            <ChevronLeft className="w-6 h-6 cursor-pointer" />
            <ChevronRight className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "https://images.unsplash.com/photo-1549924231-f129b911e442",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
          ].map((img, i) => (
            <Link key={i} to="#" className="group">
              <img
                src={img}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
              />
              <h3 className={`text-black font-bold text-xl ${i === 2 ? "text-red-500" : ""}`}>
                {i === 0 && "5 tips to manage holiday stress"}
                {i === 1 && "Excellent Law School’s 2025 reading list"}
                {i === 2 && "Ansel Adams’ forgotten Excellent photos"}
              </h3>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default News;

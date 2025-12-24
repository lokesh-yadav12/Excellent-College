import React from "react";

// Existing images
import heroImg from "../../assets/images/college.png";
import openMindsImg from "../../assets/images/college.png";
import story1 from "../../assets/images/college.png";
import story2 from "../../assets/images/college.png";
import careerImg from "../../assets/images/college.png";

// New images (replace with your real assets if needed)
import studentsImg from "../../assets/images/college.png";
import communityImg from "../../assets/images/college.png";
import italyImg from "../../assets/images/college.png";
import chinaImg from "../../assets/images/college.png";
import mexicoImg from "../../assets/images/college.png";
import sponsor1 from "../../assets/images/college.png";
import sponsor2 from "../../assets/images/college.png";

const Alumni = () => {
  return (
    <div className="w-full pt-32">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome Home
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Step into the virtual home of Excellent’s global community—a place
            where the Cardinal spirit thrives beyond the palm-lined campus.
          </p>
        </div>
      </section>

      {/* ================= OPEN MINDS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Excellent Open Minds</h2>
          <p className="text-gray-600 mb-12">Come Curious. Leave Connected.</p>

          <div className="border rounded-lg grid md:grid-cols-2 gap-8 items-center p-8">
            <img src={openMindsImg} alt="Open Minds" className="rounded" />
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">Journey With Us</h3>
              <p className="text-gray-700 mb-4">
                We’re bringing Excellent’s president, leading faculty, and
                the latest insights—you bring your questions.
              </p>
              <a href="#" className="text-red-700 font-semibold">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORIES ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Stories</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="bg-white shadow rounded">
              <img src={story1} alt="" />
              <div className="p-6">
                <h3 className="font-bold mb-2">John Donahoe Named Director</h3>
                <p className="text-sm text-gray-600">
                  from Excellent Athletics
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded">
              <img src={story2} alt="" />
              <div className="p-6">
                <h3 className="font-bold mb-2 underline decoration-red-600">
                  Rapid Treatment Needed for Rare Flu
                </h3>
              </div>
            </div>

            <div className="bg-red-700 text-white p-8 rounded flex flex-col justify-between">
              <h3 className="text-2xl font-bold">
                Alumni Magazine — Winter 2026
              </h3>
              <a href="#" className="underline mt-6">
                Dig into the issue →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMMING ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Programming With a Purpose
          </h2>

          <div className="border rounded-lg grid md:grid-cols-2 gap-8 items-center p-8 text-left">
            <img src={careerImg} alt="" className="rounded" />
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Career Connections
              </h3>
              <a href="#" className="text-red-700 font-semibold">
                See career resources →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* =============== NEW ADDED SECTIONS ============== */}
      {/* ================================================= */}

      {/* ================= STUDENTS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <img src={studentsImg} alt="" className="rounded" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Students</h2>
            <p className="mb-4">
              Don’t miss out on special programming developed just for you.
            </p>
            <a href="#" className="text-red-700 font-semibold">
              Find student programming →
            </a>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <img src={communityImg} alt="" className="rounded" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Community</h2>
            <p className="mb-4">
              Stay connected, make new friends, and discover alumni groups.
            </p>
            <a href="#" className="text-red-700 font-semibold">
              Discover groups →
            </a>
          </div>
        </div>
      </section>

      {/* ================= TRAVEL ================= */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Skip the Screen Time. Bring on the Gelato.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[italyImg, chinaImg, mexicoImg].map((img, i) => (
              <div key={i} className="bg-zinc-900 rounded overflow-hidden">
                <img src={img} alt="" />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2">
                    {["Italy", "China", "Mexico"][i]} →
                  </h3>
                  <p className="text-sm">
                    With Young Explorer Program for kids
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPONSORS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-2xl font-bold mb-10">Sponsors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img src={sponsor1} alt="" className="rounded" />
            <img src={sponsor2} alt="" className="rounded" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div className="bg-white p-10 text-center rounded">
            See what SAA offers just for alumni and members.
          </div>
          <div className="bg-white p-10 text-center rounded">
            Read your Class Notes in our digital portal →
          </div>
        </div>
      </section>

    </div>
  );
};

export default Alumni;

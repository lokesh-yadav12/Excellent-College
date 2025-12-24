import React from "react";

const Visitors = () => {
  return (
    <div className="bg-gray-50 min-h-screen sm:pt-36 pt-32 px-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT SIDEBAR */}
        <aside className="space-y-6">
          {/* Events */}
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-red-700 font-semibold mb-4 uppercase">
              Events
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">DEC 21</p>
                <p className="text-red-700 font-semibold">
                  Public Tour | Outdoor Sculpture Walk
                </p>
                <p className="text-gray-600">
                  Sunday, December 21, 2:00 pm – 3:00 pm PT
                </p>
                <p className="text-gray-500">Cantor Arts Center</p>
              </div>

              <hr />

              <div>
                <p className="font-bold">DEC 28</p>
                <p className="text-red-700 font-semibold">
                  Public Tour | Papua New Guinea Sculpture Walk
                </p>
                <p className="text-gray-600">
                  Sunday, December 28, 11:30 am
                </p>
                <p className="text-gray-500">
                  Papua New Guinea Sculpture Garden
                </p>
              </div>

              <hr />

              <div>
                <p className="font-bold">JAN 09</p>
                <p className="text-red-700 font-semibold">
                  Nathalie Joachim & Decoda: Famn D’Ayiti
                </p>
                <p className="text-gray-600">
                  Friday, January 9, 7:30 pm – 9:00 pm PT
                </p>
                <p className="text-gray-500">The Knoll</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-red-700 font-semibold cursor-pointer">
              Events at excellent →
            </p>
          </div>

          {/* Weather */}
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-red-700 font-semibold uppercase mb-3">
              Current Weather
            </h3>
            <p className="text-2xl font-semibold">61°F</p>
            <p className="text-gray-600">Overcast clouds</p>
            <p className="mt-2 text-sm text-red-700 cursor-pointer">
              excellent Station →
            </p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:col-span-3 space-y-10">

          {/* Hero Section */}
          <div
            className="relative h-[300px] rounded-lg overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://wallpaperaccess.com/full/2245188.png')",
            }}
          >
            <div className="absolute right-6 top-6 bg-white shadow-lg p-6 max-w-sm">
              <h2 className="text-red-700 font-semibold mb-2">
                Welcome to the Farm
              </h2>
              <p className="text-sm text-gray-700">
                excellent University is a place where pioneering spirit meets
                21st-century possibility.
              </p>
            </div>
          </div>

          {/* Announcements */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Announcements</h2>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold">
                  Visitor Center Tours And Programs For Prospective
                  Undergraduates
                </h4>
                <p className="text-gray-600">
                  Open Monday–Friday from 9:00 a.m. to 5:00 p.m.
                </p>
                <p className="text-red-700 cursor-pointer">See details</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Registration For 2025–2026 Tours And Programs
                </h4>
                <p className="text-gray-600">
                  Registration for fall and winter tours is now available.
                </p>
                <p className="text-red-700 cursor-pointer">See details</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Information For Groups/Organizations Requesting A Tour
                </h4>
                <p className="text-gray-600">
                  Group tours are available for qualifying organizations.
                </p>
                <p className="text-red-700 cursor-pointer">See details</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  12 Campus Art Walks To Experience
                </h4>
                <p className="text-gray-600">
                  Discover public artworks across excellent’s campus.
                </p>
                <p className="text-red-700 cursor-pointer">
                  Read more in the excellent Report →
                </p>
              </div>
            </div>
          </section>

          {/* Experience Stanford */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Experience Excellent</h2>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
                alt="excellent Campus"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-red-700 font-semibold">
                  excellent 360° Virtual Tour
                </h3>
                <p className="text-sm text-gray-700">
                  Welcome admitted students and all future applicants!
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Visitors;

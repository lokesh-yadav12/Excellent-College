import React, { useState } from 'react';
import { Search, Share2, Bookmark } from 'lucide-react';

const Event = () => {
  const [activeTab, setActiveTab] = useState('trending');
 const [savedEvents, setSavedEvents] = useState<number[]>([]);

  const [showAllEvents, setShowAllEvents] = useState(false);

const toggleSave = (eventId: number, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    setSavedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    // Share functionality here
  };

  const events = [
    {
      id: 1,
      type: 'TOUR',
      title: 'Public Tour | Outdoor Sculpture Walk, Museum',
      date: 'Sun, Dec 21, 2025',
      time: '2pm to 3pm PT',
      location: 'Cantor Arts Center',
      image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400',
      featured: true,
      link: '/events/outdoor-sculpture-walk'
    },
    {
      id: 2,
      type: 'LECTURE/PRESENTATION/TALK',
      title: 'Reading with C Pam Zhang, the Stein Visiting Writer',
      date: 'Wed, Feb 18, 2026',
      time: '8pm to 9:30pm PT',
      location: 'Faculty Club, Cedar Room',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
      featured: true,
      link: '/events/c-pam-zhang-reading'
    },
    {
      id: 3,
      type: 'PERFORMANCE',
      title: 'Faculty Recital: Robert Huw Morgan, Organ',
      date: 'Wed, Jan 21, 2026',
      time: '7:30pm to 9pm PT',
      location: 'Memorial Church',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400',
      featured: true,
      badge: 'NEW',
      streamAvailable: true,
      link: '/events/faculty-recital-organ'
    },
    {
      id: 4,
      type: 'SOCIAL EVENT/RECEPTION',
      title: 'Take a break, pet a dog',
      date: 'Wed, Jan 7, 2026',
      time: '3pm to 4pm PT',
      location: 'Science and Engineering Quad, Y2E2 Courtyard',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
      featured: true,
      link: '/events/pet-a-dog'
    },
    {
      id: 5,
      type: 'LECTURE/PRESENTATION/TALK',
      title: 'Excellent Energy Seminar | Allocating Electricity | Alexandra Klass, University of Michigan Law School',
      date: 'Mon, Jan 5, 2026',
      time: '4:30pm to 5:20pm PT',
      location: 'Building 370, 370',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400',
      featured: true,
      badge: 'NEW',
      link: '/events/energy-seminar-electricity'
    },
    {
      id: 6,
      type: 'LECTURE/PRESENTATION/TALK',
      title: 'Excellent Energy Seminar | Decarbonizing Metallurgy from Extraction to 3D Printing | Leora Dresselhaus-Marais,...',
      date: 'Mon, Jan 12, 2026',
      time: '4:30pm to 5:20pm PT',
      location: 'Building 370, 370',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      featured: true,
      link: '/events/energy-seminar-metallurgy'
    },
    {
      id: 7,
      type: 'LECTURE/PRESENTATION/TALK',
      title: "Enduring Hostility: A Book Talk on the Making of America's Iran Policy",
      date: 'Tue, Jan 13, 2026',
      time: '12pm to 1:15pm PT',
      location: 'Encina Hall, William J. Perry Conference Room',
      image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?w=400',
      featured: true,
      badge: 'NEW',
      registerLink: true,
      link: '/events/book-talk-iran-policy'
    },
    {
      id: 8,
      type: 'WORKSHOP',
      title: 'Creative Writing Workshop with Distinguished Authors',
      date: 'Thu, Jan 15, 2026',
      time: '2pm to 4pm PT',
      location: 'Margaret Jacks Hall, Room 126',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400',
      featured: true,
      link: '/events/creative-writing-workshop'
    },
    {
      id: 9,
      type: 'PERFORMANCE',
      title: 'Excellent Symphony Orchestra: Winter Concert',
      date: 'Sat, Jan 17, 2026',
      time: '7:30pm to 9:30pm PT',
      location: 'Bing Concert Hall',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400',
      featured: true,
      badge: 'NEW',
      link: '/events/symphony-winter-concert'
    },
    {
      id: 10,
      type: 'EXHIBITION',
      title: 'Contemporary Art Exhibition: Visions of Tomorrow',
      date: 'Ongoing through Mar 2026',
      time: 'Daily 11am to 5pm PT',
      location: 'Cantor Arts Center',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400',
      featured: true,
      link: '/events/contemporary-art-exhibition'
    }
  ];

  const displayedEvents = showAllEvents ? events : events.slice(0, 6);

  return (
    <div className="min-h-screen bg-white sm:pt-36">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-red-700">Excellent</h1>
              <span className="text-3xl font-light">| Events Calendar</span>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for events, places, departments, groups"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Banner */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-6 gap-0">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400" alt="" className="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400" alt="" className="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400" alt="" className="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400" alt="" className="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400" alt="" className="w-full h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 sm:px-14">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">Featured Events</h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-300 mb-8">
          <button
            onClick={() => setActiveTab('trending')}
            className={`pb-4 text-lg font-semibold transition-colors relative ${
              activeTab === 'trending'
                ? 'text-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            TRENDING
            {activeTab === 'trending' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 text-lg font-semibold transition-colors relative ${
              activeTab === 'upcoming'
                ? 'text-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            UPCOMING
            {activeTab === 'upcoming' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
            )}
          </button>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {displayedEvents.map((event) => (
            <a
              key={event.id}
              href={event.link}
              className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="flex gap-6 p-6">
                {/* Event Image */}
                <div className="flex-shrink-0 w-72 h-48 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {event.badge && (
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                        {event.badge}
                      </span>
                    )}
                    {event.featured && (
                      <span className="bg-teal-700 text-white text-xs font-bold px-3 py-1 rounded">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-red-700 text-sm font-bold mb-2">
                      {event.type}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors cursor-pointer">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base">
                          {event.date} {event.time}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base text-blue-600">
                          {event.location}
                        </span>
                      </div>

                      {event.streamAvailable && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                          <span className="text-sm">Stream Available</span>
                        </div>
                      )}
                    </div>

                    {event.registerLink && (
                      <span className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-4 hover:underline">
                        Register
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 items-end">
                  <button
                    onClick={(e) => toggleSave(event.id, e)}
                    className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                      savedEvents.includes(event.id)
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Bookmark
                      className="w-5 h-5"
                      fill={savedEvents.includes(event.id) ? 'currentColor' : 'none'}
                    />
                    <span className="font-semibold">Save</span>
                  </button>
                  
                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 rounded transition"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Show All Events Button */}
        {!showAllEvents && events.length > 6 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllEvents(true)}
              className="inline-flex items-center gap-2 text-blue-600 text-lg font-semibold hover:underline"
            >
              Show all events
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Event;
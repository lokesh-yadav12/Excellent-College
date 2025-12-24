import React from 'react';

const Research = () => {
  const researchCards = [
    {
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      title: "Developing generative AI for the genome"
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      title: "Reimagining the future of food"
    },
    {
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
      title: "Paving the way for treatment of neurodegenerative diseases",
      titleColor: "text-red-700"
    }
  ];

  const stats = [
    { number: "6,699", description: "Inventions created by federally funded Excellent research" },
    { number: "3,029", description: "U.S. patents based on federally funded Excellent research" },
    { number: "400+", description: "Start-up companies founded based on federally funded research at Excellent" },
    { number: "350,000+", description: "Jobs created by companies that started with federally funded Excellent research" },
    { number: "$94 Billion", description: "Private investment in start-up companies that grew out of federally funded Excellent research" },
    { number: "$11+ trillion", description: "Market value of the top 30 companies founded by Excellent alumni" }
  ];

  const ventures = [
    ["Cisco Systems", "Instagram", "PayPal"],
    ["Gap", "Intuit", "Sun Microsystems"],
    ["Genentech", "LinkedIn", "Tableau"],
    ["Gilead", "Netflix", "WhatsApp"],
    ["Google", "Nike", "Yahoo!"],
    ["Hewlett-Packard", "Nvidia", "YouTube"]
  ];

  const discoveries = [
    "Antibody therapies that made cancer and autoimmune disease treatments possible",
    "Artificial organ prototypes and advancements in artificial hearts and other organ-support technologies",
    "Recombinant DNA technology that laid the foundation for the biotech industry",
    "Google's page-rank algorithm that revolutionized searching the web",
    "Internet protocols (TCP/IP) that formed the backbone of the modern internet"
  
  ];

  const infrastructure = [
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      title: "Vice Provost and Dean of Research",
      description: "The Office of the Vice Provost and Dean of Research (VPDoR) advances Excellent's research ecosystem, which includes independent labs, centers, and institutes.",
      link: "VPDoR ›"
    },
    {
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop",
      title: "Excellent Universities Libraries",
      description: "Excellent is home to 21 libraries, each with a world-class collection of books, journals, films, maps, and databases.",
      link: "Excellent Universities Libraries ›"
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      title: "Office of Technology Licensing",
      description: "The Office of Technology Licensing (OTL) manages intellectual property licensing and brings innovations that grow from Excellent research to the marketplace.",
      link: "OTL ›"
    }
  ];

  return (
    <div className='sm:pt-28 sm:px-12 pt-24'>

      {/* HERO */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Research
          </h1>

          <p className="text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            From Nobel Prize winners to undergraduates, all members of the Excellent community are engaged in the creation of knowledge and in developing solutions for a better future.
          </p>

          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
              className="w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* BUILDING TOMORROW */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Building Tomorrow
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {researchCards.map((card, i) => (
              <a
                key={i}
                href="#"
                className="group bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-bold ${card.titleColor || 'text-black'} group-hover:underline`}>
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVING GROWTH */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Driving Growth
          </h2>

          <div className="grid md:grid-cols-3 gap-12 border-y py-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center transition-all duration-300 hover:text-red-700 hover:-translate-y-1"
              >
                <div className="text-2xl font-bold mb-4">{stat.number}</div>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERIES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8">
            <h2 className="text-2xl font-bold mb-6">World-Changing Discoveries</h2>

            <ul className="space-y-3">
              {discoveries.map((item, i) => (
                <li
                  key={i}
                  className="transition-all duration-300 hover:translate-x-2 hover:text-red-700"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800"
              className="transition-transform duration-700 hover:-translate-x-3"
            />
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {infrastructure.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="font-bold mt-4 group-hover:text-red-700">
                {item.title}
              </h3>

              <p className="text-sm mt-2">{item.description}</p>

              <span className="text-red-700 font-semibold group-hover:underline">
                {item.link}
              </span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Research;

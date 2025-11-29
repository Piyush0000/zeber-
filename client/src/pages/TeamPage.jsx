import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Chief AI Officer",
      background: "Former Google AI Research Lead, PhD in Machine Learning from MIT",
      bio: "Leading our AI research initiatives with over 15 years of experience in machine learning and neural networks.",
      image: "/placeholder-avatar-1.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Head of Engineering",
      background: "Ex-Engineering Director at Microsoft, B.Tech from IIT Bombay",
      bio: "Building scalable AI systems that power enterprise solutions for clients worldwide.",
      image: "/placeholder-avatar-2.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Data Science Lead",
      background: "Former Senior Data Scientist at Amazon, MS in Data Science from Stanford",
      bio: "Transforming complex data into actionable insights that drive business growth.",
      image: "/placeholder-avatar-3.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      background: "Ex-Product Lead at Meta, MBA from IIM Bangalore",
      bio: "Bridging the gap between cutting-edge AI technology and real business needs.",
      image: "/placeholder-avatar-4.jpg"
    },
    {
      name: "David Kim",
      role: "AI Engineer",
      background: "Former Research Scientist at IBM Watson, PhD from IIIT Hyderabad",
      bio: "Developing innovative AI algorithms that solve complex business challenges.",
      image: "/placeholder-avatar-5.jpg"
    },
    {
      name: "Emma Wilson",
      role: "Consultant",
      background: "Former Strategy Consultant at McKinsey, MBA from Harvard Business School",
      bio: "Helping organizations adopt AI strategies that align with their business objectives.",
      image: "/placeholder-avatar-6.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Meet the brilliant minds behind ZeberAI's cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <div className="bg-white border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center text-gray-400">
                    Avatar
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.background}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity Statement */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Diverse Expertise, Unified Vision</h2>
          <p className="text-xl text-gray-700 mb-8">
            Our team brings together experts from leading tech companies and prestigious institutions, 
            united by a passion for AI innovation and business transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top Tech Alumni</h3>
              <p className="text-gray-600">
                Former employees from Google, Microsoft, Amazon, IBM, and Meta
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elite Education</h3>
              <p className="text-gray-600">
                Graduates from IITs, IIITs, MIT, Stanford, and top business schools
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary</h3>
              <p className="text-gray-600">
                AI Engineers, Data Scientists, Product Managers, and Business Consultants
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
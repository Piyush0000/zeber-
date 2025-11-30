import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Shivam Tiwari",
      role: "Founder and CEO",
      background: "Ex-Engineering Director at Microsoft, B.Tech from IIT Bombay",
      bio: "Building scalable AI systems that power enterprise solutions for clients worldwide.",
      image: "/placeholder-avatar-2.jpg"
    },
    {
      name: "Piyush Rathore",
      role: "Chief Technology Officer",
      background: "Former Google AI Research Lead, PhD in Machine Learning from MIT",
      bio: "Leading our AI research initiatives with over 15 years of experience in machine learning and neural networks.",
      image: "/placeholder-avatar-1.jpg"
    },
    {
      name: "Shubham Raj ",
      role: "Chief Marketing Officer",
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
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full mb-8">
            <span className="text-amber-400">🌟</span>
            <span className="text-yellow-300 font-semibold text-sm">EXPERT TEAM</span>
            <span className="text-yellow-400">🌟</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Meet the brilliant minds behind ZeberAI's cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group hover:border-amber-500/50"
              >
                <div className="h-48 bg-gradient-to-br from-blue-900 to-amber-900 flex items-center justify-center">
                  <div className="bg-slate-700 border-2 border-dashed rounded-full w-24 h-24 flex items-center justify-center text-blue-400 group-hover:text-amber-400 transition-colors duration-300">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3 group-hover:text-amber-400 transition-colors duration-300">{member.role}</p>
                  <p className="text-sm text-slate-400 mb-3">{member.background}</p>
                  <p className="text-slate-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity Statement */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Diverse Expertise, Unified Vision</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Our team brings together experts from leading tech companies and prestigious institutions, 
            united by a passion for AI innovation and business transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-600 hover:border-amber-500/50 group">
              <div className="text-4xl mb-4 text-blue-400 group-hover:text-amber-400 transition-colors duration-300">💻</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">Top Tech Alumni</h3>
              <p className="text-slate-300">
                Former employees from Google, Microsoft, Amazon, IBM, and Meta
              </p>
            </div>
            <div className="p-6 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-600 hover:border-amber-500/50 group">
              <div className="text-4xl mb-4 text-blue-400 group-hover:text-amber-400 transition-colors duration-300">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">Elite Education</h3>
              <p className="text-slate-300">
                Graduates from IITs, IIITs, MIT, Stanford, and top business schools
              </p>
            </div>
            <div className="p-6 bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-600 hover:border-amber-500/50 group">
              <div className="text-4xl mb-4 text-blue-400 group-hover:text-amber-400 transition-colors duration-300">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">Multidisciplinary</h3>
              <p className="text-slate-300">
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
import React from 'react';

const EnhancedTeamPage = () => {
  const teamMembers = [
    {
      name: "Shivam Tiwari",
      role: "Founder and CEO",
      background: "Ex-Engineering Director at Microsoft, B.Tech from IIT Bombay",
      bio: "Building scalable AI systems that power enterprise solutions for clients worldwide.",
      gradient: "from-blue-500 to-purple-500",
      delay: 300
    },
    {
      name: "Piyush Rathore",
      role: "Chief Technology Officer",
      background: "Former Google AI Research Lead, PhD in Machine Learning from MIT",
      bio: "Leading our AI research initiatives with over 15 years of experience in machine learning and neural networks.",
      gradient: "from-amber-500 to-yellow-500",
      delay: 400
    },
    {
      name: "Shubham Raj",
      role: "Chief Marketing Officer",
      background: "Former Senior Data Scientist at Amazon, MS in Data Science from Stanford",
      bio: "Transforming complex data into actionable insights that drive business growth.",
      gradient: "from-teal-500 to-green-500",
      delay: 500
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      background: "Ex-Product Lead at Meta, MBA from IIM Bangalore",
      bio: "Bridging the gap between cutting-edge AI technology and real business needs.",
      gradient: "from-purple-500 to-pink-500",
      delay: 600
    },
    {
      name: "David Kim",
      role: "AI Engineer",
      background: "Former Research Scientist at IBM Watson, PhD from IIIT Hyderabad",
      bio: "Developing innovative AI algorithms that solve complex business challenges.",
      gradient: "from-blue-500 to-teal-500",
      delay: 700
    },
    {
      name: "Emma Wilson",
      role: "Consultant",
      background: "Former Strategy Consultant at McKinsey, MBA from Harvard Business School",
      bio: "Helping organizations adopt AI strategies that align with their business objectives.",
      gradient: "from-amber-500 to-orange-500",
      delay: 800
    }
  ];

  const expertise = [
    {
      title: "Top Tech Alumni",
      description: "Former employees from Google, Microsoft, Amazon, IBM, and Meta",
      icon: "💻",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Elite Education",
      description: "Graduates from IITs, IIITs, MIT, Stanford, and top business schools",
      icon: "🎓",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      title: "Multidisciplinary",
      description: "AI Engineers, Data Scientists, Product Managers, and Business Consultants",
      icon: "🤝",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="bg-slate-900 enhanced-bg-pattern min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-amber-900/10 to-purple-900/10 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full mb-8 animate-glow">
            <span className="text-amber-400">🌟</span>
            <span className="text-yellow-300 font-semibold text-sm">EXPERT TEAM</span>
            <span className="text-yellow-400">🌟</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-down">
            Our <span className="enhanced-gradient-text">Team</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Meet the brilliant minds behind ZeberAI's cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Enhanced Team Grid */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="enhanced-card overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${member.delay}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="bg-slate-800/80 border-2 border-white/20 rounded-full w-28 h-28 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:enhanced-gradient-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className={`font-medium mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-400 mb-3 leading-relaxed">{member.background}</p>
                  <p className="text-slate-300 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Diversity Statement */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-down">
            <span className="enhanced-gradient-text-warm">Diverse Expertise, Unified Vision</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Our team brings together experts from leading tech companies and prestigious institutions, 
            united by a passion for AI innovation and business transformation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="enhanced-card p-6 group animate-fade-in-up"
                style={{ animationDelay: `${500 + index * 150}ms` }}
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:enhanced-gradient-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedTeamPage;
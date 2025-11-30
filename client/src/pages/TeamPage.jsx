import React from 'react';
import shivamImg from '../assets/Shivam.jpeg';
import piyushImg from '../assets/Piyush.jpg';
import shubhamImg from '../assets/Shubham.jpeg';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Shivam Tiwari",
      role: "Founder and CEO",
      background: "Ex-Engineering Director at Microsoft, B.Tech from IIT Bombay",
      bio: "Building scalable AI systems that power enterprise solutions for clients worldwide.",
      image: shivamImg,
      gradient: "from-blue-500 to-purple-500",
      delay: 300
    },
    {
      name: "Piyush Rathore",
      role: "Chief Technology Officer",
      background: "Former Google AI Research Lead, PhD in Machine Learning from MIT",
      bio: "Leading our AI research initiatives with over 15 years of experience in machine learning and neural networks.",
      image: piyushImg,
      gradient: "from-amber-500 to-yellow-500",
      delay: 400
    },
    {
      name: "Shubham Raj",
      role: "Chief Marketing Officer",
      background: "Former Senior Data Scientist at Amazon, MS in Data Science from Stanford",
      bio: "Transforming complex data into actionable insights that drive business growth.",
      image: shubhamImg,
      gradient: "from-teal-500 to-green-500",
      delay: 500
    },
    {
      name: "Sagar Teotia",
      role: "Product Manager",
      background: "Ex-Product Lead at Meta, MBA from IIM Bangalore",
      bio: "Bridging the gap between cutting-edge AI technology and real business needs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-purple-500 to-pink-500",
      delay: 600
    },
    {
      name: "Ritvik Kant",
      role: "Cloud Architect",
      background: "Former Research Scientist at IBM Watson, PhD from IIIT Hyderabad",
      bio: "Developing innovative AI algorithms that solve complex business challenges.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-blue-500 to-teal-500",
      delay: 700
    },
    {
      name: "Nishtha",
      role: "UI/UX Designer",
      background: "Former Strategy Consultant at McKinsey, MBA from Harvard Business School",
      bio: "Helping organizations adopt AI strategies that align with their business objectives.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
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
    <div className="bg-slate-900 min-h-screen">
      {/* Hero Section */}
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
            Our <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Team</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Meet the brilliant minds behind ZeberAI's cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group hover:border-amber-500/50 animate-scale-in"
                style={{ animationDelay: `${member.delay}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="bg-slate-800/80 border-2 border-white/20 rounded-full w-28 h-28 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
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

      {/* Diversity Statement */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-down">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Diverse Expertise, Unified Vision</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Our team brings together experts from leading tech companies and prestigious institutions, 
            united by a passion for AI innovation and business transformation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-600 hover:border-amber-500/50 group p-6 animate-fade-in-up"
                style={{ animationDelay: `${500 + index * 150}ms` }}
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
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

export default TeamPage;
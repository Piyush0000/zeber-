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
    ,
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8 animate-fade-in-down">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-rainbow">Team</span>
          </h1>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto animate-fade-in-down delay-100">
            Meet the brilliant minds behind ZeberAI's cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white border border-blue-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-64 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <div className="bg-white border-2 border-dashed rounded-full w-32 h-32 flex items-center justify-center text-blue-400 animate-pulse">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2 animate-fade-in-up">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4 animate-fade-in-up delay-100">{member.role}</p>
                  <p className="text-sm text-blue-700 mb-4 animate-fade-in-up delay-200">{member.background}</p>
                  <p className="text-blue-800 animate-fade-in-up delay-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity Statement */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 animate-fade-in-up">Diverse Expertise, Unified Vision</h2>
          <p className="text-xl text-blue-700 mb-16 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Our team brings together experts from leading tech companies and prestigious institutions, 
            united by a passion for AI innovation and business transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-200 border border-blue-200">
              <div className="text-5xl mb-6 text-blue-500 animate-pulse">💻</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 animate-fade-in-up">Top Tech Alumni</h3>
              <p className="text-blue-700 animate-fade-in-up delay-100">
                Former employees from Google, Microsoft, Amazon, IBM, and Meta
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-300 border border-blue-200">
              <div className="text-5xl mb-6 text-blue-500 animate-pulse">🎓</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 animate-fade-in-up">Elite Education</h3>
              <p className="text-blue-700 animate-fade-in-up delay-100">
                Graduates from IITs, IIITs, MIT, Stanford, and top business schools
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-400 border border-blue-200">
              <div className="text-5xl mb-6 text-blue-500 animate-pulse">🤝</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 animate-fade-in-up">Multidisciplinary</h3>
              <p className="text-blue-700 animate-fade-in-up delay-100">
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
import React, { useState } from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, className = '' }) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg ';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white focus:ring-blue-500',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-blue-300 focus:ring-slate-500 border border-slate-700',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg'
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const benefits = [
    "Streamline operations with smart automation",
    "Boost team productivity by 150%",
    "Reduce operational costs by 40%"
  ];

  const services = [
    {
      title: "Automate Tasks",
      description: "Eliminate repetitive work with our intelligent automation solutions.",
      icon: "🤖"
    },
    {
      title: "Improve Productivity",
      description: "Enhance team efficiency with AI-powered workflows.",
      icon: "⚡"
    },
    {
      title: "Boost ROI",
      description: "Maximize returns with data-driven decision making.",
      icon: "📈"
    },
    {
      title: "Scale with Data",
      description: "Grow your business with actionable insights.",
      icon: "📊"
    }
  ];

  const clientTypes = [
    "Digital Marketing Agencies",
    "E-commerce Brands",
    "SaaS Companies",
    "Business Consultants",
    "Service Providers",
    "Startups"
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-black py-32 px-6 relative overflow-hidden">
        {/* Decorative glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8">
            <span className="text-blue-400">⭐</span>
            <span className="text-blue-300 font-semibold text-sm">ULTRA EXCLUSIVE NETWORK</span>
            <span className="text-purple-400">⚡</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">with AI Automation</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the exclusive circle of visionary leaders and elite founders who are reshaping the future. 
            Scale your operations 2× faster with cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="primary" size="large">
              <span className="flex items-center gap-2">
                <span>👑</span>
                JOIN THE ELITE
              </span>
            </Button>
            <Button variant="outline" size="large" onClick={() => setShowVideo(!showVideo)}>
              <span className="flex items-center gap-2">
                <span>◎</span>
                VIEW CRITERIA
              </span>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
              <div className="text-pink-400 mb-2">👑</div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">50+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Elite Leaders</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
              <div className="text-pink-400 mb-2">🌐</div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">100K+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Network Reach</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
              <div className="text-pink-400 mb-2">🎓</div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">25+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Premier Colleges</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
              <div className="text-pink-400 mb-2">📅</div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Events Amplified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto max-w-4xl">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start bg-slate-900/30 border border-slate-800 rounded-lg p-4 backdrop-blur">
                <span className="text-blue-400 text-xl mr-3 mt-1">✓</span>
                <span className="text-lg text-slate-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We help businesses leverage AI to automate processes, enhance productivity, and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-slate-400 text-center text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Who We Work With
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We serve a diverse range of industries and business types.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientTypes.map((client, index) => (
              <div 
                key={index} 
                className="bg-slate-900/50 backdrop-blur border border-slate-800 p-4 rounded-lg text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <p className="font-medium text-slate-300 text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses already scaling with our AI solutions.
          </p>
          <Button variant="primary" size="large">
            Schedule a Quick Meeting with Us
          </Button>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-xl max-w-4xl w-full border border-slate-800">
            <div className="flex justify-between items-center p-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white">How It Works</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="text-slate-400 hover:text-white text-2xl transition-colors duration-300"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <div className="bg-slate-800 rounded-lg flex items-center justify-center h-96">
                <p className="text-slate-400 text-lg">YouTube Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;